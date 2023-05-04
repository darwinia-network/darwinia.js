import { ethers } from "ethers";
import { pangolinTools } from "../index";
import { hexlify } from "ethers/lib/utils";

// send a message to goerli testnet through pangolin.
async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://pangolin-rpc.darwinia.network"
  );
  const pangolinMessageHub = "0x30Af3Ac3a7C74083c9F47E4d54722cEc760f4237";
  const ethereumMessageReceivingContract =
    "0x4568Ac0B2f9e8E247CC507f1B020567B29416059";
  const messagePayload =
    "0x0000000000000000000000000000000000000000000000000000000000000002";

  const callData = await pangolinTools.buildTransactSend2(
    provider,
    pangolinMessageHub,
    600_000n,
    ethereumMessageReceivingContract,
    messagePayload
  );
  console.debug(`transact call data: ${hexlify(callData)}`);
}

main().catch((err) => console.log(err));
