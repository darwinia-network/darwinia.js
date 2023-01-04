import {GetStorage} from "../../../storage";

export const getProxy = (getStorage: GetStorage) => {
    return {

        /**
        * The set of account proxies. Maps the account which has delegated to the accounts
        * which are being delegated to, together with the amount held on deposit.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return (Vec<{delegate: [U8; 32], proxy_type: Enum<{Any: , NonTransfer: , Governance: , Staking: , IdentityJudgement: , EthereumBridge: }>, delay: U32}>, U128)
        */
        proxies: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Proxies', param0);
        },

        /**
        * The announcements made by the proxy (key).
        *
        * @param param0: AccountId32: [U8; 32]
        * @return (Vec<{real: [U8; 32], call_hash: [U8; 32], height: U32}>, U128)
        */
        announcements: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Announcements', param0);
        },
    };
};
