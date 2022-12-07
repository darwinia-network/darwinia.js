import {GetStorage} from "../storage";

export default {
    totalIssuance: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Balances', 'TotalIssuance');
    },
    account: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Balances', 'Account', param0);
    },
    locks: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Balances', 'Locks', param0);
    },
    reserves: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Balances', 'Reserves', param0);
    },
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Balances', 'StorageVersion');
    },
};