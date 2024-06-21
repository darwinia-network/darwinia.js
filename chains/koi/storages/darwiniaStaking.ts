import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `DarwiniaStaking`'s storages.
 * 
 * `DarwiniaStaking`'s calls: {@link: module:koi/darwiniaStaking/calls}
 *
 * @module koi/darwiniaStaking/storages
 */
export const getDarwiniaStaking = (getStorage: GetStorage) => {
    return {

        /**
         * All staking ledgers.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Ledger: {ring: U128, deposits: Vec<U16>}
         */
        ledgers: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'Ledgers', param0);
        },

        /**
         * The map from (wannabe) collator to the preferences of that collator.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Perbill: U32
         */
        collators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'Collators', param0);
        },

        /**
         * Exposure cache states.
         *
         * To avoid extra DB RWs during new session, such as:
         * ```nocompile
         * previous = current;
         * current = next;
         * next = elect();
         * ```
         *
         * Now, with data:
         * ```nocompile
         * cache1 == previous;
         * cache2 == current;
         * cache3 == next;
         * ```
         * Just need to shift the marker and write the storage map once:
         * ```nocompile
         * mark(cache3, current);
         * mark(cache2, previous);
         * mark(cache1, next);
         * cache1 = elect();
         * ```
         *
         * @returns {Promise<string | null>} (Enum<{0/Previous: , 1/Current: , 2/Next: }>, Enum<{0/Previous: , 1/Current: , 2/Next: }>, Enum<{0/Previous: , 1/Current: , 2/Next: }>)
         */
        exposureCacheStates: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'ExposureCacheStates');
        },

        /**
         * Exposure cache 0.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Exposure: {commission: U32, vote: U128, nominators: Vec<{who: [U8; 20], vote: U128}>}
         */
        exposureCache0: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'ExposureCache0', param0);
        },

        /**
         * Exposure cache 1.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Exposure: {commission: U32, vote: U128, nominators: Vec<{who: [U8; 20], vote: U128}>}
         */
        exposureCache1: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'ExposureCache1', param0);
        },

        /**
         * Exposure cache 2.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Exposure: {commission: U32, vote: U128, nominators: Vec<{who: [U8; 20], vote: U128}>}
         */
        exposureCache2: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'ExposureCache2', param0);
        },

        /**
         * The ideal number of active collators.
         *
         * @returns {Promise<string | null>} U32
         */
        collatorCount: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'CollatorCount');
        },

        /**
         * The map from nominator to their nomination preferences, namely the collator that
         * they wish to support.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} AccountId20: [U8; 20]
         */
        nominators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'Nominators', param0);
        },

        /**
         * Number of blocks authored by the collator within current session.
         *
         * @returns {Promise<string | null>} (U32, Vec<([U8; 20], U32)>)
         */
        authoredBlocksCount: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'AuthoredBlocksCount');
        },

        /**
         * All outstanding rewards since the last payment.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} U128
         */
        pendingRewards: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'PendingRewards', param0);
        },

        /**
         * Active session's start-time.
         *
         * @returns {Promise<string | null>} U128
         */
        sessionStartTime: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'SessionStartTime');
        },

        /**
         * Elapsed time.
         *
         * @returns {Promise<string | null>} U128
         */
        elapsedTime: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'ElapsedTime');
        },

        /**
         * Rate limit.
         *
         * The maximum amount of RING that can be staked or unstaked in one session.
         *
         * @returns {Promise<string | null>} U128
         */
        rateLimit: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'RateLimit');
        },

        /**
         * Rate limit state.
         *
         * Tracks the rate limit state in a session.
         *
         * @returns {Promise<string | null>} RateLimiter: Enum<{0/Pos: U128, 1/Neg: U128}>
         */
        rateLimitState: async (): Promise<string | null> => {
            return await getStorage('DarwiniaStaking', 'RateLimitState');
        },
    };
};
