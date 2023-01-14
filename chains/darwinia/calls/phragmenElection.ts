import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
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
         * # <weight>
         * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
         * # </weight>
         *
         * @param _votes: Vec<[U8; 32]>
         * @param _value: Compact<U128>
         */
        vote: async (signer: ethers.Signer, _votes: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, _votes, _value);
        },

        voteH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', true, data);
        },

        buildVoteCall: (_votes: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'vote', {
                votes: _votes,
                value: _value,
            });
        },

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
         */
        removeVoter: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', false);
        },

        removeVoterH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', true);
        },

        buildRemoveVoterCall: () => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeVoter', {
            });
        },

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
         * # <weight>
         * The number of current candidates must be provided as witness data.
         * # </weight>
         *
         * @param _candidate_count: Compact<U32>
         */
        submitCandidacy: async (signer: ethers.Signer, _candidate_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', false, _candidate_count);
        },

        submitCandidacyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', true, data);
        },

        buildSubmitCandidacyCall: (_candidate_count: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'submitCandidacy', {
                candidate_count: _candidate_count,
            });
        },

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
         * 
         * # <weight>
         * The type of renouncing must be provided as witness data.
         * # </weight>
         *
         * @param _renouncing: Enum<{0/Member: , 1/RunnerUp: , 2/Candidate: Compact<U32>}>
         */
        renounceCandidacy: async (signer: ethers.Signer, _renouncing: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', false, _renouncing);
        },

        renounceCandidacyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', true, data);
        },

        buildRenounceCandidacyCall: (_renouncing: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'renounceCandidacy', {
                renouncing: _renouncing,
            });
        },

        buildRenounceCandidacyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'renounceCandidacy', argsBytes)
        },

        /**
         * Remove a particular member from the set. This is effective immediately and the bond of
         * the outgoing member is slashed.
         * 
         * If a runner-up is available, then the best runner-up will be removed and replaces the
         * outgoing member. Otherwise, a new phragmen election is started.
         * 
         * The dispatch origin of this call must be root.
         * 
         * Note that this does not affect the designated block number of the next election.
         * 
         * # <weight>
         * If we have a replacement, we use a small weight. Else, since this is a root call and
         * will go into phragmen, we assume full block for now.
         * # </weight>
         *
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _has_replacement: Bool
         */
        removeMember: async (signer: ethers.Signer, _who: unknown, _has_replacement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, _who, _has_replacement);
        },

        removeMemberH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', true, data);
        },

        buildRemoveMemberCall: (_who: unknown, _has_replacement: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeMember', {
                who: _who,
                has_replacement: _has_replacement,
            });
        },

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
         * # <weight>
         * The total number of voters and those that are defunct must be provided as witness data.
         * # </weight>
         *
         * @param _num_voters: U32
         * @param _num_defunct: U32
         */
        cleanDefunctVoters: async (signer: ethers.Signer, _num_voters: unknown, _num_defunct: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, _num_voters, _num_defunct);
        },

        cleanDefunctVotersH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', true, data);
        },

        buildCleanDefunctVotersCall: (_num_voters: unknown, _num_defunct: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', {
                num_voters: _num_voters,
                num_defunct: _num_defunct,
            });
        },

        buildCleanDefunctVotersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', argsBytes)
        },

    }
}
