import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getXcmpQueue = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _index: U64
         * @param _weight_limit: {ref_time: U64}
	 */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, _index, _weight_limit);
        },

        serviceOverweightD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', true, data);
        },

        serviceOverweightCall: (_index: unknown, _weight_limit: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'serviceOverweight', {
                index: _index,
                weight_limit: _weight_limit,
            });
        },

        /**
	 */
        suspendXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', false);
        },

        suspendXcmExecutionD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', true, data);
        },

        suspendXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'suspendXcmExecution', {
            });
        },

        /**
	 */
        resumeXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', false);
        },

        resumeXcmExecutionD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', true, data);
        },

        resumeXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'resumeXcmExecution', {
            });
        },

        /**
         * @param _new: U32
	 */
        updateSuspendThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, _new);
        },

        updateSuspendThresholdD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', true, data);
        },

        updateSuspendThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateSuspendThreshold', {
                new: _new,
            });
        },

        /**
         * @param _new: U32
	 */
        updateDropThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, _new);
        },

        updateDropThresholdD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', true, data);
        },

        updateDropThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateDropThreshold', {
                new: _new,
            });
        },

        /**
         * @param _new: U32
	 */
        updateResumeThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, _new);
        },

        updateResumeThresholdD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', true, data);
        },

        updateResumeThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateResumeThreshold', {
                new: _new,
            });
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateThresholdWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, _new);
        },

        updateThresholdWeightD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', true, data);
        },

        updateThresholdWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateThresholdWeight', {
                new: _new,
            });
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateWeightRestrictDecay: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, _new);
        },

        updateWeightRestrictDecayD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', true, data);
        },

        updateWeightRestrictDecayCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateWeightRestrictDecay', {
                new: _new,
            });
        },

        /**
         * @param _new: {ref_time: U64}
	 */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, _new);
        },

        updateXcmpMaxIndividualWeightD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', true, data);
        },

        updateXcmpMaxIndividualWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', {
                new: _new,
            });
        },

    }
}
