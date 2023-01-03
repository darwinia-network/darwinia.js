import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDemocracy = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U128>
	 */
        propose: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'propose', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Compact<U32>
	 */
        second: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'second', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/Standard", "1/Split"}>
	 */
        vote: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vote', false, param0, param1);
        },

        /**
         * @param param0: U32
	 */
        emergencyCancel: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        externalPropose: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        externalProposeMajority: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        externalProposeDefault: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
         * @param param2: U32
	 */
        fastTrack: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
	 */
        vetoExternal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        cancelReferendum: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', false, param0);
        },

        /**
         * @param param0: U32
	 */
        cancelQueued: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelQueued', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/None", "1/Locked1x", "2/Locked2x", "3/Locked3x", "4/Locked4x", "5/Locked5x", "6/Locked6x"}>
         * @param param2: U128
	 */
        delegate: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'delegate', false, param0, param1, param2);
        },

        /**
	 */
        undelegate: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'undelegate', false);
        },

        /**
	 */
        clearPublicProposals: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', false);
        },

        /**
         * @param param0: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimage', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        notePreimageOperational: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimageOperational', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        noteImminentPreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimage', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        noteImminentPreimageOperational: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimageOperational', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U32>
	 */
        reapPreimage: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'reapPreimage', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
	 */
        unlock: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'unlock', false, param0);
        },

        /**
         * @param param0: U32
	 */
        removeVote: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeVote', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        removeOtherVote: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        enactProposal: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'enactProposal', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/None", "1/Some"}>
	 */
        blacklist: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'blacklist', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
	 */
        cancelProposal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', false, param0);
        },


    }
}
