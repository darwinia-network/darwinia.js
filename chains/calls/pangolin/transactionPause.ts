import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTransactionPause = (dispatch: Dispatch) => {
    return {
        /**
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
	 */
        pauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', false, _pallet_name, _function_name);
        },

        /**
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
	 */
        unpauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', false, _pallet_name, _function_name);
        },


    }
}
