import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Whitelist`'s storages.
 * 
 * `Whitelist`'s calls: {@link: module:darwinia/whitelist/calls}
 *
 * @module darwinia/whitelist/storages
 */
export const getWhitelist = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} ()
         */
        whitelistedCall: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Whitelist', 'WhitelistedCall', param0);
        },
    };
};
