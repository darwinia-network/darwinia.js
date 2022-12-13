import {GetStorage} from "../../storage";

export const getEVM = (getStorage: GetStorage) => {
    return {

        /**

        * @param param0: H160: [U8; 20]
        * @return Vec&lt;U8&gt;
        */
        accountCodes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('EVM', 'AccountCodes', param0);
        },

        /**

        * @param param0: H160: [U8; 20]
        * @param param1: H256: [U8; 32]
        * @return H256: [U8; 32]
        */
        accountStorages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('EVM', 'AccountStorages', param0, param1);
        },
    };
};