import {GetStorage} from "../storage";

export const technicalCommittee = {
    proposals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Proposals');
    },
    proposalOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'ProposalOf', param0);
    },
    voting: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Voting', param0);
    },
    proposalCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'ProposalCount');
    },
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Members');
    },
    prime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Prime');
    },
};