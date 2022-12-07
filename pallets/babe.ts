import {GetStorage} from "../storage";

export const babe = {
    epochIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'EpochIndex');
    },
    authorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'Authorities');
    },
    genesisSlot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'GenesisSlot');
    },
    currentSlot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'CurrentSlot');
    },
    randomness: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'Randomness');
    },
    pendingEpochConfigChange: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'PendingEpochConfigChange');
    },
    nextRandomness: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'NextRandomness');
    },
    nextAuthorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'NextAuthorities');
    },
    segmentIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'SegmentIndex');
    },
    underConstruction: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Babe', 'UnderConstruction', param0);
    },
    initialized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'Initialized');
    },
    authorVrfRandomness: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'AuthorVrfRandomness');
    },
    epochStart: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'EpochStart');
    },
    lateness: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'Lateness');
    },
    epochConfig: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'EpochConfig');
    },
    nextEpochConfig: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Babe', 'NextEpochConfig');
    },
};