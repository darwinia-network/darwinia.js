import {GetStorage} from "../../../src/storage";

export const getBaseFee = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @return U256: [U64; 4]
         */
        baseFeePerGas: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'BaseFeePerGas');
        },

        /**
         *
         * @return Bool
         */
        isActive: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'IsActive');
        },

        /**
         *
         * @return Permill: U32
         */
        elasticity: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'Elasticity');
        },
    };
};
