import { ethers } from "ethers";
import { hexlify } from "ethers/lib/utils";
import { clientBuilder, encodeCall2 } from "../index"

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider("https://koi-rpc.darwinia.network");

  const koi = clientBuilder.buildKoiClient(provider);

  const call = await koi.calls.ethereumXcm.buildTransactCall({
    V2: {
      gas_limit: 500000,
      action: {
        Call: "0xb87FADFC22d344E0A01a6175740c7f3dD6E20cd3"
      },
      value: 1000000000000, // market fee
      input: [0, 0, 0, 0],
      access_list: null
    }
  });
  const callData = encodeCall2(koi.metadata, call);
  console.debug(`call data: ${hexlify(callData)}`);
}

main().catch(err => console.log(err));
