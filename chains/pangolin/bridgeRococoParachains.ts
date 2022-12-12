import {GetStorage} from "../../storage";

export default {

    /**
     * Best parachain heads.
     */
    bestParaHeads: async (getStorage: GetStorage, param0: unknown /* ParaId: U32 */): Promise<string | null> => {
        return await getStorage('BridgeRococoParachains', 'BestParaHeads', param0);
    },

    /**
     * Parachain heads which have been imported into the pallet.
     */
    importedParaHeads: async (getStorage: GetStorage, param0: unknown /* ParaId: U32 */, param1: unknown /* H256: [U8; 32] */): Promise<string | null> => {
        return await getStorage('BridgeRococoParachains', 'ImportedParaHeads', param0, param1);
    },

    /**
     * A ring buffer of imported parachain head hashes. Ordered by the insertion time.
     */
    importedParaHashes: async (getStorage: GetStorage, param0: unknown /* ParaId: U32 */, param1: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('BridgeRococoParachains', 'ImportedParaHashes', param0, param1);
    },
};