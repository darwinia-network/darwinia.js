import {GetStorage} from "../../../storage";

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
        * @return Permill: U32
        */
        elasticity: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'Elasticity');
        },
    };
};
