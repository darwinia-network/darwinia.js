import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getFeeMarket = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
         * @param param1: Enum<{"0/None", "1/Some"}>
	 */
        enrollAndLockCollateral: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'enrollAndLockCollateral', false, param0, param1);
        },

        /**
         * @param param0: U128
	 */
        updateLockedCollateral: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateLockedCollateral', false, param0);
        },

        /**
         * @param param0: U128
	 */
        updateRelayFee: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateRelayFee', false, param0);
        },

        /**
	 */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'cancelEnrollment', false);
        },

        /**
         * @param param0: U128
	 */
        setSlashProtect: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setSlashProtect', false, param0);
        },

        /**
         * @param param0: U32
	 */
        setAssignedRelayersNumber: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setAssignedRelayersNumber', false, param0);
        },


    }
}
