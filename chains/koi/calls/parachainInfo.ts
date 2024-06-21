/**
 * This is the doc comment for pallet `ParachainInfo`'s calls. 
 * 
 * `ParachainInfo`'s storages: {@link: module:koi/parachainInfo/storages}
 *
 * @module koi/parachainInfo/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getParachainInfo = (dispatch: Dispatch, metadata: Metadata) => {
    return {
    }
}

