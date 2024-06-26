/**
 * This is the doc comment for pallet `EVM`'s calls. 
 * 
 * `EVM`'s storages: {@link: module:crab/evm/storages}
 *
 * @module crab/evm/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEVM = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::withdraw`].
         *
         * @param {unknown} _address [U8; 20]
         * @param {unknown} _value U128
         * @instance
         */
        withdraw: async (signer: ethers.Signer, _address: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'withdraw', false, {
                address: _address,
                value: _value,
           });
        },

        /**
         * Similar to {@link: crab/evm/calls/withdraw}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        withdrawH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'withdraw', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildWithdrawCall: (_address: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'EVM', 'withdraw', {
                address: _address,
                value: _value,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildWithdrawCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildWithdrawCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'withdraw', argsBytes)
        },

        /**
         * See [`Pallet::call`].
         *
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _input Vec<U8>
         * @param {unknown} _value [U64; 4]
         * @param {unknown} _gas_limit U64
         * @param {unknown} _max_fee_per_gas [U64; 4]
         * @param {unknown} _max_priority_fee_per_gas Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _nonce Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _access_list Vec<([U8; 20], Vec<[U8; 32]>)>
         * @instance
         */
        call: async (signer: ethers.Signer, _source: unknown, _target: unknown, _input: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'call', false, {
                source: _source,
                target: _target,
                input: _input,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
           });
        },

        /**
         * Similar to {@link: crab/evm/calls/call}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        callH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'call', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCallCall: (_source: unknown, _target: unknown, _input: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'EVM', 'call', {
                source: _source,
                target: _target,
                input: _input,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCallCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCallCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'call', argsBytes)
        },

        /**
         * See [`Pallet::create`].
         *
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _init Vec<U8>
         * @param {unknown} _value [U64; 4]
         * @param {unknown} _gas_limit U64
         * @param {unknown} _max_fee_per_gas [U64; 4]
         * @param {unknown} _max_priority_fee_per_gas Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _nonce Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _access_list Vec<([U8; 20], Vec<[U8; 32]>)>
         * @instance
         */
        create: async (signer: ethers.Signer, _source: unknown, _init: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'create', false, {
                source: _source,
                init: _init,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
           });
        },

        /**
         * Similar to {@link: crab/evm/calls/create}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'create', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCreateCall: (_source: unknown, _init: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'EVM', 'create', {
                source: _source,
                init: _init,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCreateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'create', argsBytes)
        },

        /**
         * See [`Pallet::create2`].
         *
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _init Vec<U8>
         * @param {unknown} _salt [U8; 32]
         * @param {unknown} _value [U64; 4]
         * @param {unknown} _gas_limit U64
         * @param {unknown} _max_fee_per_gas [U64; 4]
         * @param {unknown} _max_priority_fee_per_gas Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _nonce Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param {unknown} _access_list Vec<([U8; 20], Vec<[U8; 32]>)>
         * @instance
         */
        create2: async (signer: ethers.Signer, _source: unknown, _init: unknown, _salt: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'create2', false, {
                source: _source,
                init: _init,
                salt: _salt,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
           });
        },

        /**
         * Similar to {@link: crab/evm/calls/create2}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        create2H: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EVM', 'create2', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCreate2Call: (_source: unknown, _init: unknown, _salt: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'EVM', 'create2', {
                source: _source,
                init: _init,
                salt: _salt,
                value: _value,
                gas_limit: _gas_limit,
                max_fee_per_gas: _max_fee_per_gas,
                max_priority_fee_per_gas: _max_priority_fee_per_gas,
                nonce: _nonce,
                access_list: _access_list,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCreate2Call, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCreate2CallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'create2', argsBytes)
        },

    }
}

