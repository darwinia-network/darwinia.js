import { ethers } from "ethers";
import { clientBuilder } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

    const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175", provider);
    // or
    // const signer = provider.getSigner();

    const pangolin = clientBuilder.buildPangolinClient(provider);

    const receipt = await pangolin.calls.system.remarkWithEvent(signer, "0x123456");

    console.log(receipt.transactionHash);
}

main();
