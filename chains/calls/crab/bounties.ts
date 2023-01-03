import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBounties = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Compact<U128>
         * @param param1: Vec<U8>
	 */
        proposeBounty: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
	 */
        approveBounty: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', false, param0);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param2: Compact<U128>
	 */
        proposeCurator: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U32>
	 */
        unassignCurator: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        acceptCurator: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', false, param0);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        awardBounty: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
	 */
        claimBounty: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        closeBounty: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', false, param0);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Vec<U8>
	 */
        extendBountyExpiry: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', false, param0, param1);
        },


    }
}
