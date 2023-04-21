import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `ParachainSystem`'s storages.
 * 
 * `ParachainSystem`'s calls: {@link: module:darwinia/parachainSystem/calls}
 *
 * @module darwinia/parachainSystem/storages
 */
export const getParachainSystem = (getStorage: GetStorage) => {
    return {

        /**
         * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
         *
         * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
         * which will result the next block process with the new validation code. This concludes the upgrade process.
         *
         * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
         *
         * @returns {Promise<string | null>} Vec<U8>
         */
        pendingValidationCode: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'PendingValidationCode');
        },

        /**
         * Validation code that is set by the parachain and is to be communicated to collator and
         * consequently the relay-chain.
         *
         * This will be cleared in `on_initialize` of each new block if no other pallet already set
         * the value.
         *
         * @returns {Promise<string | null>} Vec<U8>
         */
        newValidationCode: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'NewValidationCode');
        },

        /**
         * The [`PersistedValidationData`] set for this block.
         * This value is expected to be set only once per block and it's never stored
         * in the trie.
         *
         * @returns {Promise<string | null>} PersistedValidationData: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}
         */
        validationData: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'ValidationData');
        },

        /**
         * Were the validation data set to notify the relay chain?
         *
         * @returns {Promise<string | null>} Bool
         */
        didSetValidationCode: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'DidSetValidationCode');
        },

        /**
         * The relay chain block number associated with the last parachain block.
         *
         * @returns {Promise<string | null>} U32
         */
        lastRelayChainBlockNumber: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'LastRelayChainBlockNumber');
        },

        /**
         * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
         * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
         * candidate will be invalid.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         *
         * @returns {Promise<string | null>} Option: Enum<{0/None: , 1/Some: Enum<{0/Present: }>}>
         */
        upgradeRestrictionSignal: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'UpgradeRestrictionSignal');
        },

        /**
         * The state proof for the last relay parent block.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         *
         * @returns {Promise<string | null>} StorageProof: {trie_nodes: Vec<Vec<U8>>}
         */
        relayStateProof: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'RelayStateProof');
        },

        /**
         * The snapshot of some state related to messaging relevant to the current parachain as per
         * the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         *
         * @returns {Promise<string | null>} MessagingStateSnapshot: {dmq_mqc_head: [U8; 32], relay_dispatch_queue_size: (U32, U32), ingress_channels: Vec<(U32, {max_capacity: U32, max_total_size: U32, max_message_size: U32, msg_count: U32, total_size: U32, mqc_head: Enum<{0/None: , 1/Some: [U8; 32]}>})>, egress_channels: Vec<(U32, {max_capacity: U32, max_total_size: U32, max_message_size: U32, msg_count: U32, total_size: U32, mqc_head: Enum<{0/None: , 1/Some: [U8; 32]}>})>}
         */
        relevantMessagingState: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'RelevantMessagingState');
        },

        /**
         * The parachain host configuration that was obtained from the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         *
         * @returns {Promise<string | null>} AbridgedHostConfiguration: {max_code_size: U32, max_head_data_size: U32, max_upward_queue_count: U32, max_upward_queue_size: U32, max_upward_message_size: U32, max_upward_message_num_per_candidate: U32, hrmp_max_message_num_per_candidate: U32, validation_upgrade_cooldown: U32, validation_upgrade_delay: U32}
         */
        hostConfiguration: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'HostConfiguration');
        },

        /**
         * The last downward message queue chain head we have observed.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         *
         * @returns {Promise<string | null>} MessageQueueChain: [U8; 32]
         */
        lastDmqMqcHead: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'LastDmqMqcHead');
        },

        /**
         * The message queue chain heads we have observed per each channel incoming channel.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         *
         * @returns {Promise<string | null>} BTreeMap: Vec<(U32, [U8; 32])>
         */
        lastHrmpMqcHeads: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'LastHrmpMqcHeads');
        },

        /**
         * Number of downward messages processed in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         *
         * @returns {Promise<string | null>} U32
         */
        processedDownwardMessages: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'ProcessedDownwardMessages');
        },

        /**
         * HRMP watermark that was set in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         *
         * @returns {Promise<string | null>} U32
         */
        hrmpWatermark: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'HrmpWatermark');
        },

        /**
         * HRMP messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         *
         * @returns {Promise<string | null>} Vec<{recipient: U32, data: Vec<U8>}>
         */
        hrmpOutboundMessages: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'HrmpOutboundMessages');
        },

        /**
         * Upward messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         *
         * @returns {Promise<string | null>} Vec<Vec<U8>>
         */
        upwardMessages: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'UpwardMessages');
        },

        /**
         * Upward messages that are still pending and not yet send to the relay chain.
         *
         * @returns {Promise<string | null>} Vec<Vec<U8>>
         */
        pendingUpwardMessages: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'PendingUpwardMessages');
        },

        /**
         * The number of HRMP messages we observed in `on_initialize` and thus used that number for
         * announcing the weight of `on_initialize` and `on_finalize`.
         *
         * @returns {Promise<string | null>} U32
         */
        announcedHrmpMessagesPerCandidate: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate');
        },

        /**
         * The weight we reserve at the beginning of the block for processing XCMP messages. This
         * overrides the amount set in the Config trait.
         *
         * @returns {Promise<string | null>} Weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}
         */
        reservedXcmpWeightOverride: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'ReservedXcmpWeightOverride');
        },

        /**
         * The weight we reserve at the beginning of the block for processing DMP messages. This
         * overrides the amount set in the Config trait.
         *
         * @returns {Promise<string | null>} Weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}
         */
        reservedDmpWeightOverride: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'ReservedDmpWeightOverride');
        },

        /**
         * The next authorized upgrade, if there is one.
         *
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        authorizedUpgrade: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'AuthorizedUpgrade');
        },

        /**
         * A custom head data that should be returned as result of `validate_block`.
         *
         * See [`Pallet::set_custom_validation_head_data`] for more information.
         *
         * @returns {Promise<string | null>} Vec<U8>
         */
        customValidationHeadData: async (): Promise<string | null> => {
            return await getStorage('ParachainSystem', 'CustomValidationHeadData');
        },
    };
};
