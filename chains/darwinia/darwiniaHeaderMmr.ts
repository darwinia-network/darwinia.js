import {GetStorage} from "../../storage";

export const getDarwiniaHeaderMmr = (getStorage: GetStorage) => {
    return {

        /**
        * Size of the MMR
        */
        mmrSize: async (): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'MmrSize');
        },

        /**
        * Peaks of the MMR
        */
        peaks: async (param0: unknown /* U64 */): Promise<string | null> => {
            return await getStorage('DarwiniaHeaderMmr', 'Peaks', param0);
        },
    };
};