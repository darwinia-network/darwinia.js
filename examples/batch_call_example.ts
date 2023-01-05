import { ethers } from "ethers";
import { buildMetadata, metadatas, dispatch, calls } from "../index"

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
    const metadata = buildMetadata(metadatas.pangolin2MetaStatic);

    const dispatchPangolin2Call = dispatch(provider, metadata);
    const pangolin2Calls = calls.buildPangolin2CallsClient(dispatchPangolin2Call, metadata);

    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // prepare batch calls
    const call1 = pangolin2Calls.session.setKeysCall({ aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, "0x");
    const call2 = pangolin2Calls.staking.collectCall({ commission: 12345 });

    // run batch calls
    // expect call data: 0x1502080900d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00080339300000
    await pangolin2Calls.utility.batchAll(wallet, [
        call1,
        call2
    ]);
}

main();
