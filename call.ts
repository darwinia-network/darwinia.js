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

async function doDispatch(provider: BaseProvider, signer: ethers.Signer, callData: HexString | Uint8Array, gasLimit: number): Promise<ethers.providers.TransactionReceipt> {
    try {
        const contractAddress = "0x0000000000000000000000000000000000000401";
        await dryRun(provider, contractAddress, callData, gasLimit);

        let tx = {
            to: contractAddress,
            value: "0x0",
            data: callData,
            gasLimit: gasLimit,
            gasPrice: ethers.utils.parseUnits("1", "gwei"),
            nonce: await provider.getTransactionCount(signer.getAddress())
        };
        let signedTx = await signer.signTransaction(tx);
        let sentTx = await provider.sendTransaction(signedTx);
        return sentTx.wait();
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

        // {
        //     callIndex: [9, 0],
        //     args: {
        //         keys: {
        //             aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
        //         },
        //         proof: "0x"
        //     }
        // },
export type CallAsParam = {
    callIndex: [number, number],
    args: object
}

export function buildRuntimeCall(metadata: Metadata, palletName: string, callName: string, args: object): CallAsParam {
    callName = camelToSnakeCase(callName);
    const call = getCall(metadata, palletName, callName);
    return {
        callIndex: [call.callIndex[0], call.callIndex[1]],
        args: args
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
    return async (signer: ethers.Signer, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>): Promise<ethers.providers.TransactionReceipt> => {
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
                // console.log(paramType);
                // metadata.registry.lookup.getSiType(paramType as string);
                const encodedParam = metadata.registry.createType(paramType, param).toU8a();
                paramsData = u8aConcat(paramsData, encodedParam);
            }
        }

        let callData = u8aConcat(callIndex, paramsData);
        console.debug(`call data: ${u8aToHex(callData)}`);
        return doDispatch(provider, signer, callData, 800000);
    };
}

export type Dispatch = (signer: ethers.Signer, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>) => Promise<ethers.providers.TransactionReceipt>;
