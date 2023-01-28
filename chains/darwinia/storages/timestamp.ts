import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Timestamp`'s storages.
 * 
 * `Timestamp`'s calls: {@link: module:darwinia/timestamp/calls}
 *
 * @module darwinia/timestamp/storages
 */
export const getTimestamp = (getStorage: GetStorage) => {
    return {

        /**
         * Current time for the current block.
         *
         * @returns {Promise<string | null>} U64
         */
        now: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'Now');
        },

        /**
         * Did the timestamp get updated in this block?
         *
         * @returns {Promise<string | null>} Bool
         */
        didUpdate: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'DidUpdate');
        },
    };
};
