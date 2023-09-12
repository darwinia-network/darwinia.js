import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `AssetManager`'s storages.
 * 
 * `AssetManager`'s calls: {@link: module:pangolin/assetManager/calls}
 *
 * @module pangolin/assetManager/storages
 */
export const getAssetManager = (getStorage: GetStorage) => {
    return {

        /**
         * Mapping from an asset id to asset type.
         * This is mostly used when receiving transaction specifying an asset directly,
         * like transferring an asset from this chain to another.
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} AssetType: Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         */
        assetIdType: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AssetManager', 'AssetIdType', param0);
        },

        /**
         * Reverse mapping of AssetIdType. Mapping from an asset type to an asset id.
         * This is mostly used when receiving a multilocation XCM message to retrieve
         * the corresponding asset in which tokens should me minted.
         *
         * @param {unknown} param0 AssetType: Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @returns {Promise<string | null>} U64
         */
        assetTypeId: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AssetManager', 'AssetTypeId', param0);
        },

        /**
         * Stores the units per second for local execution for a AssetType.
         * This is used to know how to charge for XCM execution in a particular
         * asset
         * Not all assets might contain units per second, hence the different storage
         *
         * @param {unknown} param0 AssetType: Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @returns {Promise<string | null>} U128
         */
        assetTypeUnitsPerSecond: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AssetManager', 'AssetTypeUnitsPerSecond', param0);
        },

        /**
         * Stores the counter of the number of local assets that have been
         * created so far
         * This value can be used to salt the creation of an assetId, e.g.,
         * by hashing it. This is particularly useful for cases like moonbeam
         * where letting users choose their assetId would result in collision
         * in the evm side.
         *
         * @returns {Promise<string | null>} U128
         */
        localAssetCounter: async (): Promise<string | null> => {
            return await getStorage('AssetManager', 'LocalAssetCounter');
        },

        /**
         * Local asset deposits, a mapping from assetId to a struct
         * holding the creator (from which the deposit was reserved) and
         * the deposit amount
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} AssetInfo: {creator: [U8; 20], deposit: U128}
         */
        localAssetDeposit: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AssetManager', 'LocalAssetDeposit', param0);
        },

        /**
         *
         * @returns {Promise<string | null>} Vec<Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>>
         */
        supportedFeePaymentAssets: async (): Promise<string | null> => {
            return await getStorage('AssetManager', 'SupportedFeePaymentAssets');
        },
    };
};
