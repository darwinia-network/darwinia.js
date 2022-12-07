import {GetStorage} from "../../storage";

export default {
    proxies: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Proxy', 'Proxies', param0);
    },
    announcements: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Proxy', 'Announcements', param0);
    },
};