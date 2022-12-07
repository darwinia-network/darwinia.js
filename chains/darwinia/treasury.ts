import {GetStorage} from "../../storage";

export default {
    proposalCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Treasury', 'ProposalCount');
    },
    proposals: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Treasury', 'Proposals', param0);
    },
    approvals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Treasury', 'Approvals');
    },
};