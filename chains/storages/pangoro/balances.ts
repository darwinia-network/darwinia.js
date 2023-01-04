import {GetStorage} from "../../../storage";

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
        * The balance of an account.
        *
        * NOTE: This is only used in the case that this pallet is used to store balances.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return AccountData: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Account', param0);
        },

        /**
        * Any liquidity locks on some account balances.
        * NOTE: Should only be accessed when setting, changing and freeing a lock.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return WeakBoundedVec: Vec<{id: [U8; 8], amount: U128, reasons: Enum<{Fee: , Misc: , All: }>}>
        */
        locks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Balances', 'Locks', param0);
        },

        /**
        * Named reserves on some account balances.
        *
        * @param param0: AccountId32: [U8; 32]
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
        * @return Releases: Enum<{V1_0_0: , V2_0_0: }>
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Balances', 'StorageVersion');
        },
    };
};
