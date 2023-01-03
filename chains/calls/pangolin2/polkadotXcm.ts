import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPolkadotXcm = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
         * @param param1: Enum<{"0/V0", "1/V1", "2/V2"}>
	 */
        send: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'send', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
         * @param param1: Enum<{"0/V0", "1/V1"}>
         * @param param2: Enum<{"0/V0", "1/V1"}>
         * @param param3: U32
	 */
        teleportAssets: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'teleportAssets', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
         * @param param1: Enum<{"0/V0", "1/V1"}>
         * @param param2: Enum<{"0/V0", "1/V1"}>
         * @param param3: U32
	 */
        reserveTransferAssets: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'reserveTransferAssets', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1", "2/V2"}>
         * @param param1: {ref_time: U64}
	 */
        execute: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'execute', false, param0, param1);
        },

        /**
         * @param param0: {parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}
         * @param param1: U32
	 */
        forceXcmVersion: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceXcmVersion', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/None", "1/Some"}>
	 */
        forceDefaultXcmVersion: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceDefaultXcmVersion', false, param0);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
	 */
        forceSubscribeVersionNotify: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceSubscribeVersionNotify', false, param0);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
	 */
        forceUnsubscribeVersionNotify: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceUnsubscribeVersionNotify', false, param0);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
         * @param param1: Enum<{"0/V0", "1/V1"}>
         * @param param2: Enum<{"0/V0", "1/V1"}>
         * @param param3: U32
         * @param param4: Enum<{"0/Unlimited", "1/Limited"}>
	 */
        limitedReserveTransferAssets: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'limitedReserveTransferAssets', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: Enum<{"0/V0", "1/V1"}>
         * @param param1: Enum<{"0/V0", "1/V1"}>
         * @param param2: Enum<{"0/V0", "1/V1"}>
         * @param param3: U32
         * @param param4: Enum<{"0/Unlimited", "1/Limited"}>
	 */
        limitedTeleportAssets: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'limitedTeleportAssets', false, param0, param1, param2, param3, param4);
        },


    }
}
