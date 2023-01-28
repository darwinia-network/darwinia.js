import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `HeaderMmr`'s storages.
 * 
 * `HeaderMmr`'s calls: {@link: module:pangolin/headerMmr/calls}
 *
 * @module pangolin/headerMmr/storages
 */
export const getHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
         * Size of the MMR
         *
         * @returns {Promise<string | null>} U64
         */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'MmrSize');
        },

        /**
         * Peaks of the MMR
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        peaks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'Peaks', param0);
        },
    };
};
