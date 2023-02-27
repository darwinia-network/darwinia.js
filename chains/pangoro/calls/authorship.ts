/**
 * This is the doc comment for pallet `Authorship`'s calls. 
 * 
 * `Authorship`'s storages: {@link: module:pangoro/authorship/storages}
 *
 * @module pangoro/authorship/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAuthorship = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Provide a set of uncles.
         *
         * @param {unknown} _new_uncles Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}>
         * @instance
         */
        setUncles: async (signer: ethers.Signer, _new_uncles: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', false, {
                new_uncles: _new_uncles,
           });
        },

        /**
         * Similar to {@link: pangoro/authorship/calls/setUncles}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setUnclesH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetUnclesCall: (_new_uncles: unknown) => {
            return buildRuntimeCall(metadata, 'Authorship', 'setUncles', {
                new_uncles: _new_uncles,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetUnclesCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetUnclesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Authorship', 'setUncles', argsBytes)
        },

    }
}

