import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://koi-rpc.darwinia.network");

  const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

  const koi = clientBuilder.buildKoiClient(provider);

  const tx = await koi.calls.system.remarkWithEvent(signer, "0x12345678");

  console.log(`https://koi-scan.darwinia.network/tx/${tx.hash}`);
}

main().catch(err => console.log(err));
