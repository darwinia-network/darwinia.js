import {GetStorage} from "../storage";

export const tips = {
    tips: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Tips', 'Tips', param0);
    },
    reasons: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Tips', 'Reasons', param0);
    },
};