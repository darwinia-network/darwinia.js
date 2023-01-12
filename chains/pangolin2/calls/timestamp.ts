import { buildRuntimeCall, Dispatch } from "../../../call";
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
         * @param _now: Compact<U64>
         */
        set: async (signer: ethers.Signer, _now: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', false, _now);
        },

        setD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', true, data);
        },

        setCall: (_now: unknown) => {
            return buildRuntimeCall(metadata, 'Timestamp', 'set', {
                now: _now,
            });
        },

    }
}
