/**
 * This is the doc comment for pallet `Society`'s calls. 
 * 
 * `Society`'s storages: {@link: module:crab/society/storages}
 *
 * @module crab/society/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSociety = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * A user outside of the society can make a bid for entry.
         * 
         * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
         * when the bid becomes a member, or if the bid calls `unbid`.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `value`: A one time payment the bid would like to receive when joining the society.
         * 
         * # <weight>
         * Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
         * - Storage Reads:
         * 	- One storage read to check for suspended candidate. O(1)
         * 	- One storage read to check for suspended member. O(1)
         * 	- One storage read to retrieve all current bids. O(B)
         * 	- One storage read to retrieve all current candidates. O(C)
         * 	- One storage read to retrieve all members. O(M)
         * - Storage Writes:
         * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
         *    w/ read)
         * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
         * - Notable Computation:
         * 	- O(B + C + log M) search to check user is not already a part of society.
         * 	- O(log B) search to insert the new bid sorted.
         * - External Pallet Operations:
         * 	- One balance reserve operation. O(X)
         * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
         * - Events:
         * 	- One event for new bid.
         * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
         * 
         * Total Complexity: O(M + B + C + logM + logB + X)
         * # </weight>
         *
         * @param {unknown} _value U128
         * @instance
         */
        bid: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', false, {
                value: _value,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/bid}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        bidH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildBidCall: (_value: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'bid', {
                value: _value,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildBidCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildBidCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'bid', argsBytes)
        },

        /**
         * A bidder can remove their bid for entry into society.
         * By doing so, they will have their candidate deposit returned or
         * they will unvouch their voucher.
         * 
         * Payment: The bid deposit is unreserved if the user made a bid.
         * 
         * The dispatch origin for this call must be _Signed_ and a bidder.
         * 
         * Parameters:
         * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
         * 
         * # <weight>
         * Key: B (len of bids), X (balance unreserve)
         * - One storage read and write to retrieve and update the bids. O(B)
         * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
         * - One event.
         * 
         * Total Complexity: O(B + X)
         * # </weight>
         *
         * @param {unknown} _pos U32
         * @instance
         */
        unbid: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', false, {
                pos: _pos,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/unbid}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unbidH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnbidCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unbid', {
                pos: _pos,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnbidCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnbidCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'unbid', argsBytes)
        },

        /**
         * As a member, vouch for someone to join society by placing a bid on their behalf.
         * 
         * There is no deposit required to vouch for a new bid, but a member can only vouch for
         * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
         * the suspension judgement origin, the member will be banned from vouching again.
         * 
         * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
         * be paid as a portion of the reward the member will receive for joining the society.
         * 
         * The dispatch origin for this call must be _Signed_ and a member.
         * 
         * Parameters:
         * - `who`: The user who you would like to vouch for.
         * - `value`: The total reward to be paid between you and the candidate if they become
         * a member in the society.
         * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
         * the society. Tips larger than `value` will be saturated upon payout.
         * 
         * # <weight>
         * Key: B (len of bids), C (len of candidates), M (len of members)
         * - Storage Reads:
         * 	- One storage read to retrieve all members. O(M)
         * 	- One storage read to check member is not already vouching. O(1)
         * 	- One storage read to check for suspended candidate. O(1)
         * 	- One storage read to check for suspended member. O(1)
         * 	- One storage read to retrieve all current bids. O(B)
         * 	- One storage read to retrieve all current candidates. O(C)
         * - Storage Writes:
         * 	- One storage write to insert vouching status to the member. O(1)
         * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
         *    w/ read)
         * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
         * - Notable Computation:
         * 	- O(log M) search to check sender is a member.
         * 	- O(B + C + log M) search to check user is not already a part of society.
         * 	- O(log B) search to insert the new bid sorted.
         * - External Pallet Operations:
         * 	- One balance reserve operation. O(X)
         * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
         * - Events:
         * 	- One event for vouch.
         * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
         * 
         * Total Complexity: O(M + B + C + logM + logB + X)
         * # </weight>
         *
         * @param {unknown} _who [U8; 32]
         * @param {unknown} _value U128
         * @param {unknown} _tip U128
         * @instance
         */
        vouch: async (signer: ethers.Signer, _who: unknown, _value: unknown, _tip: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', false, {
                who: _who,
                value: _value,
                tip: _tip,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/vouch}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        vouchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVouchCall: (_who: unknown, _value: unknown, _tip: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vouch', {
                who: _who,
                value: _value,
                tip: _tip,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVouchCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVouchCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'vouch', argsBytes)
        },

        /**
         * As a vouching member, unvouch a bid. This only works while vouched user is
         * only a bidder (and not a candidate).
         * 
         * The dispatch origin for this call must be _Signed_ and a vouching member.
         * 
         * Parameters:
         * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
         * 
         * # <weight>
         * Key: B (len of bids)
         * - One storage read O(1) to check the signer is a vouching member.
         * - One storage mutate to retrieve and update the bids. O(B)
         * - One vouching storage removal. O(1)
         * - One event.
         * 
         * Total Complexity: O(B)
         * # </weight>
         *
         * @param {unknown} _pos U32
         * @instance
         */
        unvouch: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', false, {
                pos: _pos,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/unvouch}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unvouchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnvouchCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unvouch', {
                pos: _pos,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnvouchCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnvouchCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'unvouch', argsBytes)
        },

        /**
         * As a member, vote on a candidate.
         * 
         * The dispatch origin for this call must be _Signed_ and a member.
         * 
         * Parameters:
         * - `candidate`: The candidate that the member would like to bid on.
         * - `approve`: A boolean which says if the candidate should be approved (`true`) or
         *   rejected (`false`).
         * 
         * # <weight>
         * Key: C (len of candidates), M (len of members)
         * - One storage read O(M) and O(log M) search to check user is a member.
         * - One account lookup.
         * - One storage read O(C) and O(C) search to check that user is a candidate.
         * - One storage write to add vote to votes. O(1)
         * - One event.
         * 
         * Total Complexity: O(M + logM + C)
         * # </weight>
         *
         * @param {unknown} _candidate Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _approve Bool
         * @instance
         */
        vote: async (signer: ethers.Signer, _candidate: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', false, {
                candidate: _candidate,
                approve: _approve,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/vote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        voteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCall: (_candidate: unknown, _approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vote', {
                candidate: _candidate,
                approve: _approve,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'vote', argsBytes)
        },

        /**
         * As a member, vote on the defender.
         * 
         * The dispatch origin for this call must be _Signed_ and a member.
         * 
         * Parameters:
         * - `approve`: A boolean which says if the candidate should be
         * approved (`true`) or rejected (`false`).
         * 
         * # <weight>
         * - Key: M (len of members)
         * - One storage read O(M) and O(log M) search to check user is a member.
         * - One storage write to add vote to votes. O(1)
         * - One event.
         * 
         * Total Complexity: O(M + logM)
         * # </weight>
         *
         * @param {unknown} _approve Bool
         * @instance
         */
        defenderVote: async (signer: ethers.Signer, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', false, {
                approve: _approve,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/defenderVote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        defenderVoteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDefenderVoteCall: (_approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'defenderVote', {
                approve: _approve,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDefenderVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDefenderVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'defenderVote', argsBytes)
        },

        /**
         * Transfer the first matured payout for the sender and remove it from the records.
         * 
         * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
         * payouts.
         * 
         * Payment: The member will receive a payment equal to their first matured
         * payout to their free balance.
         * 
         * The dispatch origin for this call must be _Signed_ and a member with
         * payouts remaining.
         * 
         * # <weight>
         * Key: M (len of members), P (number of payouts for a particular member)
         * - One storage read O(M) and O(log M) search to check signer is a member.
         * - One storage read O(P) to get all payouts for a member.
         * - One storage read O(1) to get the current block number.
         * - One currency transfer call. O(X)
         * - One storage write or removal to update the member's payouts. O(P)
         * 
         * Total Complexity: O(M + logM + P + X)
         * # </weight>
         *
         * @instance
         */
        payout: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', false, {
           });
        },

        /**
         * Similar to {@link: crab/society/calls/payout}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        payoutH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildPayoutCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'payout', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildPayoutCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildPayoutCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'payout', argsBytes)
        },

        /**
         * Found the society.
         * 
         * This is done as a discrete action in order to allow for the
         * pallet to be included into a running chain and can only be done once.
         * 
         * The dispatch origin for this call must be from the _FounderSetOrigin_.
         * 
         * Parameters:
         * - `founder` - The first member and head of the newly founded society.
         * - `max_members` - The initial max number of members for the society.
         * - `rules` - The rules of this society concerning membership.
         * 
         * # <weight>
         * - Two storage mutates to set `Head` and `Founder`. O(1)
         * - One storage write to add the first member to society. O(1)
         * - One event.
         * 
         * Total Complexity: O(1)
         * # </weight>
         *
         * @param {unknown} _founder [U8; 32]
         * @param {unknown} _max_members U32
         * @param {unknown} _rules Vec<U8>
         * @instance
         */
        found: async (signer: ethers.Signer, _founder: unknown, _max_members: unknown, _rules: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', false, {
                founder: _founder,
                max_members: _max_members,
                rules: _rules,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/found}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        foundH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFoundCall: (_founder: unknown, _max_members: unknown, _rules: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'found', {
                founder: _founder,
                max_members: _max_members,
                rules: _rules,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFoundCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFoundCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'found', argsBytes)
        },

        /**
         * Annul the founding of the society.
         * 
         * The dispatch origin for this call must be Signed, and the signing account must be both
         * the `Founder` and the `Head`. This implies that it may only be done when there is one
         * member.
         * 
         * # <weight>
         * - Two storage reads O(1).
         * - Four storage removals O(1).
         * - One event.
         * 
         * Total Complexity: O(1)
         * # </weight>
         *
         * @instance
         */
        unfound: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', false, {
           });
        },

        /**
         * Similar to {@link: crab/society/calls/unfound}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unfoundH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnfoundCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'unfound', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnfoundCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnfoundCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'unfound', argsBytes)
        },

        /**
         * Allow suspension judgement origin to make judgement on a suspended member.
         * 
         * If a suspended member is forgiven, we simply add them back as a member, not affecting
         * any of the existing storage items for that member.
         * 
         * If a suspended member is rejected, remove all associated storage items, including
         * their payouts, and remove any vouched bids they currently have.
         * 
         * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
         * 
         * Parameters:
         * - `who` - The suspended member to be judged.
         * - `forgive` - A boolean representing whether the suspension judgement origin forgives
         *   (`true`) or rejects (`false`) a suspended member.
         * 
         * # <weight>
         * Key: B (len of bids), M (len of members)
         * - One storage read to check `who` is a suspended member. O(1)
         * - Up to one storage write O(M) with O(log M) binary search to add a member back to
         *   society.
         * - Up to 3 storage removals O(1) to clean up a removed member.
         * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
         * - Up to one additional event if unvouch takes place.
         * - One storage removal. O(1)
         * - One event for the judgement.
         * 
         * Total Complexity: O(M + logM + B)
         * # </weight>
         *
         * @param {unknown} _who [U8; 32]
         * @param {unknown} _forgive Bool
         * @instance
         */
        judgeSuspendedMember: async (signer: ethers.Signer, _who: unknown, _forgive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', false, {
                who: _who,
                forgive: _forgive,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/judgeSuspendedMember}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        judgeSuspendedMemberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildJudgeSuspendedMemberCall: (_who: unknown, _forgive: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedMember', {
                who: _who,
                forgive: _forgive,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildJudgeSuspendedMemberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildJudgeSuspendedMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'judgeSuspendedMember', argsBytes)
        },

        /**
         * Allow suspended judgement origin to make judgement on a suspended candidate.
         * 
         * If the judgement is `Approve`, we add them to society as a member with the appropriate
         * payment for joining society.
         * 
         * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
         * to the society treasury, or we ban the voucher from vouching again.
         * 
         * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
         * through the induction process again.
         * 
         * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
         * 
         * Parameters:
         * - `who` - The suspended candidate to be judged.
         * - `judgement` - `Approve`, `Reject`, or `Rebid`.
         * 
         * # <weight>
         * Key: B (len of bids), M (len of members), X (balance action)
         * - One storage read to check `who` is a suspended candidate.
         * - One storage removal of the suspended candidate.
         * - Approve Logic
         * 	- One storage read to get the available pot to pay users with. O(1)
         * 	- One storage write to update the available pot. O(1)
         * 	- One storage read to get the current block number. O(1)
         * 	- One storage read to get all members. O(M)
         * 	- Up to one unreserve currency action.
         * 	- Up to two new storage writes to payouts.
         * 	- Up to one storage write with O(log M) binary search to add a member to society.
         * - Reject Logic
         * 	- Up to one repatriate reserved currency action. O(X)
         * 	- Up to one storage write to ban the vouching member from vouching again.
         * - Rebid Logic
         * 	- Storage mutate with O(log B) binary search to place the user back into bids.
         * - Up to one additional event if unvouch takes place.
         * - One storage removal.
         * - One event for the judgement.
         * 
         * Total Complexity: O(M + logM + B + X)
         * # </weight>
         *
         * @param {unknown} _who [U8; 32]
         * @param {unknown} _judgement Enum<{0/Rebid: , 1/Reject: , 2/Approve: }>
         * @instance
         */
        judgeSuspendedCandidate: async (signer: ethers.Signer, _who: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', false, {
                who: _who,
                judgement: _judgement,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/judgeSuspendedCandidate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        judgeSuspendedCandidateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildJudgeSuspendedCandidateCall: (_who: unknown, _judgement: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedCandidate', {
                who: _who,
                judgement: _judgement,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildJudgeSuspendedCandidateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildJudgeSuspendedCandidateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'judgeSuspendedCandidate', argsBytes)
        },

        /**
         * Allows root origin to change the maximum number of members in society.
         * Max membership count must be greater than 1.
         * 
         * The dispatch origin for this call must be from _ROOT_.
         * 
         * Parameters:
         * - `max` - The maximum number of members for the society.
         * 
         * # <weight>
         * - One storage write to update the max. O(1)
         * - One event.
         * 
         * Total Complexity: O(1)
         * # </weight>
         *
         * @param {unknown} _max U32
         * @instance
         */
        setMaxMembers: async (signer: ethers.Signer, _max: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', false, {
                max: _max,
           });
        },

        /**
         * Similar to {@link: crab/society/calls/setMaxMembers}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMaxMembersH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMaxMembersCall: (_max: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'setMaxMembers', {
                max: _max,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMaxMembersCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMaxMembersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Society', 'setMaxMembers', argsBytes)
        },

    }
}

