import {GetStorage} from "../../storage";

export const getTransactionPayment = (getStorage: GetStorage) => {
    return {

        /**
        */
        nextFeeMultiplier: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'NextFeeMultiplier');
        },

        /**
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'StorageVersion');
        },
    };
};