import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getScheduler = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Anonymously schedule a task.
         *
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 8/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 9/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 12/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 30/MessageGadget: Enum<{0/set_commitment_contract}>, 32/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 14/ImOnline: Enum<{0/heartbeat}>, 24/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 16/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 33/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 19/BridgePangolinGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 17/BridgePangolinMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 22/PangolinFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 23/TransactionPause: Enum<{0/pause_transaction, 1/unpause_transaction}>, 25/EVM: Enum<{0/call, 1/create, 2/create2}>, 26/Ethereum: Enum<{0/transact, 1/message_transact}>, 31/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>}>, 1/Hash: [U8; 32]}>
         */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, _when, _maybe_periodic, _priority, _call);
        },

        scheduleH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', true, data);
        },

        buildScheduleCall: (_when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'schedule', {
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        buildScheduleCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'schedule', argsBytes)
        },

        /**
         * Cancel an anonymously scheduled task.
         *
         * @param _when: U32
         * @param _index: U32
         */
        cancel: async (signer: ethers.Signer, _when: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, _when, _index);
        },

        cancelH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', true, data);
        },

        buildCancelCall: (_when: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancel', {
                when: _when,
                index: _index,
            });
        },

        buildCancelCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'cancel', argsBytes)
        },

        /**
         * Schedule a named task.
         *
         * @param _id: Vec<U8>
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 8/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 9/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 12/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 30/MessageGadget: Enum<{0/set_commitment_contract}>, 32/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 14/ImOnline: Enum<{0/heartbeat}>, 24/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 16/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 33/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 19/BridgePangolinGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 17/BridgePangolinMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 22/PangolinFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 23/TransactionPause: Enum<{0/pause_transaction, 1/unpause_transaction}>, 25/EVM: Enum<{0/call, 1/create, 2/create2}>, 26/Ethereum: Enum<{0/transact, 1/message_transact}>, 31/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, _id, _when, _maybe_periodic, _priority, _call);
        },

        scheduleNamedH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', true, data);
        },

        buildScheduleNamedCall: (_id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamed', {
                id: _id,
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        buildScheduleNamedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'scheduleNamed', argsBytes)
        },

        /**
         * Cancel a named scheduled task.
         *
         * @param _id: Vec<U8>
         */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, _id);
        },

        cancelNamedH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', true, data);
        },

        buildCancelNamedCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancelNamed', {
                id: _id,
            });
        },

        buildCancelNamedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'cancelNamed', argsBytes)
        },

        /**
         * Anonymously schedule a task after a delay.
         * 
         * # <weight>
         * Same as [`schedule`].
         * # </weight>
         *
         * @param _after: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 8/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 9/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 12/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 30/MessageGadget: Enum<{0/set_commitment_contract}>, 32/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 14/ImOnline: Enum<{0/heartbeat}>, 24/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 16/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 33/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 19/BridgePangolinGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 17/BridgePangolinMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 22/PangolinFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 23/TransactionPause: Enum<{0/pause_transaction, 1/unpause_transaction}>, 25/EVM: Enum<{0/call, 1/create, 2/create2}>, 26/Ethereum: Enum<{0/transact, 1/message_transact}>, 31/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        scheduleAfterH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', true, data);
        },

        buildScheduleAfterCall: (_after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleAfter', {
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        buildScheduleAfterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'scheduleAfter', argsBytes)
        },

        /**
         * Schedule a named task after a delay.
         * 
         * # <weight>
         * Same as [`schedule_named`](Self::schedule_named).
         * # </weight>
         *
         * @param _id: Vec<U8>
         * @param _after: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 8/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 9/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 12/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 30/MessageGadget: Enum<{0/set_commitment_contract}>, 32/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 14/ImOnline: Enum<{0/heartbeat}>, 24/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 16/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 33/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 19/BridgePangolinGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 17/BridgePangolinMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 22/PangolinFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 23/TransactionPause: Enum<{0/pause_transaction, 1/unpause_transaction}>, 25/EVM: Enum<{0/call, 1/create, 2/create2}>, 26/Ethereum: Enum<{0/transact, 1/message_transact}>, 31/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },

        scheduleNamedAfterH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', true, data);
        },

        buildScheduleNamedAfterCall: (_id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamedAfter', {
                id: _id,
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        buildScheduleNamedAfterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'scheduleNamedAfter', argsBytes)
        },

    }
}
