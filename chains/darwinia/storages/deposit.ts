import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Deposit`'s storages.
 * 
 * `Deposit`'s calls: {@link: module:darwinia/deposit/calls}
 *
 * @module darwinia/deposit/storages
 */
export const getDeposit = (getStorage: GetStorage) => {
    return {

        /**
         * All deposits.
         *
         * The items must be sorted by the id.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} BoundedVec: Vec<{id: U16, value: U128, start_time: U128, expired_time: U128, in_use: Bool}>
         */
        deposits: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Deposit', 'Deposits', param0);
        },
    };
};
