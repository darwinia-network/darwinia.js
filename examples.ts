import {ethers} from "ethers";
import metaStatic from './crab-hex';
import {getStorage} from "./storage";
import crab from "./chains/crab";

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    const getCrabStorage = getStorage(provider, metaStatic);

    let r;

    // Storages under pallet `BridgeDarwiniaMessages`
    //////////////////////////////////////////////////
    r = await crab.bridgeDarwiniaMessages.inboundLanes(getCrabStorage, "0x00000001");
    console.log(`    decoded: ${r}\n`);

    r = await crab.bridgeDarwiniaMessages.outboundLanes(getCrabStorage, "0x00000000");
    console.log(`    decoded: ${r}\n`);

    r = await crab.bridgeDarwiniaMessages.outboundMessages(getCrabStorage, {
        laneId: "0x00000000",
        nonce: 10
    });
    console.log(`    decoded: ${r}\n`);

    r = await crab.bridgeDarwiniaMessages.palletOperatingMode(getCrabStorage);
    console.log(`    decoded: ${r}\n`);

    r = await crab.bridgeDarwiniaMessages.palletOwner(getCrabStorage);
    console.log(`    decoded: ${r}\n`);

    r = await crab.darwiniaFeeMarket.assignedRelayers(getCrabStorage);
    console.log(`    decoded: ${r}\n`);

    r = await crab.darwiniaFeeMarket.orders(getCrabStorage, [[1, 1, 1, 1], 11]); // tuple
    console.log(`    decoded: ${r}\n`);

    // General way.
    //////////////////////////////////////////////////
    r = await getCrabStorage("BridgeDarwiniaMessages", "OutboundMessages", {
        laneId: "0x00000000",
        nonce: 10
    }); // struct
    console.log(`    decoded: ${r}\n`);

    r = await getCrabStorage("DarwiniaFeeMarket", 'AssignedRelayersNumber');
    console.log(`    decoded: ${r}\n`);

    // input has two params
    r = await getCrabStorage(
        "Recovery",
        'ActiveRecoveries',
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d', '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d');
    console.log(`    decoded: ${r}\n`);
}

main();