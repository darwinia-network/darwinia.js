import { ethers } from "ethers";
import metaStatic from './crab-hex';
import { getStorage, buildCrabClient } from "./index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    // a general storage function for a specific chain
    const getCrabStorage = getStorage(provider, metaStatic);

    ////////////////////////////////////////////////////////////
    // Way 1: use pallet name and storage name to fetch storages
    ////////////////////////////////////////////////////////////
    let result = await getCrabStorage(
        "BridgeDarwiniaMessages",
        "OutboundMessages",
        {
            laneId: "0x00000000",
            nonce: 10
        }
    ); // struct
    console.log(`    decoded: ${result}\n`);

    result = await getCrabStorage("DarwiniaFeeMarket", 'AssignedRelayersNumber');
    console.log(`    decoded: ${result}\n`);

    // input has two params
    result = await getCrabStorage(
        "Recovery",
        'ActiveRecoveries',
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d',
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d'
    );
    console.log(`    decoded: ${result}\n`);


    ////////////////////////////////////////////////////////////
    // Way 2: use predefined functions to fetch storages
    ////////////////////////////////////////////////////////////

    // First, build a chain specific storage client
    const crab = buildCrabClient(getCrabStorage);

    result = await crab.bridgeDarwiniaMessages.inboundLanes("0x00000001");
    console.log(`    decoded: ${result}\n`);

    result = await crab.bridgeDarwiniaMessages.outboundLanes("0x00000000");
    console.log(`    decoded: ${result}\n`);

    result = await crab.bridgeDarwiniaMessages.outboundMessages({
        laneId: "0x00000000",
        nonce: 10
    });
    console.log(`    decoded: ${result}\n`);

    result = await crab.bridgeDarwiniaMessages.palletOperatingMode();
    console.log(`    decoded: ${result}\n`);

    result = await crab.bridgeDarwiniaMessages.palletOwner();
    console.log(`    decoded: ${result}\n`);

    result = await crab.darwiniaFeeMarket.assignedRelayers();
    console.log(`    decoded: ${result}\n`);

    result = await crab.darwiniaFeeMarket.orders([[1, 1, 1, 1], 11]); // tuple
    console.log(`    decoded: ${result}\n`);
}

main();