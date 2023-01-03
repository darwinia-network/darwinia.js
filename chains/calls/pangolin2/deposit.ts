import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDeposit = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
         * @param param1: U8
	 */
        lock: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', false, param0, param1);
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', false);
        },

        /**
         * @param param0: U16
	 */
        claimWithPenalty: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, param0);
        },


    }
}
