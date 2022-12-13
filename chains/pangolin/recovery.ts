import {GetStorage} from "../../storage";

export const getRecovery = (getStorage: GetStorage) => {
    return {

        /**
        * The set of recoverable accounts and their recovery configuration.

        * @param param0: AccountId32: [U8; 32]
        * @return RecoveryConfig: {delay_period: U32, deposit: U128, friends: Vec&lt;[U8; 32]&gt;, threshold: U16}
        */
        recoverable: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'Recoverable', param0);
        },

        /**
        * Active recovery attempts.
        *
        * First account is the account to be recovered, and the second account
        * is the user trying to recover the account.

        * @param param0: AccountId32: [U8; 32]
        * @param param1: AccountId32: [U8; 32]
        * @return ActiveRecovery: {created: U32, deposit: U128, friends: Vec&lt;[U8; 32]&gt;}
        */
        activeRecoveries: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'ActiveRecoveries', param0, param1);
        },

        /**
        * The list of allowed proxy accounts.
        *
        * Map from the user who can access it to the recovered account.

        * @param param0: AccountId32: [U8; 32]
        * @return AccountId32: [U8; 32]
        */
        proxy: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Recovery', 'Proxy', param0);
        },
    };
};