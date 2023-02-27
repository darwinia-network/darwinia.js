import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  // const signer = provider.getSigner();
  const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);

  const pangolin = clientBuilder.buildPangolinClient(provider);

  // call ended with `H` is the version that accept params encoded in scale codec  
  const receipt = await pangolin.calls.session.setKeysH(
    signer,
    "0xd42593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00", // encoded keys and proof
  );

  console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
