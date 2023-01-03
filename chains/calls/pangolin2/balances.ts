import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBalances = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
         * @param param1: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transfer', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Compact<U128>
         * @param param2: Compact<U128>
	 */
        setBalance: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'setBalance', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Bool
	 */
        transferAll: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferAll', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: U128
	 */
        forceUnreserve: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', false, param0, param1);
        },


    }
}
