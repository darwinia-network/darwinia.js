import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPhragmenElection = (dispatch: Dispatch) => {
    return {
        /**
         * @param _votes: Vec<[U8; 32]>
         * @param _value: Compact<U128>
	 */
        vote: async (signer: ethers.Signer, _votes: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, _votes, _value);
        },

        /**
	 */
        removeVoter: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', false);
        },

        /**
         * @param _candidate_count: Compact<U32>
	 */
        submitCandidacy: async (signer: ethers.Signer, _candidate_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', false, _candidate_count);
        },

        /**
         * @param _renouncing: Enum<{"0/Member", "1/RunnerUp", "2/Candidate"}>
	 */
        renounceCandidacy: async (signer: ethers.Signer, _renouncing: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', false, _renouncing);
        },

        /**
         * @param _who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _has_replacement: Bool
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown, _has_replacement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, _who, _has_replacement);
        },

        /**
         * @param _num_voters: U32
         * @param _num_defunct: U32
	 */
        cleanDefunctVoters: async (signer: ethers.Signer, _num_voters: unknown, _num_defunct: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, _num_voters, _num_defunct);
        },


    }
}
