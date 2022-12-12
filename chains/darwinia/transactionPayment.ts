import {GetStorage} from "../../storage";

export default {

    /**
     */
    nextFeeMultiplier: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TransactionPayment', 'NextFeeMultiplier');
    },

    /**
     */
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TransactionPayment', 'StorageVersion');
    },
};