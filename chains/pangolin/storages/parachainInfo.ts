import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `ParachainInfo`'s storages.
 * 
 * `ParachainInfo`'s calls: {@link: module:pangolin/parachainInfo/calls}
 *
 * @module pangolin/parachainInfo/storages
 */
export const getParachainInfo = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @returns {Promise<string | null>} Id: U32
         */
        parachainId: async (): Promise<string | null> => {
            return await getStorage('ParachainInfo', 'ParachainId');
        },
    };
};
