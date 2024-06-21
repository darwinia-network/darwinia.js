import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `TxPause`'s storages.
 * 
 * `TxPause`'s calls: {@link: module:crab/txPause/calls}
 *
 * @module crab/txPause/storages
 */
export const getTxPause = (getStorage: GetStorage) => {
    return {

        /**
         * The set of calls that are explicitly paused.
         *
         * @param {unknown} param0 (Vec<U8>, Vec<U8>)
         * @returns {Promise<string | null>} ()
         */
        pausedCalls: async (param0: unknown): Promise<string | null> => {
            return await getStorage('TxPause', 'PausedCalls', param0);
        },
    };
};
