import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/bounties/storages
 */
export const getBounties = (getStorage: GetStorage) => {
    return {

        /**
         * Number of bounty proposals that have been made.
         *
         * @returns {Promise<string | null>} U32
         */
        bountyCount: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyCount');
        },

        /**
         * Bounties that have been made.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} Bounty: {proposer: [U8; 32], value: U128, fee: U128, curator_deposit: U128, bond: U128, status: Enum<{0/Proposed: , 1/Approved: , 2/Funded: , 3/CuratorProposed: {curator: [U8; 32]}, 4/Active: {curator: [U8; 32], update_due: U32}, 5/PendingPayout: {curator: [U8; 32], beneficiary: [U8; 32], unlock_at: U32}}>}
         */
        bounties: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Bounties', 'Bounties', param0);
        },

        /**
         * The description of each bounty.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} Vec<U8>
         */
        bountyDescriptions: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyDescriptions', param0);
        },

        /**
         * Bounty indices that have been approved but not yet funded.
         *
         * @returns {Promise<string | null>} Vec<U32>
         */
        bountyApprovals: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyApprovals');
        },
    };
};
