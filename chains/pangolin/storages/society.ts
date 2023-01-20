import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangolin/society/storages
 */
export const getSociety = (getStorage: GetStorage) => {
    return {

        /**
         * The first member.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        founder: async (): Promise<string | null> => {
            return await getStorage('Society', 'Founder');
        },

        /**
         * A hash of the rules of this society concerning membership. Can only be set once and
         * only by the founder.
         *
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        rules: async (): Promise<string | null> => {
            return await getStorage('Society', 'Rules');
        },

        /**
         * The current set of candidates; bidders that are attempting to become members.
         *
         * @returns {Promise<string | null>} Vec<{who: [U8; 32], kind: Enum<{0/Deposit: U128, 1/Vouch: ([U8; 32], U128)}>, value: U128}>
         */
        candidates: async (): Promise<string | null> => {
            return await getStorage('Society', 'Candidates');
        },

        /**
         * The set of suspended candidates.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} (U128, Enum<{0/Deposit: U128, 1/Vouch: ([U8; 32], U128)}>)
         */
        suspendedCandidates: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'SuspendedCandidates', param0);
        },

        /**
         * Amount of our account balance that is specifically for the next round's bid(s).
         *
         * @returns {Promise<string | null>} U128
         */
        pot: async (): Promise<string | null> => {
            return await getStorage('Society', 'Pot');
        },

        /**
         * The most primary from the most recently approved members.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        head: async (): Promise<string | null> => {
            return await getStorage('Society', 'Head');
        },

        /**
         * The current set of members, ordered.
         *
         * @returns {Promise<string | null>} Vec<[U8; 32]>
         */
        members: async (): Promise<string | null> => {
            return await getStorage('Society', 'Members');
        },

        /**
         * The set of suspended members.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} Bool
         */
        suspendedMembers: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'SuspendedMembers', param0);
        },

        /**
         * The current bids, stored ordered by the value of the bid.
         *
         * @returns {Promise<string | null>} Vec<{who: [U8; 32], kind: Enum<{0/Deposit: U128, 1/Vouch: ([U8; 32], U128)}>, value: U128}>
         */
        bids: async (): Promise<string | null> => {
            return await getStorage('Society', 'Bids');
        },

        /**
         * Members currently vouching or banned from vouching again
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} VouchingStatus: Enum<{0/Vouching: , 1/Banned: }>
         */
        vouching: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'Vouching', param0);
        },

        /**
         * Pending payouts; ordered by block number, with the amount that should be paid out.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} Vec<(U32, U128)>
         */
        payouts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'Payouts', param0);
        },

        /**
         * The ongoing number of losing votes cast by the member.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} U32
         */
        strikes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'Strikes', param0);
        },

        /**
         * Double map from Candidate -> Voter -> (Maybe) Vote.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @param {unknown} param1 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} Vote: Enum<{0/Skeptic: , 1/Reject: , 2/Approve: }>
         */
        votes: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Society', 'Votes', param0, param1);
        },

        /**
         * The defending member currently being challenged.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        defender: async (): Promise<string | null> => {
            return await getStorage('Society', 'Defender');
        },

        /**
         * Votes for the defender.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} Vote: Enum<{0/Skeptic: , 1/Reject: , 2/Approve: }>
         */
        defenderVotes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Society', 'DefenderVotes', param0);
        },

        /**
         * The max number of members for the society at one time.
         *
         * @returns {Promise<string | null>} U32
         */
        maxMembers: async (): Promise<string | null> => {
            return await getStorage('Society', 'MaxMembers');
        },
    };
};
