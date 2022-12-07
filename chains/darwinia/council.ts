import {GetStorage} from "../../storage";

export default {
    proposals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Council', 'Proposals');
    },
    proposalOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Council', 'ProposalOf', param0);
    },
    voting: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Council', 'Voting', param0);
    },
    proposalCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Council', 'ProposalCount');
    },
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Council', 'Members');
    },
    prime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Council', 'Prime');
    },
};