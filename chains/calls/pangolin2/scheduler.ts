import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getScheduler = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U32
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: U8
         * @param param3: Enum<{"0/Value", "1/Hash"}>
	 */
        schedule: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: U32
         * @param param1: U32
	 */
        cancel: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, param0, param1);
        },

        /**
         * @param param0: Vec<U8>
         * @param param1: U32
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: U8
         * @param param4: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleNamed: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: Vec<U8>
	 */
        cancelNamed: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, param0);
        },

        /**
         * @param param0: U32
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: U8
         * @param param3: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleAfter: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Vec<U8>
         * @param param1: U32
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: U8
         * @param param4: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleNamedAfter: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, param0, param1, param2, param3, param4);
        },


    }
}
