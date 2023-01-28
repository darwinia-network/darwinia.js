import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Evm`'s storages.
 * 
 * `Evm`'s calls: {@link: module:pangolin2/evm/calls}
 *
 * @module pangolin2/evm/storages
 */
export const getEvm = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param {unknown} param0 H160: [U8; 20]
         * @returns {Promise<string | null>} Vec<U8>
         */
        accountCodes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Evm', 'AccountCodes', param0);
        },

        /**
         *
         * @param {unknown} param0 H160: [U8; 20]
         * @param {unknown} param1 H256: [U8; 32]
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        accountStorages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Evm', 'AccountStorages', param0, param1);
        },
    };
};
