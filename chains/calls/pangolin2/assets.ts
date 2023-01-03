import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAssets = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: U128
	 */
        create: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Bool
         * @param param3: Compact<U128>
	 */
        forceCreate: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}
	 */
        destroy: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', false, param0, param1);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        mint: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        burn: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: [U8; 20]
         * @param param3: Compact<U128>
	 */
        forceTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
	 */
        freeze: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', false, param0, param1);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
	 */
        thaw: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', false, param0, param1);
        },

        /**
         * @param param0: Compact<U64>
	 */
        freezeAsset: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, param0);
        },

        /**
         * @param param0: Compact<U64>
	 */
        thawAsset: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, param0);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
	 */
        transferOwnership: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, param0, param1);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: [U8; 20]
         * @param param3: [U8; 20]
	 */
        setTeam: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: Vec<U8>
         * @param param2: Vec<U8>
         * @param param3: U8
	 */
        setMetadata: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Compact<U64>
	 */
        clearMetadata: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, param0);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: Vec<U8>
         * @param param2: Vec<U8>
         * @param param3: U8
         * @param param4: Bool
	 */
        forceSetMetadata: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: Compact<U64>
	 */
        forceClearMetadata: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, param0);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: [U8; 20]
         * @param param3: [U8; 20]
         * @param param4: [U8; 20]
         * @param param5: Compact<U128>
         * @param param6: Bool
         * @param param7: Bool
	 */
        forceAssetStatus: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, param6: unknown, param7: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', false, param0, param1, param2, param3, param4, param5, param6, param7);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: Compact<U128>
	 */
        approveTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
	 */
        cancelApproval: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, param0, param1);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: [U8; 20]
	 */
        forceCancelApproval: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, param0, param1, param2);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: [U8; 20]
         * @param param2: [U8; 20]
         * @param param3: Compact<U128>
	 */
        transferApproved: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Compact<U64>
	 */
        touch: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', false, param0);
        },

        /**
         * @param param0: Compact<U64>
         * @param param1: Bool
	 */
        refund: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', false, param0, param1);
        },


    }
}
