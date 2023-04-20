import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Tips`'s storages.
 * 
 * `Tips`'s calls: {@link: module:darwinia/tips/calls}
 *
 * @module darwinia/tips/storages
 */
export const getTips = (getStorage: GetStorage) => {
    return {

        /**
         * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
         * This has the insecure enumerable hash function since the key itself is already
         * guaranteed to be a secure hash.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} OpenTip: {reason: [U8; 32], who: [U8; 20], finder: [U8; 20], deposit: U128, closes: Enum<{0/None: , 1/Some: U32}>, tips: Vec<([U8; 20], U128)>, finders_fee: Bool}
         */
        tips: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Tips', 'Tips', param0);
        },

        /**
         * Simple preimage lookup from the reason's hash to the original data. Again, has an
         * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} Vec<U8>
         */
        reasons: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Tips', 'Reasons', param0);
        },
    };
};
