import { ethers } from "ethers";
import { buildMetadata, staticMetadata, dispatch, clientBuilder, setSessionKeys } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
    const metadata = buildMetadata(staticMetadata.pangolin2MetaStatic);

    // const signer = provider.getSigner();
    const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Way 1
    const pangolin2 = clientBuilder.buildPangolin2Client(provider, metadata);
    await pangolin2.calls.session.setKeys(
      signer,
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    )
  
    // Way 2
    const dispatchPangolin2Call = dispatch(provider, metadata);
    await dispatchPangolin2Call(
      signer, 
      "Session", 
      "setKeys", 
      false, 
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    );
  
    // Way 3: this is a customized method added for client convenience
    await setSessionKeys(
        dispatchPangolin2Call,
        signer,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
    );
}

main();
