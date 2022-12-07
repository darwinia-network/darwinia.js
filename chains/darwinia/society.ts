import {GetStorage} from "../../storage";

export default {
    founder: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Founder');
    },
    rules: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Rules');
    },
    candidates: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Candidates');
    },
    suspendedCandidates: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'SuspendedCandidates', param0);
    },
    pot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Pot');
    },
    head: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Head');
    },
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Members');
    },
    suspendedMembers: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'SuspendedMembers', param0);
    },
    bids: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Bids');
    },
    vouching: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'Vouching', param0);
    },
    payouts: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'Payouts', param0);
    },
    strikes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'Strikes', param0);
    },
    votes: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Society', 'Votes', param0, param1);
    },
    defender: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'Defender');
    },
    defenderVotes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Society', 'DefenderVotes', param0);
    },
    maxMembers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Society', 'MaxMembers');
    },
};