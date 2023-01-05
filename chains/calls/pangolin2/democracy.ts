import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDemocracy = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _proposal_hash: [U8; 32]
         * @param _value: Compact<U128>
	 */
        propose: async (signer: ethers.Signer, _proposal_hash: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'propose', false, _proposal_hash, _value);
        },

        proposeCall: (_proposal_hash: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'propose', {
                proposal_hash: _proposal_hash,
                value: _value,
            });
        },

        /**
         * @param _proposal: Compact<U32>
         * @param _seconds_upper_bound: Compact<U32>
	 */
        second: async (signer: ethers.Signer, _proposal: unknown, _seconds_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'second', false, _proposal, _seconds_upper_bound);
        },

        secondCall: (_proposal: unknown, _seconds_upper_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'second', {
                proposal: _proposal,
                seconds_upper_bound: _seconds_upper_bound,
            });
        },

        /**
         * @param _ref_index: Compact<U32>
         * @param _vote: Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}}>
	 */
        vote: async (signer: ethers.Signer, _ref_index: unknown, _vote: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vote', false, _ref_index, _vote);
        },

        voteCall: (_ref_index: unknown, _vote: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vote', {
                ref_index: _ref_index,
                vote: _vote,
            });
        },

        /**
         * @param _ref_index: U32
	 */
        emergencyCancel: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', false, _ref_index);
        },

        emergencyCancelCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'emergencyCancel', {
                ref_index: _ref_index,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalPropose: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', false, _proposal_hash);
        },

        externalProposeCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalPropose', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalProposeMajority: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', false, _proposal_hash);
        },

        externalProposeMajorityCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeMajority', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        externalProposeDefault: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', false, _proposal_hash);
        },

        externalProposeDefaultCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeDefault', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _voting_period: U32
         * @param _delay: U32
	 */
        fastTrack: async (signer: ethers.Signer, _proposal_hash: unknown, _voting_period: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', false, _proposal_hash, _voting_period, _delay);
        },

        fastTrackCall: (_proposal_hash: unknown, _voting_period: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'fastTrack', {
                proposal_hash: _proposal_hash,
                voting_period: _voting_period,
                delay: _delay,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        vetoExternal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', false, _proposal_hash);
        },

        vetoExternalCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vetoExternal', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * @param _ref_index: Compact<U32>
	 */
        cancelReferendum: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', false, _ref_index);
        },

        cancelReferendumCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelReferendum', {
                ref_index: _ref_index,
            });
        },

        /**
         * @param _which: U32
	 */
        cancelQueued: async (signer: ethers.Signer, _which: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelQueued', false, _which);
        },

        cancelQueuedCall: (_which: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelQueued', {
                which: _which,
            });
        },

        /**
         * @param _to: [U8; 20]
         * @param _conviction: Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>
         * @param _balance: U128
	 */
        delegate: async (signer: ethers.Signer, _to: unknown, _conviction: unknown, _balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'delegate', false, _to, _conviction, _balance);
        },

        delegateCall: (_to: unknown, _conviction: unknown, _balance: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'delegate', {
                to: _to,
                conviction: _conviction,
                balance: _balance,
            });
        },

        /**
	 */
        undelegate: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'undelegate', false);
        },

        undelegateCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'undelegate', {
            });
        },

        /**
	 */
        clearPublicProposals: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', false);
        },

        clearPublicProposalsCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'clearPublicProposals', {
            });
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimage', false, _encoded_proposal);
        },

        notePreimageCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'notePreimage', {
                encoded_proposal: _encoded_proposal,
            });
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        notePreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimageOperational', false, _encoded_proposal);
        },

        notePreimageOperationalCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'notePreimageOperational', {
                encoded_proposal: _encoded_proposal,
            });
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        noteImminentPreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimage', false, _encoded_proposal);
        },

        noteImminentPreimageCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'noteImminentPreimage', {
                encoded_proposal: _encoded_proposal,
            });
        },

        /**
         * @param _encoded_proposal: Vec<U8>
	 */
        noteImminentPreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimageOperational', false, _encoded_proposal);
        },

        noteImminentPreimageOperationalCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'noteImminentPreimageOperational', {
                encoded_proposal: _encoded_proposal,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _proposal_len_upper_bound: Compact<U32>
	 */
        reapPreimage: async (signer: ethers.Signer, _proposal_hash: unknown, _proposal_len_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'reapPreimage', false, _proposal_hash, _proposal_len_upper_bound);
        },

        reapPreimageCall: (_proposal_hash: unknown, _proposal_len_upper_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'reapPreimage', {
                proposal_hash: _proposal_hash,
                proposal_len_upper_bound: _proposal_len_upper_bound,
            });
        },

        /**
         * @param _target: [U8; 20]
	 */
        unlock: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'unlock', false, _target);
        },

        unlockCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'unlock', {
                target: _target,
            });
        },

        /**
         * @param _index: U32
	 */
        removeVote: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeVote', false, _index);
        },

        removeVoteCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeVote', {
                index: _index,
            });
        },

        /**
         * @param _target: [U8; 20]
         * @param _index: U32
	 */
        removeOtherVote: async (signer: ethers.Signer, _target: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', false, _target, _index);
        },

        removeOtherVoteCall: (_target: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeOtherVote', {
                target: _target,
                index: _index,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _index: U32
	 */
        enactProposal: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'enactProposal', false, _proposal_hash, _index);
        },

        enactProposalCall: (_proposal_hash: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'enactProposal', {
                proposal_hash: _proposal_hash,
                index: _index,
            });
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _maybe_ref_index: Enum<{0/None: , 1/Some: U32}>
	 */
        blacklist: async (signer: ethers.Signer, _proposal_hash: unknown, _maybe_ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'blacklist', false, _proposal_hash, _maybe_ref_index);
        },

        blacklistCall: (_proposal_hash: unknown, _maybe_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'blacklist', {
                proposal_hash: _proposal_hash,
                maybe_ref_index: _maybe_ref_index,
            });
        },

        /**
         * @param _prop_index: Compact<U32>
	 */
        cancelProposal: async (signer: ethers.Signer, _prop_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', false, _prop_index);
        },

        cancelProposalCall: (_prop_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelProposal', {
                prop_index: _prop_index,
            });
        },

    }
}
