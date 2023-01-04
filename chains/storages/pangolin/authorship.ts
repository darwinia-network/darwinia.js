import {GetStorage} from "../../../storage";

export const getAuthorship = (getStorage: GetStorage) => {
    return {

        /**
        * Uncles
        *
        * @return Vec<Enum<{InclusionHeight: U32, Uncle: ([U8; 32], Enum<{None: , Some: [U8; 32]}>)}>>
        */
        uncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Uncles');
        },

        /**
        * Author of current block.
        *
        * @return AccountId32: [U8; 32]
        */
        author: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Author');
        },

        /**
        * Whether uncles were already set in this block.
        *
        * @return Bool
        */
        didSetUncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'DidSetUncles');
        },
    };
};
