import {GetStorage} from "../storage";

export const baseFee = {
    baseFeePerGas: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BaseFee', 'BaseFeePerGas');
    },
    isActive: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BaseFee', 'IsActive');
    },
    elasticity: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BaseFee', 'Elasticity');
    },
};