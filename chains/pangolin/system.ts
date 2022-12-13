import {GetStorage} from "../../storage";

export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
        * The full account information for a particular account ID.

        * @param param0: AccountId32: [U8; 32]
        * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'Account', param0);
        },

        /**
        * Total extrinsics count for the current block.

        * @return U32
        */
        extrinsicCount: async (): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicCount');
        },

        /**
        * The current weight for the block.

        * @return PerDispatchClass: {normal: U64, operational: U64, mandatory: U64}
        */
        blockWeight: async (): Promise<string | null> => {
            return await getStorage('System', 'BlockWeight');
        },

        /**
        * Total length (in bytes) for all extrinsics put together, for the current block.

        * @return U32
        */
        allExtrinsicsLen: async (): Promise<string | null> => {
            return await getStorage('System', 'AllExtrinsicsLen');
        },

        /**
        * Map of block numbers to block hashes.

        * @param param0: U32
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'BlockHash', param0);
        },

        /**
        * Extrinsics data for the current block (maps an extrinsic&#39;s index to its data).

        * @param param0: U32
        * @return Vec&lt;U8&gt;
        */
        extrinsicData: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicData', param0);
        },

        /**
        * The current block number being processed. Set by `execute_block`.

        * @return U32
        */
        number: async (): Promise<string | null> => {
            return await getStorage('System', 'Number');
        },

        /**
        * Hash of the previous block.

        * @return H256: [U8; 32]
        */
        parentHash: async (): Promise<string | null> => {
            return await getStorage('System', 'ParentHash');
        },

        /**
        * Digest of the current block, also part of the block header.

        * @return Digest: {logs: Vec&lt;Enum&lt;{&#34;6/PreRuntime&#34;, &#34;4/Consensus&#34;, &#34;5/Seal&#34;, &#34;0/Other&#34;, &#34;8/RuntimeEnvironmentUpdated&#34;}&gt;&gt;}
        */
        digest: async (): Promise<string | null> => {
            return await getStorage('System', 'Digest');
        },

        /**
        * Events deposited for the current block.
        *
        * NOTE: This storage item is explicitly unbounded since it is never intended to be read
        * from within the runtime.

        * @return Vec&lt;{phase: Enum&lt;{&#34;0/ApplyExtrinsic&#34;, &#34;1/Finalization&#34;, &#34;2/Initialization&#34;}&gt;, event: Enum&lt;{&#34;0/System&#34;, &#34;4/Balances&#34;, &#34;5/Kton&#34;, &#34;8/ElectionProviderMultiPhase&#34;, &#34;9/Staking&#34;, &#34;10/Offences&#34;, &#34;12/Session&#34;, &#34;13/Grandpa&#34;, &#34;66/EcdsaAuthority&#34;, &#34;14/ImOnline&#34;, &#34;17/Democracy&#34;, &#34;18/Council&#34;, &#34;19/TechnicalCommittee&#34;, &#34;20/PhragmenElection&#34;, &#34;21/TechnicalMembership&#34;, &#34;22/Treasury&#34;, &#34;50/KtonTreasury&#34;, &#34;51/Tips&#34;, &#34;52/Bounties&#34;, &#34;23/Sudo&#34;, &#34;25/Vesting&#34;, &#34;26/Utility&#34;, &#34;27/Identity&#34;, &#34;28/Society&#34;, &#34;29/Recovery&#34;, &#34;30/Scheduler&#34;, &#34;67/Preimage&#34;, &#34;31/Proxy&#34;, &#34;32/Multisig&#34;, &#34;40/EVM&#34;, &#34;41/Ethereum&#34;, &#34;59/BaseFee&#34;, &#34;44/BridgePangoroDispatch&#34;, &#34;43/BridgePangoroMessages&#34;, &#34;62/BridgePangolinParachainDispatch&#34;, &#34;63/BridgePangolinParachainMessages&#34;, &#34;53/PangoroFeeMarket&#34;, &#34;64/PangolinParachainFeeMarket&#34;, &#34;54/TransactionPause&#34;, &#34;70/BridgePangolinParachainAlphaDispatch&#34;, &#34;71/BridgePangolinParachainAlphaMessages&#34;, &#34;72/PangolinParachainAlphaFeeMarket&#34;, &#34;65/ToPangolinParachainBacking&#34;}&gt;, topics: Vec&lt;[U8; 32]&gt;}&gt;
        */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
        * The number of events in the `Events&lt;T&gt;` list.

        * @return U32
        */
        eventCount: async (): Promise<string | null> => {
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

        * @param param0: H256: [U8; 32]
        * @return Vec&lt;(U32, U32)&gt;
        */
        eventTopics: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'EventTopics', param0);
        },

        /**
        * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.

        * @return LastRuntimeUpgradeInfo: {spec_version: Compact&lt;U32&gt;, spec_name: Str}
        */
        lastRuntimeUpgrade: async (): Promise<string | null> => {
            return await getStorage('System', 'LastRuntimeUpgrade');
        },

        /**
        * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.

        * @return Bool
        */
        upgradedToU32RefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToU32RefCount');
        },

        /**
        * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
        * (default) if not.

        * @return Bool
        */
        upgradedToTripleRefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToTripleRefCount');
        },

        /**
        * The execution phase of the block.

        * @return Phase: Enum&lt;{&#34;0/ApplyExtrinsic&#34;, &#34;1/Finalization&#34;, &#34;2/Initialization&#34;}&gt;
        */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};