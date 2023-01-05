import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getBalances = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _dest: [U8; 20]
         * @param _value: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transfer', false, _dest, _value);
        },

        transferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transfer', true, data);
        },

        transferCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transfer', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _who: [U8; 20]
         * @param _new_free: Compact<U128>
         * @param _new_reserved: Compact<U128>
	 */
        setBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _new_reserved: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'setBalance', false, _who, _new_free, _new_reserved);
        },

        setBalanceD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'setBalance', true, data);
        },

        setBalanceCall: (_who: unknown, _new_free: unknown, _new_reserved: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'setBalance', {
                who: _who,
                new_free: _new_free,
                new_reserved: _new_reserved,
            });
        },

        /**
         * @param _source: [U8; 20]
         * @param _dest: [U8; 20]
         * @param _value: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', false, _source, _dest, _value);
        },

        forceTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', true, data);
        },

        forceTransferCall: (_source: unknown, _dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceTransfer', {
                source: _source,
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _dest: [U8; 20]
         * @param _value: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', false, _dest, _value);
        },

        transferKeepAliveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', true, data);
        },

        transferKeepAliveCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferKeepAlive', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * @param _dest: [U8; 20]
         * @param _keep_alive: Bool
	 */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferAll', false, _dest, _keep_alive);
        },

        transferAllD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferAll', true, data);
        },

        transferAllCall: (_dest: unknown, _keep_alive: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferAll', {
                dest: _dest,
                keep_alive: _keep_alive,
            });
        },

        /**
         * @param _who: [U8; 20]
         * @param _amount: U128
	 */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', false, _who, _amount);
        },

        forceUnreserveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', true, data);
        },

        forceUnreserveCall: (_who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceUnreserve', {
                who: _who,
                amount: _amount,
            });
        },

    }
}
