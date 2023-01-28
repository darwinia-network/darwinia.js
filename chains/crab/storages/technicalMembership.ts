import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `TechnicalMembership`'s storages.
 * 
 * `TechnicalMembership`'s calls: {@link: module:crab/technicalMembership/calls}
 *
 * @module crab/technicalMembership/storages
 */
export const getTechnicalMembership = (getStorage: GetStorage) => {
    return {

        /**
         * The current membership, stored as an ordered Vec.
         *
         * @returns {Promise<string | null>} Vec<[U8; 32]>
         */
        members: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Members');
        },

        /**
         * The current prime member, if one exists.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        prime: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Prime');
        },
    };
};
