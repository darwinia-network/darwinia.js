import {GetStorage} from "../../storage";

export default {
    account: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('System', 'Account', param0);
    },
    extrinsicCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ExtrinsicCount');
    },
    blockWeight: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'BlockWeight');
    },
    allExtrinsicsLen: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'AllExtrinsicsLen');
    },
    blockHash: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('System', 'BlockHash', param0);
    },
    extrinsicData: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('System', 'ExtrinsicData', param0);
    },
    number: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Number');
    },
    parentHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ParentHash');
    },
    digest: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Digest');
    },
    events: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Events');
    },
    eventCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'EventCount');
    },
    eventTopics: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('System', 'EventTopics', param0);
    },
    lastRuntimeUpgrade: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'LastRuntimeUpgrade');
    },
    upgradedToU32RefCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'UpgradedToU32RefCount');
    },
    upgradedToTripleRefCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'UpgradedToTripleRefCount');
    },
    executionPhase: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ExecutionPhase');
    },
};