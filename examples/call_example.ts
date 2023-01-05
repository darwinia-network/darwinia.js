import { ethers } from "ethers";
import { buildMetadata, metadatas, dispatch, callsClientBuilder, setSessionKeys } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
    const metadata = buildMetadata(metadatas.pangolin2MetaStatic);

    const dispatchPangolin2Call = dispatch(provider, metadata);
    // const wallet = provider.getSigner();
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Way 1
    const keys = {
        aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    };
    await dispatchPangolin2Call(wallet, "Session", "setKeys", false, keys, "0x");

    // Way 2
    const pangolin2 = callsClientBuilder.buildPangolin2CallsClient(provider, metadata);
    await pangolin2.session.setKeys(wallet, keys, "0x")

    // Way 3
    await setSessionKeys(
        dispatchPangolin2Call,
        wallet,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
    );
}

main();
