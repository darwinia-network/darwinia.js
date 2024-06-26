/**
 * This is the doc comment for pallet `EthereumXcm`'s calls. 
 * 
 * `EthereumXcm`'s storages: {@link: module:darwinia/ethereumXcm/storages}
 *
 * @module darwinia/ethereumXcm/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEthereumXcm = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See `Pallet::transact`.
         *
         * @param {unknown} _xcm_transaction Enum<{0/V1: {gas_limit: [U64; 4], fee_payment: Enum<{0/Manual: {gas_price: Enum<{0/None, 1/Some}>, max_fee_per_gas: Enum<{0/None, 1/Some}>}, 1/Auto: }>, action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Enum<{0/None: , 1/Some: Vec<([U8; 20], Vec<[U8; 32]>)>}>}, 1/V2: {gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Enum<{0/None: , 1/Some: Vec<([U8; 20], Vec<[U8; 32]>)>}>}}>
         * @instance
         */
        transact: async (signer: ethers.Signer, _xcm_transaction: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'transact', false, {
                xcm_transaction: _xcm_transaction,
           });
        },

        /**
         * Similar to {@link: darwinia/ethereumXcm/calls/transact}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transactH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'transact', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransactCall: (_xcm_transaction: unknown) => {
            return buildRuntimeCall(metadata, 'EthereumXcm', 'transact', {
                xcm_transaction: _xcm_transaction,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransactCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransactCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EthereumXcm', 'transact', argsBytes)
        },

        /**
         * See `Pallet::transact_through_proxy`.
         *
         * @param {unknown} _transact_as [U8; 20]
         * @param {unknown} _xcm_transaction Enum<{0/V1: {gas_limit: [U64; 4], fee_payment: Enum<{0/Manual: {gas_price: Enum<{0/None, 1/Some}>, max_fee_per_gas: Enum<{0/None, 1/Some}>}, 1/Auto: }>, action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Enum<{0/None: , 1/Some: Vec<([U8; 20], Vec<[U8; 32]>)>}>}, 1/V2: {gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Enum<{0/None: , 1/Some: Vec<([U8; 20], Vec<[U8; 32]>)>}>}}>
         * @instance
         */
        transactThroughProxy: async (signer: ethers.Signer, _transact_as: unknown, _xcm_transaction: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'transactThroughProxy', false, {
                transact_as: _transact_as,
                xcm_transaction: _xcm_transaction,
           });
        },

        /**
         * Similar to {@link: darwinia/ethereumXcm/calls/transactThroughProxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transactThroughProxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'transactThroughProxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransactThroughProxyCall: (_transact_as: unknown, _xcm_transaction: unknown) => {
            return buildRuntimeCall(metadata, 'EthereumXcm', 'transactThroughProxy', {
                transact_as: _transact_as,
                xcm_transaction: _xcm_transaction,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransactThroughProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransactThroughProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EthereumXcm', 'transactThroughProxy', argsBytes)
        },

        /**
         * See `Pallet::suspend_ethereum_xcm_execution`.
         *
         * @instance
         */
        suspendEthereumXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'suspendEthereumXcmExecution', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/ethereumXcm/calls/suspendEthereumXcmExecution}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        suspendEthereumXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'suspendEthereumXcmExecution', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSuspendEthereumXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'EthereumXcm', 'suspendEthereumXcmExecution', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSuspendEthereumXcmExecutionCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSuspendEthereumXcmExecutionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EthereumXcm', 'suspendEthereumXcmExecution', argsBytes)
        },

        /**
         * See `Pallet::resume_ethereum_xcm_execution`.
         *
         * @instance
         */
        resumeEthereumXcmExecution: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'resumeEthereumXcmExecution', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/ethereumXcm/calls/resumeEthereumXcmExecution}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        resumeEthereumXcmExecutionH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthereumXcm', 'resumeEthereumXcmExecution', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildResumeEthereumXcmExecutionCall: () => {
            return buildRuntimeCall(metadata, 'EthereumXcm', 'resumeEthereumXcmExecution', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildResumeEthereumXcmExecutionCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildResumeEthereumXcmExecutionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EthereumXcm', 'resumeEthereumXcmExecution', argsBytes)
        },

    }
}

