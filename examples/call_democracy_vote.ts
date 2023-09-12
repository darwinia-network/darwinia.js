import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

  const pangolin = clientBuilder.buildPangolinClient(provider);

  // second
  // const receipt = await pangolin.calls.democracy.second(signer, 6)

  // vote
  const receipt = await pangolin.calls.democracy.vote(signer, 12, {
    Standard: {
      vote: {
        aye: true,
        conviction: 1
      },
      balance: 1111
    }
  })

  console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
