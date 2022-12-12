import {GetStorage} from "../../storage";

export const getBabe = (getStorage: GetStorage) => {
    return {

        /**
        * Current epoch index.
        */
        epochIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochIndex');
        },

        /**
        * Current epoch authorities.
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Authorities');
        },

        /**
        * The slot at which the first epoch actually started. This is 0
        * until the first block of the chain.
        */
        genesisSlot: async (): Promise<string | null> => {
            return await getStorage('Babe', 'GenesisSlot');
        },

        /**
        * Current slot number.
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
        */
        randomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Randomness');
        },

        /**
        * Pending epoch configuration change that will be applied when the next epoch is enacted.
        */
        pendingEpochConfigChange: async (): Promise<string | null> => {
            return await getStorage('Babe', 'PendingEpochConfigChange');
        },

        /**
        * Next epoch randomness.
        */
        nextRandomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextRandomness');
        },

        /**
        * Next epoch authorities.
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
        */
        segmentIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'SegmentIndex');
        },

        /**
        * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
        */
        underConstruction: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Babe', 'UnderConstruction', param0);
        },

        /**
        * Temporary value (cleared at block finalization) which is `Some`
        * if per-block initialization has already been called for current block.
        */
        initialized: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Initialized');
        },

        /**
        * This field should always be populated during block processing unless
        * secondary plain slots are enabled (which don&#39;t contain a VRF output).
        *
        * It is set in `on_initialize`, before it will contain the value from the last block.
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
        */
        lateness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Lateness');
        },

        /**
        * The configuration for the current epoch. Should never be `None` as it is initialized in
        * genesis.
        */
        epochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochConfig');
        },

        /**
        * The configuration for the next epoch, `None` if the config will not change
        * (you can fallback to `EpochConfig` instead in that case).
        */
        nextEpochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextEpochConfig');
        },
    };
};