import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

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
         * @param _value: U128
         */
        bid: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', false, _value);
        },

        bidD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', true, data);
        },

        bidCall: (_value: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'bid', {
                value: _value,
            });
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
         * @param _pos: U32
         */
        unbid: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', false, _pos);
        },

        unbidD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', true, data);
        },

        unbidCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unbid', {
                pos: _pos,
            });
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
         * @param _who: [U8; 32]
         * @param _value: U128
         * @param _tip: U128
         */
        vouch: async (signer: ethers.Signer, _who: unknown, _value: unknown, _tip: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', false, _who, _value, _tip);
        },

        vouchD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', true, data);
        },

        vouchCall: (_who: unknown, _value: unknown, _tip: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vouch', {
                who: _who,
                value: _value,
                tip: _tip,
            });
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
         * @param _pos: U32
         */
        unvouch: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', false, _pos);
        },

        unvouchD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', true, data);
        },

        unvouchCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unvouch', {
                pos: _pos,
            });
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
         * @param _candidate: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _approve: Bool
         */
        vote: async (signer: ethers.Signer, _candidate: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', false, _candidate, _approve);
        },

        voteD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', true, data);
        },

        voteCall: (_candidate: unknown, _approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vote', {
                candidate: _candidate,
                approve: _approve,
            });
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
         * @param _approve: Bool
         */
        defenderVote: async (signer: ethers.Signer, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', false, _approve);
        },

        defenderVoteD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', true, data);
        },

        defenderVoteCall: (_approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'defenderVote', {
                approve: _approve,
            });
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
         */
        payout: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', false);
        },

        payoutD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', true);
        },

        payoutCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'payout', {
            });
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
         * @param _founder: [U8; 32]
         * @param _max_members: U32
         * @param _rules: Vec<U8>
         */
        found: async (signer: ethers.Signer, _founder: unknown, _max_members: unknown, _rules: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', false, _founder, _max_members, _rules);
        },

        foundD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', true, data);
        },

        foundCall: (_founder: unknown, _max_members: unknown, _rules: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'found', {
                founder: _founder,
                max_members: _max_members,
                rules: _rules,
            });
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
         */
        unfound: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', false);
        },

        unfoundD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', true);
        },

        unfoundCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'unfound', {
            });
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
         * @param _who: [U8; 32]
         * @param _forgive: Bool
         */
        judgeSuspendedMember: async (signer: ethers.Signer, _who: unknown, _forgive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', false, _who, _forgive);
        },

        judgeSuspendedMemberD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', true, data);
        },

        judgeSuspendedMemberCall: (_who: unknown, _forgive: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedMember', {
                who: _who,
                forgive: _forgive,
            });
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
         * @param _who: [U8; 32]
         * @param _judgement: Enum<{0/Rebid: , 1/Reject: , 2/Approve: }>
         */
        judgeSuspendedCandidate: async (signer: ethers.Signer, _who: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', false, _who, _judgement);
        },

        judgeSuspendedCandidateD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', true, data);
        },

        judgeSuspendedCandidateCall: (_who: unknown, _judgement: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedCandidate', {
                who: _who,
                judgement: _judgement,
            });
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
         * @param _max: U32
         */
        setMaxMembers: async (signer: ethers.Signer, _max: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', false, _max);
        },

        setMaxMembersD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', true, data);
        },

        setMaxMembersCall: (_max: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'setMaxMembers', {
                max: _max,
            });
        },

    }
}
