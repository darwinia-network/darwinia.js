/**
 * This is the doc comment for pallet `Whitelist`'s calls. 
 * 
 * `Whitelist`'s storages: {@link: module:crab/whitelist/storages}
 *
 * @module crab/whitelist/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getWhitelist = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::whitelist_call`].
         *
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        whitelistCall: async (signer: ethers.Signer, _call_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'whitelistCall', false, {
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: crab/whitelist/calls/whitelistCall}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        whitelistCallH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'whitelistCall', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildWhitelistCallCall: (_call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Whitelist', 'whitelistCall', {
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildWhitelistCallCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildWhitelistCallCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Whitelist', 'whitelistCall', argsBytes)
        },

        /**
         * See [`Pallet::remove_whitelisted_call`].
         *
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        removeWhitelistedCall: async (signer: ethers.Signer, _call_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'removeWhitelistedCall', false, {
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: crab/whitelist/calls/removeWhitelistedCall}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeWhitelistedCallH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'removeWhitelistedCall', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveWhitelistedCallCall: (_call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Whitelist', 'removeWhitelistedCall', {
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveWhitelistedCallCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveWhitelistedCallCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Whitelist', 'removeWhitelistedCall', argsBytes)
        },

        /**
         * See [`Pallet::dispatch_whitelisted_call`].
         *
         * @param {unknown} _call_hash [U8; 32]
         * @param {unknown} _call_encoded_len U32
         * @param {unknown} _call_weight_witness {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        dispatchWhitelistedCall: async (signer: ethers.Signer, _call_hash: unknown, _call_encoded_len: unknown, _call_weight_witness: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'dispatchWhitelistedCall', false, {
                call_hash: _call_hash,
                call_encoded_len: _call_encoded_len,
                call_weight_witness: _call_weight_witness,
           });
        },

        /**
         * Similar to {@link: crab/whitelist/calls/dispatchWhitelistedCall}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        dispatchWhitelistedCallH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'dispatchWhitelistedCall', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDispatchWhitelistedCallCall: (_call_hash: unknown, _call_encoded_len: unknown, _call_weight_witness: unknown) => {
            return buildRuntimeCall(metadata, 'Whitelist', 'dispatchWhitelistedCall', {
                call_hash: _call_hash,
                call_encoded_len: _call_encoded_len,
                call_weight_witness: _call_weight_witness,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDispatchWhitelistedCallCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDispatchWhitelistedCallCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Whitelist', 'dispatchWhitelistedCall', argsBytes)
        },

        /**
         * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
         *
         * @param {unknown} _call Enum<{0/System: Enum<{0/remark: {remark: Vec<U8>}, 1/set_heap_pages: {pages: U64}, 2/set_code: {code: Vec<U8>}, 3/set_code_without_checks: {code: Vec<U8>}, 4/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 5/kill_storage: {keys: Vec<Vec<U8>>}, 6/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 7/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32], check_version: Bool}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer_allow_death: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance_deprecated: {who: [U8; 20], new_free: Compact<U128>, old_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}, 6/upgrade_accounts: {who: Vec<[U8; 20]>}, 7/transfer: {dest: [U8; 20], value: Compact<U128>}, 8/force_set_balance: {who: [U8; 20], new_free: Compact<U128>}}>, 7/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/start_destroy: {id: Compact<U64>}, 3/destroy_accounts: {id: Compact<U64>}, 4/destroy_approvals: {id: Compact<U64>}, 5/finish_destroy: {id: Compact<U64>}, 6/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 7/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 8/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 9/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 10/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 11/freeze: {id: Compact<U64>, who: [U8; 20]}, 12/thaw: {id: Compact<U64>, who: [U8; 20]}, 13/freeze_asset: {id: Compact<U64>}, 14/thaw_asset: {id: Compact<U64>}, 15/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 16/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 17/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 18/clear_metadata: {id: Compact<U64>}, 19/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 20/force_clear_metadata: {id: Compact<U64>}, 21/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 22/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 23/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 24/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 25/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 26/touch: {id: Compact<U64>}, 27/refund: {id: Compact<U64>, allow_burn: Bool}, 28/set_min_balance: {id: Compact<U64>, min_balance: U128}, 29/touch_other: {id: Compact<U64>, who: [U8; 20]}, 30/refund_other: {id: Compact<U64>, who: [U8; 20]}, 31/block: {id: Compact<U64>, who: [U8; 20]}}>, 8/Vesting: Enum<{0/vest: , 1/vest_other: {target: [U8; 20]}, 2/vested_transfer: {target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: [U8; 20], target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 9/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 10/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}, 1/migrate_multisig: {submitter: [U8; 32], others: Vec<[U8; 32]>, threshold: U16, to: [U8; 20], signature: [U8; 64], new_multisig_params: Enum<{0/None, 1/Some}>}, 2/complete_multisig_migration: {multisig: [U8; 32], submitter: [U8; 32], signature: [U8; 64]}}>, 12/DarwiniaStaking: Enum<{0/stake: {ring_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, deposits: Vec<U16>}, 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: , 8/payout: {who: [U8; 20]}, 9/set_rate_limit: {amount: U128}, 7/set_collator_count: {count: U32}}>, 13/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 20/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 23/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 44/ConvictionVoting: Enum<{0/vote: {poll_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split, 2/SplitAbstain}>}, 1/delegate: {class: U16, to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 2/undelegate: {class: U16}, 3/unlock: {class: U16, target: [U8; 20]}, 4/remove_vote: {class: Enum<{0/None, 1/Some}>, index: U32}, 5/remove_other_vote: {target: [U8; 20], class: U16, index: U32}}>, 45/Referenda: Enum<{0/submit: {proposal_origin: Enum<{0/system, 20/TechnicalCommittee, 46/Origins, 33/PolkadotXcm, 34/CumulusXcm, 36/Ethereum, 38/EthTxForwarder, 7/Void}>, proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, enactment_moment: Enum<{0/At, 1/After}>}, 1/place_decision_deposit: {index: U32}, 2/refund_decision_deposit: {index: U32}, 3/cancel: {index: U32}, 4/kill: {index: U32}, 5/nudge_referendum: {index: U32}, 6/one_fewer_deciding: {track: U16}, 7/refund_submission_deposit: {index: U32}, 8/set_metadata: {index: U32, maybe_hash: Enum<{0/None, 1/Some}>}}>, 47/Whitelist: Enum<{0/whitelist_call: {call_hash: [U8; 32]}, 1/remove_whitelisted_call: {call_hash: [U8; 32]}, 2/dispatch_whitelisted_call: {call_hash: [U8; 32], call_encoded_len: U32, call_weight_witness: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 3/dispatch_whitelisted_call_with_preimage: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 20/TechnicalCommittee, 46/Origins, 33/PolkadotXcm, 34/CumulusXcm, 36/Ethereum, 38/EthTxForwarder, 7/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>>}, 5/with_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 28/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: [U8; 32], when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 3/cancel_named: {id: [U8; 32]}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 5/schedule_named_after: {id: [U8; 32], after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}}>, 29/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 20/TechnicalCommittee, 23/Treasury, 44/ConvictionVoting, 45/Referenda, 47/Whitelist, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 48/TxPause, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/EthTxForwarder}>}}>, 48/TxPause: Enum<{0/pause: {full_name: (Vec<U8>, Vec<U8>)}, 1/unpause: {ident: (Vec<U8>, Vec<U8>)}}>, 32/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 7/update_weight_restrict_decay: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/send: {dest: Enum<{1/V2, 3/V3}>, message: Enum<{2/V2, 3/V3}>}, 1/teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 3/execute: {message: Enum<{2/V2, 3/V3}>, max_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 7/force_unsubscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 10/force_suspension: {suspended: Bool}}>, 34/CumulusXcm: Enum<{}>, 35/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 36/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 37/EVM: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 38/EthTxForwarder: Enum<{0/forward_transact: {request: {tx_type: Enum<{0/LegacyTransaction, 1/EIP2930Transaction, 2/EIP1559Transaction}>, gas_limit: [U64; 4], action: Enum<{0/Call, 1/Create}>, value: [U64; 4], input: Vec<U8>}}}>}>
         * @instance
         */
        dispatchWhitelistedCallWithPreimage: async (signer: ethers.Signer, _call: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'dispatchWhitelistedCallWithPreimage', false, {
                call: _call,
           });
        },

        /**
         * Similar to {@link: crab/whitelist/calls/dispatchWhitelistedCallWithPreimage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        dispatchWhitelistedCallWithPreimageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Whitelist', 'dispatchWhitelistedCallWithPreimage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDispatchWhitelistedCallWithPreimageCall: (_call: unknown) => {
            return buildRuntimeCall(metadata, 'Whitelist', 'dispatchWhitelistedCallWithPreimage', {
                call: _call,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDispatchWhitelistedCallWithPreimageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDispatchWhitelistedCallWithPreimageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Whitelist', 'dispatchWhitelistedCallWithPreimage', argsBytes)
        },

    }
}

