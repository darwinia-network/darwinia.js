import { ethers } from "ethers";
import { buildMetadata, getStorage, clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://koi-rpc.darwinia.network");

  let result

  const koi = clientBuilder.buildKoiClient(provider);
  result = await koi.storages.darwiniaStaking.ledgers("0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac");
  console.log(`decoded: ${result}\n`);

  result = await koi.storages.darwiniaStaking.collatorCount();
  console.log(`decoded: ${result}\n`);
}

main().catch(err => console.log(err));
