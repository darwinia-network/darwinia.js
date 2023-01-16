import { GetStorage } from "../../../src/storage";

export const getDarwiniaHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
         * Size of the MMR
         *
         * @return U64
         */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'MmrSize');
        },

        /**
         * Peaks of the MMR
         *
         * @param param0: U64
         * @return H256: [U8; 32]
         */
        peaks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'Peaks', param0);
        },
    };
};
