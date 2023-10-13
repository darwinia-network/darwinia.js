/**
 * This is the doc comment for pallet `Democracy`'s calls. 
 * 
 * `Democracy`'s storages: {@link: module:pangolin/democracy/storages}
 *
 * @module pangolin/democracy/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDemocracy = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Propose a sensitive action to be taken.
         * 
         * The dispatch origin of this call must be _Signed_ and the sender must
         * have funds to cover the deposit.
         * 
         * - `proposal_hash`: The hash of the proposal preimage.
         * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
         * 
         * Emits `Proposed`.
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
         * Similar to {@link: pangolin/democracy/calls/propose}, but with scale encoded args.
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
         * Signals agreement with a particular proposal.
         * 
         * The dispatch origin of this call must be _Signed_ and the sender
         * must have funds to cover the deposit, equal to the original deposit.
         * 
         * - `proposal`: The index of the proposal to second.
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
         * Similar to {@link: pangolin/democracy/calls/second}, but with scale encoded args.
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
         * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
         * otherwise it is a vote to keep the status quo.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `ref_index`: The index of the referendum to vote for.
         * - `vote`: The vote configuration.
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
         * Similar to {@link: pangolin/democracy/calls/vote}, but with scale encoded args.
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
         * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
         * referendum.
         * 
         * The dispatch origin of this call must be `CancellationOrigin`.
         * 
         * -`ref_index`: The index of the referendum to cancel.
         * 
         * Weight: `O(1)`.
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
         * Similar to {@link: pangolin/democracy/calls/emergencyCancel}, but with scale encoded args.
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
         * Schedule a referendum to be tabled once it is legal to schedule an external
         * referendum.
         * 
         * The dispatch origin of this call must be `ExternalOrigin`.
         * 
         * - `proposal_hash`: The preimage hash of the proposal.
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
         * Similar to {@link: pangolin/democracy/calls/externalPropose}, but with scale encoded args.
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
         * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
         * an external referendum.
         * 
         * The dispatch of this call must be `ExternalMajorityOrigin`.
         * 
         * - `proposal_hash`: The preimage hash of the proposal.
         * 
         * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         * pre-scheduled `external_propose` call.
         * 
         * Weight: `O(1)`
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
         * Similar to {@link: pangolin/democracy/calls/externalProposeMajority}, but with scale encoded args.
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
         * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
         * schedule an external referendum.
         * 
         * The dispatch of this call must be `ExternalDefaultOrigin`.
         * 
         * - `proposal_hash`: The preimage hash of the proposal.
         * 
         * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         * pre-scheduled `external_propose` call.
         * 
         * Weight: `O(1)`
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
         * Similar to {@link: pangolin/democracy/calls/externalProposeDefault}, but with scale encoded args.
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
         * Schedule the currently externally-proposed majority-carries referendum to be tabled
         * immediately. If there is no externally-proposed referendum currently, or if there is one
         * but it is not a majority-carries referendum then it fails.
         * 
         * The dispatch of this call must be `FastTrackOrigin`.
         * 
         * - `proposal_hash`: The hash of the current external proposal.
         * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
         * 	Must be always greater than zero.
         * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
         * - `delay`: The number of block after voting has ended in approval and this should be
         *   enacted. This doesn't have a minimum amount.
         * 
         * Emits `Started`.
         * 
         * Weight: `O(1)`
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
         * Similar to {@link: pangolin/democracy/calls/fastTrack}, but with scale encoded args.
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
         * Veto and blacklist the external proposal hash.
         * 
         * The dispatch origin of this call must be `VetoOrigin`.
         * 
         * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
         * 
         * Emits `Vetoed`.
         * 
         * Weight: `O(V + log(V))` where V is number of `existing vetoers`
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
         * Similar to {@link: pangolin/democracy/calls/vetoExternal}, but with scale encoded args.
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
         * Remove a referendum.
         * 
         * The dispatch origin of this call must be _Root_.
         * 
         * - `ref_index`: The index of the referendum to cancel.
         * 
         * # Weight: `O(1)`.
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
         * Similar to {@link: pangolin/democracy/calls/cancelReferendum}, but with scale encoded args.
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
         * Delegate the voting power (with some given conviction) of the sending account.
         * 
         * The balance delegated is locked for as long as it's delegated, and thereafter for the
         * time appropriate for the conviction's lock period.
         * 
         * The dispatch origin of this call must be _Signed_, and the signing account must either:
         *   - be delegating already; or
         *   - have no voting activity (if there is, then it will need to be removed/consolidated
         *     through `reap_vote` or `unvote`).
         * 
         * - `to`: The account whose voting the `target` account's voting power will follow.
         * - `conviction`: The conviction that will be attached to the delegated votes. When the
         *   account is undelegated, the funds will be locked for the corresponding period.
         * - `balance`: The amount of the account's balance to be used in delegating. This must not
         *   be more than the account's current balance.
         * 
         * Emits `Delegated`.
         * 
         * Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *   voted on. Weight is charged as if maximum votes.
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
         * Similar to {@link: pangolin/democracy/calls/delegate}, but with scale encoded args.
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
         * Undelegate the voting power of the sending account.
         * 
         * Tokens may be unlocked following once an amount of time consistent with the lock period
         * of the conviction with which the delegation was issued.
         * 
         * The dispatch origin of this call must be _Signed_ and the signing account must be
         * currently delegating.
         * 
         * Emits `Undelegated`.
         * 
         * Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *   voted on. Weight is charged as if maximum votes.
         *
         * @instance
         */
        undelegate: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'undelegate', false, {
           });
        },

        /**
         * Similar to {@link: pangolin/democracy/calls/undelegate}, but with scale encoded args.
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
         * Clears all public proposals.
         * 
         * The dispatch origin of this call must be _Root_.
         * 
         * Weight: `O(1)`.
         *
         * @instance
         */
        clearPublicProposals: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', false, {
           });
        },

        /**
         * Similar to {@link: pangolin/democracy/calls/clearPublicProposals}, but with scale encoded args.
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
         * Unlock tokens that have an expired lock.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `target`: The account to remove the lock on.
         * 
         * Weight: `O(R)` with R number of vote of target.
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
         * Similar to {@link: pangolin/democracy/calls/unlock}, but with scale encoded args.
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
         * Remove a vote for a referendum.
         * 
         * If:
         * - the referendum was cancelled, or
         * - the referendum is ongoing, or
         * - the referendum has ended such that
         *   - the vote of the account was in opposition to the result; or
         *   - there was no conviction to the account's vote; or
         *   - the account made a split vote
         * ...then the vote is removed cleanly and a following call to `unlock` may result in more
         * funds being available.
         * 
         * If, however, the referendum has ended and:
         * - it finished corresponding to the vote of the account, and
         * - the account made a standard vote with conviction, and
         * - the lock period of the conviction is not over
         * ...then the lock will be aggregated into the overall account's lock, which may involve
         * *overlocking* (where the two locks are combined into a single lock that is the maximum
         * of both the amount locked and the time is it locked for).
         * 
         * The dispatch origin of this call must be _Signed_, and the signer must have a vote
         * registered for referendum `index`.
         * 
         * - `index`: The index of referendum of the vote to be removed.
         * 
         * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *   Weight is calculated for the maximum number of vote.
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
         * Similar to {@link: pangolin/democracy/calls/removeVote}, but with scale encoded args.
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
         * Remove a vote for a referendum.
         * 
         * If the `target` is equal to the signer, then this function is exactly equivalent to
         * `remove_vote`. If not equal to the signer, then the vote must have expired,
         * either because the referendum was cancelled, because the voter lost the referendum or
         * because the conviction period is over.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `target`: The account of the vote to be removed; this account must have voted for
         *   referendum `index`.
         * - `index`: The index of referendum of the vote to be removed.
         * 
         * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *   Weight is calculated for the maximum number of vote.
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
         * Similar to {@link: pangolin/democracy/calls/removeOtherVote}, but with scale encoded args.
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
         * Permanently place a proposal into the blacklist. This prevents it from ever being
         * proposed again.
         * 
         * If called on a queued public or external proposal, then this will result in it being
         * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
         * then it will be cancelled.
         * 
         * The dispatch origin of this call must be `BlacklistOrigin`.
         * 
         * - `proposal_hash`: The proposal hash to blacklist permanently.
         * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
         * cancelled.
         * 
         * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
         *   reasonable value).
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
         * Similar to {@link: pangolin/democracy/calls/blacklist}, but with scale encoded args.
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
         * Remove a proposal.
         * 
         * The dispatch origin of this call must be `CancelProposalOrigin`.
         * 
         * - `prop_index`: The index of the proposal to cancel.
         * 
         * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
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
         * Similar to {@link: pangolin/democracy/calls/cancelProposal}, but with scale encoded args.
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
         * Set or clear a metadata of a proposal or a referendum.
         * 
         * Parameters:
         * - `origin`: Must correspond to the `MetadataOwner`.
         *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
         *       threshold.
         *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
         *       threshold.
         *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
         *       threshold.
         *     - `Signed` by a creator for a public proposal.
         *     - `Signed` to clear a metadata for a finished referendum.
         *     - `Root` to set a metadata for an ongoing referendum.
         * - `owner`: an identifier of a metadata owner.
         * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
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
         * Similar to {@link: pangolin/democracy/calls/setMetadata}, but with scale encoded args.
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

