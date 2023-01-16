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
         * @param _who: [U8; 20]
         */
        addMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', false, _who);
        },

        addMemberH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', true, data);
        },

        buildAddMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'addMember', {
                who: _who,
            });
        },

        buildAddMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'addMember', argsBytes)
        },

        /**
         * Remove a member `who` from the set.
         * 
         * May only be called from `T::RemoveOrigin`.
         *
         * @param _who: [U8; 20]
         */
        removeMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', false, _who);
        },

        removeMemberH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', true, data);
        },

        buildRemoveMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'removeMember', {
                who: _who,
            });
        },

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
         * @param _remove: [U8; 20]
         * @param _add: [U8; 20]
         */
        swapMember: async (signer: ethers.Signer, _remove: unknown, _add: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', false, _remove, _add);
        },

        swapMemberH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', true, data);
        },

        buildSwapMemberCall: (_remove: unknown, _add: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'swapMember', {
                remove: _remove,
                add: _add,
            });
        },

        buildSwapMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'swapMember', argsBytes)
        },

        /**
         * Change the membership to a new set, disregarding the existing membership. Be nice and
         * pass `members` pre-sorted.
         * 
         * May only be called from `T::ResetOrigin`.
         *
         * @param _members: Vec<[U8; 20]>
         */
        resetMembers: async (signer: ethers.Signer, _members: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', false, _members);
        },

        resetMembersH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', true, data);
        },

        buildResetMembersCall: (_members: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'resetMembers', {
                members: _members,
            });
        },

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
         * @param _new: [U8; 20]
         */
        changeKey: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', false, _new);
        },

        changeKeyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', true, data);
        },

        buildChangeKeyCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'changeKey', {
                new: _new,
            });
        },

        buildChangeKeyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'changeKey', argsBytes)
        },

        /**
         * Set the prime member. Must be a current member.
         * 
         * May only be called from `T::PrimeOrigin`.
         *
         * @param _who: [U8; 20]
         */
        setPrime: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', false, _who);
        },

        setPrimeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', true, data);
        },

        buildSetPrimeCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'setPrime', {
                who: _who,
            });
        },

        buildSetPrimeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'setPrime', argsBytes)
        },

        /**
         * Remove the prime member if it exists.
         * 
         * May only be called from `T::PrimeOrigin`.
         *
         */
        clearPrime: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', false);
        },

        clearPrimeH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', true);
        },

        buildClearPrimeCall: () => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'clearPrime', {
            });
        },

        buildClearPrimeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TechnicalMembership', 'clearPrime', argsBytes)
        },

    }
}
