import {GetStorage} from "../../storage";

export const getAuthorship = (getStorage: GetStorage) => {
    return {

        /**
        * Uncles
        */
        uncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Uncles');
        },

        /**
        * Author of current block.
        */
        author: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Author');
        },

        /**
        * Whether uncles were already set in this block.
        */
        didSetUncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'DidSetUncles');
        },
    };
};