import {GetStorage} from "../../storage";

export const getBaseFee = (getStorage: GetStorage) => {
    return {

        /**
        */
        baseFeePerGas: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'BaseFeePerGas');
        },

        /**
        */
        isActive: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'IsActive');
        },

        /**
        */
        elasticity: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'Elasticity');
        },
    };
};