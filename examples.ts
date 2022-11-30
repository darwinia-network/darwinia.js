import * as bridgeMessages from "./index";
import { TypeRegistry } from "@polkadot/types";
import { MessageKey } from '@polkadot/types/interfaces';
import { ethers } from "ethers";

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");
    const typeRegistry = new TypeRegistry();

    // Storages under pallet `BridgeDarwiniaMessages`
    let r = await bridgeMessages.inboundLanes(provider, "BridgeDarwiniaMessages", "0x00000001");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundLanes(provider, "BridgeDarwiniaMessages", "0x00000000");
    console.log(`    decoded: ${r}\n`);

    const messageKey: MessageKey = typeRegistry.createType("MessageKey", {laneId: "0x00000000", nonce: 10});
    r = await bridgeMessages.outboundMessages(provider, "BridgeDarwiniaMessages", messageKey);
    console.log(`    decoded: ${r}\n`);
    
    r = await bridgeMessages.palletOperatingMode(provider, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOwner(provider, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);
}

main();