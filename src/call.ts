import { Bytes, BytesLike, ethers, providers } from "ethers";
import { Metadata } from '@polkadot/types';
import { camelToSnakeCase } from "./utils";
import { encodeCall, getCallMeta } from "./helpers";
import { hexlify } from "ethers/lib/utils";

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

        const from = await signer.getAddress();
        console.debug(`sender: ${from}`);
        let tx: Tx = {
            from: from,
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
    return async (signer: ethers.Signer, palletName: string, callName: string, argsEncoded: boolean, args: any): Promise<ethers.providers.TransactionReceipt> => {
        // prepare call data
        let callData: Bytes = [];
        if (argsEncoded) {
            const { callIndex } = getCallMeta(metadata, palletName, camelToSnakeCase(callName));
            callData = ethers.utils.concat([callIndex, args]);
        } else {
            callData = encodeCall(metadata, palletName, callName, args) as Bytes;
        }
        console.debug(`call data: ${hexlify(callData)}`);

        // selector of execute(bytes) + abi encode the calldata
        let callDataAbiEncoded = ethers.utils.defaultAbiCoder.encode(["bytes"], [callData]);
        const data = ethers.utils.concat(["0x09c5eabe", callDataAbiEncoded]);
        console.debug(`selector appended: ${hexlify(data)}`);

        return doDispatch(provider, signer, data);
    };
}

export type Dispatch = (signer: ethers.Signer, palletName: string, callName: string, paramsEncoded: boolean, ...params: Array<unknown>) => Promise<ethers.providers.TransactionReceipt>;
