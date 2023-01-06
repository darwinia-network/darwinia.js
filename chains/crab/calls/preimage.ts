import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getPreimage = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Register a preimage on-chain.
         * 
         * If the preimage was previously requested, no fees or deposits are taken for providing
         * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
         *
         * @param _bytes: Vec<U8>
         */
        notePreimage: async (signer: ethers.Signer, _bytes: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, _bytes);
        },

        notePreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', true, data);
        },

        notePreimageCall: (_bytes: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'notePreimage', {
                bytes: _bytes,
            });
        },

        /**
         * Clear an unrequested preimage from the runtime storage.
         *
         * @param _hash: [U8; 32]
         */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, _hash);
        },

        unnotePreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', true, data);
        },

        unnotePreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unnotePreimage', {
                hash: _hash,
            });
        },

        /**
         * Request a preimage be uploaded to the chain without paying any fees or deposits.
         * 
         * If the preimage requests has already been provided on-chain, we unreserve any deposit
         * a user may have paid, and take the control of the preimage out of their hands.
         *
         * @param _hash: [U8; 32]
         */
        requestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, _hash);
        },

        requestPreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', true, data);
        },

        requestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'requestPreimage', {
                hash: _hash,
            });
        },

        /**
         * Clear a previously made request for a preimage.
         * 
         * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
         *
         * @param _hash: [U8; 32]
         */
        unrequestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, _hash);
        },

        unrequestPreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', true, data);
        },

        unrequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unrequestPreimage', {
                hash: _hash,
            });
        },

    }
}
