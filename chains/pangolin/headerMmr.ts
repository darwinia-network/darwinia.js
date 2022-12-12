import {GetStorage} from "../../storage";

export const getHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
        * Size of the MMR
        */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'MmrSize');
        },

        /**
        * Peaks of the MMR
        */
        peaks: async (param0: unknown /* U64 */): Promise<string | null> => {
            return await getStorage('HeaderMmr', 'Peaks', param0);
        },
    };
};