import {GetStorage} from "../storage";

export const phragmenElection = {
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PhragmenElection', 'Members');
    },
    runnersUp: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PhragmenElection', 'RunnersUp');
    },
    candidates: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PhragmenElection', 'Candidates');
    },
    electionRounds: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PhragmenElection', 'ElectionRounds');
    },
    voting: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('PhragmenElection', 'Voting', param0);
    },
};