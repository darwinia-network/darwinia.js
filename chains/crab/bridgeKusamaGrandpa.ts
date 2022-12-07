import {GetStorage} from "../../storage";

export default {
    requestCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'RequestCount');
    },
    initialHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'InitialHash');
    },
    bestFinalized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'BestFinalized');
    },
    importedHashes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHashes', param0);
    },
    importedHashesPointer: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHashesPointer');
    },
    importedHeaders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHeaders', param0);
    },
    currentAuthoritySet: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'CurrentAuthoritySet');
    },
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'PalletOwner');
    },
    isHalted: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'IsHalted');
    },
};