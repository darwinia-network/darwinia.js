import {GetStorage} from "../../storage";

export const getProxy = (getStorage: GetStorage) => {
    return {

        /**
        * The set of account proxies. Maps the account which has delegated to the accounts
        * which are being delegated to, together with the amount held on deposit.

        * @param param0: AccountId32: [U8; 32]
        * @return (Vec&lt;{delegate: [U8; 32], proxy_type: Enum&lt;{&#34;0/Any&#34;, &#34;1/NonTransfer&#34;, &#34;2/Governance&#34;, &#34;3/Staking&#34;, &#34;4/IdentityJudgement&#34;, &#34;5/EthereumBridge&#34;}&gt;, delay: U32}&gt;, U128)
        */
        proxies: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Proxies', param0);
        },

        /**
        * The announcements made by the proxy (key).

        * @param param0: AccountId32: [U8; 32]
        * @return (Vec&lt;{real: [U8; 32], call_hash: [U8; 32], height: U32}&gt;, U128)
        */
        announcements: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Proxy', 'Announcements', param0);
        },
    };
};