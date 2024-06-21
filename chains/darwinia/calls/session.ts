/**
 * This is the doc comment for pallet `Session`'s calls. 
 * 
 * `Session`'s storages: {@link: module:darwinia/session/storages}
 *
 * @module darwinia/session/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSession = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::set_keys`].
         *
         * @param {unknown} _keys {aura: [U8; 32]}
         * @param {unknown} _proof Vec<U8>
         * @instance
         */
        setKeys: async (signer: ethers.Signer, _keys: unknown, _proof: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Session', 'setKeys', false, {
                keys: _keys,
                proof: _proof,
           });
        },

        /**
         * Similar to {@link: darwinia/session/calls/setKeys}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setKeysH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Session', 'setKeys', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetKeysCall: (_keys: unknown, _proof: unknown) => {
            return buildRuntimeCall(metadata, 'Session', 'setKeys', {
                keys: _keys,
                proof: _proof,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetKeysCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetKeysCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Session', 'setKeys', argsBytes)
        },

        /**
         * See [`Pallet::purge_keys`].
         *
         * @instance
         */
        purgeKeys: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Session', 'purgeKeys', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/session/calls/purgeKeys}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        purgeKeysH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Session', 'purgeKeys', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildPurgeKeysCall: () => {
            return buildRuntimeCall(metadata, 'Session', 'purgeKeys', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildPurgeKeysCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildPurgeKeysCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Session', 'purgeKeys', argsBytes)
        },

    }
}

