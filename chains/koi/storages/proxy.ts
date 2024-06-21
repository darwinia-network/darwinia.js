import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Proxy`'s storages.
 * 
 * `Proxy`'s calls: {@link: module:koi/proxy/calls}
 *
 * @module koi/proxy/storages
 */
export const getProxy = (getStorage: GetStorage) => {
    return {

        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} (Vec<{delegate: [U8; 20], proxy_type: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>, delay: U32}>, U128)
         */
        proxies: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Proxies', param0);
        },

        /**
         * The announcements made by the proxy (key).
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} (Vec<{real: [U8; 20], call_hash: [U8; 32], height: U32}>, U128)
         */
        announcements: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Announcements', param0);
        },
    };
};
