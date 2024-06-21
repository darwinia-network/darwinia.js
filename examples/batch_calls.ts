import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider("https://koi-rpc.darwinia.network");
  const koi = clientBuilder.buildKoiClient(provider);

  const wallet = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

  // prepare batch calls
  const call1 = koi.calls.session.buildSetKeysCall({ aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, "0x");
  const call2 = koi.calls.darwiniaStaking.buildCollectCall(120000000);

  // run batch calls
  // expect call data: 0x1502080900d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00080339300000
  const tx = await koi.calls.utility.batchAll(wallet, [
    call1,
    call2
  ]);

  console.log(`https://koi-scan.darwinia.network/tx/${tx.hash}`);
}

main().catch(err => console.log(err));
