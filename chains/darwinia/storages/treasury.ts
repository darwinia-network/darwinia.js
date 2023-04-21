import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Treasury`'s storages.
 * 
 * `Treasury`'s calls: {@link: module:darwinia/treasury/calls}
 *
 * @module darwinia/treasury/storages
 */
export const getTreasury = (getStorage: GetStorage) => {
    return {

        /**
         * Number of proposals that have been made.
         *
         * @returns {Promise<string | null>} U32
         */
        proposalCount: async (): Promise<string | null> => {
            return await getStorage('Treasury', 'ProposalCount');
        },

        /**
         * Proposals that have been made.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} Proposal: {proposer: [U8; 20], value: U128, beneficiary: [U8; 20], bond: U128}
         */
        proposals: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Treasury', 'Proposals', param0);
        },

        /**
         * The amount which has been reported as inactive to Currency.
         *
         * @returns {Promise<string | null>} U128
         */
        deactivated: async (): Promise<string | null> => {
            return await getStorage('Treasury', 'Deactivated');
        },

        /**
         * Proposal indices that have been approved but not yet awarded.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<U32>
         */
        approvals: async (): Promise<string | null> => {
            return await getStorage('Treasury', 'Approvals');
        },
    };
};
