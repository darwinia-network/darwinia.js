import {GetStorage} from "../../../storage";

export const getVesting = (getStorage: GetStorage) => {
    return {

        /**
         * Information regarding the vesting of a given account.
         *
         * @param param0: AccountId32: [U8; 32]
         * @return BoundedVec: Vec<{locked: U128, per_block: U128, starting_block: U32}>
         */
        vesting: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Vesting', 'Vesting', param0);
        },

        /**
         * Storage version of the pallet.
         *
         * New networks start with latest version, as determined by the genesis build.
         *
         * @return Releases: Enum<{0/V0: , 1/V1: }>
         */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Vesting', 'StorageVersion');
        },
    };
};
