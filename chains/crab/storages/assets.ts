import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Assets`'s storages.
 * 
 * `Assets`'s calls: {@link: module:crab/assets/calls}
 *
 * @module crab/assets/storages
 */
export const getAssets = (getStorage: GetStorage) => {
    return {

        /**
         * Details of an asset.
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} AssetDetails: {owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], supply: U128, deposit: U128, min_balance: U128, is_sufficient: Bool, accounts: U32, sufficients: U32, approvals: U32, status: Enum<{0/Live: , 1/Frozen: , 2/Destroying: }>}
         */
        asset: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Assets', 'Asset', param0);
        },

        /**
         * The holdings of a specific account for a specific asset.
         *
         * @param {unknown} param0 U64
         * @param {unknown} param1 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} AssetAccount: {balance: U128, is_frozen: Bool, reason: Enum<{0/Consumer: , 1/Sufficient: , 2/DepositHeld: U128, 3/DepositRefunded: }>, extra: ()}
         */
        account: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Assets', 'Account', param0, param1);
        },

        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         *
         * @param {unknown} param0 U64
         * @param {unknown} param1 AccountId20: [U8; 20]
         * @param {unknown} param2 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Approval: {amount: U128, deposit: U128}
         */
        approvals: async (param0: unknown, param1: unknown, param2: unknown): Promise<string | null> => {
            return await getStorage('Assets', 'Approvals', param0, param1, param2);
        },

        /**
         * Metadata of an asset.
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} AssetMetadata: {deposit: U128, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}
         */
        metadata: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Assets', 'Metadata', param0);
        },
    };
};
