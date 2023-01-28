import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Kton`'s storages.
 * 
 * `Kton`'s calls: {@link: module:pangoro/kton/calls}
 *
 * @module pangoro/kton/storages
 */
export const getKton = (getStorage: GetStorage) => {
    return {

        /**
         * The total units issued in the system.
         *
         * @returns {Promise<string | null>} U128
         */
        totalIssuance: async (): Promise<string | null> => {
            return await getStorage('Kton', 'TotalIssuance');
        },

        /**
         * The balance of an account.
         *
         * NOTE: This is only used in the case that this pallet is used to store balances.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} AccountData: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}
         */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Account', param0);
        },

        /**
         * Any liquidity locks on some account balances.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} WeakBoundedVec: Vec<{id: [U8; 8], amount: U128, reasons: Enum<{0/Fee: , 1/Misc: , 2/All: }>}>
         */
        locks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Locks', param0);
        },

        /**
         * Named reserves on some account balances.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} BoundedVec: Vec<{id: [U8; 8], amount: U128}>
         */
        reserves: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Reserves', param0);
        },

        /**
         * Storage version of the pallet.
         *
         * This is set to v2.0.0 for new networks.
         *
         * @returns {Promise<string | null>} Releases: Enum<{0/V1_0_0: , 1/V2_0_0: }>
         */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Kton', 'StorageVersion');
        },
    };
};
