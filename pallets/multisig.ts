import {GetStorage} from "../storage";

export const multisig = {
    multisigs: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Multisig', 'Multisigs', param0, param1);
    },
    calls: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Multisig', 'Calls', param0);
    },
};