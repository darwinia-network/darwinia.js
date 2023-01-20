import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/baseFee/storages
 */
export const getBaseFee = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @returns {Promise<string | null>} U256: [U64; 4]
         */
        baseFeePerGas: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'BaseFeePerGas');
        },

        /**
         *
         * @returns {Promise<string | null>} Bool
         */
        isActive: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'IsActive');
        },

        /**
         *
         * @returns {Promise<string | null>} Permill: U32
         */
        elasticity: async (): Promise<string | null> => {
            return await getStorage('BaseFee', 'Elasticity');
        },
    };
};
