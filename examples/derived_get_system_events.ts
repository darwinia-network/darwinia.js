import { ethers } from "ethers";
import { clientBuilder, type EventData, getSystemEvents } from "../index";

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://crab-rpc.darwinia.network");
    const crab = clientBuilder.buildCrabClient(provider);

    provider.on("block", async (block) => {
        console.log("block number: ", block);
        const events: EventData[] = await getSystemEvents(crab)
        console.log(events);
    });
}

main();
