import {GetStorage} from "../storage";

export const democracy = {
    publicPropCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'PublicPropCount');
    },
    publicProps: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'PublicProps');
    },
    depositOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'DepositOf', param0);
    },
    preimages: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'Preimages', param0);
    },
    referendumCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'ReferendumCount');
    },
    lowestUnbaked: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'LowestUnbaked');
    },
    referendumInfoOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'ReferendumInfoOf', param0);
    },
    votingOf: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'VotingOf', param0);
    },
    locks: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'Locks', param0);
    },
    lastTabledWasExternal: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'LastTabledWasExternal');
    },
    nextExternal: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'NextExternal');
    },
    blacklist: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'Blacklist', param0);
    },
    cancellations: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Democracy', 'Cancellations', param0);
    },
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Democracy', 'StorageVersion');
    },
};