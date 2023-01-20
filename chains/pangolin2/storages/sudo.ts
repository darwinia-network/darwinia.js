import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangolin2/sudo/storages
 */
export const getSudo = (getStorage: GetStorage) => {
    return {

        /**
         * The `AccountId` of the sudo key.
         *
         * @returns {Promise<string | null>} AccountId20: [U8; 20]
         */
        key: async (): Promise<string | null> => {
            return await getStorage('Sudo', 'Key');
        },
    };
};
