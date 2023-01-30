/**
 * This is the doc comment for pallet `Timestamp`'s calls. 
 * 
 * `Timestamp`'s storages: {@link: module:pangolin2/timestamp/storages}
 *
 * @module pangolin2/timestamp/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTimestamp = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Set the current time.
         * 
         * This call should be invoked exactly once per block. It will panic at the finalization
         * phase, if this call hasn't been invoked by that time.
         * 
         * The timestamp should be greater than the previous one by the amount specified by
         * `MinimumPeriod`.
         * 
         * The dispatch origin for this call must be `Inherent`.
         * 
         * # <weight>
         * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
         * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
         *   `on_finalize`)
         * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
         * # </weight>
         *
         * @param {unknown} _now Compact<U64>
         * @instance
         */
        set: async (signer: ethers.Signer, _now: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', false, {
                now: _now,
           });
        },

        /**
         * Similar to {@link: pangolin2/timestamp/calls/set}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetCall: (_now: unknown) => {
            return buildRuntimeCall(metadata, 'Timestamp', 'set', {
                now: _now,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Timestamp', 'set', argsBytes)
        },

    }
}

