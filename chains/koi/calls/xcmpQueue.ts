/**
 * This is the doc comment for pallet `XcmpQueue`'s calls. 
 * 
 * `XcmpQueue`'s storages: {@link: module:koi/xcmpQueue/storages}
 *
 * @module koi/xcmpQueue/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getXcmpQueue = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::service_overweight`].
         *
         * @param {unknown} _index U64
         * @param {unknown} _weight_limit {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'serviceOverweight', false, {
                index: _index,
                weight_limit: _weight_limit,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/serviceOverweight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        serviceOverweightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::suspend_xcm_execution`].
         *
         * @instance
         */
        suspendXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'suspendXcmExecution', false, {
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/suspendXcmExecution}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        suspendXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::resume_xcm_execution`].
         *
         * @instance
         */
        resumeXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'resumeXcmExecution', false, {
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/resumeXcmExecution}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        resumeXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_suspend_threshold`].
         *
         * @param {unknown} _new U32
         * @instance
         */
        updateSuspendThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateSuspendThreshold', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateSuspendThreshold}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateSuspendThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_drop_threshold`].
         *
         * @param {unknown} _new U32
         * @instance
         */
        updateDropThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateDropThreshold', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateDropThreshold}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateDropThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_resume_threshold`].
         *
         * @param {unknown} _new U32
         * @instance
         */
        updateResumeThreshold: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateResumeThreshold', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateResumeThreshold}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateResumeThresholdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_threshold_weight`].
         *
         * @param {unknown} _new {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        updateThresholdWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateThresholdWeight', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateThresholdWeight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateThresholdWeightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_weight_restrict_decay`].
         *
         * @param {unknown} _new {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        updateWeightRestrictDecay: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateWeightRestrictDecay', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateWeightRestrictDecay}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateWeightRestrictDecayH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::update_xcmp_max_individual_weight`].
         *
         * @param {unknown} _new {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        updateXcmpMaxIndividualWeight: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'XcmpQueue', 'updateXcmpMaxIndividualWeight', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/xcmpQueue/calls/updateXcmpMaxIndividualWeight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateXcmpMaxIndividualWeightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

