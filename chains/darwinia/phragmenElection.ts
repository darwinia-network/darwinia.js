import {GetStorage} from "../../storage";

export const getPhragmenElection = (getStorage: GetStorage) => {
    return {

        /**
        * The current elected members.
        *
        * Invariant: Always sorted based on account id.
        */
        members: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Members');
        },

        /**
        * The current reserved runners-up.
        *
        * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
        * last (i.e. _best_) runner-up will be replaced.
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
        */
        candidates: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Candidates');
        },

        /**
        * The total number of vote rounds that have happened, excluding the upcoming one.
        */
        electionRounds: async (): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'ElectionRounds');
        },

        /**
        * Votes and locked stake of a particular voter.
        *
        * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
        */
        voting: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('PhragmenElection', 'Voting', param0);
        },
    };
};