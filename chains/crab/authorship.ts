import {GetStorage} from "../../storage";

export default {

    /**
     * Uncles
     */
    uncles: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'Uncles');
    },

    /**
     * Author of current block.
     */
    author: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'Author');
    },

    /**
     * Whether uncles were already set in this block.
     */
    didSetUncles: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Authorship', 'DidSetUncles');
    },
};