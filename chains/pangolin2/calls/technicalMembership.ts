import { buildRuntimeCall, Dispatch } from "../../../call";
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

        addMemberD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', true, data);
        },

        addMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'addMember', {
                who: _who,
            });
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

        removeMemberD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', true, data);
        },

        removeMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'removeMember', {
                who: _who,
            });
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

        swapMemberD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', true, data);
        },

        swapMemberCall: (_remove: unknown, _add: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'swapMember', {
                remove: _remove,
                add: _add,
            });
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

        resetMembersD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', true, data);
        },

        resetMembersCall: (_members: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'resetMembers', {
                members: _members,
            });
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

        changeKeyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', true, data);
        },

        changeKeyCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'changeKey', {
                new: _new,
            });
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

        setPrimeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', true, data);
        },

        setPrimeCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'setPrime', {
                who: _who,
            });
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

        clearPrimeD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', true);
        },

        clearPrimeCall: () => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'clearPrime', {
            });
        },

    }
}
