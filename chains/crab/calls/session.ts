import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSession = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Sets the session key(s) of the function caller to `keys`.
         * Allows an account to set its session key prior to becoming a validator.
         * This doesn't take effect until the next session.
         * 
         * The dispatch origin of this function must be signed.
         * 
         * # <weight>
         * - Complexity: `O(1)`. Actual cost depends on the number of length of
         *   `T::Keys::key_ids()` which is fixed.
         * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
         * - DbWrites: `origin account`, `NextKeys`
         * - DbReads per key id: `KeyOwner`
         * - DbWrites per key id: `KeyOwner`
         * # </weight>
         *
         * @param _keys: {babe: [U8; 32], grandpa: [U8; 32], im_online: [U8; 32], authority_discovery: [U8; 32]}
         * @param _proof: Vec<U8>
         */
        setKeys: async (signer: ethers.Signer, _keys: unknown, _proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', false, _keys, _proof);
        },

        setKeysH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', true, data);
        },

        buildSetKeysCall: (_keys: unknown, _proof: unknown) => {
            return buildRuntimeCall(metadata, 'Session', 'setKeys', {
                keys: _keys,
                proof: _proof,
            });
        },

        buildSetKeysCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Session', 'setKeys', argsBytes)
        },

        /**
         * Removes any session key(s) of the function caller.
         * 
         * This doesn't take effect until the next session.
         * 
         * The dispatch origin of this function must be Signed and the account must be either be
         * convertible to a validator ID using the chain's typical addressing system (this usually
         * means being a controller account) or directly convertible into a validator ID (which
         * usually means being a stash account).
         * 
         * # <weight>
         * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
         *   of `T::Keys::key_ids()` which is fixed.
         * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
         * - DbWrites: `NextKeys`, `origin account`
         * - DbWrites per key id: `KeyOwner`
         * # </weight>
         *
         */
        purgeKeys: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', false);
        },

        purgeKeysH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', true);
        },

        buildPurgeKeysCall: () => {
            return buildRuntimeCall(metadata, 'Session', 'purgeKeys', {
            });
        },

        buildPurgeKeysCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Session', 'purgeKeys', argsBytes)
        },

    }
}
