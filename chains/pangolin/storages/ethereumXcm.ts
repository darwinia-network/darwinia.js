import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `EthereumXcm`'s storages.
 * 
 * `EthereumXcm`'s calls: {@link: module:pangolin/ethereumXcm/calls}
 *
 * @module pangolin/ethereumXcm/storages
 */
export const getEthereumXcm = (getStorage: GetStorage) => {
    return {

        /**
         * Global nonce used for building Ethereum transaction payload.
         *
         * @returns {Promise<string | null>} U256: [U64; 4]
         */
        nonce: async (): Promise<string | null> => {
            return await getStorage('EthereumXcm', 'Nonce');
        },

        /**
         * Whether or not Ethereum-XCM is suspended from executing
         *
         * @returns {Promise<string | null>} Bool
         */
        ethereumXcmSuspended: async (): Promise<string | null> => {
            return await getStorage('EthereumXcm', 'EthereumXcmSuspended');
        },
    };
};
