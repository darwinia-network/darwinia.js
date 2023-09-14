/**
 * This is the doc comment for pallet `AssetManager`'s calls. 
 * 
 * `AssetManager`'s storages: {@link: module:pangolin/assetManager/storages}
 *
 * @module pangolin/assetManager/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAssetManager = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Register new asset with the asset manager
         *
         * @param {unknown} _asset Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @param {unknown} _metadata {name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}
         * @param {unknown} _min_amount U128
         * @param {unknown} _is_sufficient Bool
         * @instance
         */
        registerForeignAsset: async (signer: ethers.Signer, _asset: unknown, _metadata: unknown, _min_amount: unknown, _is_sufficient: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'registerForeignAsset', false, {
                asset: _asset,
                metadata: _metadata,
                min_amount: _min_amount,
                is_sufficient: _is_sufficient,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/registerForeignAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        registerForeignAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'registerForeignAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRegisterForeignAssetCall: (_asset: unknown, _metadata: unknown, _min_amount: unknown, _is_sufficient: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'registerForeignAsset', {
                asset: _asset,
                metadata: _metadata,
                min_amount: _min_amount,
                is_sufficient: _is_sufficient,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRegisterForeignAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRegisterForeignAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'registerForeignAsset', argsBytes)
        },

        /**
         * Change the amount of units we are charging per execution second
         * for a given ForeignAssetType
         *
         * @param {unknown} _asset_type Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @param {unknown} _units_per_second U128
         * @param {unknown} _num_assets_weight_hint U32
         * @instance
         */
        setAssetUnitsPerSecond: async (signer: ethers.Signer, _asset_type: unknown, _units_per_second: unknown, _num_assets_weight_hint: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'setAssetUnitsPerSecond', false, {
                asset_type: _asset_type,
                units_per_second: _units_per_second,
                num_assets_weight_hint: _num_assets_weight_hint,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/setAssetUnitsPerSecond}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setAssetUnitsPerSecondH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'setAssetUnitsPerSecond', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetAssetUnitsPerSecondCall: (_asset_type: unknown, _units_per_second: unknown, _num_assets_weight_hint: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'setAssetUnitsPerSecond', {
                asset_type: _asset_type,
                units_per_second: _units_per_second,
                num_assets_weight_hint: _num_assets_weight_hint,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetAssetUnitsPerSecondCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetAssetUnitsPerSecondCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'setAssetUnitsPerSecond', argsBytes)
        },

        /**
         * Change the xcm type mapping for a given assetId
         * We also change this if the previous units per second where pointing at the old
         * assetType
         *
         * @param {unknown} _asset_id U64
         * @param {unknown} _new_asset_type Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @param {unknown} _num_assets_weight_hint U32
         * @instance
         */
        changeExistingAssetType: async (signer: ethers.Signer, _asset_id: unknown, _new_asset_type: unknown, _num_assets_weight_hint: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'changeExistingAssetType', false, {
                asset_id: _asset_id,
                new_asset_type: _new_asset_type,
                num_assets_weight_hint: _num_assets_weight_hint,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/changeExistingAssetType}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        changeExistingAssetTypeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'changeExistingAssetType', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildChangeExistingAssetTypeCall: (_asset_id: unknown, _new_asset_type: unknown, _num_assets_weight_hint: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'changeExistingAssetType', {
                asset_id: _asset_id,
                new_asset_type: _new_asset_type,
                num_assets_weight_hint: _num_assets_weight_hint,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildChangeExistingAssetTypeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildChangeExistingAssetTypeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'changeExistingAssetType', argsBytes)
        },

        /**
         *
         * @param {unknown} _asset_type Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @param {unknown} _num_assets_weight_hint U32
         * @instance
         */
        removeSupportedAsset: async (signer: ethers.Signer, _asset_type: unknown, _num_assets_weight_hint: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'removeSupportedAsset', false, {
                asset_type: _asset_type,
                num_assets_weight_hint: _num_assets_weight_hint,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/removeSupportedAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeSupportedAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'removeSupportedAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveSupportedAssetCall: (_asset_type: unknown, _num_assets_weight_hint: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'removeSupportedAsset', {
                asset_type: _asset_type,
                num_assets_weight_hint: _num_assets_weight_hint,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveSupportedAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveSupportedAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'removeSupportedAsset', argsBytes)
        },

        /**
         * Remove a given assetId -> assetType association
         *
         * @param {unknown} _asset_id U64
         * @param {unknown} _num_assets_weight_hint U32
         * @instance
         */
        removeExistingAssetType: async (signer: ethers.Signer, _asset_id: unknown, _num_assets_weight_hint: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'removeExistingAssetType', false, {
                asset_id: _asset_id,
                num_assets_weight_hint: _num_assets_weight_hint,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/removeExistingAssetType}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeExistingAssetTypeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'removeExistingAssetType', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveExistingAssetTypeCall: (_asset_id: unknown, _num_assets_weight_hint: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'removeExistingAssetType', {
                asset_id: _asset_id,
                num_assets_weight_hint: _num_assets_weight_hint,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveExistingAssetTypeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveExistingAssetTypeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'removeExistingAssetType', argsBytes)
        },

        /**
         * Register a new local asset
         * No information is stored in this pallet about the local asset
         * The reason is that we dont need to hold a mapping between the multilocation
         * and the local asset, as this conversion is deterministic
         * Further, we dont allow xcm fee payment in local assets
         *
         * @param {unknown} _creator [U8; 20]
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _min_balance U128
         * @instance
         */
        registerLocalAsset: async (signer: ethers.Signer, _creator: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'registerLocalAsset', false, {
                creator: _creator,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/registerLocalAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        registerLocalAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'registerLocalAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRegisterLocalAssetCall: (_creator: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'registerLocalAsset', {
                creator: _creator,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRegisterLocalAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRegisterLocalAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'registerLocalAsset', argsBytes)
        },

        /**
         * Destroy a given foreign assetId
         * The weight in this case is the one returned by the trait
         * plus the db writes and reads from removing all the associated
         * data
         *
         * @param {unknown} _asset_id U64
         * @param {unknown} _num_assets_weight_hint U32
         * @instance
         */
        destroyForeignAsset: async (signer: ethers.Signer, _asset_id: unknown, _num_assets_weight_hint: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'destroyForeignAsset', false, {
                asset_id: _asset_id,
                num_assets_weight_hint: _num_assets_weight_hint,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/destroyForeignAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyForeignAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'destroyForeignAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyForeignAssetCall: (_asset_id: unknown, _num_assets_weight_hint: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'destroyForeignAsset', {
                asset_id: _asset_id,
                num_assets_weight_hint: _num_assets_weight_hint,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDestroyForeignAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyForeignAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'destroyForeignAsset', argsBytes)
        },

        /**
         * Destroy a given local assetId
         * We do not store anything related to local assets in this pallet other than the counter
         * and the counter is not used for destroying the asset, so no additional db reads/writes
         * to be counter here
         *
         * @param {unknown} _asset_id U64
         * @instance
         */
        destroyLocalAsset: async (signer: ethers.Signer, _asset_id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'destroyLocalAsset', false, {
                asset_id: _asset_id,
           });
        },

        /**
         * Similar to {@link: pangolin/assetManager/calls/destroyLocalAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyLocalAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetManager', 'destroyLocalAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyLocalAssetCall: (_asset_id: unknown) => {
            return buildRuntimeCall(metadata, 'AssetManager', 'destroyLocalAsset', {
                asset_id: _asset_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDestroyLocalAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyLocalAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetManager', 'destroyLocalAsset', argsBytes)
        },

    }
}

