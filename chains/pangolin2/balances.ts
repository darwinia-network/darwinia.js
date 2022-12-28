import {GetStorage} from "../../storage";

export const getBalances = (getStorage: GetStorage) => {
    return {

        /**
        * The total units issued in the system.
        *
        * @return U128
        */
        totalIssuance: async (): Promise<string | null> => {
            return await getStorage('Balances', 'TotalIssuance');
        },

        /**
        * The Balances pallet example of storing the balance of an account.
        *
        * # Example
        *
        * ```nocompile
        *  impl pallet_balances::Config for Runtime {
        *    type AccountStore = StorageMapShim&lt;Self::Account&lt;Runtime&gt;, frame_system::Provider&lt;Runtime&gt;, AccountId, Self::AccountData&lt;Balance&gt;&gt;
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
        * @param param0: AccountId20: [U8; 20]
        * @return AccountData: {free: U128, reserved: U128, misc_frozen: U128, fee_frozen: U128}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Account', param0);
        },

        /**
        * Any liquidity locks on some account balances.
        * NOTE: Should only be accessed when setting, changing and freeing a lock.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return WeakBoundedVec: Vec<{id: [U8; 8], amount: U128, reasons: Enum<{"0/Fee", "1/Misc", "2/All"}>}>
        */
        locks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Locks', param0);
        },

        /**
        * Named reserves on some account balances.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return BoundedVec: Vec<{id: [U8; 8], amount: U128}>
        */
        reserves: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Reserves', param0);
        },

        /**
        * Storage version of the pallet.
        *
        * This is set to v2.0.0 for new networks.
        *
        * @return Releases: Enum<{"0/V1_0_0", "1/V2_0_0"}>
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Balances', 'StorageVersion');
        },
    };
};