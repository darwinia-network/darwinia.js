import {GetStorage} from "../../storage";

export default {
    requestCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'RequestCount');
    },
    initialHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'InitialHash');
    },
    bestFinalized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'BestFinalized');
    },
    importedHashes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHashes', param0);
    },
    importedHashesPointer: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHashesPointer');
    },
    importedHeaders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHeaders', param0);
    },
    currentAuthoritySet: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'CurrentAuthoritySet');
    },
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'PalletOwner');
    },
    isHalted: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaGrandpa', 'IsHalted');
    },
};