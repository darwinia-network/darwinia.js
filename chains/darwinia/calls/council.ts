/**
 * This is the doc comment for pallet `Council`'s calls. 
 * 
 * `Council`'s storages: {@link: module:darwinia/council/storages}
 *
 * @module darwinia/council/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getCouncil = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Set the collective's membership.
         * 
         * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
         * - `prime`: The prime member whose vote sets the default.
         * - `old_count`: The upper bound for the previous number of members in storage. Used for
         *   weight estimation.
         * 
         * Requires root origin.
         * 
         * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
         *       the weight estimations rely on it to estimate dispatchable weight.
         * 
         * # WARNING:
         * 
         * The `pallet-collective` can also be managed by logic outside of the pallet through the
         * implementation of the trait [`ChangeMembers`].
         * Any call to `set_members` must be careful that the member set doesn't get out of sync
         * with other logic managing the member set.
         * 
         * # <weight>
         * ## Weight
         * - `O(MP + N)` where:
         *   - `M` old-members-count (code- and governance-bounded)
         *   - `N` new-members-count (code- and governance-bounded)
         *   - `P` proposals-count (code-bounded)
         * - DB:
         *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
         *     members
         *   - 1 storage read (codec `O(P)`) for reading the proposals
         *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
         *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
         * # </weight>
         *
         * @param {unknown} _new_members Vec<[U8; 20]>
         * @param {unknown} _prime Enum<{0/None: , 1/Some: [U8; 20]}>
         * @param {unknown} _old_count U32
         * @instance
         */
        setMembers: async (signer: ethers.Signer, _new_members: unknown, _prime: unknown, _old_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'setMembers', false, {
                new_members: _new_members,
                prime: _prime,
                old_count: _old_count,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/setMembers}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMembersH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'setMembers', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMembersCall: (_new_members: unknown, _prime: unknown, _old_count: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'setMembers', {
                new_members: _new_members,
                prime: _prime,
                old_count: _old_count,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMembersCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMembersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'setMembers', argsBytes)
        },

        /**
         * Dispatch a proposal from a member using the `Member` origin.
         * 
         * Origin must be a member of the collective.
         * 
         * # <weight>
         * ## Weight
         * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
         *   `proposal`
         * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
         * - 1 event
         * # </weight>
         *
         * @param {unknown} _proposal Enum<{0/System: Enum<{0/remark: {remark: Vec<U8>}, 1/set_heap_pages: {pages: U64}, 2/set_code: {code: Vec<U8>}, 3/set_code_without_checks: {code: Vec<U8>}, 4/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 5/kill_storage: {keys: Vec<Vec<U8>>}, 6/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 7/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32]}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance: {who: [U8; 20], new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}}>, 7/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/start_destroy: {id: Compact<U64>}, 3/destroy_accounts: {id: Compact<U64>}, 4/destroy_approvals: {id: Compact<U64>}, 5/finish_destroy: {id: Compact<U64>}, 6/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 7/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 8/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 9/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 10/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 11/freeze: {id: Compact<U64>, who: [U8; 20]}, 12/thaw: {id: Compact<U64>, who: [U8; 20]}, 13/freeze_asset: {id: Compact<U64>}, 14/thaw_asset: {id: Compact<U64>}, 15/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 16/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 17/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 18/clear_metadata: {id: Compact<U64>}, 19/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 20/force_clear_metadata: {id: Compact<U64>}, 21/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 22/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 23/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 24/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 25/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 26/touch: {id: Compact<U64>}, 27/refund: {id: Compact<U64>, allow_burn: Bool}}>, 8/Vesting: Enum<{0/vest: , 1/vest_other: {target: [U8; 20]}, 2/vested_transfer: {target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: [U8; 20], target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 9/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 10/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}, 1/migrate_multisig: {submitter: [U8; 32], others: Vec<[U8; 32]>, threshold: U16, to: [U8; 20], signature: [U8; 64], new_multisig_params: Enum<{0/None, 1/Some}>}, 2/complete_multisig_migration: {multisig: [U8; 32], submitter: [U8; 32], signature: [U8; 64]}}>, 12/DarwiniaStaking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: , 7/set_collator_count: {count: U32}}>, 13/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 16/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 17/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 18/Democracy: Enum<{0/propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, value: Compact<U128>}, 1/second: {proposal: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 5/external_propose_majority: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 6/external_propose_default: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 11/undelegate: , 12/clear_public_proposals: , 13/unlock: {target: [U8; 20]}, 14/remove_vote: {index: U32}, 15/remove_other_vote: {target: [U8; 20], index: U32}, 16/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 17/cancel_proposal: {prop_index: Compact<U32>}}>, 19/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close_old_weight: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 20/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close_old_weight: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 21/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 22/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 23/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 24/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 25/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 19/Council, 20/TechnicalCommittee, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 36/Ethereum, 38/MessageTransact, 8/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 5/with_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 28/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: [U8; 32], when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 3/cancel_named: {id: [U8; 32]}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 5/schedule_named_after: {id: [U8; 32], after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 29/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 32/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 7/update_weight_restrict_decay: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/send: {dest: Enum<{0/V2, 1/V3}>, message: Enum<{2/V2, 3/V3}>}, 1/teleport_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32}, 3/execute: {message: Enum<{2/V2, 3/V3}>, max_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{0/V2, 1/V3}>}, 7/force_unsubscribe_version_notify: {location: Enum<{0/V2, 1/V3}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 34/CumulusXcm: Enum<{}>, 44/EthereumXcm: Enum<{0/transact: {xcm_transaction: Enum<{0/V1, 1/V2}>}, 1/transact_through_proxy: {transact_as: [U8; 20], xcm_transaction: Enum<{0/V1, 1/V2}>}, 2/suspend_ethereum_xcm_execution: , 3/resume_ethereum_xcm_execution: }>, 35/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 36/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 37/EVM: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 38/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 39/BridgeKusamaGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, operating_mode: Enum<{0/Normal, 1/Halted}>}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 40/BridgeKusamaParachain: Enum<{0/submit_parachain_heads: {at_relay_block: (U32, [U8; 32]), parachains: Vec<(U32, [U8; 32])>, parachain_heads_proof: Vec<Vec<U8>>}, 1/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 2/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 41/BridgeCrabMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Basic, 1/RejectingOutboundMessages}>}, 2/update_pallet_parameter: {parameter: ()}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 20], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64, last_delivered_nonce: U64}}}>, 42/BridgeCrabDispatch: Enum<{}>, 43/CrabFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/increase_locked_collateral: {new_collateral: U128}, 2/decrease_locked_collateral: {new_collateral: U128}, 3/update_relay_fee: {new_fee: U128}, 4/cancel_enrollment: , 5/set_slash_protect: {slash_protect: U128}, 6/set_assigned_relayers_number: {number: U32}}>}>
         * @param {unknown} _length_bound Compact<U32>
         * @instance
         */
        execute: async (signer: ethers.Signer, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', false, {
                proposal: _proposal,
                length_bound: _length_bound,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/execute}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        executeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildExecuteCall: (_proposal: unknown, _length_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'execute', {
                proposal: _proposal,
                length_bound: _length_bound,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildExecuteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildExecuteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'execute', argsBytes)
        },

        /**
         * Add a new proposal to either be voted on or executed directly.
         * 
         * Requires the sender to be member.
         * 
         * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
         * or put up for voting.
         * 
         * # <weight>
         * ## Weight
         * - `O(B + M + P1)` or `O(B + M + P2)` where:
         *   - `B` is `proposal` size in bytes (length-fee-bounded)
         *   - `M` is members-count (code- and governance-bounded)
         *   - branching is influenced by `threshold` where:
         *     - `P1` is proposal execution complexity (`threshold < 2`)
         *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
         * - DB:
         *   - 1 storage read `is_member` (codec `O(M)`)
         *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
         *   - DB accesses influenced by `threshold`:
         *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
         *     - OR proposal insertion (`threshold <= 2`)
         *       - 1 storage mutation `Proposals` (codec `O(P2)`)
         *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
         *       - 1 storage write `ProposalOf` (codec `O(B)`)
         *       - 1 storage write `Voting` (codec `O(M)`)
         *   - 1 event
         * # </weight>
         *
         * @param {unknown} _threshold Compact<U32>
         * @param {unknown} _proposal Enum<{0/System: Enum<{0/remark: {remark: Vec<U8>}, 1/set_heap_pages: {pages: U64}, 2/set_code: {code: Vec<U8>}, 3/set_code_without_checks: {code: Vec<U8>}, 4/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 5/kill_storage: {keys: Vec<Vec<U8>>}, 6/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 7/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32]}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance: {who: [U8; 20], new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}}>, 7/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/start_destroy: {id: Compact<U64>}, 3/destroy_accounts: {id: Compact<U64>}, 4/destroy_approvals: {id: Compact<U64>}, 5/finish_destroy: {id: Compact<U64>}, 6/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 7/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 8/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 9/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 10/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 11/freeze: {id: Compact<U64>, who: [U8; 20]}, 12/thaw: {id: Compact<U64>, who: [U8; 20]}, 13/freeze_asset: {id: Compact<U64>}, 14/thaw_asset: {id: Compact<U64>}, 15/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 16/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 17/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 18/clear_metadata: {id: Compact<U64>}, 19/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 20/force_clear_metadata: {id: Compact<U64>}, 21/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 22/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 23/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 24/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 25/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 26/touch: {id: Compact<U64>}, 27/refund: {id: Compact<U64>, allow_burn: Bool}}>, 8/Vesting: Enum<{0/vest: , 1/vest_other: {target: [U8; 20]}, 2/vested_transfer: {target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: [U8; 20], target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 9/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 10/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}, 1/migrate_multisig: {submitter: [U8; 32], others: Vec<[U8; 32]>, threshold: U16, to: [U8; 20], signature: [U8; 64], new_multisig_params: Enum<{0/None, 1/Some}>}, 2/complete_multisig_migration: {multisig: [U8; 32], submitter: [U8; 32], signature: [U8; 64]}}>, 12/DarwiniaStaking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: , 7/set_collator_count: {count: U32}}>, 13/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 16/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 17/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 18/Democracy: Enum<{0/propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, value: Compact<U128>}, 1/second: {proposal: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 5/external_propose_majority: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 6/external_propose_default: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 11/undelegate: , 12/clear_public_proposals: , 13/unlock: {target: [U8; 20]}, 14/remove_vote: {index: U32}, 15/remove_other_vote: {target: [U8; 20], index: U32}, 16/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 17/cancel_proposal: {prop_index: Compact<U32>}}>, 19/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close_old_weight: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 20/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close_old_weight: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 21/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 22/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 23/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 24/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 25/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 19/Council, 20/TechnicalCommittee, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 36/Ethereum, 38/MessageTransact, 8/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>>}, 5/with_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 28/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: [U8; 32], when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 3/cancel_named: {id: [U8; 32]}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 5/schedule_named_after: {id: [U8; 32], after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 29/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 8/Vesting, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeKusamaGrandpa, 40/BridgeKusamaParachain, 41/BridgeCrabMessages, 42/BridgeCrabDispatch, 43/CrabFeeMarket}>}}>, 32/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 7/update_weight_restrict_decay: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/send: {dest: Enum<{0/V2, 1/V3}>, message: Enum<{2/V2, 3/V3}>}, 1/teleport_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32}, 3/execute: {message: Enum<{2/V2, 3/V3}>, max_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{0/V2, 1/V3}>}, 7/force_unsubscribe_version_notify: {location: Enum<{0/V2, 1/V3}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{0/V2, 1/V3}>, beneficiary: Enum<{0/V2, 1/V3}>, assets: Enum<{0/V2, 1/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 34/CumulusXcm: Enum<{}>, 44/EthereumXcm: Enum<{0/transact: {xcm_transaction: Enum<{0/V1, 1/V2}>}, 1/transact_through_proxy: {transact_as: [U8; 20], xcm_transaction: Enum<{0/V1, 1/V2}>}, 2/suspend_ethereum_xcm_execution: , 3/resume_ethereum_xcm_execution: }>, 35/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 36/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 37/EVM: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 38/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 39/BridgeKusamaGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, operating_mode: Enum<{0/Normal, 1/Halted}>}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 40/BridgeKusamaParachain: Enum<{0/submit_parachain_heads: {at_relay_block: (U32, [U8; 32]), parachains: Vec<(U32, [U8; 32])>, parachain_heads_proof: Vec<Vec<U8>>}, 1/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 2/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 41/BridgeCrabMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Basic, 1/RejectingOutboundMessages}>}, 2/update_pallet_parameter: {parameter: ()}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 20], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64, last_delivered_nonce: U64}}}>, 42/BridgeCrabDispatch: Enum<{}>, 43/CrabFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/increase_locked_collateral: {new_collateral: U128}, 2/decrease_locked_collateral: {new_collateral: U128}, 3/update_relay_fee: {new_fee: U128}, 4/cancel_enrollment: , 5/set_slash_protect: {slash_protect: U128}, 6/set_assigned_relayers_number: {number: U32}}>}>
         * @param {unknown} _length_bound Compact<U32>
         * @instance
         */
        propose: async (signer: ethers.Signer, _threshold: unknown, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'propose', false, {
                threshold: _threshold,
                proposal: _proposal,
                length_bound: _length_bound,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/propose}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proposeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'propose', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCall: (_threshold: unknown, _proposal: unknown, _length_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'propose', {
                threshold: _threshold,
                proposal: _proposal,
                length_bound: _length_bound,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProposeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'propose', argsBytes)
        },

        /**
         * Add an aye or nay vote for the sender to the given proposal.
         * 
         * Requires the sender to be a member.
         * 
         * Transaction fees will be waived if the member is voting on any particular proposal
         * for the first time and the call is successful. Subsequent vote changes will charge a
         * fee.
         * # <weight>
         * ## Weight
         * - `O(M)` where `M` is members-count (code- and governance-bounded)
         * - DB:
         *   - 1 storage read `Members` (codec `O(M)`)
         *   - 1 storage mutation `Voting` (codec `O(M)`)
         * - 1 event
         * # </weight>
         *
         * @param {unknown} _proposal [U8; 32]
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _approve Bool
         * @instance
         */
        vote: async (signer: ethers.Signer, _proposal: unknown, _index: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'vote', false, {
                proposal: _proposal,
                index: _index,
                approve: _approve,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/vote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        voteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'vote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCall: (_proposal: unknown, _index: unknown, _approve: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'vote', {
                proposal: _proposal,
                index: _index,
                approve: _approve,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'vote', argsBytes)
        },

        /**
         * Close a vote that is either approved, disapproved or whose voting period has ended.
         * 
         * May be called by any signed account in order to finish voting and close the proposal.
         * 
         * If called before the end of the voting period it will only close the vote if it is
         * has enough votes to be approved or disapproved.
         * 
         * If called after the end of the voting period abstentions are counted as rejections
         * unless there is a prime member set and the prime member cast an approval.
         * 
         * If the close operation completes successfully with disapproval, the transaction fee will
         * be waived. Otherwise execution of the approved operation will be charged to the caller.
         * 
         * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         * proposal.
         * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         * 
         * # <weight>
         * ## Weight
         * - `O(B + M + P1 + P2)` where:
         *   - `B` is `proposal` size in bytes (length-fee-bounded)
         *   - `M` is members-count (code- and governance-bounded)
         *   - `P1` is the complexity of `proposal` preimage.
         *   - `P2` is proposal-count (code-bounded)
         * - DB:
         *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
         *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
         *    `O(P2)`)
         *  - any mutations done while executing `proposal` (`P1`)
         * - up to 3 events
         * # </weight>
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _proposal_weight_bound Compact<U64>
         * @param {unknown} _length_bound Compact<U32>
         * @instance
         */
        closeOldWeight: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'closeOldWeight', false, {
                proposal_hash: _proposal_hash,
                index: _index,
                proposal_weight_bound: _proposal_weight_bound,
                length_bound: _length_bound,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/closeOldWeight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        closeOldWeightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'closeOldWeight', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCloseOldWeightCall: (_proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'closeOldWeight', {
                proposal_hash: _proposal_hash,
                index: _index,
                proposal_weight_bound: _proposal_weight_bound,
                length_bound: _length_bound,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCloseOldWeightCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCloseOldWeightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'closeOldWeight', argsBytes)
        },

        /**
         * Disapprove a proposal, close, and remove it from the system, regardless of its current
         * state.
         * 
         * Must be called by the Root origin.
         * 
         * Parameters:
         * * `proposal_hash`: The hash of the proposal that should be disapproved.
         * 
         * # <weight>
         * Complexity: O(P) where P is the number of max proposals
         * DB Weight:
         * * Reads: Proposals
         * * Writes: Voting, Proposals, ProposalOf
         * # </weight>
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @instance
         */
        disapproveProposal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'disapproveProposal', false, {
                proposal_hash: _proposal_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/disapproveProposal}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        disapproveProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'disapproveProposal', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDisapproveProposalCall: (_proposal_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'disapproveProposal', {
                proposal_hash: _proposal_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDisapproveProposalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDisapproveProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'disapproveProposal', argsBytes)
        },

        /**
         * Close a vote that is either approved, disapproved or whose voting period has ended.
         * 
         * May be called by any signed account in order to finish voting and close the proposal.
         * 
         * If called before the end of the voting period it will only close the vote if it is
         * has enough votes to be approved or disapproved.
         * 
         * If called after the end of the voting period abstentions are counted as rejections
         * unless there is a prime member set and the prime member cast an approval.
         * 
         * If the close operation completes successfully with disapproval, the transaction fee will
         * be waived. Otherwise execution of the approved operation will be charged to the caller.
         * 
         * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         * proposal.
         * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         * 
         * # <weight>
         * ## Weight
         * - `O(B + M + P1 + P2)` where:
         *   - `B` is `proposal` size in bytes (length-fee-bounded)
         *   - `M` is members-count (code- and governance-bounded)
         *   - `P1` is the complexity of `proposal` preimage.
         *   - `P2` is proposal-count (code-bounded)
         * - DB:
         *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
         *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
         *    `O(P2)`)
         *  - any mutations done while executing `proposal` (`P1`)
         * - up to 3 events
         * # </weight>
         *
         * @param {unknown} _proposal_hash [U8; 32]
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _proposal_weight_bound {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @param {unknown} _length_bound Compact<U32>
         * @instance
         */
        close: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'close', false, {
                proposal_hash: _proposal_hash,
                index: _index,
                proposal_weight_bound: _proposal_weight_bound,
                length_bound: _length_bound,
           });
        },

        /**
         * Similar to {@link: darwinia/council/calls/close}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        closeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'close', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCloseCall: (_proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown) => {
            return buildRuntimeCall(metadata, 'Council', 'close', {
                proposal_hash: _proposal_hash,
                index: _index,
                proposal_weight_bound: _proposal_weight_bound,
                length_bound: _length_bound,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCloseCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCloseCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Council', 'close', argsBytes)
        },

    }
}

