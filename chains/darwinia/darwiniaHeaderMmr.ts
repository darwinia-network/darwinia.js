import {GetStorage} from "../../storage";

export default {

    /**
     * Size of the MMR
     */
    mmrSize: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaHeaderMmr', 'MmrSize');
    },

    /**
     * Peaks of the MMR
     */
    peaks: async (getStorage: GetStorage, param0: unknown /* : U64 */): Promise<string | null> => {
        return await getStorage('DarwiniaHeaderMmr', 'Peaks', param0);
    },
};