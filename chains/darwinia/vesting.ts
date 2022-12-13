import {GetStorage} from "../../storage";

export const getVesting = (getStorage: GetStorage) => {
    return {

        /**
        * Information regarding the vesting of a given account.
        */
        vesting: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Vesting', 'Vesting', param0);
        },

        /**
        * Storage version of the pallet.
        *
        * New networks start with latest version, as determined by the genesis build.
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Vesting', 'StorageVersion');
        },
    };
};