import { BytesLike, ethers, providers } from "ethers";
import { Metadata } from '@polkadot/types';
import { HexString } from "@polkadot/util/types";
import { SiVariant } from "@polkadot/types/interfaces";
import { u8aConcat, hexToU8a, u8aToHex } from "@polkadot/util";

type BaseProvider = providers.BaseProvider;

async function dryRun(provider: BaseProvider, contractAddress: string, data: BytesLike, gasLimit: number) {
    await provider.call({
        to: contractAddress,
        data: data,
        gasLimit: gasLimit
    });
}

type EthersError = {
    message: string;
    error?: {
        error?: {
            message: string
        }
    };
}

async function doDispatch(provider: BaseProvider, wallet: ethers.Wallet, callData: HexString | Uint8Array, gasLimit: number): Promise<TxHash> {
    try {
        const contractAddress = "0x0000000000000000000000000000000000000401";
        await dryRun(provider, contractAddress, callData, gasLimit);

        let tx = {
            to: contractAddress,
            value: "0x0",
            data: callData,
            gasLimit: gasLimit,
            gasPrice: ethers.utils.parseUnits("1", "gwei"),
            nonce: await provider.getTransactionCount(wallet.getAddress())
        };
        let signedTx = await wallet.signTransaction(tx);
        let sentTx = await provider.sendTransaction(signedTx);
        await sentTx.wait();
        return sentTx.hash as TxHash;
    } catch (ex: any) {
        // TODO: better error handling
        const message = (ex as EthersError).error?.error?.message;
        if (message) {
            throw message;
        } else {
            throw ex;
        }
    }
}

const camelToSnakeCase = (str: string) => {
    const t = str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
    if (t.startsWith("_")) {
        return t.slice(1);
    } else {
        return t;
    }
}

type Call = {
    call: SiVariant,
    callIndex: Uint8Array
};

function getCall(metadata: Metadata, palletName: string, callName: string): Call {
    const pallet = metadata.asLatest.pallets.find(pallet => {
        return pallet.name.toString() == palletName;
    });

    if (!pallet) {
        throw `Can not find pallet ${palletName} in metadata`;
    }

    const calls = pallet.calls.unwrap();
    const callsType = metadata.registry.lookup.getSiType(calls.type);
    const call = callsType.def.asVariant.variants.find(v => {
        return v.name.toString() == callName;
    });
    if (!call) {
        throw `Can not find ${callName} dispatch call in ${palletName} pallet`;
    }
    const callIndex = callsType.def.asVariant.variants.findIndex(v => {
        return v.name.toString() == callName;
    });

    return {
        call: call,
        callIndex: new Uint8Array([pallet.index.toNumber(), callIndex])
    };

}

function getCallParamLookupTypes(metadata: Metadata, call: SiVariant): string[] {
    const types = call.fields.map(field => {
        return metadata.registry.createLookupType(field.type);
    });
    return types;
}

export function dispatch(provider: BaseProvider, metadata: Metadata) {
    return async (wallet: ethers.Wallet, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>): Promise<TxHash> => {
        // palletName = camelToSnakeCase(palletName);
        callName = camelToSnakeCase(callName);
        const { call, callIndex } = getCall(metadata, palletName, callName);

        let paramsData = new Uint8Array([]);
        if (paramsEncoded) {
            for (let i = 0; i < params.length; i++) {
                const param = params[i];
                paramsData = u8aConcat(paramsData, param as Uint8Array);
            }
        } else {
            const paramLookupTypes = getCallParamLookupTypes(metadata, call);
            for (let i = 0; i < paramLookupTypes.length; i++) {
                const paramType = paramLookupTypes[i];
                const param = params[i];
                const encodedParam = metadata.registry.createType(paramType, param).toU8a();
                paramsData = u8aConcat(paramsData, encodedParam);
            }
        }

        let callData = u8aConcat(callIndex, paramsData);
        console.debug(`call data: ${u8aToHex(callData)}`);
        return doDispatch(provider, wallet, callData, 800000);
    };
}

export type Keys = {
    babe: HexString,
    grandpa: HexString,
    beefy: HexString,
    im_online: HexString,
    authority_discovery: HexString
};

export type TxHash = HexString;
export type Dispatch = (wallet: ethers.Wallet, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>) => Promise<TxHash>;

export async function setKeys(dispatch: Dispatch, wallet: ethers.Wallet, keys: HexString): Promise<TxHash> {
    return await dispatch(wallet, "Session", "set_keys", true, hexToU8a(keys), hexToU8a("0x00"));
}
