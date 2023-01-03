import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPhragmenElection = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 32]>
         * @param param1: Compact<U128>
	 */
        vote: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'vote', false, param0, param1);
        },

        /**
	 */
        removeVoter: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeVoter', false);
        },

        /**
         * @param param0: Compact<U32>
	 */
        submitCandidacy: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'submitCandidacy', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Member", "1/RunnerUp", "2/Candidate"}>
	 */
        renounceCandidacy: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'renounceCandidacy', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Bool
	 */
        removeMember: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'removeMember', false, param0, param1);
        },

        /**
         * @param param0: U32
         * @param param1: U32
	 */
        cleanDefunctVoters: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PhragmenElection', 'cleanDefunctVoters', false, param0, param1);
        },


    }
}
