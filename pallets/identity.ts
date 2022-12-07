import {GetStorage} from "../storage";

export const identity = {
    identityOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Identity', 'IdentityOf', param0);
    },
    superOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Identity', 'SuperOf', param0);
    },
    subsOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Identity', 'SubsOf', param0);
    },
    registrars: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Identity', 'Registrars');
    },
};