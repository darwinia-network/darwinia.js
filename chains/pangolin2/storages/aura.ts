import {GetStorage} from "../../../src/storage";

export const getAura = (getStorage: GetStorage) => {
    return {

        /**
         * The current authority set.
         *
         * @return BoundedVec: Vec<[U8; 32]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Aura', 'Authorities');
        },

        /**
         * The current slot of this block.
         *
         * This will be set in `on_initialize`.
         *
         * @return Slot: U64
         */
        currentSlot: async (): Promise<string | null> => {
            return await getStorage('Aura', 'CurrentSlot');
        },
    };
};
