import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Authorship`'s storages.
 * 
 * `Authorship`'s calls: {@link: module:pangolin/authorship/calls}
 *
 * @module pangolin/authorship/storages
 */
export const getAuthorship = (getStorage: GetStorage) => {
    return {

        /**
         * Author of current block.
         *
         * @returns {Promise<string | null>} AccountId20: [U8; 20]
         */
        author: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Author');
        },
    };
};
