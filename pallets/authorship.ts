import {GetStorage} from "../storage";

export const authorship = {
    uncles: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'Uncles');
    },
    author: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'Author');
    },
    didSetUncles: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'DidSetUncles');
    },
};