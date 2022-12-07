import {GetStorage} from "../../storage";

export default {
    requestCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'RequestCount');
    },
    initialHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'InitialHash');
    },
    bestFinalized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'BestFinalized');
    },
    importedHashes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'ImportedHashes', param0);
    },
    importedHashesPointer: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'ImportedHashesPointer');
    },
    importedHeaders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'ImportedHeaders', param0);
    },
    currentAuthoritySet: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'CurrentAuthoritySet');
    },
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'PalletOwner');
    },
    isHalted: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePolkadotGrandpa', 'IsHalted');
    },
};