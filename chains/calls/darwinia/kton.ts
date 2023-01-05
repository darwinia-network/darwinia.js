import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getKton = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transfer', false, _dest, _value);
        },

        transferCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transfer', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _new_free: Compact<U128>
         * @param _new_reserved: Compact<U128>
	 */
        setBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _new_reserved: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'setBalance', false, _who, _new_free, _new_reserved);
        },

        setBalanceCall: (_who: unknown, _new_free: unknown, _new_reserved: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'setBalance', {
                who: _who,
                new_free: _new_free,
                new_reserved: _new_reserved,
            });
        },

        /**
         * @param _source: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceTransfer', false, _source, _dest, _value);
        },

        forceTransferCall: (_source: unknown, _dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'forceTransfer', {
                source: _source,
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferKeepAlive', false, _dest, _value);
        },

        transferKeepAliveCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transferKeepAlive', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _keep_alive: Bool
	 */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferAll', false, _dest, _keep_alive);
        },

        transferAllCall: (_dest: unknown, _keep_alive: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transferAll', {
                dest: _dest,
                keep_alive: _keep_alive,
            });
        },

        /**
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _amount: U128
	 */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceUnreserve', false, _who, _amount);
        },

        forceUnreserveCall: (_who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'forceUnreserve', {
                who: _who,
                amount: _amount,
            });
        },

    }
}
