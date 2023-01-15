import {GetStorage} from "../../../src/storage";

export const getAuthorship = (getStorage: GetStorage) => {
    return {

        /**
         * Uncles
         *
         * @return BoundedVec: Vec<Enum<{0/InclusionHeight: U32, 1/Uncle: ([U8; 32], Enum<{0/None: , 1/Some: [U8; 20]}>)}>>
         */
        uncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Uncles');
        },

        /**
         * Author of current block.
         *
         * @return AccountId20: [U8; 20]
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
