import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `AuraExt`'s storages.
 * 
 * `AuraExt`'s calls: {@link: module:koi/auraExt/calls}
 *
 * @module koi/auraExt/storages
 */
export const getAuraExt = (getStorage: GetStorage) => {
    return {

        /**
         * Serves as cache for the authorities.
         *
         * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
         * but we require the old authorities to verify the seal when validating a PoV. This will
         * always be updated to the latest AuRa authorities in `on_finalize`.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<[U8; 32]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('AuraExt', 'Authorities');
        },

        /**
         * Current slot paired with a number of authored blocks.
         *
         * Updated on each block initialization.
         *
         * @returns {Promise<string | null>} (U64, U32)
         */
        slotInfo: async (): Promise<string | null> => {
            return await getStorage('AuraExt', 'SlotInfo');
        },
    };
};
