import {GetStorage} from "../storage";

export const evm = {
    accountCodes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('EVM', 'AccountCodes', param0);
    },
    accountStorages: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('EVM', 'AccountStorages', param0, param1);
    },
};