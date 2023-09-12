import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Balances`'s storages.
 * 
 * `Balances`'s calls: {@link: module:crab/balances/calls}
 *
 * @module crab/balances/storages
 */
export const getBalances = (getStorage: GetStorage) => {
    return {

        /**
         * The total units issued in the system.
         *
         * @returns {Promise<string | null>} U128
         */
        totalIssuance: async (): Promise<string | null> => {
            return await getStorage('Balances', 'TotalIssuance');
        },

        /**
         * The total units of outstanding deactivated balance in the system.
         *
         * @returns {Promise<string | null>} U128
         */
        inactiveIssuance: async (): Promise<string | null> => {
            return await getStorage('Balances', 'InactiveIssuance');
        },

        /**
         * The Balances pallet example of storing the balance of an account.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *    type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
         *  }
         * ```
         *
         * You can also store the balance of an account in the `System` pallet.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *   type AccountStore = System
         *  }
         * ```
         *
         * But this comes with tradeoffs, storing account balances in the system pallet stores
         * `frame_system` data alongside the account data contrary to storing account balances in the
         * `Balances` pallet, which uses a `StorageMap` to store balances data only.
         * NOTE: This is only used in the case that this pallet is used to store balances.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} AccountData: {free: U128, reserved: U128, frozen: U128, flags: U128}
         */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Account', param0);
        },

        /**
         * Any liquidity locks on some account balances.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} WeakBoundedVec: Vec<{id: [U8; 8], amount: U128, reasons: Enum<{0/Fee: , 1/Misc: , 2/All: }>}>
         */
        locks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Locks', param0);
        },

        /**
         * Named reserves on some account balances.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} BoundedVec: Vec<{id: [U8; 8], amount: U128}>
         */
        reserves: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Reserves', param0);
        },

        /**
         * Holds on account balances.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} BoundedVec: Vec<{id: (), amount: U128}>
         */
        holds: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Holds', param0);
        },

        /**
         * Freeze locks on account balances.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} BoundedVec: Vec<{id: (), amount: U128}>
         */
        freezes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Freezes', param0);
        },
    };
};
