import {GetStorage} from "../storage";

export const vesting = {
    vesting: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Vesting', 'Vesting', param0);
    },
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Vesting', 'StorageVersion');
    },
};