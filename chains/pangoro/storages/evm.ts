import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangoro/evm/storages
 */
export const getEVM = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param {unknown} param0 H160: [U8; 20]
         * @returns {Promise<string | null>} Vec<U8>
         */
        accountCodes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('EVM', 'AccountCodes', param0);
        },

        /**
         *
         * @param {unknown} param0 H160: [U8; 20]
         * @param {unknown} param1 H256: [U8; 32]
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        accountStorages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('EVM', 'AccountStorages', param0, param1);
        },
    };
};
