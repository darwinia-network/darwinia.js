import {GetStorage} from "../storage";

export const session = {
    validators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'Validators');
    },
    currentIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'CurrentIndex');
    },
    queuedChanged: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'QueuedChanged');
    },
    queuedKeys: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'QueuedKeys');
    },
    disabledValidators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'DisabledValidators');
    },
    nextKeys: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Session', 'NextKeys', param0);
    },
    keyOwner: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Session', 'KeyOwner', param0);
    },
};