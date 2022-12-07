import {GetStorage} from "../storage";

export const electionProviderMultiPhase = {
    round: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'Round');
    },
    currentPhase: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'CurrentPhase');
    },
    queuedSolution: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'QueuedSolution');
    },
    snapshot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'Snapshot');
    },
    desiredTargets: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'DesiredTargets');
    },
    snapshotMetadata: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SnapshotMetadata');
    },
    signedSubmissionNextIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionNextIndex');
    },
    signedSubmissionIndices: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionIndices');
    },
    signedSubmissionsMap: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionsMap', param0);
    },
    minimumUntrustedScore: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'MinimumUntrustedScore');
    },
};