import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Beefy`'s storages.
 * 
 * `Beefy`'s calls: {@link: module:pangoro/beefy/calls}
 *
 * @module pangoro/beefy/storages
 */
export const getBeefy = (getStorage: GetStorage) => {
    return {

        /**
         * The current authorities set
         *
         * @returns {Promise<string | null>} Vec<[U8; 33]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'Authorities');
        },

        /**
         * The current validator set id
         *
         * @returns {Promise<string | null>} U64
         */
        validatorSetId: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'ValidatorSetId');
        },

        /**
         * Authorities set scheduled to be used with the next session
         *
         * @returns {Promise<string | null>} Vec<[U8; 33]>
         */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'NextAuthorities');
        },
    };
};
