import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getXcmpQueue = (dispatch: Dispatch) => {
    return {
        /**
         * @param _index: U64
         * @param _weight_limit: {ref_time: U64}
	 */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, _index, _weight_limit);
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
         * @param _new: U32
	 */
        updateSuspendThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, _new);
        },

        /**
         * @param _new: U32
	 */
        updateDropThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, _new);
        },

        /**
         * @param _new: U32
	 */
        updateResumeThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, _new);
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateThresholdWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, _new);
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateWeightRestrictDecay: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, _new);
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, _new);
        },


    }
}
