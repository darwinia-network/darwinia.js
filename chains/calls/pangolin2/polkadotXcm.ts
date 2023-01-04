import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPolkadotXcm = (dispatch: Dispatch) => {
    return {
        /**
         * @param _dest: Enum<{"0/V0", "1/V1"}>
         * @param _message: Enum<{"0/V0", "1/V1", "2/V2"}>
	 */
        send: async (signer: ethers.Signer, _dest: unknown, _message: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'send', false, _dest, _message);
        },

        /**
         * @param _dest: Enum<{"0/V0", "1/V1"}>
         * @param _beneficiary: Enum<{"0/V0", "1/V1"}>
         * @param _assets: Enum<{"0/V0", "1/V1"}>
         * @param _fee_asset_item: U32
	 */
        teleportAssets: async (signer: ethers.Signer, _dest: unknown, _beneficiary: unknown, _assets: unknown, _fee_asset_item: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'teleportAssets', false, _dest, _beneficiary, _assets, _fee_asset_item);
        },

        /**
         * @param _dest: Enum<{"0/V0", "1/V1"}>
         * @param _beneficiary: Enum<{"0/V0", "1/V1"}>
         * @param _assets: Enum<{"0/V0", "1/V1"}>
         * @param _fee_asset_item: U32
	 */
        reserveTransferAssets: async (signer: ethers.Signer, _dest: unknown, _beneficiary: unknown, _assets: unknown, _fee_asset_item: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'reserveTransferAssets', false, _dest, _beneficiary, _assets, _fee_asset_item);
        },

        /**
         * @param _message: Enum<{"0/V0", "1/V1", "2/V2"}>
         * @param _max_weight: {ref_time: U64}
	 */
        execute: async (signer: ethers.Signer, _message: unknown, _max_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'execute', false, _message, _max_weight);
        },

        /**
         * @param _location: {parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}
         * @param _xcm_version: U32
	 */
        forceXcmVersion: async (signer: ethers.Signer, _location: unknown, _xcm_version: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceXcmVersion', false, _location, _xcm_version);
        },

        /**
         * @param _maybe_xcm_version: Enum<{"0/None", "1/Some"}>
	 */
        forceDefaultXcmVersion: async (signer: ethers.Signer, _maybe_xcm_version: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceDefaultXcmVersion', false, _maybe_xcm_version);
        },

        /**
         * @param _location: Enum<{"0/V0", "1/V1"}>
	 */
        forceSubscribeVersionNotify: async (signer: ethers.Signer, _location: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceSubscribeVersionNotify', false, _location);
        },

        /**
         * @param _location: Enum<{"0/V0", "1/V1"}>
	 */
        forceUnsubscribeVersionNotify: async (signer: ethers.Signer, _location: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'forceUnsubscribeVersionNotify', false, _location);
        },

        /**
         * @param _dest: Enum<{"0/V0", "1/V1"}>
         * @param _beneficiary: Enum<{"0/V0", "1/V1"}>
         * @param _assets: Enum<{"0/V0", "1/V1"}>
         * @param _fee_asset_item: U32
         * @param _weight_limit: Enum<{"0/Unlimited", "1/Limited"}>
	 */
        limitedReserveTransferAssets: async (signer: ethers.Signer, _dest: unknown, _beneficiary: unknown, _assets: unknown, _fee_asset_item: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'limitedReserveTransferAssets', false, _dest, _beneficiary, _assets, _fee_asset_item, _weight_limit);
        },

        /**
         * @param _dest: Enum<{"0/V0", "1/V1"}>
         * @param _beneficiary: Enum<{"0/V0", "1/V1"}>
         * @param _assets: Enum<{"0/V0", "1/V1"}>
         * @param _fee_asset_item: U32
         * @param _weight_limit: Enum<{"0/Unlimited", "1/Limited"}>
	 */
        limitedTeleportAssets: async (signer: ethers.Signer, _dest: unknown, _beneficiary: unknown, _assets: unknown, _fee_asset_item: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PolkadotXcm', 'limitedTeleportAssets', false, _dest, _beneficiary, _assets, _fee_asset_item, _weight_limit);
        },


    }
}
