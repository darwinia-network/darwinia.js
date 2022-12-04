import {ethers} from "ethers";
import metaStatic from './crab-hex';
import {getStorage} from "./storage";
import {bridgeMessages, feeMarket} from "./pallets";

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    const getCrabStorage = getStorage(provider, metaStatic);

    let r;

    // Storages under pallet `BridgeDarwiniaMessages`
    //////////////////////////////////////////////////
    r = await bridgeMessages.inboundLanes(getCrabStorage, "BridgeDarwiniaMessages", "0x00000001");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundLanes(getCrabStorage, "BridgeDarwiniaMessages", "0x00000000");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.outboundMessages(getCrabStorage, "BridgeDarwiniaMessages", {
        laneId: "0x00000000",
        nonce: 10
    });
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOperatingMode(getCrabStorage, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    r = await bridgeMessages.palletOwner(getCrabStorage, "BridgeDarwiniaMessages");
    console.log(`    decoded: ${r}\n`);

    // Storages under pallet `FeeMarket`
    //////////////////////////////////////////////////
    r = await feeMarket.assignedRelayers(getCrabStorage, "DarwiniaFeeMarket");
    console.log(`    decoded: ${r}\n`);

    r = await feeMarket.orders(getCrabStorage, "DarwiniaFeeMarket", [[1, 1, 1, 1], 11]); // tuple
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