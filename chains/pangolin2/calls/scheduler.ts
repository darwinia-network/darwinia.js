import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getScheduler = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Anonymously schedule a task.
         *
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 1/ParachainSystem: Enum<{"0/set_validation_data", "1/sudo_send_upward_message", "2/authorize_upgrade", "3/enact_authorized_upgrade"}>, 2/Timestamp: Enum<{"0/set"}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 34/Assets: Enum<{"0/create", "1/force_create", "2/destroy", "3/mint", "4/burn", "5/transfer", "6/transfer_keep_alive", "7/force_transfer", "8/freeze", "9/thaw", "10/freeze_asset", "11/thaw_asset", "12/transfer_ownership", "13/set_team", "14/set_metadata", "15/clear_metadata", "16/force_set_metadata", "17/force_clear_metadata", "18/force_asset_status", "19/approve_transfer", "20/cancel_approval", "21/force_cancel_approval", "22/transfer_approved", "23/touch", "24/refund"}>, 40/Deposit: Enum<{"0/lock", "1/claim", "2/claim_with_penalty"}>, 41/AccountMigration: Enum<{"0/migrate"}>, 7/Authorship: Enum<{"0/set_uncles"}>, 8/Staking: Enum<{"0/stake", "1/unstake", "2/claim", "3/collect", "4/nominate", "5/chill"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 12/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 13/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 14/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 17/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal", "3/spend", "4/remove_approval"}>, 18/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 19/Sudo: Enum<{"0/sudo", "1/sudo_unchecked_weight", "2/set_key", "3/sudo_as"}>, 20/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 21/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as", "4/force_batch"}>, 22/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 23/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 24/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 25/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/create_pure", "5/kill_pure", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 26/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 27/XcmpQueue: Enum<{"0/service_overweight", "1/suspend_xcm_execution", "2/resume_xcm_execution", "3/update_suspend_threshold", "4/update_drop_threshold", "5/update_resume_threshold", "6/update_threshold_weight", "7/update_weight_restrict_decay", "8/update_xcmp_max_individual_weight"}>, 28/PolkadotXcm: Enum<{"0/send", "1/teleport_assets", "2/reserve_transfer_assets", "3/execute", "4/force_xcm_version", "5/force_default_xcm_version", "6/force_subscribe_version_notify", "7/force_unsubscribe_version_notify", "8/limited_reserve_transfer_assets", "9/limited_teleport_assets"}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{"0/service_overweight"}>, 31/Ethereum: Enum<{"0/transact"}>, 32/Evm: Enum<{"0/withdraw", "1/call", "2/create", "3/create2"}>, 33/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_elasticity"}>, 39/MessageTransact: Enum<{"0/message_transact"}>}>, 1/Hash: [U8; 32]}>
         */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, _when, _maybe_periodic, _priority, _call);
        },

        scheduleD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', true, data);
        },

        scheduleCall: (_when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'schedule', {
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
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

        cancelD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', true, data);
        },

        cancelCall: (_when: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancel', {
                when: _when,
                index: _index,
            });
        },

        /**
         * Schedule a named task.
         *
         * @param _id: Vec<U8>
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 1/ParachainSystem: Enum<{"0/set_validation_data", "1/sudo_send_upward_message", "2/authorize_upgrade", "3/enact_authorized_upgrade"}>, 2/Timestamp: Enum<{"0/set"}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 34/Assets: Enum<{"0/create", "1/force_create", "2/destroy", "3/mint", "4/burn", "5/transfer", "6/transfer_keep_alive", "7/force_transfer", "8/freeze", "9/thaw", "10/freeze_asset", "11/thaw_asset", "12/transfer_ownership", "13/set_team", "14/set_metadata", "15/clear_metadata", "16/force_set_metadata", "17/force_clear_metadata", "18/force_asset_status", "19/approve_transfer", "20/cancel_approval", "21/force_cancel_approval", "22/transfer_approved", "23/touch", "24/refund"}>, 40/Deposit: Enum<{"0/lock", "1/claim", "2/claim_with_penalty"}>, 41/AccountMigration: Enum<{"0/migrate"}>, 7/Authorship: Enum<{"0/set_uncles"}>, 8/Staking: Enum<{"0/stake", "1/unstake", "2/claim", "3/collect", "4/nominate", "5/chill"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 12/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 13/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 14/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 17/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal", "3/spend", "4/remove_approval"}>, 18/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 19/Sudo: Enum<{"0/sudo", "1/sudo_unchecked_weight", "2/set_key", "3/sudo_as"}>, 20/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 21/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as", "4/force_batch"}>, 22/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 23/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 24/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 25/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/create_pure", "5/kill_pure", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 26/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 27/XcmpQueue: Enum<{"0/service_overweight", "1/suspend_xcm_execution", "2/resume_xcm_execution", "3/update_suspend_threshold", "4/update_drop_threshold", "5/update_resume_threshold", "6/update_threshold_weight", "7/update_weight_restrict_decay", "8/update_xcmp_max_individual_weight"}>, 28/PolkadotXcm: Enum<{"0/send", "1/teleport_assets", "2/reserve_transfer_assets", "3/execute", "4/force_xcm_version", "5/force_default_xcm_version", "6/force_subscribe_version_notify", "7/force_unsubscribe_version_notify", "8/limited_reserve_transfer_assets", "9/limited_teleport_assets"}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{"0/service_overweight"}>, 31/Ethereum: Enum<{"0/transact"}>, 32/Evm: Enum<{"0/withdraw", "1/call", "2/create", "3/create2"}>, 33/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_elasticity"}>, 39/MessageTransact: Enum<{"0/message_transact"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, _id, _when, _maybe_periodic, _priority, _call);
        },

        scheduleNamedD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', true, data);
        },

        scheduleNamedCall: (_id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamed', {
                id: _id,
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
         * Cancel a named scheduled task.
         *
         * @param _id: Vec<U8>
         */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, _id);
        },

        cancelNamedD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', true, data);
        },

        cancelNamedCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancelNamed', {
                id: _id,
            });
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
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 1/ParachainSystem: Enum<{"0/set_validation_data", "1/sudo_send_upward_message", "2/authorize_upgrade", "3/enact_authorized_upgrade"}>, 2/Timestamp: Enum<{"0/set"}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 34/Assets: Enum<{"0/create", "1/force_create", "2/destroy", "3/mint", "4/burn", "5/transfer", "6/transfer_keep_alive", "7/force_transfer", "8/freeze", "9/thaw", "10/freeze_asset", "11/thaw_asset", "12/transfer_ownership", "13/set_team", "14/set_metadata", "15/clear_metadata", "16/force_set_metadata", "17/force_clear_metadata", "18/force_asset_status", "19/approve_transfer", "20/cancel_approval", "21/force_cancel_approval", "22/transfer_approved", "23/touch", "24/refund"}>, 40/Deposit: Enum<{"0/lock", "1/claim", "2/claim_with_penalty"}>, 41/AccountMigration: Enum<{"0/migrate"}>, 7/Authorship: Enum<{"0/set_uncles"}>, 8/Staking: Enum<{"0/stake", "1/unstake", "2/claim", "3/collect", "4/nominate", "5/chill"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 12/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 13/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 14/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 17/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal", "3/spend", "4/remove_approval"}>, 18/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 19/Sudo: Enum<{"0/sudo", "1/sudo_unchecked_weight", "2/set_key", "3/sudo_as"}>, 20/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 21/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as", "4/force_batch"}>, 22/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 23/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 24/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 25/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/create_pure", "5/kill_pure", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 26/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 27/XcmpQueue: Enum<{"0/service_overweight", "1/suspend_xcm_execution", "2/resume_xcm_execution", "3/update_suspend_threshold", "4/update_drop_threshold", "5/update_resume_threshold", "6/update_threshold_weight", "7/update_weight_restrict_decay", "8/update_xcmp_max_individual_weight"}>, 28/PolkadotXcm: Enum<{"0/send", "1/teleport_assets", "2/reserve_transfer_assets", "3/execute", "4/force_xcm_version", "5/force_default_xcm_version", "6/force_subscribe_version_notify", "7/force_unsubscribe_version_notify", "8/limited_reserve_transfer_assets", "9/limited_teleport_assets"}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{"0/service_overweight"}>, 31/Ethereum: Enum<{"0/transact"}>, 32/Evm: Enum<{"0/withdraw", "1/call", "2/create", "3/create2"}>, 33/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_elasticity"}>, 39/MessageTransact: Enum<{"0/message_transact"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        scheduleAfterD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', true, data);
        },

        scheduleAfterCall: (_after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleAfter', {
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
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
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 1/ParachainSystem: Enum<{"0/set_validation_data", "1/sudo_send_upward_message", "2/authorize_upgrade", "3/enact_authorized_upgrade"}>, 2/Timestamp: Enum<{"0/set"}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 34/Assets: Enum<{"0/create", "1/force_create", "2/destroy", "3/mint", "4/burn", "5/transfer", "6/transfer_keep_alive", "7/force_transfer", "8/freeze", "9/thaw", "10/freeze_asset", "11/thaw_asset", "12/transfer_ownership", "13/set_team", "14/set_metadata", "15/clear_metadata", "16/force_set_metadata", "17/force_clear_metadata", "18/force_asset_status", "19/approve_transfer", "20/cancel_approval", "21/force_cancel_approval", "22/transfer_approved", "23/touch", "24/refund"}>, 40/Deposit: Enum<{"0/lock", "1/claim", "2/claim_with_penalty"}>, 41/AccountMigration: Enum<{"0/migrate"}>, 7/Authorship: Enum<{"0/set_uncles"}>, 8/Staking: Enum<{"0/stake", "1/unstake", "2/claim", "3/collect", "4/nominate", "5/chill"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 12/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 13/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 14/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 17/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal", "3/spend", "4/remove_approval"}>, 18/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 19/Sudo: Enum<{"0/sudo", "1/sudo_unchecked_weight", "2/set_key", "3/sudo_as"}>, 20/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 21/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as", "4/force_batch"}>, 22/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 23/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 24/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 25/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/create_pure", "5/kill_pure", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 26/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 27/XcmpQueue: Enum<{"0/service_overweight", "1/suspend_xcm_execution", "2/resume_xcm_execution", "3/update_suspend_threshold", "4/update_drop_threshold", "5/update_resume_threshold", "6/update_threshold_weight", "7/update_weight_restrict_decay", "8/update_xcmp_max_individual_weight"}>, 28/PolkadotXcm: Enum<{"0/send", "1/teleport_assets", "2/reserve_transfer_assets", "3/execute", "4/force_xcm_version", "5/force_default_xcm_version", "6/force_subscribe_version_notify", "7/force_unsubscribe_version_notify", "8/limited_reserve_transfer_assets", "9/limited_teleport_assets"}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{"0/service_overweight"}>, 31/Ethereum: Enum<{"0/transact"}>, 32/Evm: Enum<{"0/withdraw", "1/call", "2/create", "3/create2"}>, 33/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_elasticity"}>, 39/MessageTransact: Enum<{"0/message_transact"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },

        scheduleNamedAfterD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', true, data);
        },

        scheduleNamedAfterCall: (_id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamedAfter', {
                id: _id,
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

    }
}
