import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDemocracy = (dispatch: Dispatch) => {
    return {
        /**
         * @param _proposal_hash: [U8; 32]
         * @param _value: Compact<U128>
	 */
        propose: async (signer: ethers.Signer, _proposal_hash: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'propose', false, _proposal_hash, _value);
        },

        /**
         * @param _proposal: Compact<U32>
         * @param _seconds_upper_bound: Compact<U32>
	 */
        second: async (signer: ethers.Signer, _proposal: unknown, _seconds_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'second', false, _proposal, _seconds_upper_bound);
        },

        /**
         * @param _ref_index: Compact<U32>
         * @param _vote: Enum<{Standard: {vote: U8, balance: U128}, Split: {aye: U128, nay: U128}}>
	 */
        vote: async (signer: ethers.Signer, _ref_index: unknown, _vote: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vote', false, _ref_index, _vote);
        },

        /**
         * @param _ref_index: U32
	 */
        emergencyCancel: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', false, _ref_index);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalPropose: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', false, _proposal_hash);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalProposeMajority: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', false, _proposal_hash);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalProposeDefault: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', false, _proposal_hash);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _voting_period: U32
         * @param _delay: U32
	 */
        fastTrack: async (signer: ethers.Signer, _proposal_hash: unknown, _voting_period: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', false, _proposal_hash, _voting_period, _delay);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        vetoExternal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', false, _proposal_hash);
        },

        /**
         * @param _ref_index: Compact<U32>
	 */
        cancelReferendum: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', false, _ref_index);
        },

        /**
         * @param _which: U32
	 */
        cancelQueued: async (signer: ethers.Signer, _which: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelQueued', false, _which);
        },

        /**
         * @param _to: [U8; 20]
         * @param _conviction: Enum<{None: , Locked1x: , Locked2x: , Locked3x: , Locked4x: , Locked5x: , Locked6x: }>
         * @param _balance: U128
	 */
        delegate: async (signer: ethers.Signer, _to: unknown, _conviction: unknown, _balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'delegate', false, _to, _conviction, _balance);
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
         * @param _encoded_proposal: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimage', false, _encoded_proposal);
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        notePreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimageOperational', false, _encoded_proposal);
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        noteImminentPreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimage', false, _encoded_proposal);
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        noteImminentPreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimageOperational', false, _encoded_proposal);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _proposal_len_upper_bound: Compact<U32>
	 */
        reapPreimage: async (signer: ethers.Signer, _proposal_hash: unknown, _proposal_len_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'reapPreimage', false, _proposal_hash, _proposal_len_upper_bound);
        },

        /**
         * @param _target: [U8; 20]
	 */
        unlock: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'unlock', false, _target);
        },

        /**
         * @param _index: U32
	 */
        removeVote: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeVote', false, _index);
        },

        /**
         * @param _target: [U8; 20]
         * @param _index: U32
	 */
        removeOtherVote: async (signer: ethers.Signer, _target: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', false, _target, _index);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _index: U32
	 */
        enactProposal: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'enactProposal', false, _proposal_hash, _index);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _maybe_ref_index: Enum<{None: , Some: U32}>
	 */
        blacklist: async (signer: ethers.Signer, _proposal_hash: unknown, _maybe_ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'blacklist', false, _proposal_hash, _maybe_ref_index);
        },

        /**
         * @param _prop_index: Compact<U32>
	 */
        cancelProposal: async (signer: ethers.Signer, _prop_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', false, _prop_index);
        },


    }
}
