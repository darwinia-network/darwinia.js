import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module darwinia/babe/storages
 */
export const getBabe = (getStorage: GetStorage) => {
    return {

        /**
         * Current epoch index.
         *
         * @returns {Promise<string | null>} U64
         */
        epochIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochIndex');
        },

        /**
         * Current epoch authorities.
         *
         * @returns {Promise<string | null>} WeakBoundedVec: Vec<([U8; 32], U64)>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Authorities');
        },

        /**
         * The slot at which the first epoch actually started. This is 0
         * until the first block of the chain.
         *
         * @returns {Promise<string | null>} Slot: U64
         */
        genesisSlot: async (): Promise<string | null> => {
            return await getStorage('Babe', 'GenesisSlot');
        },

        /**
         * Current slot number.
         *
         * @returns {Promise<string | null>} Slot: U64
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
         *
         * @returns {Promise<string | null>} [U8; 32]
         */
        randomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Randomness');
        },

        /**
         * Pending epoch configuration change that will be applied when the next epoch is enacted.
         *
         * @returns {Promise<string | null>} NextConfigDescriptor: Enum<{1/V1: {c: (U64, U64), allowed_slots: Enum<{0/PrimarySlots: , 1/PrimaryAndSecondaryPlainSlots: , 2/PrimaryAndSecondaryVRFSlots: }>}}>
         */
        pendingEpochConfigChange: async (): Promise<string | null> => {
            return await getStorage('Babe', 'PendingEpochConfigChange');
        },

        /**
         * Next epoch randomness.
         *
         * @returns {Promise<string | null>} [U8; 32]
         */
        nextRandomness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextRandomness');
        },

        /**
         * Next epoch authorities.
         *
         * @returns {Promise<string | null>} WeakBoundedVec: Vec<([U8; 32], U64)>
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
         *
         * @returns {Promise<string | null>} U32
         */
        segmentIndex: async (): Promise<string | null> => {
            return await getStorage('Babe', 'SegmentIndex');
        },

        /**
         * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} BoundedVec: Vec<[U8; 32]>
         */
        underConstruction: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Babe', 'UnderConstruction', param0);
        },

        /**
         * Temporary value (cleared at block finalization) which is `Some`
         * if per-block initialization has already been called for current block.
         *
         * @returns {Promise<string | null>} Option: Enum<{0/None: , 1/Some: [U8; 32]}>
         */
        initialized: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Initialized');
        },

        /**
         * This field should always be populated during block processing unless
         * secondary plain slots are enabled (which don't contain a VRF output).
         *
         * It is set in `on_initialize`, before it will contain the value from the last block.
         *
         * @returns {Promise<string | null>} Option: Enum<{0/None: , 1/Some: [U8; 32]}>
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
         *
         * @returns {Promise<string | null>} (U32, U32)
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
         *
         * @returns {Promise<string | null>} U32
         */
        lateness: async (): Promise<string | null> => {
            return await getStorage('Babe', 'Lateness');
        },

        /**
         * The configuration for the current epoch. Should never be `None` as it is initialized in
         * genesis.
         *
         * @returns {Promise<string | null>} BabeEpochConfiguration: {c: (U64, U64), allowed_slots: Enum<{0/PrimarySlots: , 1/PrimaryAndSecondaryPlainSlots: , 2/PrimaryAndSecondaryVRFSlots: }>}
         */
        epochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'EpochConfig');
        },

        /**
         * The configuration for the next epoch, `None` if the config will not change
         * (you can fallback to `EpochConfig` instead in that case).
         *
         * @returns {Promise<string | null>} BabeEpochConfiguration: {c: (U64, U64), allowed_slots: Enum<{0/PrimarySlots: , 1/PrimaryAndSecondaryPlainSlots: , 2/PrimaryAndSecondaryVRFSlots: }>}
         */
        nextEpochConfig: async (): Promise<string | null> => {
            return await getStorage('Babe', 'NextEpochConfig');
        },
    };
};
