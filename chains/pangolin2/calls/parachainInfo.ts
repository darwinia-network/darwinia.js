/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangolin2/parachainInfo/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getParachainInfo = (dispatch: Dispatch, metadata: Metadata) => {
    return {
    }
}
