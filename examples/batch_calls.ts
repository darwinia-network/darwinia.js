import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
  const pangolin = clientBuilder.buildPangolinClient(provider);

  const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);

  // prepare batch calls
  const call1 = pangolin.calls.session.buildSetKeysCall({ aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, "0x");
  const call2 = pangolin.calls.darwiniaStaking.buildCollectCall(120000000);

  // run batch calls
  // expect call data: 0x1502080900d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00080339300000
  const receipt = await pangolin.calls.utility.batchAll(wallet, [
    call1,
    call2
  ]);

  console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
