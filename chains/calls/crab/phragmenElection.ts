import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getPhragmenElection = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _votes: Vec<[U8; 32]>
         * @param _value: Compact<U128>
	 */
        vote: async (signer: ethers.Signer, _votes: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, _votes, _value);
        },

        voteD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', true, data);
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

        removeVoterD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', true, data);
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

        submitCandidacyD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', true, data);
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

        renounceCandidacyD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', true, data);
        },

        renounceCandidacyCall: (_renouncing: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'renounceCandidacy', {
                renouncing: _renouncing,
            });
        },

        /**
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _has_replacement: Bool
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown, _has_replacement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, _who, _has_replacement);
        },

        removeMemberD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', true, data);
        },

        removeMemberCall: (_who: unknown, _has_replacement: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'removeMember', {
                who: _who,
                has_replacement: _has_replacement,
            });
        },

        /**
         * @param _num_voters: U32
         * @param _num_defunct: U32
	 */
        cleanDefunctVoters: async (signer: ethers.Signer, _num_voters: unknown, _num_defunct: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, _num_voters, _num_defunct);
        },

        cleanDefunctVotersD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', true, data);
        },

        cleanDefunctVotersCall: (_num_voters: unknown, _num_defunct: unknown) => {
            return buildRuntimeCall(metadata, 'PhragmenElection', 'cleanDefunctVoters', {
                num_voters: _num_voters,
                num_defunct: _num_defunct,
            });
        },

    }
}
