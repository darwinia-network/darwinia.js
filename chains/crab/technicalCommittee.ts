import {GetStorage} from "../../storage";

export default {

    /**
     * The hashes of the active proposals.
     */
    proposals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Proposals');
    },

    /**
     * Actual proposal for a given hash, if it&#39;s current.
     */
    proposalOf: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'ProposalOf', param0);
    },

    /**
     * Votes on a given proposal, if it is ongoing.
     */
    voting: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Voting', param0);
    },

    /**
     * Proposals so far.
     */
    proposalCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'ProposalCount');
    },

    /**
     * The current members of the collective. This is stored sorted (just by value).
     */
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Members');
    },

    /**
     * The prime member that helps determine the default vote behavior in case of absentations.
     */
    prime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalCommittee', 'Prime');
    },
};