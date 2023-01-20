import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangolin/recovery/storages
 */
export const getRecovery = (getStorage: GetStorage) => {
    return {

        /**
         * The set of recoverable accounts and their recovery configuration.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} RecoveryConfig: {delay_period: U32, deposit: U128, friends: Vec<[U8; 32]>, threshold: U16}
         */
        recoverable: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'Recoverable', param0);
        },

        /**
         * Active recovery attempts.
         *
         * First account is the account to be recovered, and the second account
         * is the user trying to recover the account.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @param {unknown} param1 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} ActiveRecovery: {created: U32, deposit: U128, friends: Vec<[U8; 32]>}
         */
        activeRecoveries: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'ActiveRecoveries', param0, param1);
        },

        /**
         * The list of allowed proxy accounts.
         *
         * Map from the user who can access it to the recovered account.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        proxy: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'Proxy', param0);
        },
    };
};
