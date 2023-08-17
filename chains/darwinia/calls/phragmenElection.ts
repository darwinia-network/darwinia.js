/**
 * This is the doc comment for pallet `PhragmenElection`'s calls. 
 * 
 * `PhragmenElection`'s storages: {@link: module:darwinia/phragmenElection/storages}
 *
 * @module darwinia/phragmenElection/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPhragmenElection = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Vote for a set of candidates for the upcoming round of election. This can be called to
         * set the initial votes, or update already existing votes.
         * 
         * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
         * reserved. The deposit is based on the number of votes and can be updated over time.
         * 
         * The `votes` should:
         *   - not be empty.
         *   - be less than the number of possible candidates. Note that all current members and
         *     runners-up are also automatically candidates for the next round.
         * 
         * If `value` is more than `who`'s free balance, then the maximum of the two is used.
         * 
         * The dispatch origin of this call must be signed.
         * 
         * ### Warning
         * 
         * It is the responsibility of the caller to **NOT** place all of their balance into the
         * lock and keep some for further operations.
         *
         * @param {unknown} _votes Vec<[U8; 20]>
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        vote: async (signer: ethers.Signer, _votes: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, {
                votes: _votes,
                value: _value,
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/vote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        voteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCall: (_votes: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'vote', {
                votes: _votes,
                value: _value,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'vote', argsBytes)
        },

        /**
         * Remove `origin` as a voter.
         * 
         * This removes the lock and returns the deposit.
         * 
         * The dispatch origin of this call must be signed and be a voter.
         *
         * @instance
         */
        removeVoter: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/removeVoter}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeVoterH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoterCall: () => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeVoter', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveVoterCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'removeVoter', argsBytes)
        },

        /**
         * Submit oneself for candidacy. A fixed amount of deposit is recorded.
         * 
         * All candidates are wiped at the end of the term. They either become a member/runner-up,
         * or leave the system while their deposit is slashed.
         * 
         * The dispatch origin of this call must be signed.
         * 
         * ### Warning
         * 
         * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
         * to get their deposit back. Losing the spot in an election will always lead to a slash.
         * 
         * The number of current candidates must be provided as witness data.
         * ## Complexity
         * O(C + log(C)) where C is candidate_count.
         *
         * @param {unknown} _candidate_count Compact<U32>
         * @instance
         */
        submitCandidacy: async (signer: ethers.Signer, _candidate_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', false, {
                candidate_count: _candidate_count,
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/submitCandidacy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitCandidacyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitCandidacyCall: (_candidate_count: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'submitCandidacy', {
                candidate_count: _candidate_count,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitCandidacyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitCandidacyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'submitCandidacy', argsBytes)
        },

        /**
         * Renounce one's intention to be a candidate for the next election round. 3 potential
         * outcomes exist:
         * 
         * - `origin` is a candidate and not elected in any set. In this case, the deposit is
         *   unreserved, returned and origin is removed as a candidate.
         * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
         *   origin is removed as a runner-up.
         * - `origin` is a current member. In this case, the deposit is unreserved and origin is
         *   removed as a member, consequently not being a candidate for the next round anymore.
         *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
         *   are immediately used. If the prime is renouncing, then no prime will exist until the
         *   next round.
         * 
         * The dispatch origin of this call must be signed, and have one of the above roles.
         * The type of renouncing must be provided as witness data.
         * 
         * ## Complexity
         *   - Renouncing::Candidate(count): O(count + log(count))
         *   - Renouncing::Member: O(1)
         *   - Renouncing::RunnerUp: O(1)
         *
         * @param {unknown} _renouncing Enum<{0/Member: , 1/RunnerUp: , 2/Candidate: Compact<U32>}>
         * @instance
         */
        renounceCandidacy: async (signer: ethers.Signer, _renouncing: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', false, {
                renouncing: _renouncing,
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/renounceCandidacy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        renounceCandidacyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRenounceCandidacyCall: (_renouncing: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'renounceCandidacy', {
                renouncing: _renouncing,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRenounceCandidacyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRenounceCandidacyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'renounceCandidacy', argsBytes)
        },

        /**
         * Remove a particular member from the set. This is effective immediately and the bond of
         * the outgoing member is slashed.
         * 
         * If a runner-up is available, then the best runner-up will be removed and replaces the
         * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
         * started, else, nothing happens.
         * 
         * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
         * it is returned.
         * 
         * The dispatch origin of this call must be root.
         * 
         * Note that this does not affect the designated block number of the next election.
         * 
         * ## Complexity
         * - Check details of remove_and_replace_member() and do_phragmen().
         *
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _slash_bond Bool
         * @param {unknown} _rerun_election Bool
         * @instance
         */
        removeMember: async (signer: ethers.Signer, _who: unknown, _slash_bond: unknown, _rerun_election: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, {
                who: _who,
                slash_bond: _slash_bond,
                rerun_election: _rerun_election,
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/removeMember}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeMemberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveMemberCall: (_who: unknown, _slash_bond: unknown, _rerun_election: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeMember', {
                who: _who,
                slash_bond: _slash_bond,
                rerun_election: _rerun_election,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveMemberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveMemberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'removeMember', argsBytes)
        },

        /**
         * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
         * deposit of the removed voters are returned.
         * 
         * This is an root function to be used only for cleaning the state.
         * 
         * The dispatch origin of this call must be root.
         * 
         * ## Complexity
         * - Check is_defunct_voter() details.
         *
         * @param {unknown} _num_voters U32
         * @param {unknown} _num_defunct U32
         * @instance
         */
        cleanDefunctVoters: async (signer: ethers.Signer, _num_voters: unknown, _num_defunct: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, {
                num_voters: _num_voters,
                num_defunct: _num_defunct,
           });
        },

        /**
         * Similar to {@link: darwinia/phragmenElection/calls/cleanDefunctVoters}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cleanDefunctVotersH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCleanDefunctVotersCall: (_num_voters: unknown, _num_defunct: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', {
                num_voters: _num_voters,
                num_defunct: _num_defunct,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCleanDefunctVotersCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCleanDefunctVotersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', argsBytes)
        },

    }
}

