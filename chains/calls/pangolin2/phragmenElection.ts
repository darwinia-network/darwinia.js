import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPhragmenElection = (dispatch: Dispatch) => {
    return {
        /**
         * @param _votes: Vec<[U8; 20]>
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
         * @param _who: [U8; 20]
         * @param _slash_bond: Bool
         * @param _rerun_election: Bool
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown, _slash_bond: unknown, _rerun_election: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, _who, _slash_bond, _rerun_election);
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
