import {GetStorage} from "../../storage";

export default {

    /**
     * Number of proposals that have been made.
     */
    proposalCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Treasury', 'ProposalCount');
    },

    /**
     * Proposals that have been made.
     */
    proposals: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('Treasury', 'Proposals', param0);
    },

    /**
     * Proposal indices that have been approved but not yet awarded.
     */
    approvals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Treasury', 'Approvals');
    },
};