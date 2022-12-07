import {GetStorage} from "../../storage";

export default {
    bestParaHeads: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgePolkadotParachain', 'BestParaHeads', param0);
    },
    importedParaHeads: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('BridgePolkadotParachain', 'ImportedParaHeads', param0, param1);
    },
    importedParaHashes: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('BridgePolkadotParachain', 'ImportedParaHashes', param0, param1);
    },
};