/**
 * This is the doc comment for pallet `AssetLimit`'s calls. 
 * 
 * `AssetLimit`'s storages: {@link: module:koi/assetLimit/storages}
 *
 * @module koi/assetLimit/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAssetLimit = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::set_foreign_asset_limit`].
         *
         * @param {unknown} _asset_type Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @param {unknown} _units_limit U128
         * @instance
         */
        setForeignAssetLimit: async (signer: ethers.Signer, _asset_type: unknown, _units_limit: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetLimit', 'setForeignAssetLimit', false, {
                asset_type: _asset_type,
                units_limit: _units_limit,
           });
        },

        /**
         * Similar to {@link: koi/assetLimit/calls/setForeignAssetLimit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setForeignAssetLimitH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AssetLimit', 'setForeignAssetLimit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetForeignAssetLimitCall: (_asset_type: unknown, _units_limit: unknown) => {
            return buildRuntimeCall(metadata, 'AssetLimit', 'setForeignAssetLimit', {
                asset_type: _asset_type,
                units_limit: _units_limit,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetForeignAssetLimitCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetForeignAssetLimitCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AssetLimit', 'setForeignAssetLimit', argsBytes)
        },

    }
}

