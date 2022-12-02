import { feeMarket, bridgeMessages } from "./pallets";
import { ethers } from "ethers";
import { MessageKey } from "@polkadot/types/interfaces";

import metaStatic from './crab-hex';
import {Metadata, TypeRegistry} from "@polkadot/types";

async function main(): Promise<void> {
    // provide by users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    // provide by users
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metaStatic);
    registry.setMetadata(metadata);

    let r;

    // Storages under pallet `BridgeDarwiniaMessages`
    r = await bridgeMessages.inboundLanes(provider, registry, "BridgeDarwiniaMessages", "0x00000001");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundLanes(provider, registry, "BridgeDarwiniaMessages", "0x00000000");
    console.log(`    decoded: ${r}\n`);

    const messageKey: MessageKey = registry.createType("MessageKey", {laneId: "0x00000000", nonce: 10});
    r = await bridgeMessages.outboundMessages(provider, registry, "BridgeDarwiniaMessages", messageKey);
    console.log(`    decoded: ${r}\n`);
    
    r = await bridgeMessages.palletOperatingMode(provider, registry, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOwner(provider, registry, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    // Storages under pallet `FeeMarket`
    r = await feeMarket.assignedRelayers(provider, registry, "DarwiniaFeeMarket");
    console.log(`    decoded: ${r}\n`);
}

main();