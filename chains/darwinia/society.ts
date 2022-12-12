import {GetStorage} from "../../storage";

export default {

    /**
     * The first member.
     */
    founder: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Founder');
    },

    /**
     * A hash of the rules of this society concerning membership. Can only be set once and
     * only by the founder.
     */
    rules: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Rules');
    },

    /**
     * The current set of candidates; bidders that are attempting to become members.
     */
    candidates: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Candidates');
    },

    /**
     * The set of suspended candidates.
     */
    suspendedCandidates: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'SuspendedCandidates', param0);
    },

    /**
     * Amount of our account balance that is specifically for the next round&#39;s bid(s).
     */
    pot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Pot');
    },

    /**
     * The most primary from the most recently approved members.
     */
    head: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Head');
    },

    /**
     * The current set of members, ordered.
     */
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Members');
    },

    /**
     * The set of suspended members.
     */
    suspendedMembers: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'SuspendedMembers', param0);
    },

    /**
     * The current bids, stored ordered by the value of the bid.
     */
    bids: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Bids');
    },

    /**
     * Members currently vouching or banned from vouching again
     */
    vouching: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'Vouching', param0);
    },

    /**
     * Pending payouts; ordered by block number, with the amount that should be paid out.
     */
    payouts: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'Payouts', param0);
    },

    /**
     * The ongoing number of losing votes cast by the member.
     */
    strikes: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'Strikes', param0);
    },

    /**
     * Double map from Candidate -&gt; Voter -&gt; (Maybe) Vote.
     */
    votes: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */, param1: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'Votes', param0, param1);
    },

    /**
     * The defending member currently being challenged.
     */
    defender: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Defender');
    },

    /**
     * Votes for the defender.
     */
    defenderVotes: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Society', 'DefenderVotes', param0);
    },

    /**
     * The max number of members for the society at one time.
     */
    maxMembers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'MaxMembers');
    },
};