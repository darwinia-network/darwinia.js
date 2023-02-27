import { ethers } from "ethers";
import { buildMetadata, pangolinStaticMetadata, getStorage, clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  // Way 1
  const metadata = buildMetadata(pangolinStaticMetadata);
  const getPangolinStorage = getStorage(provider, metadata);
  let result = await getPangolinStorage(
    "System", // start with a upcase char
    "Account", // start with a upcase char
    "0x773539d4Ac0e786233D90A233654ccEE26a613D9"
  );
  console.log(`decoded: ${result}\n`);

  result = await getPangolinStorage("System", 'Account', "0x773539d4Ac0e786233D90A233654ccEE26a613D9");
  console.log(`decoded: ${result}\n`);

  // Way 2
  const pangolin = clientBuilder.buildPangolinClient(provider);
  result = await pangolin.storages.darwiniaStaking.collatorCount();
  console.log(`decoded: ${result}\n`);
}

main().catch(err => console.log(err));
