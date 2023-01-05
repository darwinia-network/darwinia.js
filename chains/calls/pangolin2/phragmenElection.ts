import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPhragmenElection = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _votes: Vec<[U8; 20]>
         * @param _value: Compact<U128>
	 */
        vote: async (signer: ethers.Signer, _votes: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, _votes, _value);
        },

        voteCall: (_votes: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'vote', {
                votes: _votes,
                value: _value,
            });
        },

        /**
	 */
        removeVoter: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', false);
        },

        removeVoterCall: () => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeVoter', {
            });
        },

        /**
         * @param _candidate_count: Compact<U32>
	 */
        submitCandidacy: async (signer: ethers.Signer, _candidate_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', false, _candidate_count);
        },

        submitCandidacyCall: (_candidate_count: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'submitCandidacy', {
                candidate_count: _candidate_count,
            });
        },

        /**
         * @param _renouncing: Enum<{0/Member: , 1/RunnerUp: , 2/Candidate: Compact<U32>}>
	 */
        renounceCandidacy: async (signer: ethers.Signer, _renouncing: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', false, _renouncing);
        },

        renounceCandidacyCall: (_renouncing: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'renounceCandidacy', {
                renouncing: _renouncing,
            });
        },

        /**
         * @param _who: [U8; 20]
         * @param _slash_bond: Bool
         * @param _rerun_election: Bool
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown, _slash_bond: unknown, _rerun_election: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, _who, _slash_bond, _rerun_election);
        },

        removeMemberCall: (_who: unknown, _slash_bond: unknown, _rerun_election: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeMember', {
                who: _who,
                slash_bond: _slash_bond,
                rerun_election: _rerun_election,
            });
        },

        /**
         * @param _num_voters: U32
         * @param _num_defunct: U32
	 */
        cleanDefunctVoters: async (signer: ethers.Signer, _num_voters: unknown, _num_defunct: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, _num_voters, _num_defunct);
        },

        cleanDefunctVotersCall: (_num_voters: unknown, _num_defunct: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', {
                num_voters: _num_voters,
                num_defunct: _num_defunct,
            });
        },

    }
}
