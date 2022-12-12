import {GetStorage} from "../../storage";

export const getKtonTreasury = (getStorage: GetStorage) => {
    return {

        /**
        * Number of proposals that have been made.
        */
        proposalCount: async (): Promise<string | null> => {
            return await getStorage('KtonTreasury', 'ProposalCount');
        },

        /**
        * Proposals that have been made.
        */
        proposals: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('KtonTreasury', 'Proposals', param0);
        },

        /**
        * Proposal indices that have been approved but not yet awarded.
        */
        approvals: async (): Promise<string | null> => {
            return await getStorage('KtonTreasury', 'Approvals');
        },
    };
};