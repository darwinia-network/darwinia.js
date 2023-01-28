import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Preimage`'s storages.
 * 
 * `Preimage`'s calls: {@link: module:pangolin2/preimage/calls}
 *
 * @module pangolin2/preimage/storages
 */
export const getPreimage = (getStorage: GetStorage) => {
    return {

        /**
         * The request status of a given hash.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} RequestStatus: Enum<{0/Unrequested: {deposit: ([U8; 20], U128), len: U32}, 1/Requested: {deposit: Enum<{0/None: , 1/Some: ([U8; 20], U128)}>, count: U32, len: Enum<{0/None: , 1/Some: U32}>}}>
         */
        statusFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Preimage', 'StatusFor', param0);
        },

        /**
         *
         * @param {unknown} param0 ([U8; 32], U32)
         * @returns {Promise<string | null>} BoundedVec: Vec<U8>
         */
        preimageFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Preimage', 'PreimageFor', param0);
        },
    };
};
