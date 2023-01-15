import {GetStorage} from "../../../src/storage";

export const getTransactionPayment = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @return FixedU128: U128
         */
        nextFeeMultiplier: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'NextFeeMultiplier');
        },

        /**
         *
         * @return Releases: Enum<{0/V1Ancient: , 1/V2: }>
         */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'StorageVersion');
        },
    };
};
