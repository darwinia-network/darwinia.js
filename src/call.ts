import { BytesLike, ethers, providers } from "ethers";
import { Metadata } from '@polkadot/types';
import { u8aConcat, u8aToHex } from "@polkadot/util";
import { camelToSnakeCase } from "./utils";
import { getCallMeta } from "./helpers";

type Provider = providers.BaseProvider;

interface Tx {
    [key: string]: any;
}

async function dryRun(provider: Provider, tx: Tx) {
    await provider.call(tx);
}

type EthersError = {
    message: string;
    error?: {
        error?: {
            message: string
        }
    };
}

async function doDispatch(provider: Provider, signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> {
    try {
        const contractAddress = "0x0000000000000000000000000000000000000401";

        let tx: Tx = {
            from: await signer.getAddress(),
            to: contractAddress,
            data: data
        };

        await dryRun(provider, tx);

        tx.gasLimit = await provider.estimateGas(tx);
        tx.gasPrice = ethers.utils.parseUnits("1", "gwei");

        const sentTx = await signer.sendTransaction(tx);
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

export function dispatch(provider: Provider, metadata: Metadata) {
    return async (signer: ethers.Signer, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>): Promise<ethers.providers.TransactionReceipt> => {
        // palletName = camelToSnakeCase(palletName);
        callName = camelToSnakeCase(callName);
        const { callIndex, argLookupTypes } = getCallMeta(metadata, palletName, callName);

        let paramsData = new Uint8Array([]);
        if (paramsEncoded) {
            for (let i = 0; i < params.length; i++) {
                const param = params[i];
                paramsData = u8aConcat(paramsData, param as Uint8Array);
            }
        } else {
            for (let i = 0; i < argLookupTypes.length; i++) {
                const paramType = argLookupTypes[i];
                const param = params[i];
                const encodedParam = metadata.registry.createType(paramType, param).toU8a();
                paramsData = u8aConcat(paramsData, encodedParam);
            }
        }

        let callData = u8aConcat(callIndex, paramsData);
        console.debug(`call data: ${u8aToHex(callData)}`);

        let callDataAbiEncoded = ethers.utils.defaultAbiCoder.encode(["bytes"], [callData]);
        const data = u8aConcat("0x09c5eabe", callDataAbiEncoded);

        return doDispatch(provider, signer, data);
    };
}

export type Dispatch = (signer: ethers.Signer, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>) => Promise<ethers.providers.TransactionReceipt>;
