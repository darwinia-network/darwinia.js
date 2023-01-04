import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getScheduler = (dispatch: Dispatch) => {
    return {
        /**
         * @param _when: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Democracy: Enum<{propose, second, vote, emergency_cancel, external_propose, external_propose_majority, external_propose_default, fast_track, veto_external, cancel_referendum, cancel_queued, delegate, undelegate, clear_public_proposals, note_preimage, note_preimage_operational, note_imminent_preimage, note_imminent_preimage_operational, reap_preimage, unlock, remove_vote, remove_other_vote, enact_proposal, blacklist, cancel_proposal}>, Council: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, TechnicalCommittee: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, PhragmenElection: Enum<{vote, remove_voter, submit_candidacy, renounce_candidacy, remove_member, clean_defunct_voters}>, TechnicalMembership: Enum<{add_member, remove_member, swap_member, reset_members, change_key, set_prime, clear_prime}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, KtonTreasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Tips: Enum<{report_awesome, retract_tip, tip_new, tip, close_tip, slash_tip}>, Bounties: Enum<{propose_bounty, approve_bounty, propose_curator, unassign_curator, accept_curator, award_bounty, claim_bounty, close_bounty, extend_bounty_expiry}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Vesting: Enum<{vest, vest_other, vested_transfer, force_vested_transfer, merge_schedules}>, Utility: Enum<{batch, as_derivative, batch_all, dispatch_as}>, Identity: Enum<{add_registrar, set_identity, set_subs, clear_identity, request_judgement, cancel_request, set_fee, set_account_id, set_fields, provide_judgement, kill_identity, add_sub, rename_sub, remove_sub, quit_sub}>, Society: Enum<{bid, unbid, vouch, unvouch, vote, defender_vote, payout, found, unfound, judge_suspended_member, judge_suspended_candidate, set_max_members}>, Recovery: Enum<{as_recovered, set_recovered, create_recovery, initiate_recovery, vouch_recovery, claim_recovery, close_recovery, remove_recovery, cancel_recovered}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, Proxy: Enum<{proxy, add_proxy, remove_proxy, remove_proxies, anonymous, kill_anonymous, announce, remove_announcement, reject_announcement, proxy_announced}>, Multisig: Enum<{as_multi_threshold_1, as_multi, approve_as_multi, cancel_as_multi}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>, BridgePangoroGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangoroMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, BridgeRococoGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeRococoParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangoroFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, PangolinParachainFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, BridgeMoonbaseRelayGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeMoonbaseRelayParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainAlphaMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinParachainAlphaFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, ToPangolinParachainBacking: Enum<{lock_and_remote_issue, unlock_from_remote, set_secure_limited_period, set_security_limitation_ring_amount, set_remote_mapping_token_factory_account}>}>, Hash: [U8; 32]}>
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
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Democracy: Enum<{propose, second, vote, emergency_cancel, external_propose, external_propose_majority, external_propose_default, fast_track, veto_external, cancel_referendum, cancel_queued, delegate, undelegate, clear_public_proposals, note_preimage, note_preimage_operational, note_imminent_preimage, note_imminent_preimage_operational, reap_preimage, unlock, remove_vote, remove_other_vote, enact_proposal, blacklist, cancel_proposal}>, Council: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, TechnicalCommittee: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, PhragmenElection: Enum<{vote, remove_voter, submit_candidacy, renounce_candidacy, remove_member, clean_defunct_voters}>, TechnicalMembership: Enum<{add_member, remove_member, swap_member, reset_members, change_key, set_prime, clear_prime}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, KtonTreasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Tips: Enum<{report_awesome, retract_tip, tip_new, tip, close_tip, slash_tip}>, Bounties: Enum<{propose_bounty, approve_bounty, propose_curator, unassign_curator, accept_curator, award_bounty, claim_bounty, close_bounty, extend_bounty_expiry}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Vesting: Enum<{vest, vest_other, vested_transfer, force_vested_transfer, merge_schedules}>, Utility: Enum<{batch, as_derivative, batch_all, dispatch_as}>, Identity: Enum<{add_registrar, set_identity, set_subs, clear_identity, request_judgement, cancel_request, set_fee, set_account_id, set_fields, provide_judgement, kill_identity, add_sub, rename_sub, remove_sub, quit_sub}>, Society: Enum<{bid, unbid, vouch, unvouch, vote, defender_vote, payout, found, unfound, judge_suspended_member, judge_suspended_candidate, set_max_members}>, Recovery: Enum<{as_recovered, set_recovered, create_recovery, initiate_recovery, vouch_recovery, claim_recovery, close_recovery, remove_recovery, cancel_recovered}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, Proxy: Enum<{proxy, add_proxy, remove_proxy, remove_proxies, anonymous, kill_anonymous, announce, remove_announcement, reject_announcement, proxy_announced}>, Multisig: Enum<{as_multi_threshold_1, as_multi, approve_as_multi, cancel_as_multi}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>, BridgePangoroGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangoroMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, BridgeRococoGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeRococoParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangoroFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, PangolinParachainFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, BridgeMoonbaseRelayGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeMoonbaseRelayParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainAlphaMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinParachainAlphaFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, ToPangolinParachainBacking: Enum<{lock_and_remote_issue, unlock_from_remote, set_secure_limited_period, set_security_limitation_ring_amount, set_remote_mapping_token_factory_account}>}>, Hash: [U8; 32]}>
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
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Democracy: Enum<{propose, second, vote, emergency_cancel, external_propose, external_propose_majority, external_propose_default, fast_track, veto_external, cancel_referendum, cancel_queued, delegate, undelegate, clear_public_proposals, note_preimage, note_preimage_operational, note_imminent_preimage, note_imminent_preimage_operational, reap_preimage, unlock, remove_vote, remove_other_vote, enact_proposal, blacklist, cancel_proposal}>, Council: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, TechnicalCommittee: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, PhragmenElection: Enum<{vote, remove_voter, submit_candidacy, renounce_candidacy, remove_member, clean_defunct_voters}>, TechnicalMembership: Enum<{add_member, remove_member, swap_member, reset_members, change_key, set_prime, clear_prime}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, KtonTreasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Tips: Enum<{report_awesome, retract_tip, tip_new, tip, close_tip, slash_tip}>, Bounties: Enum<{propose_bounty, approve_bounty, propose_curator, unassign_curator, accept_curator, award_bounty, claim_bounty, close_bounty, extend_bounty_expiry}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Vesting: Enum<{vest, vest_other, vested_transfer, force_vested_transfer, merge_schedules}>, Utility: Enum<{batch, as_derivative, batch_all, dispatch_as}>, Identity: Enum<{add_registrar, set_identity, set_subs, clear_identity, request_judgement, cancel_request, set_fee, set_account_id, set_fields, provide_judgement, kill_identity, add_sub, rename_sub, remove_sub, quit_sub}>, Society: Enum<{bid, unbid, vouch, unvouch, vote, defender_vote, payout, found, unfound, judge_suspended_member, judge_suspended_candidate, set_max_members}>, Recovery: Enum<{as_recovered, set_recovered, create_recovery, initiate_recovery, vouch_recovery, claim_recovery, close_recovery, remove_recovery, cancel_recovered}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, Proxy: Enum<{proxy, add_proxy, remove_proxy, remove_proxies, anonymous, kill_anonymous, announce, remove_announcement, reject_announcement, proxy_announced}>, Multisig: Enum<{as_multi_threshold_1, as_multi, approve_as_multi, cancel_as_multi}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>, BridgePangoroGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangoroMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, BridgeRococoGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeRococoParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangoroFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, PangolinParachainFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, BridgeMoonbaseRelayGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeMoonbaseRelayParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainAlphaMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinParachainAlphaFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, ToPangolinParachainBacking: Enum<{lock_and_remote_issue, unlock_from_remote, set_secure_limited_period, set_security_limitation_ring_amount, set_remote_mapping_token_factory_account}>}>, Hash: [U8; 32]}>
	 */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        /**
         * @param _id: Vec<U8>
         * @param _after: U32
         * @param _maybe_periodic: Enum<{None: , Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{Value: Enum<{System: Enum<{fill_block, remark, set_heap_pages, set_code, set_code_without_checks, set_storage, kill_storage, kill_prefix, remark_with_event}>, Babe: Enum<{report_equivocation, report_equivocation_unsigned, plan_config_change}>, Timestamp: Enum<{set}>, Balances: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Kton: Enum<{transfer, set_balance, force_transfer, transfer_keep_alive, transfer_all, force_unreserve}>, Authorship: Enum<{set_uncles}>, ElectionProviderMultiPhase: Enum<{submit_unsigned, set_minimum_untrusted_score, set_emergency_election_result, submit}>, Staking: Enum<{bond, bond_extra, deposit_extra, unbond, withdraw_unbonded, claim_mature_deposits, try_claim_deposits_with_punish, validate, nominate, chill, set_payee, set_controller, set_validator_count, increase_validator_count, scale_validator_count, force_no_eras, force_new_era, set_invulnerables, force_unstake, force_new_era_always, cancel_deferred_slash, payout_stakers, rebond, set_history_depth, reap_stash, kick, set_staking_configs, chill_other}>, Session: Enum<{set_keys, purge_keys}>, Grandpa: Enum<{report_equivocation, report_equivocation_unsigned, note_stalled}>, MessageGadget: Enum<{set_commitment_contract}>, EcdsaAuthority: Enum<{add_authority, remove_authority, swap_authority, submit_authorities_change_signature, submit_new_message_root_signature}>, ImOnline: Enum<{heartbeat}>, Democracy: Enum<{propose, second, vote, emergency_cancel, external_propose, external_propose_majority, external_propose_default, fast_track, veto_external, cancel_referendum, cancel_queued, delegate, undelegate, clear_public_proposals, note_preimage, note_preimage_operational, note_imminent_preimage, note_imminent_preimage_operational, reap_preimage, unlock, remove_vote, remove_other_vote, enact_proposal, blacklist, cancel_proposal}>, Council: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, TechnicalCommittee: Enum<{set_members, execute, propose, vote, close, disapprove_proposal}>, PhragmenElection: Enum<{vote, remove_voter, submit_candidacy, renounce_candidacy, remove_member, clean_defunct_voters}>, TechnicalMembership: Enum<{add_member, remove_member, swap_member, reset_members, change_key, set_prime, clear_prime}>, Treasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, KtonTreasury: Enum<{propose_spend, reject_proposal, approve_proposal}>, Tips: Enum<{report_awesome, retract_tip, tip_new, tip, close_tip, slash_tip}>, Bounties: Enum<{propose_bounty, approve_bounty, propose_curator, unassign_curator, accept_curator, award_bounty, claim_bounty, close_bounty, extend_bounty_expiry}>, Sudo: Enum<{sudo, sudo_unchecked_weight, set_key, sudo_as}>, Vesting: Enum<{vest, vest_other, vested_transfer, force_vested_transfer, merge_schedules}>, Utility: Enum<{batch, as_derivative, batch_all, dispatch_as}>, Identity: Enum<{add_registrar, set_identity, set_subs, clear_identity, request_judgement, cancel_request, set_fee, set_account_id, set_fields, provide_judgement, kill_identity, add_sub, rename_sub, remove_sub, quit_sub}>, Society: Enum<{bid, unbid, vouch, unvouch, vote, defender_vote, payout, found, unfound, judge_suspended_member, judge_suspended_candidate, set_max_members}>, Recovery: Enum<{as_recovered, set_recovered, create_recovery, initiate_recovery, vouch_recovery, claim_recovery, close_recovery, remove_recovery, cancel_recovered}>, Scheduler: Enum<{schedule, cancel, schedule_named, cancel_named, schedule_after, schedule_named_after}>, Preimage: Enum<{note_preimage, unnote_preimage, request_preimage, unrequest_preimage}>, Proxy: Enum<{proxy, add_proxy, remove_proxy, remove_proxies, anonymous, kill_anonymous, announce, remove_announcement, reject_announcement, proxy_announced}>, Multisig: Enum<{as_multi_threshold_1, as_multi, approve_as_multi, cancel_as_multi}>, EVM: Enum<{call, create, create2}>, Ethereum: Enum<{transact, message_transact}>, BaseFee: Enum<{set_base_fee_per_gas, set_is_active, set_elasticity}>, BridgePangoroGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgePangoroMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, BridgeRococoGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeRococoParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangoroFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, PangolinParachainFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, TransactionPause: Enum<{pause_transaction, unpause_transaction}>, BridgeMoonbaseRelayGrandpa: Enum<{submit_finality_proof, initialize, set_owner, set_operational}>, BridgeMoonbaseRelayParachains: Enum<{submit_parachain_heads}>, BridgePangolinParachainAlphaMessages: Enum<{set_owner, set_operating_mode, update_pallet_parameter, send_message, increase_message_fee, receive_messages_proof, receive_messages_delivery_proof}>, PangolinParachainAlphaFeeMarket: Enum<{enroll_and_lock_collateral, update_locked_collateral, update_relay_fee, cancel_enrollment, set_slash_protect, set_assigned_relayers_number}>, ToPangolinParachainBacking: Enum<{lock_and_remote_issue, unlock_from_remote, set_secure_limited_period, set_security_limitation_ring_amount, set_remote_mapping_token_factory_account}>}>, Hash: [U8; 32]}>
	 */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },


    }
}