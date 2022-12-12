import {GetStorage} from "../../storage";

export default {

    /**
     * The full account information for a particular account ID.
     */
    account: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('System', 'Account', param0);
    },

    /**
     * Total extrinsics count for the current block.
     */
    extrinsicCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ExtrinsicCount');
    },

    /**
     * The current weight for the block.
     */
    blockWeight: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'BlockWeight');
    },

    /**
     * Total length (in bytes) for all extrinsics put together, for the current block.
     */
    allExtrinsicsLen: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'AllExtrinsicsLen');
    },

    /**
     * Map of block numbers to block hashes.
     */
    blockHash: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('System', 'BlockHash', param0);
    },

    /**
     * Extrinsics data for the current block (maps an extrinsic&#39;s index to its data).
     */
    extrinsicData: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('System', 'ExtrinsicData', param0);
    },

    /**
     * The current block number being processed. Set by `execute_block`.
     */
    number: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Number');
    },

    /**
     * Hash of the previous block.
     */
    parentHash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ParentHash');
    },

    /**
     * Digest of the current block, also part of the block header.
     */
    digest: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Digest');
    },

    /**
     * Events deposited for the current block.
     *
     * NOTE: This storage item is explicitly unbounded since it is never intended to be read
     * from within the runtime.
     */
    events: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'Events');
    },

    /**
     * The number of events in the `Events&lt;T&gt;` list.
     */
    eventCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'EventCount');
    },

    /**
     * Mapping between a topic (represented by T::Hash) and a vector of indexes
     * of events in the `&lt;Events&lt;T&gt;&gt;` list.
     *
     * All topic vectors have deterministic storage locations depending on the topic. This
     * allows light-clients to leverage the changes trie storage tracking mechanism and
     * in case of changes fetch the list of events of interest.
     *
     * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     * the `EventIndex` then in case if the topic has the same contents on the next block
     * no notification will be triggered thus the event might be lost.
     */
    eventTopics: async (getStorage: GetStorage, param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
        return await getStorage('System', 'EventTopics', param0);
    },

    /**
     * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    lastRuntimeUpgrade: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'LastRuntimeUpgrade');
    },

    /**
     * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    upgradedToU32RefCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'UpgradedToU32RefCount');
    },

    /**
     * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     * (default) if not.
     */
    upgradedToTripleRefCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'UpgradedToTripleRefCount');
    },

    /**
     * The execution phase of the block.
     */
    executionPhase: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('System', 'ExecutionPhase');
    },
};