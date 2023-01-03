import { ethers } from "ethers";
import { buildMetadata, getStorage, storages } from "../index"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    const metadata = buildMetadata(storages.pangolinMetaStatic);

    // a general storage function for a specific chain
    const getPangolinStorage = getStorage(provider, metadata);

    // Way 1: use pallet name and storage name to fetch storages
    let result = await getPangolinStorage(
        "BridgePangolinParachainMessages",
        "OutboundMessages",
        {
            laneId: "0x00000000",
            nonce: 10
        }
    ); // struct
    console.log(`    decoded: ${result}\n`);

    result = await getPangolinStorage("PangolinParachainFeeMarket", 'AssignedRelayersNumber');
    console.log(`    decoded: ${result}\n`);

    // input has two params
    result = await getPangolinStorage(
        "Recovery",
        'ActiveRecoveries',
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d',
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d'
    );
    console.log(`    decoded: ${result}\n`);


    // Way 2: use predefined functions to fetch storages
    // First, build a chain specific storage client
    const pangolinStorages = storages.buildPangolinStoragesClient(getPangolinStorage);

    result = await pangolinStorages.bridgePangolinParachainMessages.inboundLanes("0x00000001");
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.bridgePangolinParachainMessages.outboundLanes("0x00000000");
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.bridgePangolinParachainMessages.outboundMessages({
        laneId: "0x00000000",
        nonce: 10
    });
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.bridgePangolinParachainMessages.palletOperatingMode();
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.bridgePangolinParachainMessages.palletOwner();
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.pangolinParachainFeeMarket.assignedRelayers();
    console.log(`    decoded: ${result}\n`);

    result = await pangolinStorages.pangolinParachainFeeMarket.orders([[1, 1, 1, 1], 11]); // tuple
    console.log(`    decoded: ${result}\n`);
}

main();
