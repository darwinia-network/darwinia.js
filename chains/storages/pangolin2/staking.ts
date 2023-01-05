import {GetStorage} from "../../../storage";

export const getStaking = (getStorage: GetStorage) => {
    return {

        /**
         * All staking ledgers.
         *
         * @param param0: AccountId20: [U8; 20]
         * @return Ledger: {staked_ring: U128, staked_kton: U128, staked_deposits: Vec<U16>, unstaking_ring: Vec<(U128, U32)>, unstaking_kton: Vec<(U128, U32)>, unstaking_deposits: Vec<(U16, U32)>}
         */
        ledgers: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Ledgers', param0);
        },

        /**
         * Total staked RING.
         *
         * This will count RING + deposit(locking RING).
         *
         * @return U128
         */
        ringPool: async (): Promise<string | null> => {
            return await getStorage('Staking', 'RingPool');
        },

        /**
         * Total staked KTON.
         *
         * @return U128
         */
        ktonPool: async (): Promise<string | null> => {
            return await getStorage('Staking', 'KtonPool');
        },

        /**
         * The map from (wannabe) collator to the preferences of that collator.
         *
         * @param param0: AccountId20: [U8; 20]
         * @return Perbill: U32
         */
        collators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Collators', param0);
        },

        /**
         * Stakers' exposure.
         *
         * @param param0: AccountId20: [U8; 20]
         * @return Exposure: {total: U32, nominators: Vec<{who: [U8; 20], value: U32}>}
         */
        exposures: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Exposures', param0);
        },

        /**
         * The ideal number of active collators.
         *
         * @return U32
         */
        collatorCount: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CollatorCount');
        },

        /**
         * The map from nominator to their nomination preferences, namely the collator that
         * they wish to support.
         *
         * @param param0: AccountId20: [U8; 20]
         * @return AccountId20: [U8; 20]
         */
        nominators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Nominators', param0);
        },

        /**
         * Collator's reward points.
         *
         * @return (U32, Vec<([U8; 20], U32)>)
         */
        rewardPoints: async (): Promise<string | null> => {
            return await getStorage('Staking', 'RewardPoints');
        },

        /**
         * Active session's start-time.
         *
         * @return U128
         */
        sessionStartTime: async (): Promise<string | null> => {
            return await getStorage('Staking', 'SessionStartTime');
        },

        /**
         * Elapsed time.
         *
         * @return U128
         */
        elapsedTime: async (): Promise<string | null> => {
            return await getStorage('Staking', 'ElapsedTime');
        },
    };
};
