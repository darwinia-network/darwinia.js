import {GetStorage} from "../storage";

export const darwiniaHeaderMmr = {
    mmrSize: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaHeaderMmr', 'MmrSize');
    },
    peaks: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('DarwiniaHeaderMmr', 'Peaks', param0);
    },
};