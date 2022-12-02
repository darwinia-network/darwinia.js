import {bridgeMessages, feeMarket} from "./pallets";
import {ethers} from "ethers";

import metaStatic from './crab-hex';
import {Metadata, TypeRegistry} from "@polkadot/types";
import {getStorage1} from "./helpers";

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    // provided by sdk users
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metaStatic);
    registry.setMetadata(metadata);

    let r;

    // Storages under pallet `BridgeDarwiniaMessages`
    //////////////////////////////////////////////////
    r = await bridgeMessages.inboundLanes(provider, metadata, "BridgeDarwiniaMessages", "0x00000001");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundLanes(provider, metadata, "BridgeDarwiniaMessages", "0x00000000");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundMessages(provider, metadata, "BridgeDarwiniaMessages", {laneId: "0x00000000", nonce: 10});
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOperatingMode(provider, metadata, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOwner(provider, metadata, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    // Storages under pallet `FeeMarket`
    //////////////////////////////////////////////////
    r = await feeMarket.assignedRelayers(provider, metadata, "DarwiniaFeeMarket");
    console.log(`    decoded: ${r}\n`);

    r = await feeMarket.orders(provider, metadata, "DarwiniaFeeMarket", [[Uint8Array.of(1, 1, 1, 1), 11]]);
    console.log(`    decoded: ${r}\n`);

    // General way.
    //////////////////////////////////////////////////
    // Note the difference of last param, `input` is an array
    r = await getStorage1(provider, metadata, "BridgeDarwiniaMessages", "OutboundMessages", [{laneId: "0x00000000", nonce: 10}]);
    console.log(`    decoded: ${r}\n`);

    r = await getStorage1(provider, metadata, "DarwiniaFeeMarket", 'AssignedRelayersNumber');
    console.log(`    decoded: ${r}\n`);

}

main();