import { buildRuntimeCall, Dispatch, decodeCall } from "../../../src/call";
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
         * Weight: `O(p)`
         *
         * @param _proposal_hash: [U8; 32]
         * @param _value: Compact<U128>
         */
        propose: async (signer: ethers.Signer, _proposal_hash: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'propose', false, _proposal_hash, _value);
        },

        proposeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'propose', true, data);
        },

        buildProposeCall: (_proposal_hash: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'propose', {
                proposal_hash: _proposal_hash,
                value: _value,
            });
        },

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
         * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
         *   proposal. Extrinsic is weighted according to this value with no refund.
         * 
         * Weight: `O(S)` where S is the number of seconds a proposal already has.
         *
         * @param _proposal: Compact<U32>
         * @param _seconds_upper_bound: Compact<U32>
         */
        second: async (signer: ethers.Signer, _proposal: unknown, _seconds_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'second', false, _proposal, _seconds_upper_bound);
        },

        secondH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'second', true, data);
        },

        buildSecondCall: (_proposal: unknown, _seconds_upper_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'second', {
                proposal: _proposal,
                seconds_upper_bound: _seconds_upper_bound,
            });
        },

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
         * Weight: `O(R)` where R is the number of referendums the voter has voted on.
         *
         * @param _ref_index: Compact<U32>
         * @param _vote: Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}}>
         */
        vote: async (signer: ethers.Signer, _ref_index: unknown, _vote: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vote', false, _ref_index, _vote);
        },

        voteH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vote', true, data);
        },

        buildVoteCall: (_ref_index: unknown, _vote: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vote', {
                ref_index: _ref_index,
                vote: _vote,
            });
        },

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
         * @param _ref_index: U32
         */
        emergencyCancel: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', false, _ref_index);
        },

        emergencyCancelH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'emergencyCancel', true, data);
        },

        buildEmergencyCancelCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'emergencyCancel', {
                ref_index: _ref_index,
            });
        },

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
         * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
         *   Decoding vec of length V. Charged as maximum
         *
         * @param _proposal_hash: [U8; 32]
         */
        externalPropose: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', false, _proposal_hash);
        },

        externalProposeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalPropose', true, data);
        },

        buildExternalProposeCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalPropose', {
                proposal_hash: _proposal_hash,
            });
        },

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
         * @param _proposal_hash: [U8; 32]
         */
        externalProposeMajority: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', false, _proposal_hash);
        },

        externalProposeMajorityH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeMajority', true, data);
        },

        buildExternalProposeMajorityCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeMajority', {
                proposal_hash: _proposal_hash,
            });
        },

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
         * @param _proposal_hash: [U8; 32]
         */
        externalProposeDefault: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', false, _proposal_hash);
        },

        externalProposeDefaultH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'externalProposeDefault', true, data);
        },

        buildExternalProposeDefaultCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'externalProposeDefault', {
                proposal_hash: _proposal_hash,
            });
        },

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
         *   `FastTrackVotingPeriod` if too low.
         * - `delay`: The number of block after voting has ended in approval and this should be
         *   enacted. This doesn't have a minimum amount.
         * 
         * Emits `Started`.
         * 
         * Weight: `O(1)`
         *
         * @param _proposal_hash: [U8; 32]
         * @param _voting_period: U32
         * @param _delay: U32
         */
        fastTrack: async (signer: ethers.Signer, _proposal_hash: unknown, _voting_period: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', false, _proposal_hash, _voting_period, _delay);
        },

        fastTrackH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'fastTrack', true, data);
        },

        buildFastTrackCall: (_proposal_hash: unknown, _voting_period: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'fastTrack', {
                proposal_hash: _proposal_hash,
                voting_period: _voting_period,
                delay: _delay,
            });
        },

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
         * @param _proposal_hash: [U8; 32]
         */
        vetoExternal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', false, _proposal_hash);
        },

        vetoExternalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'vetoExternal', true, data);
        },

        buildVetoExternalCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'vetoExternal', {
                proposal_hash: _proposal_hash,
            });
        },

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
         * @param _ref_index: Compact<U32>
         */
        cancelReferendum: async (signer: ethers.Signer, _ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', false, _ref_index);
        },

        cancelReferendumH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelReferendum', true, data);
        },

        buildCancelReferendumCall: (_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelReferendum', {
                ref_index: _ref_index,
            });
        },

        buildCancelReferendumCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'cancelReferendum', argsBytes)
        },

        /**
         * Cancel a proposal queued for enactment.
         * 
         * The dispatch origin of this call must be _Root_.
         * 
         * - `which`: The index of the referendum to cancel.
         * 
         * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
         *
         * @param _which: U32
         */
        cancelQueued: async (signer: ethers.Signer, _which: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelQueued', false, _which);
        },

        cancelQueuedH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelQueued', true, data);
        },

        buildCancelQueuedCall: (_which: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelQueued', {
                which: _which,
            });
        },

        buildCancelQueuedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'cancelQueued', argsBytes)
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
         * @param _to: [U8; 32]
         * @param _conviction: Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>
         * @param _balance: U128
         */
        delegate: async (signer: ethers.Signer, _to: unknown, _conviction: unknown, _balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'delegate', false, _to, _conviction, _balance);
        },

        delegateH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'delegate', true, data);
        },

        buildDelegateCall: (_to: unknown, _conviction: unknown, _balance: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'delegate', {
                to: _to,
                conviction: _conviction,
                balance: _balance,
            });
        },

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
         */
        undelegate: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'undelegate', false);
        },

        undelegateH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'undelegate', true);
        },

        buildUndelegateCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'undelegate', {
            });
        },

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
         */
        clearPublicProposals: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', false);
        },

        clearPublicProposalsH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'clearPublicProposals', true);
        },

        buildClearPublicProposalsCall: () => {
            return buildRuntimeCall(metadata, 'Democracy', 'clearPublicProposals', {
            });
        },

        buildClearPublicProposalsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'clearPublicProposals', argsBytes)
        },

        /**
         * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
         * in the dispatch queue but does require a deposit, returned once enacted.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `encoded_proposal`: The preimage of a proposal.
         * 
         * Emits `PreimageNoted`.
         * 
         * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
         *
         * @param _encoded_proposal: Vec<U8>
         */
        notePreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimage', false, _encoded_proposal);
        },

        notePreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimage', true, data);
        },

        buildNotePreimageCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'notePreimage', {
                encoded_proposal: _encoded_proposal,
            });
        },

        buildNotePreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'notePreimage', argsBytes)
        },

        /**
         * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
         *
         * @param _encoded_proposal: Vec<U8>
         */
        notePreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimageOperational', false, _encoded_proposal);
        },

        notePreimageOperationalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'notePreimageOperational', true, data);
        },

        buildNotePreimageOperationalCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'notePreimageOperational', {
                encoded_proposal: _encoded_proposal,
            });
        },

        buildNotePreimageOperationalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'notePreimageOperational', argsBytes)
        },

        /**
         * Register the preimage for an upcoming proposal. This requires the proposal to be
         * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
         * the preimage has not been uploaded before and matches some imminent proposal,
         * no fee is paid.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `encoded_proposal`: The preimage of a proposal.
         * 
         * Emits `PreimageNoted`.
         * 
         * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
         *
         * @param _encoded_proposal: Vec<U8>
         */
        noteImminentPreimage: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimage', false, _encoded_proposal);
        },

        noteImminentPreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimage', true, data);
        },

        buildNoteImminentPreimageCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'noteImminentPreimage', {
                encoded_proposal: _encoded_proposal,
            });
        },

        buildNoteImminentPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'noteImminentPreimage', argsBytes)
        },

        /**
         * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
         *
         * @param _encoded_proposal: Vec<U8>
         */
        noteImminentPreimageOperational: async (signer: ethers.Signer, _encoded_proposal: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimageOperational', false, _encoded_proposal);
        },

        noteImminentPreimageOperationalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'noteImminentPreimageOperational', true, data);
        },

        buildNoteImminentPreimageOperationalCall: (_encoded_proposal: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'noteImminentPreimageOperational', {
                encoded_proposal: _encoded_proposal,
            });
        },

        buildNoteImminentPreimageOperationalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'noteImminentPreimageOperational', argsBytes)
        },

        /**
         * Remove an expired proposal preimage and collect the deposit.
         * 
         * The dispatch origin of this call must be _Signed_.
         * 
         * - `proposal_hash`: The preimage hash of a proposal.
         * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
         *   weighted according to this value with no refund.
         * 
         * This will only work after `VotingPeriod` blocks from the time that the preimage was
         * noted, if it's the same account doing it. If it's a different account, then it'll only
         * work an additional `EnactmentPeriod` later.
         * 
         * Emits `PreimageReaped`.
         * 
         * Weight: `O(D)` where D is length of proposal.
         *
         * @param _proposal_hash: [U8; 32]
         * @param _proposal_len_upper_bound: Compact<U32>
         */
        reapPreimage: async (signer: ethers.Signer, _proposal_hash: unknown, _proposal_len_upper_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'reapPreimage', false, _proposal_hash, _proposal_len_upper_bound);
        },

        reapPreimageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'reapPreimage', true, data);
        },

        buildReapPreimageCall: (_proposal_hash: unknown, _proposal_len_upper_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'reapPreimage', {
                proposal_hash: _proposal_hash,
                proposal_len_upper_bound: _proposal_len_upper_bound,
            });
        },

        buildReapPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'reapPreimage', argsBytes)
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
         * @param _target: [U8; 32]
         */
        unlock: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'unlock', false, _target);
        },

        unlockH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'unlock', true, data);
        },

        buildUnlockCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'unlock', {
                target: _target,
            });
        },

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
         * @param _index: U32
         */
        removeVote: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeVote', false, _index);
        },

        removeVoteH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeVote', true, data);
        },

        buildRemoveVoteCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeVote', {
                index: _index,
            });
        },

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
         * @param _target: [U8; 32]
         * @param _index: U32
         */
        removeOtherVote: async (signer: ethers.Signer, _target: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', false, _target, _index);
        },

        removeOtherVoteH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'removeOtherVote', true, data);
        },

        buildRemoveOtherVoteCall: (_target: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'removeOtherVote', {
                target: _target,
                index: _index,
            });
        },

        buildRemoveOtherVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'removeOtherVote', argsBytes)
        },

        /**
         * Enact a proposal from a referendum. For now we just make the weight be the maximum.
         *
         * @param _proposal_hash: [U8; 32]
         * @param _index: U32
         */
        enactProposal: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'enactProposal', false, _proposal_hash, _index);
        },

        enactProposalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'enactProposal', true, data);
        },

        buildEnactProposalCall: (_proposal_hash: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'enactProposal', {
                proposal_hash: _proposal_hash,
                index: _index,
            });
        },

        buildEnactProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'enactProposal', argsBytes)
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
         * @param _proposal_hash: [U8; 32]
         * @param _maybe_ref_index: Enum<{0/None: , 1/Some: U32}>
         */
        blacklist: async (signer: ethers.Signer, _proposal_hash: unknown, _maybe_ref_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'blacklist', false, _proposal_hash, _maybe_ref_index);
        },

        blacklistH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'blacklist', true, data);
        },

        buildBlacklistCall: (_proposal_hash: unknown, _maybe_ref_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'blacklist', {
                proposal_hash: _proposal_hash,
                maybe_ref_index: _maybe_ref_index,
            });
        },

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
         * @param _prop_index: Compact<U32>
         */
        cancelProposal: async (signer: ethers.Signer, _prop_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', false, _prop_index);
        },

        cancelProposalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Democracy', 'cancelProposal', true, data);
        },

        buildCancelProposalCall: (_prop_index: unknown) => {
            return buildRuntimeCall(metadata, 'Democracy', 'cancelProposal', {
                prop_index: _prop_index,
            });
        },

        buildCancelProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Democracy', 'cancelProposal', argsBytes)
        },

    }
}
