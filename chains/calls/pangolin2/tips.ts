import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTips = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<U8>
         * @param param1: [U8; 20]
	 */
        reportAwesome: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
	 */
        retractTip: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', false, param0);
        },

        /**
         * @param param0: Vec<U8>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        tipNew: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U128>
	 */
        tip: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
	 */
        closeTip: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        slashTip: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', false, param0);
        },


    }
}
