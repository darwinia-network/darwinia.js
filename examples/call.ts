import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

  const pangolin = clientBuilder.buildPangolinClient(provider);

  const receipt = await pangolin.calls.session.setKeys(
    signer,
    {
      aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da28c"
    }, // keys
    "0x00" // proof
  );

  console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
