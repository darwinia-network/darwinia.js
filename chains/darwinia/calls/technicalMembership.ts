/**
 * This is the doc comment for pallet `TechnicalMembership`'s calls. 
 * 
 * `TechnicalMembership`'s storages: {@link: module:darwinia/technicalMembership/storages}
 *
 * @module darwinia/technicalMembership/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTechnicalMembership = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add a member `who` to the set.
         * 
         * May only be called from `T::AddOrigin`.
         *
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        addMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', false, {
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/addMember}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addMemberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'addMember', {
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddMemberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAddMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'addMember', argsBytes)
        },

        /**
         * Remove a member `who` from the set.
         * 
         * May only be called from `T::RemoveOrigin`.
         *
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        removeMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', false, {
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/removeMember}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeMemberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'removeMember', {
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveMemberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'removeMember', argsBytes)
        },

        /**
         * Swap out one member `remove` for another `add`.
         * 
         * May only be called from `T::SwapOrigin`.
         * 
         * Prime membership is *not* passed from `remove` to `add`, if extant.
         *
         * @param {unknown} _remove [U8; 20]
         * @param {unknown} _add [U8; 20]
         * @instance
         */
        swapMember: async (signer: ethers.Signer, _remove: unknown, _add: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', false, {
                remove: _remove,
                add: _add,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/swapMember}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        swapMemberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSwapMemberCall: (_remove: unknown, _add: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'swapMember', {
                remove: _remove,
                add: _add,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSwapMemberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSwapMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'swapMember', argsBytes)
        },

        /**
         * Change the membership to a new set, disregarding the existing membership. Be nice and
         * pass `members` pre-sorted.
         * 
         * May only be called from `T::ResetOrigin`.
         *
         * @param {unknown} _members Vec<[U8; 20]>
         * @instance
         */
        resetMembers: async (signer: ethers.Signer, _members: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', false, {
                members: _members,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/resetMembers}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        resetMembersH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildResetMembersCall: (_members: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'resetMembers', {
                members: _members,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildResetMembersCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildResetMembersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'resetMembers', argsBytes)
        },

        /**
         * Swap out the sending member for some other key `new`.
         * 
         * May only be called from `Signed` origin of a current member.
         * 
         * Prime membership is passed from the origin account to `new`, if extant.
         *
         * @param {unknown} _new [U8; 20]
         * @instance
         */
        changeKey: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/changeKey}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        changeKeyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildChangeKeyCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'changeKey', {
                new: _new,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildChangeKeyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildChangeKeyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'changeKey', argsBytes)
        },

        /**
         * Set the prime member. Must be a current member.
         * 
         * May only be called from `T::PrimeOrigin`.
         *
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        setPrime: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', false, {
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/setPrime}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setPrimeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetPrimeCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'setPrime', {
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetPrimeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetPrimeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'setPrime', argsBytes)
        },

        /**
         * Remove the prime member if it exists.
         * 
         * May only be called from `T::PrimeOrigin`.
         *
         * @instance
         */
        clearPrime: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/technicalMembership/calls/clearPrime}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearPrimeH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClearPrimeCall: () => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'clearPrime', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClearPrimeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClearPrimeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'clearPrime', argsBytes)
        },

    }
}

