import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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

        notePreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', true, data);
        },

        buildNotePreimageCall: (_bytes: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'notePreimage', {
                bytes: _bytes,
            });
        },

        buildNotePreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'notePreimage', argsBytes)
        },

        /**
         * Clear an unrequested preimage from the runtime storage.
         *
         * @param _hash: [U8; 32]
         */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, _hash);
        },

        unnotePreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', true, data);
        },

        buildUnnotePreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unnotePreimage', {
                hash: _hash,
            });
        },

        buildUnnotePreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'unnotePreimage', argsBytes)
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

        requestPreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', true, data);
        },

        buildRequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'requestPreimage', {
                hash: _hash,
            });
        },

        buildRequestPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'requestPreimage', argsBytes)
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

        unrequestPreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', true, data);
        },

        buildUnrequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unrequestPreimage', {
                hash: _hash,
            });
        },

        buildUnrequestPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'unrequestPreimage', argsBytes)
        },

    }
}
