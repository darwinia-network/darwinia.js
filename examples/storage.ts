import { ethers } from "ethers";
import { buildMetadata, pangolinStaticMetadata, getStorage, clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  let result

  const pangolin = clientBuilder.buildPangolinClient(provider);
  result = await pangolin.storages.darwiniaStaking.ledgers("0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac");
  console.log(`decoded: ${result}\n`);

  result = await pangolin.storages.darwiniaStaking.collatorCount();
  console.log(`decoded: ${result}\n`);
}

main().catch(err => console.log(err));
