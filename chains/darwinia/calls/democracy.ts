/**
 * This is the doc comment for pallet `Democracy`'s calls. 
 * 
 * `Democracy`'s storages: {@link: module:darwinia/democracy/storages}
 *
 * @module darwinia/democracy/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDemocracy = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::propose`].
         *
         * @param {unknown} _proposal Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        propose: async (signer: ethers.Signer, _proposal: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'propose', false, {
                proposal: _proposal,
                value: _value,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/propose}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proposeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'propose', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCall: (_proposal: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'propose', {
                proposal: _proposal,
                value: _value,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProposeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'propose', argsBytes)
        },

        /**
         * See [`Pallet::second`].
         *
         * @param {unknown} _proposal Compact<U32>
         * @instance
         */
        second: async (signer: ethers.Signer, _proposal: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'second', false, {
                proposal: _proposal,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/second}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        secondH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'second', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSecondCall: (_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'second', {
                proposal: _proposal,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSecondCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSecondCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'second', argsBytes)
        },

        /**
         * See [`Pallet::vote`].
         *
         * @param {unknown} _ref_index Compact<U32>
         * @param {unknown} _vote Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}}>
         * @instance
         */
        vote: async (signer: ethers.Signer, _ref_index: unknown, _vote: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'vote', false, {
                ref_index: _ref_index,
                vote: _vote,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/vote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        voteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'vote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCall: (_ref_index: unknown, _vote: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vote', {
                ref_index: _ref_index,
                vote: _vote,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'vote', argsBytes)
        },

        /**
         * See [`Pallet::emergency_cancel`].
         *
         * @param {unknown} _ref_index U32
         * @instance
         */
        emergencyCancel: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', false, {
                ref_index: _ref_index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/emergencyCancel}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        emergencyCancelH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildEmergencyCancelCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'emergencyCancel', {
                ref_index: _ref_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildEmergencyCancelCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildEmergencyCancelCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'emergencyCancel', argsBytes)
        },

        /**
         * See [`Pallet::external_propose`].
         *
         * @param {unknown} _proposal Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>
         * @instance
         */
        externalPropose: async (signer: ethers.Signer, _proposal: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', false, {
                proposal: _proposal,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/externalPropose}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        externalProposeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeCall: (_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalPropose', {
                proposal: _proposal,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildExternalProposeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'externalPropose', argsBytes)
        },

        /**
         * See [`Pallet::external_propose_majority`].
         *
         * @param {unknown} _proposal Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>
         * @instance
         */
        externalProposeMajority: async (signer: ethers.Signer, _proposal: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', false, {
                proposal: _proposal,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/externalProposeMajority}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        externalProposeMajorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeMajorityCall: (_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeMajority', {
                proposal: _proposal,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildExternalProposeMajorityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeMajorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'externalProposeMajority', argsBytes)
        },

        /**
         * See [`Pallet::external_propose_default`].
         *
         * @param {unknown} _proposal Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>
         * @instance
         */
        externalProposeDefault: async (signer: ethers.Signer, _proposal: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', false, {
                proposal: _proposal,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/externalProposeDefault}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        externalProposeDefaultH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeDefaultCall: (_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeDefault', {
                proposal: _proposal,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildExternalProposeDefaultCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildExternalProposeDefaultCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'externalProposeDefault', argsBytes)
        },

        /**
         * See [`Pallet::fast_track`].
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @param {unknown} _voting_period U32
         * @param {unknown} _delay U32
         * @instance
         */
        fastTrack: async (signer: ethers.Signer, _proposal_hash: unknown, _voting_period: unknown, _delay: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', false, {
                proposal_hash: _proposal_hash,
                voting_period: _voting_period,
                delay: _delay,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/fastTrack}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        fastTrackH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFastTrackCall: (_proposal_hash: unknown, _voting_period: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'fastTrack', {
                proposal_hash: _proposal_hash,
                voting_period: _voting_period,
                delay: _delay,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFastTrackCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFastTrackCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'fastTrack', argsBytes)
        },

        /**
         * See [`Pallet::veto_external`].
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @instance
         */
        vetoExternal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', false, {
                proposal_hash: _proposal_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/vetoExternal}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        vetoExternalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVetoExternalCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vetoExternal', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVetoExternalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVetoExternalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'vetoExternal', argsBytes)
        },

        /**
         * See [`Pallet::cancel_referendum`].
         *
         * @param {unknown} _ref_index Compact<U32>
         * @instance
         */
        cancelReferendum: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', false, {
                ref_index: _ref_index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/cancelReferendum}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelReferendumH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelReferendumCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelReferendum', {
                ref_index: _ref_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelReferendumCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelReferendumCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'cancelReferendum', argsBytes)
        },

        /**
         * See [`Pallet::delegate`].
         *
         * @param {unknown} _to [U8; 20]
         * @param {unknown} _conviction Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>
         * @param {unknown} _balance U128
         * @instance
         */
        delegate: async (signer: ethers.Signer, _to: unknown, _conviction: unknown, _balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'delegate', false, {
                to: _to,
                conviction: _conviction,
                balance: _balance,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/delegate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        delegateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'delegate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDelegateCall: (_to: unknown, _conviction: unknown, _balance: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'delegate', {
                to: _to,
                conviction: _conviction,
                balance: _balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDelegateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDelegateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'delegate', argsBytes)
        },

        /**
         * See [`Pallet::undelegate`].
         *
         * @instance
         */
        undelegate: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'undelegate', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/undelegate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        undelegateH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'undelegate', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUndelegateCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'undelegate', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUndelegateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUndelegateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'undelegate', argsBytes)
        },

        /**
         * See [`Pallet::clear_public_proposals`].
         *
         * @instance
         */
        clearPublicProposals: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/clearPublicProposals}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearPublicProposalsH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClearPublicProposalsCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'clearPublicProposals', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClearPublicProposalsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClearPublicProposalsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'clearPublicProposals', argsBytes)
        },

        /**
         * See [`Pallet::unlock`].
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        unlock: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'unlock', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/unlock}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unlockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'unlock', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnlockCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'unlock', {
                target: _target,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnlockCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnlockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'unlock', argsBytes)
        },

        /**
         * See [`Pallet::remove_vote`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        removeVote: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'removeVote', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/removeVote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeVoteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'removeVote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoteCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeVote', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'removeVote', argsBytes)
        },

        /**
         * See [`Pallet::remove_other_vote`].
         *
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _index U32
         * @instance
         */
        removeOtherVote: async (signer: ethers.Signer, _target: unknown, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', false, {
                target: _target,
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/removeOtherVote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeOtherVoteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveOtherVoteCall: (_target: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeOtherVote', {
                target: _target,
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveOtherVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveOtherVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'removeOtherVote', argsBytes)
        },

        /**
         * See [`Pallet::blacklist`].
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @param {unknown} _maybe_ref_index Enum<{0/None: , 1/Some: U32}>
         * @instance
         */
        blacklist: async (signer: ethers.Signer, _proposal_hash: unknown, _maybe_ref_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'blacklist', false, {
                proposal_hash: _proposal_hash,
                maybe_ref_index: _maybe_ref_index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/blacklist}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        blacklistH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'blacklist', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildBlacklistCall: (_proposal_hash: unknown, _maybe_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'blacklist', {
                proposal_hash: _proposal_hash,
                maybe_ref_index: _maybe_ref_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildBlacklistCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildBlacklistCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'blacklist', argsBytes)
        },

        /**
         * See [`Pallet::cancel_proposal`].
         *
         * @param {unknown} _prop_index Compact<U32>
         * @instance
         */
        cancelProposal: async (signer: ethers.Signer, _prop_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', false, {
                prop_index: _prop_index,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/cancelProposal}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelProposalCall: (_prop_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelProposal', {
                prop_index: _prop_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelProposalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'cancelProposal', argsBytes)
        },

        /**
         * See [`Pallet::set_metadata`].
         *
         * @param {unknown} _owner Enum<{0/External: , 1/Proposal: U32, 2/Referendum: U32}>
         * @param {unknown} _maybe_hash Enum<{0/None: , 1/Some: [U8; 32]}>
         * @instance
         */
        setMetadata: async (signer: ethers.Signer, _owner: unknown, _maybe_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'setMetadata', false, {
                owner: _owner,
                maybe_hash: _maybe_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/democracy/calls/setMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'setMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCall: (_owner: unknown, _maybe_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'setMetadata', {
                owner: _owner,
                maybe_hash: _maybe_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'setMetadata', argsBytes)
        },

    }
}

