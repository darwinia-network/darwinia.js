import { ethers } from "ethers";
import { buildMetadata, pangolinMetaStatic } from "../index"
import { getStorage, buildPangolinClient } from "../index"
import { dispatch, setKeys, Keys } from "../index"
import { HexString } from "@polkadot/util/types";

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    const metadata = buildMetadata(pangolinMetaStatic);

    ////////////////////////////////////////////////////////////
    // CALL
    ////////////////////////////////////////////////////////////
    const dispatchPangolinCall = dispatch(provider, metadata);
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Way 1
    const key: HexString = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    const ecdsaKey: HexString = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00";
    const keys: Keys = {
        babe: key,
        grandpa: key,
        beefy: ecdsaKey,
        im_online: key,
        authority_discovery: key
    };
    dispatchPangolinCall(wallet, "Session", "setKeys", false, keys, "0x");

    // Way 2
    const keys2 = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dc1d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    setKeys(dispatchPangolinCall, wallet, keys2)

    ////////////////////////////////////////////////////////////
    // STORAGE
    ////////////////////////////////////////////////////////////
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
    const pangolin = buildPangolinClient(getPangolinStorage);

    result = await pangolin.bridgePangolinParachainMessages.inboundLanes("0x00000001");
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.bridgePangolinParachainMessages.outboundLanes("0x00000000");
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.bridgePangolinParachainMessages.outboundMessages({
        laneId: "0x00000000",
        nonce: 10
    });
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.bridgePangolinParachainMessages.palletOperatingMode();
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.bridgePangolinParachainMessages.palletOwner();
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.pangolinParachainFeeMarket.assignedRelayers();
    console.log(`    decoded: ${result}\n`);

    result = await pangolin.pangolinParachainFeeMarket.orders([[1, 1, 1, 1], 11]); // tuple
    console.log(`    decoded: ${result}\n`);
}

main();
