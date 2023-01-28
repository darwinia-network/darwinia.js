import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Indices`'s storages.
 * 
 * `Indices`'s calls: {@link: module:crab/indices/calls}
 *
 * @module crab/indices/storages
 */
export const getIndices = (getStorage: GetStorage) => {
    return {

        /**
         * The lookup from index to account.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} ([U8; 32], U128, Bool)
         */
        accounts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Indices', 'Accounts', param0);
        },
    };
};
