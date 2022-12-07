import {GetStorage} from "../storage";

export const recovery = {
    recoverable: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Recovery', 'Recoverable', param0);
    },
    activeRecoveries: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Recovery', 'ActiveRecoveries', param0, param1);
    },
    proxy: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Recovery', 'Proxy', param0);
    },
};