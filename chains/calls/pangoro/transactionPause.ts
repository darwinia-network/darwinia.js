import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTransactionPause = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<U8>
         * @param param1: Vec<U8>
	 */
        pauseTransaction: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', false, param0, param1);
        },

        /**
         * @param param0: Vec<U8>
         * @param param1: Vec<U8>
	 */
        unpauseTransaction: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', false, param0, param1);
        },


    }
}
