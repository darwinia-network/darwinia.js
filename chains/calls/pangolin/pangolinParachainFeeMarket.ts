import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPangolinParachainFeeMarket = (dispatch: Dispatch) => {
    return {
        /**
         * @param _lock_collateral: U128
         * @param _relay_fee: Enum<{"0/None", "1/Some"}>
	 */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'enrollAndLockCollateral', false, _lock_collateral, _relay_fee);
        },

        /**
         * @param _new_collateral: U128
	 */
        updateLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'updateLockedCollateral', false, _new_collateral);
        },

        /**
         * @param _new_fee: U128
	 */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'updateRelayFee', false, _new_fee);
        },

        /**
	 */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'cancelEnrollment', false);
        },

        /**
         * @param _slash_protect: U128
	 */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setSlashProtect', false, _slash_protect);
        },

        /**
         * @param _number: U32
	 */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setAssignedRelayersNumber', false, _number);
        },


    }
}
