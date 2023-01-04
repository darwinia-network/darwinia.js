import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getScheduler = (dispatch: Dispatch) => {
    return {
        /**
         * @param _when: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, BridgePangolinGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangolinMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>}>, Hash: [U8; 32]}>
	 */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, _when, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _when: U32
         * @param _index: U32
	 */
        cancel: async (signer: ethers.Signer, _when: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, _when, _index);
        },

        /**
         * @param _id: Vec<U8>
         * @param _when: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, BridgePangolinGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangolinMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>}>, Hash: [U8; 32]}>
	 */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, _id, _when, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _id: Vec<U8>
	 */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, _id);
        },

        /**
         * @param _after: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, BridgePangolinGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangolinMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>}>, Hash: [U8; 32]}>
	 */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _id: Vec<U8>
         * @param _after: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, BridgePangolinGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangolinMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>}>, Hash: [U8; 32]}>
	 */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },


    }
}
