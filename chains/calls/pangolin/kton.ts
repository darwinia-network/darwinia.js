import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getKton = (dispatch: Dispatch) => {
    return {
        /**
         * @param _dest: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transfer', false, _dest, _value);
        },

        /**
         * @param _who: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _new_free: Compact<U128>
         * @param _new_reserved: Compact<U128>
	 */
        setBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _new_reserved: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'setBalance', false, _who, _new_free, _new_reserved);
        },

        /**
         * @param _source: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _dest: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceTransfer', false, _source, _dest, _value);
        },

        /**
         * @param _dest: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _value: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferKeepAlive', false, _dest, _value);
        },

        /**
         * @param _dest: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _keep_alive: Bool
	 */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferAll', false, _dest, _keep_alive);
        },

        /**
         * @param _who: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _amount: U128
	 */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceUnreserve', false, _who, _amount);
        },


    }
}
