import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getAuthorship = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Provide a set of uncles.
         *
         * @param _new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}>
         */
        setUncles: async (signer: ethers.Signer, _new_uncles: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', false, _new_uncles);
        },

        setUnclesD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', true, data);
        },

        setUnclesCall: (_new_uncles: unknown) => {
            return buildRuntimeCall(metadata, 'Authorship', 'setUncles', {
                new_uncles: _new_uncles,
            });
        },

    }
}
