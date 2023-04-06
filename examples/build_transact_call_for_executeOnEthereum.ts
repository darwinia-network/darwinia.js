import { ethers } from "ethers";
import { pangolinTools } from "../index";
import { hexlify } from "ethers/lib/utils";

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://pangolin-rpc.darwinia.network"
  );
  const pangolinEndpoint = "0x5a07DB2bD2624DD2Bdd5093517048a0033A615b5";
  const ethereumContract = "0xa4656066de65a7d66a8a60e1077e99c43c4490cd";
  const ethereumCall =
    "0x1003e2d20000000000000000000000000000000000000000000000000000000000000002";

  const dispatchCallData =
    await pangolinTools.buildTransactCallForExecuteOnEthereum2(
      provider,
      pangolinEndpoint,
      500000n,
      ethereumContract,
      ethereumCall
    );
  console.debug(`transact call data: ${hexlify(dispatchCallData)}`);
}

main().catch((err) => console.log(err));
