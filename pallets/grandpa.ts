import {GetStorage} from "../storage";

export const grandpa = {
    state: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Grandpa', 'State');
    },
    pendingChange: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Grandpa', 'PendingChange');
    },
    nextForced: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Grandpa', 'NextForced');
    },
    stalled: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Grandpa', 'Stalled');
    },
    currentSetId: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Grandpa', 'CurrentSetId');
    },
    setIdSession: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Grandpa', 'SetIdSession', param0);
    },
};