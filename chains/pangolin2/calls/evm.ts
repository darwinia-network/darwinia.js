import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getEvm = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Withdraw balance from EVM into currency/balances pallet.
         *
         * @param _address: [U8; 20]
         * @param _value: U128
         */
        withdraw: async (signer: ethers.Signer, _address: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'withdraw', false, _address, _value);
        },

        withdrawD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'withdraw', true, data);
        },

        withdrawCall: (_address: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Evm', 'withdraw', {
                address: _address,
                value: _value,
            });
        },

        /**
         * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
         *
         * @param _source: [U8; 20]
         * @param _target: [U8; 20]
         * @param _input: Vec<U8>
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _nonce: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
         */
        call: async (signer: ethers.Signer, _source: unknown, _target: unknown, _input: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'call', false, _source, _target, _input, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },

        callD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'call', true, data);
        },

        callCall: (_source: unknown, _target: unknown, _input: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'Evm', 'call', {
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
         * Issue an EVM create operation. This is similar to a contract creation transaction in
         * Ethereum.
         *
         * @param _source: [U8; 20]
         * @param _init: Vec<U8>
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _nonce: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
         */
        create: async (signer: ethers.Signer, _source: unknown, _init: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create', false, _source, _init, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },

        createD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create', true, data);
        },

        createCall: (_source: unknown, _init: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'Evm', 'create', {
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
         * Issue an EVM create2 operation.
         *
         * @param _source: [U8; 20]
         * @param _init: Vec<U8>
         * @param _salt: [U8; 32]
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _nonce: Enum<{0/None: , 1/Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
         */
        create2: async (signer: ethers.Signer, _source: unknown, _init: unknown, _salt: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create2', false, _source, _init, _salt, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },

        create2D: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create2', true, data);
        },

        create2Call: (_source: unknown, _init: unknown, _salt: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown) => {
            return buildRuntimeCall(metadata, 'Evm', 'create2', {
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

    }
}
