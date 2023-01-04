import {GetStorage} from "../../../storage";

export const getBridgeDarwiniaGrandpa = (getStorage: GetStorage) => {
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
        * @return U32
        */
        requestCount: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'RequestCount');
        },

        /**
        * Hash of the header used to bootstrap the pallet.
        *
        * @return H256: [U8; 32]
        */
        initialHash: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'InitialHash');
        },

        /**
        * Hash of the best finalized header.
        *
        * @return H256: [U8; 32]
        */
        bestFinalized: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'BestFinalized');
        },

        /**
        * A ring buffer of imported hashes. Ordered by the insertion time.
        *
        * @param param0: U32
        * @return H256: [U8; 32]
        */
        importedHashes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHashes', param0);
        },

        /**
        * Current ring buffer position.
        *
        * @return U32
        */
        importedHashesPointer: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHashesPointer');
        },

        /**
        * Headers which have been imported into the pallet.
        *
        * @param param0: H256: [U8; 32]
        * @return Header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}
        */
        importedHeaders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'ImportedHeaders', param0);
        },

        /**
        * The current GRANDPA Authority set.
        *
        * @return AuthoritySet: {authorities: Vec<([U8; 32], U64)>, set_id: U64}
        */
        currentAuthoritySet: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'CurrentAuthoritySet');
        },

        /**
        * Optional pallet owner.
        *
        * Pallet owner has a right to halt all pallet operations and then resume it. If it is
        * `None`, then there are no direct ways to halt/resume pallet operations, but other
        * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
        * flag directly or call the `halt_operations`).
        *
        * @return AccountId32: [U8; 32]
        */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'PalletOwner');
        },

        /**
        * If true, all pallet transactions are failed immediately.
        *
        * @return Bool
        */
        isHalted: async (): Promise<string | null> => {
            return await getStorage('BridgeDarwiniaGrandpa', 'IsHalted');
        },
    };
};