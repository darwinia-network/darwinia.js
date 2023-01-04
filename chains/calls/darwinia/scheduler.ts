import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getScheduler = (dispatch: Dispatch) => {
    return {
        /**
         * @param _when: U32
         * @param _maybe_periodic: Enum<{"0/None", "1/Some"}>
         * @param _priority: U8
         * @param _call: Enum<{"0/Value", "1/Hash"}>
	 */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, _when, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _when: U32
         * @param _index: U32
	 */
        cancel: async (signer: ethers.Signer, _when: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, _when, _index);
        },

        /**
         * @param _id: Vec<U8>
         * @param _when: U32
         * @param _maybe_periodic: Enum<{"0/None", "1/Some"}>
         * @param _priority: U8
         * @param _call: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, _id, _when, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _id: Vec<U8>
	 */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, _id);
        },

        /**
         * @param _after: U32
         * @param _maybe_periodic: Enum<{"0/None", "1/Some"}>
         * @param _priority: U8
         * @param _call: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _id: Vec<U8>
         * @param _after: U32
         * @param _maybe_periodic: Enum<{"0/None", "1/Some"}>
         * @param _priority: U8
         * @param _call: Enum<{"0/Value", "1/Hash"}>
	 */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },


    }
}
