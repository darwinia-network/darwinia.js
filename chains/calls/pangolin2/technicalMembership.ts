import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTechnicalMembership = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
	 */
        addMember: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', false, param0);
        },

        /**
         * @param param0: [U8; 20]
	 */
        removeMember: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', false, param0);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 20]
	 */
        swapMember: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', false, param0, param1);
        },

        /**
         * @param param0: Vec<[U8; 20]>
	 */
        resetMembers: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', false, param0);
        },

        /**
         * @param param0: [U8; 20]
	 */
        changeKey: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', false, param0);
        },

        /**
         * @param param0: [U8; 20]
	 */
        setPrime: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', false, param0);
        },

        /**
	 */
        clearPrime: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', false);
        },


    }
}
