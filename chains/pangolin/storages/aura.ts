import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Aura`'s storages.
 * 
 * `Aura`'s calls: {@link: module:pangolin/aura/calls}
 *
 * @module pangolin/aura/storages
 */
export const getAura = (getStorage: GetStorage) => {
    return {

        /**
         * The current authority set.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<[U8; 32]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Aura', 'Authorities');
        },

        /**
         * The current slot of this block.
         *
         * This will be set in `on_initialize`.
         *
         * @returns {Promise<string | null>} Slot: U64
         */
        currentSlot: async (): Promise<string | null> => {
            return await getStorage('Aura', 'CurrentSlot');
        },
    };
};
