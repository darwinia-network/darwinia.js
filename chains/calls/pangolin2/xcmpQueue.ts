import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getXcmpQueue = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U64
         * @param param1: {ref_time: U64}
	 */
        serviceOverweight: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, param0, param1);
        },

        /**
	 */
        suspendXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', false);
        },

        /**
	 */
        resumeXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', false);
        },

        /**
         * @param param0: U32
	 */
        updateSuspendThreshold: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, param0);
        },

        /**
         * @param param0: U32
	 */
        updateDropThreshold: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, param0);
        },

        /**
         * @param param0: U32
	 */
        updateResumeThreshold: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, param0);
        },

        /**
         * @param param0: {ref_time: U64}
	 */
        updateThresholdWeight: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, param0);
        },

        /**
         * @param param0: {ref_time: U64}
	 */
        updateWeightRestrictDecay: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, param0);
        },

        /**
         * @param param0: {ref_time: U64}
	 */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, param0);
        },


    }
}
