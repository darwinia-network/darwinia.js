import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getXcmpQueue = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Services a single overweight XCM.
         * 
         * - `origin`: Must pass `ExecuteOverweightOrigin`.
         * - `index`: The index of the overweight XCM to service
         * - `weight_limit`: The amount of weight that XCM execution may take.
         * 
         * Errors:
         * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
         * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
         * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
         * 
         * Events:
         * - `OverweightServiced`: On success.
         *
         * @param _index: U64
         * @param _weight_limit: {ref_time: U64}
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, _index, _weight_limit);
        },

        serviceOverweightD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', true, data);
        },

        serviceOverweightCall: (_index: unknown, _weight_limit: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'serviceOverweight', {
                index: _index,
                weight_limit: _weight_limit,
            });
        },

        /**
         * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
         * 
         * - `origin`: Must pass `ControllerOrigin`.
         *
         */
        suspendXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', false);
        },

        suspendXcmExecutionD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', true);
        },

        suspendXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'suspendXcmExecution', {
            });
        },

        /**
         * Resumes all XCM executions for the XCMP queue.
         * 
         * Note that this function doesn't change the status of the in/out bound channels.
         * 
         * - `origin`: Must pass `ControllerOrigin`.
         *
         */
        resumeXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', false);
        },

        resumeXcmExecutionD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', true);
        },

        resumeXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'resumeXcmExecution', {
            });
        },

        /**
         * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
         * suspend their sending.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.suspend_value`
         *
         * @param _new: U32
         */
        updateSuspendThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, _new);
        },

        updateSuspendThresholdD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', true, data);
        },

        updateSuspendThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateSuspendThreshold', {
                new: _new,
            });
        },

        /**
         * Overwrites the number of pages of messages which must be in the queue after which we drop any further
         * messages from the channel.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.drop_threshold`
         *
         * @param _new: U32
         */
        updateDropThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, _new);
        },

        updateDropThresholdD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', true, data);
        },

        updateDropThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateDropThreshold', {
                new: _new,
            });
        },

        /**
         * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
         * message sending may recommence after it has been suspended.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.resume_threshold`
         *
         * @param _new: U32
         */
        updateResumeThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, _new);
        },

        updateResumeThresholdD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', true, data);
        },

        updateResumeThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateResumeThreshold', {
                new: _new,
            });
        },

        /**
         * Overwrites the amount of remaining weight under which we stop processing messages.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.threshold_weight`
         *
         * @param _new: {ref_time: U64}
         */
        updateThresholdWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, _new);
        },

        updateThresholdWeightD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', true, data);
        },

        updateThresholdWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateThresholdWeight', {
                new: _new,
            });
        },

        /**
         * Overwrites the speed to which the available weight approaches the maximum weight.
         * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
         *
         * @param _new: {ref_time: U64}
         */
        updateWeightRestrictDecay: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, _new);
        },

        updateWeightRestrictDecayD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', true, data);
        },

        updateWeightRestrictDecayCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateWeightRestrictDecay', {
                new: _new,
            });
        },

        /**
         * Overwrite the maximum amount of weight any individual message may consume.
         * Messages above this weight go into the overweight queue and may only be serviced explicitly.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
         *
         * @param _new: {ref_time: U64}
         */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, _new);
        },

        updateXcmpMaxIndividualWeightD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', true, data);
        },

        updateXcmpMaxIndividualWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', {
                new: _new,
            });
        },

    }
}
