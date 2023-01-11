import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");

    // const signer = provider.getSigner();
    const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    // call ended with `D` is the version that accept params encoded in scale codec  
    await pangolin2.calls.session.setKeysD(
      signer,
      "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00", // encoded keys and proof
    )
}

main();
