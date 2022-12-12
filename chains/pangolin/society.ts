import {GetStorage} from "../../storage";

export const getSociety = (getStorage: GetStorage) => {
    return {

        /**
        * The first member.
        */
        founder: async (): Promise<string | null> => {
            return await getStorage('Society', 'Founder');
        },

        /**
        * A hash of the rules of this society concerning membership. Can only be set once and
        * only by the founder.
        */
        rules: async (): Promise<string | null> => {
            return await getStorage('Society', 'Rules');
        },

        /**
        * The current set of candidates; bidders that are attempting to become members.
        */
        candidates: async (): Promise<string | null> => {
            return await getStorage('Society', 'Candidates');
        },

        /**
        * The set of suspended candidates.
        */
        suspendedCandidates: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'SuspendedCandidates', param0);
        },

        /**
        * Amount of our account balance that is specifically for the next round&#39;s bid(s).
        */
        pot: async (): Promise<string | null> => {
            return await getStorage('Society', 'Pot');
        },

        /**
        * The most primary from the most recently approved members.
        */
        head: async (): Promise<string | null> => {
            return await getStorage('Society', 'Head');
        },

        /**
        * The current set of members, ordered.
        */
        members: async (): Promise<string | null> => {
            return await getStorage('Society', 'Members');
        },

        /**
        * The set of suspended members.
        */
        suspendedMembers: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'SuspendedMembers', param0);
        },

        /**
        * The current bids, stored ordered by the value of the bid.
        */
        bids: async (): Promise<string | null> => {
            return await getStorage('Society', 'Bids');
        },

        /**
        * Members currently vouching or banned from vouching again
        */
        vouching: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'Vouching', param0);
        },

        /**
        * Pending payouts; ordered by block number, with the amount that should be paid out.
        */
        payouts: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'Payouts', param0);
        },

        /**
        * The ongoing number of losing votes cast by the member.
        */
        strikes: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'Strikes', param0);
        },

        /**
        * Double map from Candidate -&gt; Voter -&gt; (Maybe) Vote.
        */
        votes: async (param0: unknown /* AccountId32: [U8; 32] */, param1: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'Votes', param0, param1);
        },

        /**
        * The defending member currently being challenged.
        */
        defender: async (): Promise<string | null> => {
            return await getStorage('Society', 'Defender');
        },

        /**
        * Votes for the defender.
        */
        defenderVotes: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Society', 'DefenderVotes', param0);
        },

        /**
        * The max number of members for the society at one time.
        */
        maxMembers: async (): Promise<string | null> => {
            return await getStorage('Society', 'MaxMembers');
        },
    };
};