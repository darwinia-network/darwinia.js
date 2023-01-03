import { ethers } from "ethers";
import { buildMetadata, getStorage, buildPangolin2Client, pangolin2MetaStatic } from "../index";

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("http://g1.dev.darwinia.network:10000");
    const metadata = buildMetadata(pangolin2MetaStatic);

    // a general storage function for a specific chain
    const getPangolin2Storage = getStorage(provider, metadata);

    // There are two ways to fetch a storage.
    //
    //  1. use storage specific functions predefined in this lib.
    const pangolin2 = buildPangolin2Client(getPangolin2Storage);
    let result = await pangolin2.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);

    //  2. the general way.
    result = await getPangolin2Storage(
        "System",
        "Account",
        '0x794BF0B66926D84CB735283D849f454A2A8d9a44'
    );
    console.log(`${result}\n`);
}

main();
