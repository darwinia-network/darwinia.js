/**
 * This is the doc comment for pallet `Preimage`'s calls. 
 * 
 * `Preimage`'s storages: {@link: module:darwinia/preimage/storages}
 *
 * @module darwinia/preimage/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPreimage = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::note_preimage`].
         *
         * @param {unknown} _bytes Vec<U8>
         * @instance
         */
        notePreimage: async (signer: ethers.Signer, _bytes: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, {
                bytes: _bytes,
           });
        },

        /**
         * Similar to {@link: darwinia/preimage/calls/notePreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        notePreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::unnote_preimage`].
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: darwinia/preimage/calls/unnotePreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unnotePreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::request_preimage`].
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        requestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: darwinia/preimage/calls/requestPreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        requestPreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::unrequest_preimage`].
         *
         * @param {unknown} _hash [U8; 32]
         * @instance
         */
        unrequestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, {
                hash: _hash,
           });
        },

        /**
         * Similar to {@link: darwinia/preimage/calls/unrequestPreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unrequestPreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

