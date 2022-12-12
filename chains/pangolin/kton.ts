import {GetStorage} from "../../storage";

export const getKton = (getStorage: GetStorage) => {
    return {

        /**
        * The total units issued in the system.
        */
        totalIssuance: async (): Promise<string | null> => {
            return await getStorage('Kton', 'TotalIssuance');
        },

        /**
        * The balance of an account.
        *
        * NOTE: This is only used in the case that this pallet is used to store balances.
        */
        account: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Kton', 'Account', param0);
        },

        /**
        * Any liquidity locks on some account balances.
        * NOTE: Should only be accessed when setting, changing and freeing a lock.
        */
        locks: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Kton', 'Locks', param0);
        },

        /**
        * Named reserves on some account balances.
        */
        reserves: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Kton', 'Reserves', param0);
        },

        /**
        * Storage version of the pallet.
        *
        * This is set to v2.0.0 for new networks.
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Kton', 'StorageVersion');
        },
    };
};