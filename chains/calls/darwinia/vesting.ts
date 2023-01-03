import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getVesting = (dispatch: Dispatch) => {
    return {
        /**
	 */
        vest: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', false);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        vestOther: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: {locked: U128, per_block: U128, starting_block: U32}
	 */
        vestedTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param2: {locked: U128, per_block: U128, starting_block: U32}
	 */
        forceVestedTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, param0, param1, param2);
        },

        /**
         * @param param0: U32
         * @param param1: U32
	 */
        mergeSchedules: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, param0, param1);
        },


    }
}
