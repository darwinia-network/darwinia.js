import {GetStorage} from "../../storage";

export default {

    /**
     * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     * This has the insecure enumerable hash function since the key itself is already
     * guaranteed to be a secure hash.
     */
    tips: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('Tips', 'Tips', param0);
    },

    /**
     * Simple preimage lookup from the reason&#39;s hash to the original data. Again, has an
     * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    reasons: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('Tips', 'Reasons', param0);
    },
};