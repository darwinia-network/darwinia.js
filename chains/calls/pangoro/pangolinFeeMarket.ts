import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPangolinFeeMarket = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
         * @param param1: Enum<{"0/None", "1/Some"}>
	 */
        enrollAndLockCollateral: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'enrollAndLockCollateral', false, param0, param1);
        },

        /**
         * @param param0: U128
	 */
        updateLockedCollateral: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateLockedCollateral', false, param0);
        },

        /**
         * @param param0: U128
	 */
        updateRelayFee: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateRelayFee', false, param0);
        },

        /**
	 */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'cancelEnrollment', false);
        },

        /**
         * @param param0: U128
	 */
        setSlashProtect: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setSlashProtect', false, param0);
        },

        /**
         * @param param0: U32
	 */
        setAssignedRelayersNumber: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setAssignedRelayersNumber', false, param0);
        },


    }
}
