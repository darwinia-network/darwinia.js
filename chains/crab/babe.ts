import {GetStorage} from "../../storage";

export const getBabe = (getStorage: GetStorage) => {
    return {

        /**
        * Current epoch index.

        * @return U64
        */
        epochIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochIndex');
        },

        /**
        * Current epoch authorities.

        * @return WeakBoundedVec: Vec&lt;([U8; 32], U64)&gt;
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Authorities');
        },

        /**
        * The slot at which the first epoch actually started. This is 0
        * until the first block of the chain.

        * @return Slot: U64
        */
        genesisSlot: async (): Promise<string | null> => {
            return await getStorage('Babe', 'GenesisSlot');
        },

        /**
        * Current slot number.

        * @return Slot: U64
        */
        currentSlot: async (): Promise<string | null> => {
            return await getStorage('Babe', 'CurrentSlot');
        },

        /**
        * The epoch randomness for the *current* epoch.
        *
        * # Security
        *
        * This MUST NOT be used for gambling, as it can be influenced by a
        * malicious validator in the short term. It MAY be used in many
        * cryptographic protocols, however, so long as one remembers that this
        * (like everything else on-chain) it is public. For example, it can be
        * used where a number is needed that cannot have been chosen by an
        * adversary, for purposes such as public-coin zero-knowledge proofs.

        * @return [U8; 32]
        */
        randomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Randomness');
        },

        /**
        * Pending epoch configuration change that will be applied when the next epoch is enacted.

        * @return NextConfigDescriptor: Enum&lt;{&#34;1/V1&#34;}&gt;
        */
        pendingEpochConfigChange: async (): Promise<string | null> => {
            return await getStorage('Babe', 'PendingEpochConfigChange');
        },

        /**
        * Next epoch randomness.

        * @return [U8; 32]
        */
        nextRandomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextRandomness');
        },

        /**
        * Next epoch authorities.

        * @return WeakBoundedVec: Vec&lt;([U8; 32], U64)&gt;
        */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextAuthorities');
        },

        /**
        * Randomness under construction.
        *
        * We make a trade-off between storage accesses and list length.
        * We store the under-construction randomness in segments of up to
        * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
        *
        * Once a segment reaches this length, we begin the next one.
        * We reset all segments and return to `0` at the beginning of every
        * epoch.

        * @return U32
        */
        segmentIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'SegmentIndex');
        },

        /**
        * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.

        * @param param0: U32
        * @return BoundedVec: Vec&lt;[U8; 32]&gt;
        */
        underConstruction: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Babe', 'UnderConstruction', param0);
        },

        /**
        * Temporary value (cleared at block finalization) which is `Some`
        * if per-block initialization has already been called for current block.

        * @return Option: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;
        */
        initialized: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Initialized');
        },

        /**
        * This field should always be populated during block processing unless
        * secondary plain slots are enabled (which don&#39;t contain a VRF output).
        *
        * It is set in `on_initialize`, before it will contain the value from the last block.

        * @return Option: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;
        */
        authorVrfRandomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'AuthorVrfRandomness');
        },

        /**
        * The block numbers when the last and current epoch have started, respectively `N-1` and
        * `N`.
        * NOTE: We track this is in order to annotate the block number when a given pool of
        * entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
        * slots, which may be skipped, the block numbers may not line up with the slot numbers.

        * @return (U32, U32)
        */
        epochStart: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochStart');
        },

        /**
        * How late the current block is compared to its parent.
        *
        * This entry is populated as part of block execution and is cleaned up
        * on block finalization. Querying this storage entry outside of block
        * execution context should always yield zero.

        * @return U32
        */
        lateness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Lateness');
        },

        /**
        * The configuration for the current epoch. Should never be `None` as it is initialized in
        * genesis.

        * @return BabeEpochConfiguration: {c: (U64, U64), allowed_slots: Enum&lt;{&#34;0/PrimarySlots&#34;, &#34;1/PrimaryAndSecondaryPlainSlots&#34;, &#34;2/PrimaryAndSecondaryVRFSlots&#34;}&gt;}
        */
        epochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochConfig');
        },

        /**
        * The configuration for the next epoch, `None` if the config will not change
        * (you can fallback to `EpochConfig` instead in that case).

        * @return BabeEpochConfiguration: {c: (U64, U64), allowed_slots: Enum&lt;{&#34;0/PrimarySlots&#34;, &#34;1/PrimaryAndSecondaryPlainSlots&#34;, &#34;2/PrimaryAndSecondaryVRFSlots&#34;}&gt;}
        */
        nextEpochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextEpochConfig');
        },
    };
};