import { ethers, providers } from "ethers";
import { HexString } from "@polkadot/util/types";
type BaseProvider = providers.BaseProvider;

async function test(provider: BaseProvider, contractAddress: string, data: HexString, gasLimit: number) {
    await provider.call({
        to: contractAddress,
        data: data,
        gasLimit: gasLimit
    });
}

export type DispatchError = {
    kind: string,
    message: string
};

type EthersError = {
    message: string;
    error?: {
        error?: {
            message: string
        }
    };
}

export type TxHash = HexString;

export async function dispatch(provider: BaseProvider, wallet: ethers.Wallet, callData: HexString, gasLimit: number): Promise<TxHash> {
    try {
        const contractAddress = "0x0000000000000000000000000000000000000401";
        await test(provider, contractAddress, callData, gasLimit);

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
        if(message) {
            throw message;
        } else {
            throw ex;
        }
    }
}

import { Metadata } from '@polkadot/types';
import { pangolinMetaStatic, buildMetadata } from "./index";

function toHex(d: number) {
    return  ("0"+(Number(d).toString(16))).slice(-2)
}

function getCallIndexOfSessionSetKeys(metadata: Metadata): string {
    const pallet = metadata.asLatest.pallets.find(pallet => {
        return pallet.name.toString() == "Session";
    });

    if(!pallet) {
        throw "Can not find pallet Session in metadata";
    }

    const palletIndex = pallet.index.toNumber();

    const calls = pallet.calls.unwrap();
    const callsType = metadata.registry.lookup.getSiType(calls.type)
    const callIndex = callsType.def.asVariant.variants.findIndex(v => {
        return v.name.toString() == "set_keys";
    });

    if(callIndex == -1) {
        throw "Can not find SetKeys dispatch call in Session pallet";
    }

    return `${toHex(palletIndex)}${toHex(callIndex)}`;
}

async function setKeys(provider: BaseProvider, wallet: ethers.Wallet, keys: HexString, metadata: Metadata): Promise<TxHash> {
    const callIndex = getCallIndexOfSessionSetKeys(metadata);
    const callData: HexString = `0x${callIndex}${keys.slice(2)}00`;
    return dispatch(provider, wallet, callData, 800000);
}

(async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");
    try {
        const metadata = buildMetadata(pangolinMetaStatic);
        const keys = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dc1";
        const txHash = await setKeys(provider, wallet, keys, metadata);
        console.log(txHash);

        // const callData = "0x0001081234" // remark
        // const callData = "0x00" // bad
        // const callData = "0x0c00d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dc1d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00" // setKeys 
        // const txHash = await dispatch(provider, wallet, callData, 8000000);
        // console.log(txHash);
    } catch (ex) {
        console.log(ex)
    }
})();
