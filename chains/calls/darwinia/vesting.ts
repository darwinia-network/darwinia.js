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
         * @param _target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        vestOther: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, _target);
        },

        /**
         * @param _target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
	 */
        vestedTransfer: async (signer: ethers.Signer, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, _target, _schedule);
        },

        /**
         * @param _source: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
	 */
        forceVestedTransfer: async (signer: ethers.Signer, _source: unknown, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, _source, _target, _schedule);
        },

        /**
         * @param _schedule1_index: U32
         * @param _schedule2_index: U32
	 */
        mergeSchedules: async (signer: ethers.Signer, _schedule1_index: unknown, _schedule2_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, _schedule1_index, _schedule2_index);
        },


    }
}
