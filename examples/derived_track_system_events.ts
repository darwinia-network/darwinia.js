import { ethers } from "ethers";
import { trackSystemEvents, clientBuilder, EventData } from "../index";

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://crab-rpc.darwinia.network");
    const crab = clientBuilder.buildCrabClient(provider);
    
    const eventsYouWantToTrack: [string, string][] = [
        ["System", "ExtrinsicSuccess"], 
        ["System", "Remarked"]
    ];

    await trackSystemEvents(crab, eventsYouWantToTrack, async (event: EventData) => {
        console.log(event);
        console.log("------------------------------------");
    });
}

main();
