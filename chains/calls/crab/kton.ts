import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getKton = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transfer', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Compact<U128>
         * @param param2: Compact<U128>
	 */
        setBalance: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'setBalance', false, param0, param1, param2);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param2: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceTransfer', false, param0, param1, param2);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferKeepAlive', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Bool
	 */
        transferAll: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferAll', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: U128
	 */
        forceUnreserve: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceUnreserve', false, param0, param1);
        },


    }
}
