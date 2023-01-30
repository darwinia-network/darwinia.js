/**
 * This is the doc comment for pallet `Preimage`'s calls. 
 * 
 * `Preimage`'s storages: {@link: module:pangolin2/preimage/storages}
 *
 * @module pangolin2/preimage/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
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
         * @param {unknown} _bytes Vec<U8>
         * @instance
         */
        notePreimage: async (signer: ethers.Signer, _bytes: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, {
                bytes: _bytes,
           });
        },

        /**
         * Similar to {@link: pangolin2/preimage/calls/notePreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        notePreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildNotePreimageCall: (_bytes: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'notePreimage', {
                bytes: _bytes,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildNotePreimageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildNotePreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'notePreimage', argsBytes)
        },

        /**
         * Clear an unrequested preimage from the runtime storage.
         * 
         * If `len` is provided, then it will be a much cheaper operation.
         * 
         * - `hash`: The hash of the preimage to be removed from the store.
         * - `len`: The length of the preimage of `hash`.
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: pangolin2/preimage/calls/unnotePreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unnotePreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnnotePreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unnotePreimage', {
                hash: _hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnnotePreimageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnnotePreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'unnotePreimage', argsBytes)
        },

        /**
         * Request a preimage be uploaded to the chain without paying any fees or deposits.
         * 
         * If the preimage requests has already been provided on-chain, we unreserve any deposit
         * a user may have paid, and take the control of the preimage out of their hands.
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        requestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: pangolin2/preimage/calls/requestPreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        requestPreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'requestPreimage', {
                hash: _hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRequestPreimageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRequestPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'requestPreimage', argsBytes)
        },

        /**
         * Clear a previously made request for a preimage.
         * 
         * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        unrequestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: pangolin2/preimage/calls/unrequestPreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unrequestPreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnrequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unrequestPreimage', {
                hash: _hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnrequestPreimageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnrequestPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Preimage', 'unrequestPreimage', argsBytes)
        },

    }
}

