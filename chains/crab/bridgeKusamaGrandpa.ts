import {GetStorage} from "../../storage";

export default {

    /**
     * The current number of requests which have written to storage.
     *
     * If the `RequestCount` hits `MaxRequests`, no more calls will be allowed to the pallet until
     * the request capacity is increased.
     *
     * The `RequestCount` is decreased by one at the beginning of every block. This is to ensure
     * that the pallet can always make progress.
     */
    requestCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'RequestCount');
    },

    /**
     * Hash of the header used to bootstrap the pallet.
     */
    initialHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'InitialHash');
    },

    /**
     * Hash of the best finalized header.
     */
    bestFinalized: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'BestFinalized');
    },

    /**
     * A ring buffer of imported hashes. Ordered by the insertion time.
     */
    importedHashes: async (getStorage: GetStorage, param0: unknown /* : U32 */): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHashes', param0);
    },

    /**
     * Current ring buffer position.
     */
    importedHashesPointer: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHashesPointer');
    },

    /**
     * Headers which have been imported into the pallet.
     */
    importedHeaders: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'ImportedHeaders', param0);
    },

    /**
     * The current GRANDPA Authority set.
     */
    currentAuthoritySet: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'CurrentAuthoritySet');
    },

    /**
     * Optional pallet owner.
     *
     * Pallet owner has a right to halt all pallet operations and then resume it. If it is
     * `None`, then there are no direct ways to halt/resume pallet operations, but other
     * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
     * flag directly or call the `halt_operations`).
     */
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'PalletOwner');
    },

    /**
     * If true, all pallet transactions are failed immediately.
     */
    isHalted: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeKusamaGrandpa', 'IsHalted');
    },
};