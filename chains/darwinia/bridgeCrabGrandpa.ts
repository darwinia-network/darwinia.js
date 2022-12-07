import {GetStorage} from "../../storage";

export default {
    requestCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'RequestCount');
    },
    initialHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'InitialHash');
    },
    bestFinalized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'BestFinalized');
    },
    importedHashes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'ImportedHashes', param0);
    },
    importedHashesPointer: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'ImportedHashesPointer');
    },
    importedHeaders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'ImportedHeaders', param0);
    },
    currentAuthoritySet: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'CurrentAuthoritySet');
    },
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'PalletOwner');
    },
    isHalted: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabGrandpa', 'IsHalted');
    },
};