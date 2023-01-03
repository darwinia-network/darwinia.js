import { ethers } from "ethers";
import { buildMetadata, dispatch, storages, calls, setSessionKeys } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    const metadata = buildMetadata(storages.pangoroMetaStatic);

    const dispatchPangolinCall = dispatch(provider, metadata);
    // const wallet = provider.getSigner();
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Way 1
    const key = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    const ecdsaKey = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00";
    const keys = {
        babe: key,
        grandpa: key,
        beefy: ecdsaKey,
        im_online: key,
        authority_discovery: key
    };
    dispatchPangolinCall(wallet, "Session", "setKeys", false, keys, "0x");

    // Way 2
    const pangolinCalls = calls.buildPangolinCallsClient(dispatchPangolinCall);
    pangolinCalls.session.setKeys(wallet, keys, "0x")

    // Way 3
    const keys2 = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dc1d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    setSessionKeys(dispatchPangolinCall, wallet, keys2)
}

main();
