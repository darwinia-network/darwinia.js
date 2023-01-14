import { ethers } from "ethers";
import { clientBuilder } from "../index"
import { setSessionKeysAndCommission } from "../wrapped_api";

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");

    // DOROTHY: 0x773539d4Ac0e786233D90A233654ccEE26a613D9
    const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    const receipt = await setSessionKeysAndCommission(
        pangolin2, 
        signer, 
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d", 
        12345
    );

    console.log(`tx hash: ${receipt.transactionHash}`);
}

main().catch(err => console.log(err));
