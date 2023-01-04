import {GetStorage} from "../../../storage";

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
        * @return Releases: Enum<{V1Ancient: , V2: }>
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'StorageVersion');
        },
    };
};
