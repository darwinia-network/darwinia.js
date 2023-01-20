import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/transactionPayment/storages
 */
export const getTransactionPayment = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @returns {Promise<string | null>} FixedU128: U128
         */
        nextFeeMultiplier: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'NextFeeMultiplier');
        },

        /**
         *
         * @returns {Promise<string | null>} Releases: Enum<{0/V1Ancient: , 1/V2: }>
         */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'StorageVersion');
        },
    };
};
