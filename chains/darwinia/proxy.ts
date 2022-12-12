import {GetStorage} from "../../storage";

export default {

    /**
     * The set of account proxies. Maps the account which has delegated to the accounts
     * which are being delegated to, together with the amount held on deposit.
     */
    proxies: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Proxy', 'Proxies', param0);
    },

    /**
     * The announcements made by the proxy (key).
     */
    announcements: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Proxy', 'Announcements', param0);
    },
};