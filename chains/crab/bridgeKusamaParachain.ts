import {GetStorage} from "../../storage";

export const getBridgeKusamaParachain = (getStorage: GetStorage) => {
    return {

        /**
        * Best parachain heads.
        */
        bestParaHeads: async (param0: unknown /* ParaId: U32 */): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'BestParaHeads', param0);
        },

        /**
        * Parachain heads which have been imported into the pallet.
        */
        importedParaHeads: async (param0: unknown /* ParaId: U32 */, param1: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'ImportedParaHeads', param0, param1);
        },

        /**
        * A ring buffer of imported parachain head hashes. Ordered by the insertion time.
        */
        importedParaHashes: async (param0: unknown /* ParaId: U32 */, param1: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'ImportedParaHashes', param0, param1);
        },
    };
};