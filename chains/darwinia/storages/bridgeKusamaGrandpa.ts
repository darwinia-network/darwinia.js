import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `BridgeKusamaGrandpa`'s storages.
 * 
 * `BridgeKusamaGrandpa`'s calls: {@link: module:darwinia/bridgeKusamaGrandpa/calls}
 *
 * @module darwinia/bridgeKusamaGrandpa/storages
 */
export const getBridgeKusamaGrandpa = (getStorage: GetStorage) => {
    return {

        /**
         * The current number of requests which have written to storage.
         *
         * If the `RequestCount` hits `MaxRequests`, no more calls will be allowed to the pallet until
         * the request capacity is increased.
         *
         * The `RequestCount` is decreased by one at the beginning of every block. This is to ensure
         * that the pallet can always make progress.
         *
         * @returns {Promise<string | null>} U32
         */
        requestCount: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'RequestCount');
        },

        /**
         * Hash of the header used to bootstrap the pallet.
         *
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        initialHash: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'InitialHash');
        },

        /**
         * Hash of the best finalized header.
         *
         * @returns {Promise<string | null>} (U32, [U8; 32])
         */
        bestFinalized: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'BestFinalized');
        },

        /**
         * A ring buffer of imported hashes. Ordered by the insertion time.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        importedHashes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'ImportedHashes', param0);
        },

        /**
         * Current ring buffer position.
         *
         * @returns {Promise<string | null>} U32
         */
        importedHashesPointer: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'ImportedHashesPointer');
        },

        /**
         * Headers which have been imported into the pallet.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} Header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}
         */
        importedHeaders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'ImportedHeaders', param0);
        },

        /**
         * The current GRANDPA Authority set.
         *
         * @returns {Promise<string | null>} StoredAuthoritySet: {authorities: Vec<([U8; 32], U64)>, set_id: U64}
         */
        currentAuthoritySet: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'CurrentAuthoritySet');
        },

        /**
         * Optional pallet owner.
         *
         * Pallet owner has a right to halt all pallet operations and then resume it. If it is
         * `None`, then there are no direct ways to halt/resume pallet operations, but other
         * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
         * flag directly or call the `halt_operations`).
         *
         * @returns {Promise<string | null>} AccountId20: [U8; 20]
         */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'PalletOwner');
        },

        /**
         * The current operating mode of the pallet.
         *
         * Depending on the mode either all, or no transactions will be allowed.
         *
         * @returns {Promise<string | null>} BasicOperatingMode: Enum<{0/Normal: , 1/Halted: }>
         */
        palletOperatingMode: async (): Promise<string | null> => {
            return await getStorage('BridgeKusamaGrandpa', 'PalletOperatingMode');
        },
    };
};
