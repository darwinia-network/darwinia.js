import { ethers } from "ethers";
import { buildMetadata, koiStaticMetadata, dispatch } from "../index"

// The raw way to dipatch call
async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://koi-rpc.darwinia.network");

  const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);
  // or
  // const signer = provider.getSigner();

  const metadata = buildMetadata(koiStaticMetadata);
  const dispatchKoiCall = dispatch(provider, metadata);
  const tx = await dispatchKoiCall(
    signer,
    "Session",
    "setKeys",
    false,
    {
      keys: {
        aura: "0xd42593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
      },
      proof: "0x"
    }
  );

  console.log(`https://koi-scan.darwinia.network/tx/${tx.hash}`);
}

main().catch(err => console.log(err));
