/**
 * This is the doc comment for pallet `Timestamp`'s calls. 
 * 
 * `Timestamp`'s storages: {@link: module:darwinia/timestamp/storages}
 *
 * @module darwinia/timestamp/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTimestamp = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::set`].
         *
         * @param {unknown} _now Compact<U64>
         * @instance
         */
        set: async (signer: ethers.Signer, _now: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Timestamp', 'set', false, {
                now: _now,
           });
        },

        /**
         * Similar to {@link: darwinia/timestamp/calls/set}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

