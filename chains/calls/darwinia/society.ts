import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSociety = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
	 */
        bid: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', false, param0);
        },

        /**
         * @param param0: U32
	 */
        unbid: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U128
         * @param param2: U128
	 */
        vouch: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', false, param0, param1, param2);
        },

        /**
         * @param param0: U32
	 */
        unvouch: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Bool
	 */
        vote: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', false, param0, param1);
        },

        /**
         * @param param0: Bool
	 */
        defenderVote: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', false, param0);
        },

        /**
	 */
        payout: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', false);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
         * @param param2: Vec<U8>
	 */
        found: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', false, param0, param1, param2);
        },

        /**
	 */
        unfound: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', false);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Bool
	 */
        judgeSuspendedMember: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Rebid", "1/Reject", "2/Approve"}>
	 */
        judgeSuspendedCandidate: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', false, param0, param1);
        },

        /**
         * @param param0: U32
	 */
        setMaxMembers: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', false, param0);
        },


    }
}
