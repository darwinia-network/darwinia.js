/**
 * This is the doc comment for pallet `Scheduler`'s calls. 
 * 
 * `Scheduler`'s storages: {@link: module:darwinia/scheduler/storages}
 *
 * @module darwinia/scheduler/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getScheduler = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Anonymously schedule a task.
         *
         * @param {unknown} _when U32
         * @param {unknown} _maybe_periodic Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param {unknown} _priority U8
         * @param {unknown} _call Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 8/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 11/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 14/ImOnline: Enum<{0/heartbeat}>, 50/MessageGadget: Enum<{0/set_commitment_contract}>, 51/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 37/Democracy: Enum<{0/propose, 1/second, 2/vote, 3/emergency_cancel, 4/external_propose, 5/external_propose_majority, 6/external_propose_default, 7/fast_track, 8/veto_external, 9/cancel_referendum, 10/cancel_queued, 11/delegate, 12/undelegate, 13/clear_public_proposals, 14/note_preimage, 15/note_preimage_operational, 16/note_imminent_preimage, 17/note_imminent_preimage_operational, 18/reap_preimage, 19/unlock, 20/remove_vote, 21/remove_other_vote, 22/enact_proposal, 23/blacklist, 24/cancel_proposal}>, 16/Council: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 17/TechnicalCommittee: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 18/PhragmenElection: Enum<{0/vote, 1/remove_voter, 2/submit_candidacy, 3/renounce_candidacy, 4/remove_member, 5/clean_defunct_voters}>, 19/TechnicalMembership: Enum<{0/add_member, 1/remove_member, 2/swap_member, 3/reset_members, 4/change_key, 5/set_prime, 6/clear_prime}>, 20/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 40/Tips: Enum<{0/report_awesome, 1/retract_tip, 2/tip_new, 3/tip, 4/close_tip, 5/slash_tip}>, 41/Bounties: Enum<{0/propose_bounty, 1/approve_bounty, 2/propose_curator, 3/unassign_curator, 4/accept_curator, 5/award_bounty, 6/claim_bounty, 7/close_bounty, 8/extend_bounty_expiry}>, 27/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Vesting: Enum<{0/vest, 1/vest_other, 2/vested_transfer, 3/force_vested_transfer, 4/merge_schedules}>, 22/Utility: Enum<{0/batch, 1/as_derivative, 2/batch_all, 3/dispatch_as}>, 23/Identity: Enum<{0/add_registrar, 1/set_identity, 2/set_subs, 3/clear_identity, 4/request_judgement, 5/cancel_request, 6/set_fee, 7/set_account_id, 8/set_fields, 9/provide_judgement, 10/kill_identity, 11/add_sub, 12/rename_sub, 13/remove_sub, 14/quit_sub}>, 24/Society: Enum<{0/bid, 1/unbid, 2/vouch, 3/unvouch, 4/vote, 5/defender_vote, 6/payout, 7/found, 8/unfound, 9/judge_suspended_member, 10/judge_suspended_candidate, 11/set_max_members}>, 25/Recovery: Enum<{0/as_recovered, 1/set_recovered, 2/create_recovery, 3/initiate_recovery, 4/vouch_recovery, 5/claim_recovery, 6/close_recovery, 7/remove_recovery, 8/cancel_recovered}>, 26/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 52/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 28/Proxy: Enum<{0/proxy, 1/add_proxy, 2/remove_proxy, 3/remove_proxies, 4/anonymous, 5/kill_anonymous, 6/announce, 7/remove_announcement, 8/reject_announcement, 9/proxy_announced}>, 29/Multisig: Enum<{0/as_multi_threshold_1, 1/as_multi, 2/approve_as_multi, 3/cancel_as_multi}>, 47/EVM: Enum<{0/call, 1/create, 2/create2}>, 48/Ethereum: Enum<{0/transact, 1/message_transact}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 44/BridgeCrabMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>}>, 1/Hash: [U8; 32]}>
         */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, {
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/schedule}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        scheduleH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleCall: (_when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'schedule', {
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildScheduleCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'schedule', argsBytes)
        },

        /**
         * Cancel an anonymously scheduled task.
         *
         * @param {unknown} _when U32
         * @param {unknown} _index U32
         */
        cancel: async (signer: ethers.Signer, _when: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, {
                when: _when,
                index: _index,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/cancel}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        cancelH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelCall: (_when: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancel', {
                when: _when,
                index: _index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCancelCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'cancel', argsBytes)
        },

        /**
         * Schedule a named task.
         *
         * @param {unknown} _id Vec<U8>
         * @param {unknown} _when U32
         * @param {unknown} _maybe_periodic Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param {unknown} _priority U8
         * @param {unknown} _call Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 8/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 11/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 14/ImOnline: Enum<{0/heartbeat}>, 50/MessageGadget: Enum<{0/set_commitment_contract}>, 51/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 37/Democracy: Enum<{0/propose, 1/second, 2/vote, 3/emergency_cancel, 4/external_propose, 5/external_propose_majority, 6/external_propose_default, 7/fast_track, 8/veto_external, 9/cancel_referendum, 10/cancel_queued, 11/delegate, 12/undelegate, 13/clear_public_proposals, 14/note_preimage, 15/note_preimage_operational, 16/note_imminent_preimage, 17/note_imminent_preimage_operational, 18/reap_preimage, 19/unlock, 20/remove_vote, 21/remove_other_vote, 22/enact_proposal, 23/blacklist, 24/cancel_proposal}>, 16/Council: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 17/TechnicalCommittee: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 18/PhragmenElection: Enum<{0/vote, 1/remove_voter, 2/submit_candidacy, 3/renounce_candidacy, 4/remove_member, 5/clean_defunct_voters}>, 19/TechnicalMembership: Enum<{0/add_member, 1/remove_member, 2/swap_member, 3/reset_members, 4/change_key, 5/set_prime, 6/clear_prime}>, 20/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 40/Tips: Enum<{0/report_awesome, 1/retract_tip, 2/tip_new, 3/tip, 4/close_tip, 5/slash_tip}>, 41/Bounties: Enum<{0/propose_bounty, 1/approve_bounty, 2/propose_curator, 3/unassign_curator, 4/accept_curator, 5/award_bounty, 6/claim_bounty, 7/close_bounty, 8/extend_bounty_expiry}>, 27/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Vesting: Enum<{0/vest, 1/vest_other, 2/vested_transfer, 3/force_vested_transfer, 4/merge_schedules}>, 22/Utility: Enum<{0/batch, 1/as_derivative, 2/batch_all, 3/dispatch_as}>, 23/Identity: Enum<{0/add_registrar, 1/set_identity, 2/set_subs, 3/clear_identity, 4/request_judgement, 5/cancel_request, 6/set_fee, 7/set_account_id, 8/set_fields, 9/provide_judgement, 10/kill_identity, 11/add_sub, 12/rename_sub, 13/remove_sub, 14/quit_sub}>, 24/Society: Enum<{0/bid, 1/unbid, 2/vouch, 3/unvouch, 4/vote, 5/defender_vote, 6/payout, 7/found, 8/unfound, 9/judge_suspended_member, 10/judge_suspended_candidate, 11/set_max_members}>, 25/Recovery: Enum<{0/as_recovered, 1/set_recovered, 2/create_recovery, 3/initiate_recovery, 4/vouch_recovery, 5/claim_recovery, 6/close_recovery, 7/remove_recovery, 8/cancel_recovered}>, 26/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 52/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 28/Proxy: Enum<{0/proxy, 1/add_proxy, 2/remove_proxy, 3/remove_proxies, 4/anonymous, 5/kill_anonymous, 6/announce, 7/remove_announcement, 8/reject_announcement, 9/proxy_announced}>, 29/Multisig: Enum<{0/as_multi_threshold_1, 1/as_multi, 2/approve_as_multi, 3/cancel_as_multi}>, 47/EVM: Enum<{0/call, 1/create, 2/create2}>, 48/Ethereum: Enum<{0/transact, 1/message_transact}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 44/BridgeCrabMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, {
                id: _id,
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/scheduleNamed}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        scheduleNamedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleNamedCall: (_id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamed', {
                id: _id,
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildScheduleNamedCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleNamedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'scheduleNamed', argsBytes)
        },

        /**
         * Cancel a named scheduled task.
         *
         * @param {unknown} _id Vec<U8>
         */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/cancelNamed}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        cancelNamedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelNamedCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancelNamed', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCancelNamedCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
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
         * @param {unknown} _after U32
         * @param {unknown} _maybe_periodic Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param {unknown} _priority U8
         * @param {unknown} _call Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 8/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 11/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 14/ImOnline: Enum<{0/heartbeat}>, 50/MessageGadget: Enum<{0/set_commitment_contract}>, 51/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 37/Democracy: Enum<{0/propose, 1/second, 2/vote, 3/emergency_cancel, 4/external_propose, 5/external_propose_majority, 6/external_propose_default, 7/fast_track, 8/veto_external, 9/cancel_referendum, 10/cancel_queued, 11/delegate, 12/undelegate, 13/clear_public_proposals, 14/note_preimage, 15/note_preimage_operational, 16/note_imminent_preimage, 17/note_imminent_preimage_operational, 18/reap_preimage, 19/unlock, 20/remove_vote, 21/remove_other_vote, 22/enact_proposal, 23/blacklist, 24/cancel_proposal}>, 16/Council: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 17/TechnicalCommittee: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 18/PhragmenElection: Enum<{0/vote, 1/remove_voter, 2/submit_candidacy, 3/renounce_candidacy, 4/remove_member, 5/clean_defunct_voters}>, 19/TechnicalMembership: Enum<{0/add_member, 1/remove_member, 2/swap_member, 3/reset_members, 4/change_key, 5/set_prime, 6/clear_prime}>, 20/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 40/Tips: Enum<{0/report_awesome, 1/retract_tip, 2/tip_new, 3/tip, 4/close_tip, 5/slash_tip}>, 41/Bounties: Enum<{0/propose_bounty, 1/approve_bounty, 2/propose_curator, 3/unassign_curator, 4/accept_curator, 5/award_bounty, 6/claim_bounty, 7/close_bounty, 8/extend_bounty_expiry}>, 27/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Vesting: Enum<{0/vest, 1/vest_other, 2/vested_transfer, 3/force_vested_transfer, 4/merge_schedules}>, 22/Utility: Enum<{0/batch, 1/as_derivative, 2/batch_all, 3/dispatch_as}>, 23/Identity: Enum<{0/add_registrar, 1/set_identity, 2/set_subs, 3/clear_identity, 4/request_judgement, 5/cancel_request, 6/set_fee, 7/set_account_id, 8/set_fields, 9/provide_judgement, 10/kill_identity, 11/add_sub, 12/rename_sub, 13/remove_sub, 14/quit_sub}>, 24/Society: Enum<{0/bid, 1/unbid, 2/vouch, 3/unvouch, 4/vote, 5/defender_vote, 6/payout, 7/found, 8/unfound, 9/judge_suspended_member, 10/judge_suspended_candidate, 11/set_max_members}>, 25/Recovery: Enum<{0/as_recovered, 1/set_recovered, 2/create_recovery, 3/initiate_recovery, 4/vouch_recovery, 5/claim_recovery, 6/close_recovery, 7/remove_recovery, 8/cancel_recovered}>, 26/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 52/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 28/Proxy: Enum<{0/proxy, 1/add_proxy, 2/remove_proxy, 3/remove_proxies, 4/anonymous, 5/kill_anonymous, 6/announce, 7/remove_announcement, 8/reject_announcement, 9/proxy_announced}>, 29/Multisig: Enum<{0/as_multi_threshold_1, 1/as_multi, 2/approve_as_multi, 3/cancel_as_multi}>, 47/EVM: Enum<{0/call, 1/create, 2/create2}>, 48/Ethereum: Enum<{0/transact, 1/message_transact}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 44/BridgeCrabMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, {
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/scheduleAfter}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        scheduleAfterH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleAfterCall: (_after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleAfter', {
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildScheduleAfterCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
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
         * @param {unknown} _id Vec<U8>
         * @param {unknown} _after U32
         * @param {unknown} _maybe_periodic Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param {unknown} _priority U8
         * @param {unknown} _call Enum<{0/Value: Enum<{0/System: Enum<{0/fill_block, 1/remark, 2/set_heap_pages, 3/set_code, 4/set_code_without_checks, 5/set_storage, 6/kill_storage, 7/kill_prefix, 8/remark_with_event}>, 2/Babe: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/plan_config_change}>, 3/Timestamp: Enum<{0/set}>, 4/Balances: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 5/Kton: Enum<{0/transfer, 1/set_balance, 2/force_transfer, 3/transfer_keep_alive, 4/transfer_all, 5/force_unreserve}>, 7/Authorship: Enum<{0/set_uncles}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned, 1/set_minimum_untrusted_score, 2/set_emergency_election_result, 3/submit}>, 8/Staking: Enum<{0/bond, 1/bond_extra, 2/deposit_extra, 3/unbond, 4/withdraw_unbonded, 5/claim_mature_deposits, 6/try_claim_deposits_with_punish, 7/validate, 8/nominate, 9/chill, 10/set_payee, 11/set_controller, 12/set_validator_count, 13/increase_validator_count, 14/scale_validator_count, 15/force_no_eras, 16/force_new_era, 17/set_invulnerables, 18/force_unstake, 19/force_new_era_always, 20/cancel_deferred_slash, 21/payout_stakers, 22/rebond, 23/set_history_depth, 24/reap_stash, 25/kick, 26/set_staking_configs, 27/chill_other}>, 11/Session: Enum<{0/set_keys, 1/purge_keys}>, 13/Grandpa: Enum<{0/report_equivocation, 1/report_equivocation_unsigned, 2/note_stalled}>, 14/ImOnline: Enum<{0/heartbeat}>, 50/MessageGadget: Enum<{0/set_commitment_contract}>, 51/EcdsaAuthority: Enum<{0/add_authority, 1/remove_authority, 2/swap_authority, 3/submit_authorities_change_signature, 4/submit_new_message_root_signature}>, 37/Democracy: Enum<{0/propose, 1/second, 2/vote, 3/emergency_cancel, 4/external_propose, 5/external_propose_majority, 6/external_propose_default, 7/fast_track, 8/veto_external, 9/cancel_referendum, 10/cancel_queued, 11/delegate, 12/undelegate, 13/clear_public_proposals, 14/note_preimage, 15/note_preimage_operational, 16/note_imminent_preimage, 17/note_imminent_preimage_operational, 18/reap_preimage, 19/unlock, 20/remove_vote, 21/remove_other_vote, 22/enact_proposal, 23/blacklist, 24/cancel_proposal}>, 16/Council: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 17/TechnicalCommittee: Enum<{0/set_members, 1/execute, 2/propose, 3/vote, 4/close, 5/disapprove_proposal}>, 18/PhragmenElection: Enum<{0/vote, 1/remove_voter, 2/submit_candidacy, 3/renounce_candidacy, 4/remove_member, 5/clean_defunct_voters}>, 19/TechnicalMembership: Enum<{0/add_member, 1/remove_member, 2/swap_member, 3/reset_members, 4/change_key, 5/set_prime, 6/clear_prime}>, 20/Treasury: Enum<{0/propose_spend, 1/reject_proposal, 2/approve_proposal}>, 40/Tips: Enum<{0/report_awesome, 1/retract_tip, 2/tip_new, 3/tip, 4/close_tip, 5/slash_tip}>, 41/Bounties: Enum<{0/propose_bounty, 1/approve_bounty, 2/propose_curator, 3/unassign_curator, 4/accept_curator, 5/award_bounty, 6/claim_bounty, 7/close_bounty, 8/extend_bounty_expiry}>, 27/Sudo: Enum<{0/sudo, 1/sudo_unchecked_weight, 2/set_key, 3/sudo_as}>, 21/Vesting: Enum<{0/vest, 1/vest_other, 2/vested_transfer, 3/force_vested_transfer, 4/merge_schedules}>, 22/Utility: Enum<{0/batch, 1/as_derivative, 2/batch_all, 3/dispatch_as}>, 23/Identity: Enum<{0/add_registrar, 1/set_identity, 2/set_subs, 3/clear_identity, 4/request_judgement, 5/cancel_request, 6/set_fee, 7/set_account_id, 8/set_fields, 9/provide_judgement, 10/kill_identity, 11/add_sub, 12/rename_sub, 13/remove_sub, 14/quit_sub}>, 24/Society: Enum<{0/bid, 1/unbid, 2/vouch, 3/unvouch, 4/vote, 5/defender_vote, 6/payout, 7/found, 8/unfound, 9/judge_suspended_member, 10/judge_suspended_candidate, 11/set_max_members}>, 25/Recovery: Enum<{0/as_recovered, 1/set_recovered, 2/create_recovery, 3/initiate_recovery, 4/vouch_recovery, 5/claim_recovery, 6/close_recovery, 7/remove_recovery, 8/cancel_recovered}>, 26/Scheduler: Enum<{0/schedule, 1/cancel, 2/schedule_named, 3/cancel_named, 4/schedule_after, 5/schedule_named_after}>, 52/Preimage: Enum<{0/note_preimage, 1/unnote_preimage, 2/request_preimage, 3/unrequest_preimage}>, 28/Proxy: Enum<{0/proxy, 1/add_proxy, 2/remove_proxy, 3/remove_proxies, 4/anonymous, 5/kill_anonymous, 6/announce, 7/remove_announcement, 8/reject_announcement, 9/proxy_announced}>, 29/Multisig: Enum<{0/as_multi_threshold_1, 1/as_multi, 2/approve_as_multi, 3/cancel_as_multi}>, 47/EVM: Enum<{0/call, 1/create, 2/create2}>, 48/Ethereum: Enum<{0/transact, 1/message_transact}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas, 1/set_is_active, 2/set_elasticity}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 44/BridgeCrabMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof, 1/initialize, 2/set_owner, 3/set_operational}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner, 1/set_operating_mode, 2/update_pallet_parameter, 3/send_message, 4/increase_message_fee, 5/receive_messages_proof, 6/receive_messages_delivery_proof}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral, 1/update_locked_collateral, 2/update_relay_fee, 3/cancel_enrollment, 4/set_slash_protect, 5/set_assigned_relayers_number}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, {
                id: _id,
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
	    });
        },

        /**
	 * Similar to {@link: darwinia/scheduler/calls/scheduleNamedAfter}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        scheduleNamedAfterH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleNamedAfterCall: (_id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamedAfter', {
                id: _id,
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildScheduleNamedAfterCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildScheduleNamedAfterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Scheduler', 'scheduleNamedAfter', argsBytes)
        },

    }
}
