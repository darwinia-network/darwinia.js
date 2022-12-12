import {GetStorage} from "../../storage";

export default {

    /**
     * The set of recoverable accounts and their recovery configuration.
     */
    recoverable: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Recovery', 'Recoverable', param0);
    },

    /**
     * Active recovery attempts.
     *
     * First account is the account to be recovered, and the second account
     * is the user trying to recover the account.
     */
    activeRecoveries: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */, param1: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Recovery', 'ActiveRecoveries', param0, param1);
    },

    /**
     * The list of allowed proxy accounts.
     *
     * Map from the user who can access it to the recovered account.
     */
    proxy: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Recovery', 'Proxy', param0);
    },
};