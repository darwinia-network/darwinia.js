/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangolin2/xcmpQueue/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
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
         * @param {unknown} _index U64
         * @param {unknown} _weight_limit U64
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, {
                index: _index,
                weight_limit: _weight_limit,
	    });
        },

        /**
	 * Similar to {@link: serviceOverweight}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        serviceOverweightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildServiceOverweightCall: (_index: unknown, _weight_limit: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'serviceOverweight', {
                index: _index,
                weight_limit: _weight_limit,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildServiceOverweightCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildServiceOverweightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'serviceOverweight', argsBytes)
        },

        /**
         * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
         * 
         * - `origin`: Must pass `ControllerOrigin`.
         *
         */
        suspendXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', false, {
	    });
        },

        /**
	 * Similar to {@link: suspendXcmExecution}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        suspendXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSuspendXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'suspendXcmExecution', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSuspendXcmExecutionCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSuspendXcmExecutionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'suspendXcmExecution', argsBytes)
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
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', false, {
	    });
        },

        /**
	 * Similar to {@link: resumeXcmExecution}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        resumeXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildResumeXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'resumeXcmExecution', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildResumeXcmExecutionCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildResumeXcmExecutionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'resumeXcmExecution', argsBytes)
        },

        /**
         * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
         * suspend their sending.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.suspend_value`
         *
         * @param {unknown} _new U32
         */
        updateSuspendThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateSuspendThreshold}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateSuspendThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateSuspendThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateSuspendThreshold', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateSuspendThresholdCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateSuspendThresholdCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateSuspendThreshold', argsBytes)
        },

        /**
         * Overwrites the number of pages of messages which must be in the queue after which we drop any further
         * messages from the channel.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.drop_threshold`
         *
         * @param {unknown} _new U32
         */
        updateDropThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateDropThreshold}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateDropThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateDropThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateDropThreshold', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateDropThresholdCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateDropThresholdCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateDropThreshold', argsBytes)
        },

        /**
         * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
         * message sending may recommence after it has been suspended.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.resume_threshold`
         *
         * @param {unknown} _new U32
         */
        updateResumeThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateResumeThreshold}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateResumeThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateResumeThresholdCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateResumeThreshold', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateResumeThresholdCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateResumeThresholdCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateResumeThreshold', argsBytes)
        },

        /**
         * Overwrites the amount of remaining weight under which we stop processing messages.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.threshold_weight`
         *
         * @param {unknown} _new U64
         */
        updateThresholdWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateThresholdWeight}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateThresholdWeightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateThresholdWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateThresholdWeight', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateThresholdWeightCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateThresholdWeightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateThresholdWeight', argsBytes)
        },

        /**
         * Overwrites the speed to which the available weight approaches the maximum weight.
         * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
         *
         * @param {unknown} _new U64
         */
        updateWeightRestrictDecay: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateWeightRestrictDecay}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateWeightRestrictDecayH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateWeightRestrictDecayCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateWeightRestrictDecay', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateWeightRestrictDecayCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateWeightRestrictDecayCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateWeightRestrictDecay', argsBytes)
        },

        /**
         * Overwrite the maximum amount of weight any individual message may consume.
         * Messages above this weight go into the overweight queue and may only be serviced explicitly.
         * 
         * - `origin`: Must pass `Root`.
         * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
         *
         * @param {unknown} _new U64
         */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: updateXcmpMaxIndividualWeight}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateXcmpMaxIndividualWeightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateXcmpMaxIndividualWeightCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateXcmpMaxIndividualWeightCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateXcmpMaxIndividualWeightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', argsBytes)
        },

    }
}
