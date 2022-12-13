import {GetStorage} from "../../storage";

export const getBridgePangoroGrandpa = (getStorage: GetStorage) => {
    return {

        /**
        * The current number of requests which have written to storage.
        *
        * If the `RequestCount` hits `MaxRequests`, no more calls will be allowed to the pallet until
        * the request capacity is increased.
        *
        * The `RequestCount` is decreased by one at the beginning of every block. This is to ensure
        * that the pallet can always make progress.

        * @return U32
        */
        requestCount: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'RequestCount');
        },

        /**
        * Hash of the header used to bootstrap the pallet.

        * @return H256: [U8; 32]
        */
        initialHash: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'InitialHash');
        },

        /**
        * Hash of the best finalized header.

        * @return H256: [U8; 32]
        */
        bestFinalized: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'BestFinalized');
        },

        /**
        * A ring buffer of imported hashes. Ordered by the insertion time.

        * @param param0: U32
        * @return H256: [U8; 32]
        */
        importedHashes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'ImportedHashes', param0);
        },

        /**
        * Current ring buffer position.

        * @return U32
        */
        importedHashesPointer: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'ImportedHashesPointer');
        },

        /**
        * Headers which have been imported into the pallet.

        * @param param0: H256: [U8; 32]
        * @return Header: {parent_hash: [U8; 32], number: Compact&lt;U32&gt;, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec&lt;Enum&lt;{&#34;6/PreRuntime&#34;, &#34;4/Consensus&#34;, &#34;5/Seal&#34;, &#34;0/Other&#34;, &#34;8/RuntimeEnvironmentUpdated&#34;}&gt;&gt;}}
        */
        importedHeaders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'ImportedHeaders', param0);
        },

        /**
        * The current GRANDPA Authority set.

        * @return AuthoritySet: {authorities: Vec&lt;([U8; 32], U64)&gt;, set_id: U64}
        */
        currentAuthoritySet: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'CurrentAuthoritySet');
        },

        /**
        * Optional pallet owner.
        *
        * Pallet owner has a right to halt all pallet operations and then resume it. If it is
        * `None`, then there are no direct ways to halt/resume pallet operations, but other
        * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
        * flag directly or call the `halt_operations`).

        * @return AccountId32: [U8; 32]
        */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'PalletOwner');
        },

        /**
        * If true, all pallet transactions are failed immediately.

        * @return Bool
        */
        isHalted: async (): Promise<string | null> => {
            return await getStorage('BridgePangoroGrandpa', 'IsHalted');
        },
    };
};