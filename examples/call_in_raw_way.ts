import { ethers } from "ethers";
import { buildMetadata, pangolin2StaticMetadata, dispatch } from "../index"

// The raw way to dipatch call
async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");

    const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);
    // or
    // const signer = provider.getSigner();

    const metadata = buildMetadata(pangolin2StaticMetadata);
    const dispatchPangolin2Call = dispatch(provider, metadata);
    const receipt = await dispatchPangolin2Call(
        signer,
        "Session",
        "setKeys",
        false,
        {
            aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
        }, // keys
        "0x" // proof
    );

    console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
