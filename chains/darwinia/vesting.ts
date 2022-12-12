import {GetStorage} from "../../storage";

export default {

    /**
     * Information regarding the vesting of a given account.
     */
    vesting: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Vesting', 'Vesting', param0);
    },

    /**
     * Storage version of the pallet.
     *
     * New networks start with latest version, as determined by the genesis build.
     */
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Vesting', 'StorageVersion');
    },
};