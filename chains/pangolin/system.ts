import {GetStorage} from "../../storage";

export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
        * The full account information for a particular account ID.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'Account', param0);
        },

        /**
        * Total extrinsics count for the current block.
        *
        * @return U32
        */
        extrinsicCount: async (): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicCount');
        },

        /**
        * The current weight for the block.
        *
        * @return PerDispatchClass: {normal: U64, operational: U64, mandatory: U64}
        */
        blockWeight: async (): Promise<string | null> => {
            return await getStorage('System', 'BlockWeight');
        },

        /**
        * Total length (in bytes) for all extrinsics put together, for the current block.
        *
        * @return U32
        */
        allExtrinsicsLen: async (): Promise<string | null> => {
            return await getStorage('System', 'AllExtrinsicsLen');
        },

        /**
        * Map of block numbers to block hashes.
        *
        * @param param0: U32
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'BlockHash', param0);
        },

        /**
        * Extrinsics data for the current block (maps an extrinsic&#39;s index to its data).
        *
        * @param param0: U32
        * @return Vec<U8>
        */
        extrinsicData: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicData', param0);
        },

        /**
        * The current block number being processed. Set by `execute_block`.
        *
        * @return U32
        */
        number: async (): Promise<string | null> => {
            return await getStorage('System', 'Number');
        },

        /**
        * Hash of the previous block.
        *
        * @return H256: [U8; 32]
        */
        parentHash: async (): Promise<string | null> => {
            return await getStorage('System', 'ParentHash');
        },

        /**
        * Digest of the current block, also part of the block header.
        *
        * @return Digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}
        */
        digest: async (): Promise<string | null> => {
            return await getStorage('System', 'Digest');
        },

        /**
        * Events deposited for the current block.
        *
        * NOTE: This storage item is explicitly unbounded since it is never intended to be read
        * from within the runtime.
        *
        * @return Vec<{phase: Enum<{"0/ApplyExtrinsic", "1/Finalization", "2/Initialization"}>, event: Enum<{"0/System", "4/Balances", "5/Kton", "8/ElectionProviderMultiPhase", "9/Staking", "10/Offences", "12/Session", "13/Grandpa", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "44/BridgePangoroDispatch", "43/BridgePangoroMessages", "62/BridgePangolinParachainDispatch", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "70/BridgePangolinParachainAlphaDispatch", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, topics: Vec<[U8; 32]>}>
        */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
        * The number of events in the `Events&lt;T&gt;` list.
        *
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
        *
        * @param param0: H256: [U8; 32]
        * @return Vec<(U32, U32)>
        */
        eventTopics: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'EventTopics', param0);
        },

        /**
        * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
        *
        * @return LastRuntimeUpgradeInfo: {spec_version: Compact<U32>, spec_name: Str}
        */
        lastRuntimeUpgrade: async (): Promise<string | null> => {
            return await getStorage('System', 'LastRuntimeUpgrade');
        },

        /**
        * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
        *
        * @return Bool
        */
        upgradedToU32RefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToU32RefCount');
        },

        /**
        * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
        * (default) if not.
        *
        * @return Bool
        */
        upgradedToTripleRefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToTripleRefCount');
        },

        /**
        * The execution phase of the block.
        *
        * @return Phase: Enum<{"0/ApplyExtrinsic", "1/Finalization", "2/Initialization"}>
        */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};