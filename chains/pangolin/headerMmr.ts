import {GetStorage} from "../../storage";

export const getHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
        * Size of the MMR

        * @return U64
        */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'MmrSize');
        },

        /**
        * Peaks of the MMR

        * @param param0: U64
        * @return H256: [U8; 32]
        */
        peaks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'Peaks', param0);
        },
    };
};