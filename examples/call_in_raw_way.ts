import { ethers } from "ethers";
import { buildMetadata, pangolinStaticMetadata, dispatch } from "../index"

// The raw way to dipatch call
async function main(): Promise<void> {
  // web3 provider, provided by sdk users
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);
  // or
  // const signer = provider.getSigner();

  const metadata = buildMetadata(pangolinStaticMetadata);
  const dispatchPangolinCall = dispatch(provider, metadata);
  const tx = await dispatchPangolinCall(
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

  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
}

main().catch(err => console.log(err));
