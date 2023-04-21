import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `PhragmenElection`'s storages.
 * 
 * `PhragmenElection`'s calls: {@link: module:darwinia/phragmenElection/calls}
 *
 * @module darwinia/phragmenElection/storages
 */
export const getPhragmenElection = (getStorage: GetStorage) => {
    return {

        /**
         * The current elected members.
         *
         * Invariant: Always sorted based on account id.
         *
         * @returns {Promise<string | null>} Vec<{who: [U8; 20], stake: U128, deposit: U128}>
         */
        members: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Members');
        },

        /**
         * The current reserved runners-up.
         *
         * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
         * last (i.e. _best_) runner-up will be replaced.
         *
         * @returns {Promise<string | null>} Vec<{who: [U8; 20], stake: U128, deposit: U128}>
         */
        runnersUp: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'RunnersUp');
        },

        /**
         * The present candidate list. A current member or runner-up can never enter this vector
         * and is always implicitly assumed to be a candidate.
         *
         * Second element is the deposit.
         *
         * Invariant: Always sorted based on account id.
         *
         * @returns {Promise<string | null>} Vec<([U8; 20], U128)>
         */
        candidates: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Candidates');
        },

        /**
         * The total number of vote rounds that have happened, excluding the upcoming one.
         *
         * @returns {Promise<string | null>} U32
         */
        electionRounds: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'ElectionRounds');
        },

        /**
         * Votes and locked stake of a particular voter.
         *
         * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Voter: {votes: Vec<[U8; 20]>, stake: U128, deposit: U128}
         */
        voting: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Voting', param0);
        },
    };
};
