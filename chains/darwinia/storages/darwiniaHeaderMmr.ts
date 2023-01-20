import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module darwinia/darwiniaHeaderMmr/storages
 */
export const getDarwiniaHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
         * Size of the MMR
         *
         * @returns {Promise<string | null>} U64
         */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'MmrSize');
        },

        /**
         * Peaks of the MMR
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        peaks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'Peaks', param0);
        },
    };
};
