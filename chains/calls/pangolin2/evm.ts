import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEvm = (dispatch: Dispatch) => {
    return {
        /**
         * @param _address: [U8; 20]
         * @param _value: U128
	 */
        withdraw: async (signer: ethers.Signer, _address: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'withdraw', false, _address, _value);
        },

        /**
         * @param _source: [U8; 20]
         * @param _target: [U8; 20]
         * @param _input: Vec<U8>
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{None: , Some: [U64; 4]}>
         * @param _nonce: Enum<{None: , Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        call: async (signer: ethers.Signer, _source: unknown, _target: unknown, _input: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'call', false, _source, _target, _input, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },

        /**
         * @param _source: [U8; 20]
         * @param _init: Vec<U8>
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{None: , Some: [U64; 4]}>
         * @param _nonce: Enum<{None: , Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        create: async (signer: ethers.Signer, _source: unknown, _init: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create', false, _source, _init, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },

        /**
         * @param _source: [U8; 20]
         * @param _init: Vec<U8>
         * @param _salt: [U8; 32]
         * @param _value: [U64; 4]
         * @param _gas_limit: U64
         * @param _max_fee_per_gas: [U64; 4]
         * @param _max_priority_fee_per_gas: Enum<{None: , Some: [U64; 4]}>
         * @param _nonce: Enum<{None: , Some: [U64; 4]}>
         * @param _access_list: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        create2: async (signer: ethers.Signer, _source: unknown, _init: unknown, _salt: unknown, _value: unknown, _gas_limit: unknown, _max_fee_per_gas: unknown, _max_priority_fee_per_gas: unknown, _nonce: unknown, _access_list: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Evm', 'create2', false, _source, _init, _salt, _value, _gas_limit, _max_fee_per_gas, _max_priority_fee_per_gas, _nonce, _access_list);
        },


    }
}