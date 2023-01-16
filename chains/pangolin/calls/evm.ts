import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEVM = (dispatch: Dispatch, metadata: Metadata) => {
    return {
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

        callH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'call', true, argsBytes);
        },

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

        buildCallCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'call', argsBytes)
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

        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'create', true, argsBytes);
        },

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

        buildCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'create', argsBytes)
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

        create2H: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'create2', true, argsBytes);
        },

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

        buildCreate2CallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EVM', 'create2', argsBytes)
        },

    }
}
