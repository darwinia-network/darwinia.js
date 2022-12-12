import {GetStorage} from "../../storage";

export const getEVM = (getStorage: GetStorage) => {
    return {

        /**
        */
        accountCodes: async (param0: unknown /* H160: [U8; 20] */): Promise<string | null> => {
            return await getStorage('EVM', 'AccountCodes', param0);
        },

        /**
        */
        accountStorages: async (param0: unknown /* H160: [U8; 20] */, param1: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('EVM', 'AccountStorages', param0, param1);
        },
    };
};