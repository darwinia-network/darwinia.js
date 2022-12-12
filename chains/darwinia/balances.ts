import {GetStorage} from "../../storage";

export default {

    /**
     * The total units issued in the system.
     */
    totalIssuance: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Balances', 'TotalIssuance');
    },

    /**
     * The balance of an account.
     *
     * NOTE: This is only used in the case that this pallet is used to store balances.
     */
    account: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Balances', 'Account', param0);
    },

    /**
     * Any liquidity locks on some account balances.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    locks: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Balances', 'Locks', param0);
    },

    /**
     * Named reserves on some account balances.
     */
    reserves: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Balances', 'Reserves', param0);
    },

    /**
     * Storage version of the pallet.
     *
     * This is set to v2.0.0 for new networks.
     */
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Balances', 'StorageVersion');
    },
};