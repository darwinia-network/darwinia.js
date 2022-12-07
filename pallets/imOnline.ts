import {GetStorage} from "../storage";

export const imOnline = {
    heartbeatAfter: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ImOnline', 'HeartbeatAfter');
    },
    keys: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ImOnline', 'Keys');
    },
    receivedHeartbeats: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('ImOnline', 'ReceivedHeartbeats', param0, param1);
    },
    authoredBlocks: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('ImOnline', 'AuthoredBlocks', param0, param1);
    },
};