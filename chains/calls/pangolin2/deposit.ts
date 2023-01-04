import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDeposit = (dispatch: Dispatch) => {
    return {
        /**
         * @param _amount: U128
         * @param _months: U8
	 */
        lock: async (signer: ethers.Signer, _amount: unknown, _months: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', false, _amount, _months);
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', false);
        },

        /**
         * @param _id: U16
	 */
        claimWithPenalty: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, _id);
        },


    }
}
