import {GetStorage} from "../../../storage";

export const getEvm = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param param0: H160: [U8; 20]
         * @return Vec<U8>
         */
        accountCodes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Evm', 'AccountCodes', param0);
        },

        /**
         *
         * @param param0: H160: [U8; 20]
         * @param param1: H256: [U8; 32]
         * @return H256: [U8; 32]
         */
        accountStorages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Evm', 'AccountStorages', param0, param1);
        },
    };
};
