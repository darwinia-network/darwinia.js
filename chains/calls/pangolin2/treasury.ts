import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTreasury = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Compact<U128>
         * @param param1: [U8; 20]
	 */
        proposeSpend: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
	 */
        rejectProposal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        approveProposal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', false, param0);
        },

        /**
         * @param param0: Compact<U128>
         * @param param1: [U8; 20]
	 */
        spend: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
	 */
        removeApproval: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', false, param0);
        },


    }
}
