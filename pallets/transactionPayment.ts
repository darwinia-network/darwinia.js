import {GetStorage} from "../storage";

export const transactionPayment = {
    nextFeeMultiplier: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TransactionPayment', 'NextFeeMultiplier');
    },
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TransactionPayment', 'StorageVersion');
    },
};