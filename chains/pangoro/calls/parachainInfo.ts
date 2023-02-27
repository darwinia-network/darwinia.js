/**
 * This is the doc comment for pallet `ParachainInfo`'s calls. 
 * 
 * `ParachainInfo`'s storages: {@link: module:pangoro/parachainInfo/storages}
 *
 * @module pangoro/parachainInfo/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getParachainInfo = (dispatch: Dispatch, metadata: Metadata) => {
    return {
    }
}

