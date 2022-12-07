import {GetStorage} from "../../storage";

export default {
    bestParaHeads: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeKusamaParachain', 'BestParaHeads', param0);
    },
    importedParaHeads: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('BridgeKusamaParachain', 'ImportedParaHeads', param0, param1);
    },
    importedParaHashes: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('BridgeKusamaParachain', 'ImportedParaHashes', param0, param1);
    },
};