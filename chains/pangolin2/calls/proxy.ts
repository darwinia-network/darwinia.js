import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getProxy = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Dispatch the given `call` from an account that the sender is authorised for through
         * `add_proxy`.
         * 
         * Removes any corresponding announcement(s).
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         * - `call`: The call to be made by the `real` account.
         *
         * @param _real: [U8; 20]
         * @param _force_proxy_type: Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>}>
         * @param _call: Enum<{0/System: Enum<{0/fill_block: {ratio: U32}, 1/remark: {remark: Vec<U8>}, 2/set_heap_pages: {pages: U64}, 3/set_code: {code: Vec<U8>}, 4/set_code_without_checks: {code: Vec<U8>}, 5/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 6/kill_storage: {keys: Vec<Vec<U8>>}, 7/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 8/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32]}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance: {who: [U8; 20], new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}}>, 34/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/destroy: {id: Compact<U64>, witness: {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}}, 3/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 4/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 5/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 6/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 7/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 8/freeze: {id: Compact<U64>, who: [U8; 20]}, 9/thaw: {id: Compact<U64>, who: [U8; 20]}, 10/freeze_asset: {id: Compact<U64>}, 11/thaw_asset: {id: Compact<U64>}, 12/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 13/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 14/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 15/clear_metadata: {id: Compact<U64>}, 16/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 17/force_clear_metadata: {id: Compact<U64>}, 18/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 19/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 20/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 21/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 22/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 23/touch: {id: Compact<U64>}, 24/refund: {id: Compact<U64>, allow_burn: Bool}}>, 20/Vesting: Enum<{0/vest: , 1/vest_other: {target: [U8; 20]}, 2/vested_transfer: {target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: [U8; 20], target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 40/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 41/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}}>, 7/Authorship: Enum<{0/set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}>, 8/Staking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: }>, 9/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 42/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 43/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 12/Democracy: Enum<{0/propose: {proposal_hash: [U8; 32], value: Compact<U128>}, 1/second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal_hash: [U8; 32]}, 5/external_propose_majority: {proposal_hash: [U8; 32]}, 6/external_propose_default: {proposal_hash: [U8; 32]}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/cancel_queued: {which: U32}, 11/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 12/undelegate: , 13/clear_public_proposals: , 14/note_preimage: {encoded_proposal: Vec<U8>}, 15/note_preimage_operational: {encoded_proposal: Vec<U8>}, 16/note_imminent_preimage: {encoded_proposal: Vec<U8>}, 17/note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, 18/reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, 19/unlock: {target: [U8; 20]}, 20/remove_vote: {index: U32}, 21/remove_other_vote: {target: [U8; 20], index: U32}, 22/enact_proposal: {proposal_hash: [U8; 32], index: U32}, 23/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 24/cancel_proposal: {prop_index: Compact<U32>}}>, 13/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<{ref_time: U64}>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 14/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<{ref_time: U64}>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 15/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 16/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 17/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 18/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 19/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, weight: {ref_time: U64}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}}>, 21/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 13/Council, 14/TechnicalCommittee, 28/PolkadotXcm, 29/CumulusXcm, 31/Ethereum, 39/MessageTransact, 7/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}}>, 22/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 23/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 3/cancel_named: {id: Vec<U8>}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 5/schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}}>, 24/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 25/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}}>, 26/Multisig: Enum<{0/as_multi_threshold_1: {other_signatories: Vec<[U8; 20]>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call: (Compact<U32>, Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>), store_call: Bool, max_weight: {ref_time: U64}}, 2/approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call_hash: [U8; 32], max_weight: {ref_time: U64}}, 3/cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, 27/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: U64}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: U64}}, 7/update_weight_restrict_decay: {new: {ref_time: U64}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: U64}}}>, 28/PolkadotXcm: Enum<{0/send: {dest: Enum<{0/V0, 1/V1}>, message: Enum<{0/V0, 1/V1, 2/V2}>}, 1/teleport_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32}, 3/execute: {message: Enum<{0/V0, 1/V1, 2/V2}>, max_weight: {ref_time: U64}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{0/V0, 1/V1}>}, 7/force_unsubscribe_version_notify: {location: Enum<{0/V0, 1/V1}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: U64}}}>, 31/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 32/Evm: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 33/BaseFee: Enum<{0/set_base_fee_per_gas: {fee: [U64; 4]}, 1/set_elasticity: {elasticity: U32}}>, 39/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>}>
         */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, _real, _force_proxy_type, _call);
        },

        proxyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', true, data);
        },

        buildProxyCall: (_real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxy', {
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        buildProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'proxy', argsBytes)
        },

        /**
         * Register a proxy account for the sender that is able to make calls on its behalf.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `proxy`: The account that the `caller` would like to make a proxy.
         * - `proxy_type`: The permissions allowed for this proxy account.
         * - `delay`: The announcement period required of the initial proxy. Will generally be
         * zero.
         *
         * @param _delegate: [U8; 20]
         * @param _proxy_type: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param _delay: U32
         */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, _delegate, _proxy_type, _delay);
        },

        addProxyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', true, data);
        },

        buildAddProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'addProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        buildAddProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'addProxy', argsBytes)
        },

        /**
         * Unregister a proxy account for the sender.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `proxy`: The account that the `caller` would like to remove as a proxy.
         * - `proxy_type`: The permissions currently enabled for the removed proxy account.
         *
         * @param _delegate: [U8; 20]
         * @param _proxy_type: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param _delay: U32
         */
        removeProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', false, _delegate, _proxy_type, _delay);
        },

        removeProxyH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', true, data);
        },

        buildRemoveProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        buildRemoveProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeProxy', argsBytes)
        },

        /**
         * Unregister all proxy accounts for the sender.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * WARNING: This may be called on accounts created by `pure`, however if done, then
         * the unreserved fees will be inaccessible. **All access to this account will be lost.**
         *
         */
        removeProxies: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', false);
        },

        removeProxiesH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', true);
        },

        buildRemoveProxiesCall: () => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxies', {
            });
        },

        buildRemoveProxiesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeProxies', argsBytes)
        },

        /**
         * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
         * initialize it with a proxy of `proxy_type` for `origin` sender.
         * 
         * Requires a `Signed` origin.
         * 
         * - `proxy_type`: The type of the proxy that the sender will be registered as over the
         * new account. This will almost always be the most permissive `ProxyType` possible to
         * allow for maximum flexibility.
         * - `index`: A disambiguation index, in case this is called multiple times in the same
         * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
         * want to use `0`.
         * - `delay`: The announcement period required of the initial proxy. Will generally be
         * zero.
         * 
         * Fails with `Duplicate` if this has already been called in this transaction, from the
         * same sender, with the same parameters.
         * 
         * Fails if there are insufficient funds to pay for deposit.
         *
         * @param _proxy_type: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param _delay: U32
         * @param _index: U16
         */
        createPure: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'createPure', false, _proxy_type, _delay, _index);
        },

        createPureH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'createPure', true, data);
        },

        buildCreatePureCall: (_proxy_type: unknown, _delay: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'createPure', {
                proxy_type: _proxy_type,
                delay: _delay,
                index: _index,
            });
        },

        buildCreatePureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'createPure', argsBytes)
        },

        /**
         * Removes a previously spawned pure proxy.
         * 
         * WARNING: **All access to this account will be lost.** Any funds held in it will be
         * inaccessible.
         * 
         * Requires a `Signed` origin, and the sender account must have been created by a call to
         * `pure` with corresponding parameters.
         * 
         * - `spawner`: The account that originally called `pure` to create this account.
         * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
         * - `proxy_type`: The proxy type originally passed to `pure`.
         * - `height`: The height of the chain when the call to `pure` was processed.
         * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
         * 
         * Fails with `NoPermission` in case the caller is not a previously created pure
         * account whose `pure` call has corresponding parameters.
         *
         * @param _spawner: [U8; 20]
         * @param _proxy_type: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param _index: U16
         * @param _height: Compact<U32>
         * @param _ext_index: Compact<U32>
         */
        killPure: async (signer: ethers.Signer, _spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killPure', false, _spawner, _proxy_type, _index, _height, _ext_index);
        },

        killPureH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killPure', true, data);
        },

        buildKillPureCall: (_spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'killPure', {
                spawner: _spawner,
                proxy_type: _proxy_type,
                index: _index,
                height: _height,
                ext_index: _ext_index,
            });
        },

        buildKillPureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'killPure', argsBytes)
        },

        /**
         * Publish the hash of a proxy-call that will be made in the future.
         * 
         * This must be called some number of blocks before the corresponding `proxy` is attempted
         * if the delay associated with the proxy relationship is greater than zero.
         * 
         * No more than `MaxPending` announcements may be made at any one time.
         * 
         * This will take a deposit of `AnnouncementDepositFactor` as well as
         * `AnnouncementDepositBase` if there are no other pending announcements.
         * 
         * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `call_hash`: The hash of the call to be made by the `real` account.
         *
         * @param _real: [U8; 20]
         * @param _call_hash: [U8; 32]
         */
        announce: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, _real, _call_hash);
        },

        announceH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', true, data);
        },

        buildAnnounceCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'announce', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        buildAnnounceCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'announce', argsBytes)
        },

        /**
         * Remove a given announcement.
         * 
         * May be called by a proxy account to remove a call they previously announced and return
         * the deposit.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `call_hash`: The hash of the call to be made by the `real` account.
         *
         * @param _real: [U8; 20]
         * @param _call_hash: [U8; 32]
         */
        removeAnnouncement: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, _real, _call_hash);
        },

        removeAnnouncementH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', true, data);
        },

        buildRemoveAnnouncementCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeAnnouncement', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        buildRemoveAnnouncementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeAnnouncement', argsBytes)
        },

        /**
         * Remove the given announcement of a delegate.
         * 
         * May be called by a target (proxied) account to remove a call that one of their delegates
         * (`delegate`) has announced they want to execute. The deposit is returned.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `delegate`: The account that previously announced the call.
         * - `call_hash`: The hash of the call to be made.
         *
         * @param _delegate: [U8; 20]
         * @param _call_hash: [U8; 32]
         */
        rejectAnnouncement: async (signer: ethers.Signer, _delegate: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, _delegate, _call_hash);
        },

        rejectAnnouncementH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', true, data);
        },

        buildRejectAnnouncementCall: (_delegate: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'rejectAnnouncement', {
                delegate: _delegate,
                call_hash: _call_hash,
            });
        },

        buildRejectAnnouncementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'rejectAnnouncement', argsBytes)
        },

        /**
         * Dispatch the given `call` from an account that the sender is authorized for through
         * `add_proxy`.
         * 
         * Removes any corresponding announcement(s).
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         * - `call`: The call to be made by the `real` account.
         *
         * @param _delegate: [U8; 20]
         * @param _real: [U8; 20]
         * @param _force_proxy_type: Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>}>
         * @param _call: Enum<{0/System: Enum<{0/fill_block: {ratio: U32}, 1/remark: {remark: Vec<U8>}, 2/set_heap_pages: {pages: U64}, 3/set_code: {code: Vec<U8>}, 4/set_code_without_checks: {code: Vec<U8>}, 5/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 6/kill_storage: {keys: Vec<Vec<U8>>}, 7/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 8/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32]}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance: {who: [U8; 20], new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}}>, 34/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/destroy: {id: Compact<U64>, witness: {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}}, 3/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 4/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 5/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 6/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 7/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 8/freeze: {id: Compact<U64>, who: [U8; 20]}, 9/thaw: {id: Compact<U64>, who: [U8; 20]}, 10/freeze_asset: {id: Compact<U64>}, 11/thaw_asset: {id: Compact<U64>}, 12/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 13/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 14/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 15/clear_metadata: {id: Compact<U64>}, 16/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 17/force_clear_metadata: {id: Compact<U64>}, 18/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 19/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 20/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 21/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 22/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 23/touch: {id: Compact<U64>}, 24/refund: {id: Compact<U64>, allow_burn: Bool}}>, 20/Vesting: Enum<{0/vest: , 1/vest_other: {target: [U8; 20]}, 2/vested_transfer: {target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: [U8; 20], target: [U8; 20], schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 40/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 41/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}}>, 7/Authorship: Enum<{0/set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}>, 8/Staking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: }>, 9/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 42/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 43/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 12/Democracy: Enum<{0/propose: {proposal_hash: [U8; 32], value: Compact<U128>}, 1/second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal_hash: [U8; 32]}, 5/external_propose_majority: {proposal_hash: [U8; 32]}, 6/external_propose_default: {proposal_hash: [U8; 32]}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/cancel_queued: {which: U32}, 11/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 12/undelegate: , 13/clear_public_proposals: , 14/note_preimage: {encoded_proposal: Vec<U8>}, 15/note_preimage_operational: {encoded_proposal: Vec<U8>}, 16/note_imminent_preimage: {encoded_proposal: Vec<U8>}, 17/note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, 18/reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, 19/unlock: {target: [U8; 20]}, 20/remove_vote: {index: U32}, 21/remove_other_vote: {target: [U8; 20], index: U32}, 22/enact_proposal: {proposal_hash: [U8; 32], index: U32}, 23/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 24/cancel_proposal: {prop_index: Compact<U32>}}>, 13/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<{ref_time: U64}>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 14/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<{ref_time: U64}>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 15/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 16/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 17/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 18/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 19/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, weight: {ref_time: U64}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}}>, 21/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 13/Council, 14/TechnicalCommittee, 28/PolkadotXcm, 29/CumulusXcm, 31/Ethereum, 39/MessageTransact, 7/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>>}}>, 22/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 23/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 3/cancel_named: {id: Vec<U8>}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 5/schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}}>, 24/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 25/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}}>, 26/Multisig: Enum<{0/as_multi_threshold_1: {other_signatories: Vec<[U8; 20]>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>}, 1/as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call: (Compact<U32>, Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>), store_call: Bool, max_weight: {ref_time: U64}}, 2/approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call_hash: [U8; 32], max_weight: {ref_time: U64}}, 3/cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 20]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, 27/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: U64}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: U64}}, 7/update_weight_restrict_decay: {new: {ref_time: U64}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: U64}}}>, 28/PolkadotXcm: Enum<{0/send: {dest: Enum<{0/V0, 1/V1}>, message: Enum<{0/V0, 1/V1, 2/V2}>}, 1/teleport_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32}, 3/execute: {message: Enum<{0/V0, 1/V1, 2/V2}>, max_weight: {ref_time: U64}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{0/V0, 1/V1}>}, 7/force_unsubscribe_version_notify: {location: Enum<{0/V0, 1/V1}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{0/V0, 1/V1}>, beneficiary: Enum<{0/V0, 1/V1}>, assets: Enum<{0/V0, 1/V1}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 29/CumulusXcm: Enum<{}>, 30/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: U64}}}>, 31/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 32/Evm: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 33/BaseFee: Enum<{0/set_base_fee_per_gas: {fee: [U64; 4]}, 1/set_elasticity: {elasticity: U32}}>, 39/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>}>
         */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, _delegate, _real, _force_proxy_type, _call);
        },

        proxyAnnouncedH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', true, data);
        },

        buildProxyAnnouncedCall: (_delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxyAnnounced', {
                delegate: _delegate,
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        buildProxyAnnouncedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'proxyAnnounced', argsBytes)
        },

    }
}
