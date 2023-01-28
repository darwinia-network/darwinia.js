import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Sudo`'s storages.
 * 
 * `Sudo`'s calls: {@link: module:darwinia/sudo/calls}
 *
 * @module darwinia/sudo/storages
 */
export const getSudo = (getStorage: GetStorage) => {
    return {

        /**
         * The `AccountId` of the sudo key.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        key: async (): Promise<string | null> => {
            return await getStorage('Sudo', 'Key');
        },
    };
};
