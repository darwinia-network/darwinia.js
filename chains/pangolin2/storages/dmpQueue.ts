import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `DmpQueue`'s storages.
 * 
 * `DmpQueue`'s calls: {@link: module:pangolin2/dmpQueue/calls}
 *
 * @module pangolin2/dmpQueue/storages
 */
export const getDmpQueue = (getStorage: GetStorage) => {
    return {

        /**
         * The configuration.
         *
         * @returns {Promise<string | null>} ConfigData: {max_individual: {ref_time: Compact<U64>, proof_size: Compact<U64>}}
         */
        configuration: async (): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Configuration');
        },

        /**
         * The page index.
         *
         * @returns {Promise<string | null>} PageIndexData: {begin_used: U32, end_used: U32, overweight_count: U64}
         */
        pageIndex: async (): Promise<string | null> => {
            return await getStorage('DmpQueue', 'PageIndex');
        },

        /**
         * The queue pages.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} Vec<(U32, Vec<U8>)>
         */
        pages: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Pages', param0);
        },

        /**
         * The overweight messages.
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} (U32, Vec<U8>)
         */
        overweight: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Overweight', param0);
        },
    };
};
