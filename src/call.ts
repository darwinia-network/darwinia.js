import { BigNumber, Bytes, BytesLike, ethers, providers } from "ethers";
import { Metadata } from "@polkadot/types";
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
      message: string;
    };
  };
};

export async function doDispatch(
  provider: Provider,
  signer: ethers.Signer,
  data: BytesLike
): Promise<ethers.providers.TransactionResponse> {
  try {
    const contractAddress = "0x0000000000000000000000000000000000000401";

    const from = await signer.getAddress();
    console.debug(`sender: ${from}`);
    let tx: Tx = {
      from: from,
      to: contractAddress,
      data: data,
    };

    await dryRun(provider, tx);

    tx.gasLimit = await provider.estimateGas(tx);

    return await signer.sendTransaction(tx);
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
  return async (
    signer: ethers.Signer,
    palletName: string,
    callName: string,
    argsEncoded: boolean,
    args: any
  ): Promise<ethers.providers.TransactionResponse> => {
    // prepare call data
    let callData: Bytes = [];
    if (argsEncoded) {
      const { callIndex } = getCallMeta(
        metadata,
        palletName,
        camelToSnakeCase(callName)
      );
      callData = ethers.utils.concat([callIndex, args]);
    } else {
      callData = encodeCall(metadata, palletName, callName, args) as Bytes;
    }
    console.debug(`call data: ${hexlify(callData)}`);

    return doDispatch(provider, signer, callData);
  };
}

export type Dispatch = (
  signer: ethers.Signer,
  palletName: string,
  callName: string,
  paramsEncoded: boolean,
  args?: any
) => Promise<ethers.providers.TransactionResponse>;
