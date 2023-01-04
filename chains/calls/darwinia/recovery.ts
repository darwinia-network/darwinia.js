import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getRecovery = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 32]
         * @param _call: Enum<{System: Enum<{fill_block: {ratio: U32}, remark: {remark: Vec<U8>}, set_heap_pages: {pages: U64}, set_code: {code: Vec<U8>}, set_code_without_checks: {code: Vec<U8>}, set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, kill_storage: {keys: Vec<Vec<U8>>}, kill_prefix: {prefix: Vec<U8>, subkeys: U32}, remark_with_event: {remark: Vec<U8>}}>, Babe: Enum<{report_equivocation: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, report_equivocation_unsigned: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, plan_config_change: {config: Enum<{V1}>}}>, Timestamp: Enum<{set: {now: Compact<U64>}}>, Balances: Enum<{transfer: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, set_balance: {who: Enum<{Id, Index, Raw, Address32, Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, force_transfer: {source: Enum<{Id, Index, Raw, Address32, Address20}>, dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, transfer_keep_alive: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, transfer_all: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, keep_alive: Bool}, force_unreserve: {who: Enum<{Id, Index, Raw, Address32, Address20}>, amount: U128}}>, Kton: Enum<{transfer: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, set_balance: {who: Enum<{Id, Index, Raw, Address32, Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, force_transfer: {source: Enum<{Id, Index, Raw, Address32, Address20}>, dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, transfer_keep_alive: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, value: Compact<U128>}, transfer_all: {dest: Enum<{Id, Index, Raw, Address32, Address20}>, keep_alive: Bool}, force_unreserve: {who: Enum<{Id, Index, Raw, Address32, Address20}>, amount: U128}}>, Authorship: Enum<{set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}>}}>, ElectionProviderMultiPhase: Enum<{submit_unsigned: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, witness: {voters: Compact<U32>, targets: Compact<U32>}}, set_minimum_untrusted_score: {maybe_next_score: Enum<{None, Some}>}, set_emergency_election_result: {supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>}, submit: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, num_signed_submissions: U32}}>, Staking: Enum<{bond: {controller: Enum<{Id, Index, Raw, Address32, Address20}>, value: Enum<{RingBalance, KtonBalance}>, payee: Enum<{Staked, Stash, Controller, Account, None}>, promise_month: U8}, bond_extra: {max_additional: Enum<{RingBalance, KtonBalance}>, promise_month: U8}, deposit_extra: {value: U128, promise_month: U8}, unbond: {value: Enum<{RingBalance, KtonBalance}>}, withdraw_unbonded: {num_slashing_spans: U32}, claim_mature_deposits: , try_claim_deposits_with_punish: {expire_time: U64}, validate: {prefs: {commission: Compact<U32>, blocked: Bool}}, nominate: {targets: Vec<Enum<{Id, Index, Raw, Address32, Address20}>>}, chill: , set_payee: {payee: Enum<{Staked, Stash, Controller, Account, None}>}, set_controller: {controller: Enum<{Id, Index, Raw, Address32, Address20}>}, set_validator_count: {new: Compact<U32>}, increase_validator_count: {additional: Compact<U32>}, scale_validator_count: {factor: U8}, force_no_eras: , force_new_era: , set_invulnerables: {invulnerables: Vec<[U8; 32]>}, force_unstake: {stash: [U8; 32], num_slashing_spans: U32}, force_new_era_always: , cancel_deferred_slash: {era: U32, slash_indices: Vec<U32>}, payout_stakers: {validator_stash: [U8; 32], era: U32}, rebond: {plan_to_rebond_ring: Compact<U128>, plan_to_rebond_kton: Compact<U128>}, set_history_depth: {new_history_depth: Compact<U32>, era_items_deleted: Compact<U32>}, reap_stash: {stash: [U8; 32], num_slashing_spans: U32}, kick: {who: Vec<Enum<{Id, Index, Raw, Address32, Address20}>>}, set_staking_configs: {min_nominator_bond: U128, min_validator_bond: U128, max_nominator_count: Enum<{None, Some}>, max_validator_count: Enum<{None, Some}>, chill_threshold: Enum<{None, Some}>, min_commission: U32}, chill_other: {controller: [U8; 32]}}>, Session: Enum<{set_keys: {keys: {babe: [U8; 32], grandpa: [U8; 32], im_online: [U8; 32], authority_discovery: [U8; 32]}, proof: Vec<U8>}, purge_keys: }>, Grandpa: Enum<{report_equivocation: {equivocation_proof: {set_id: U64, equivocation: Enum<{Prevote, Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, report_equivocation_unsigned: {equivocation_proof: {set_id: U64, equivocation: Enum<{Prevote, Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, note_stalled: {delay: U32, best_finalized_block_number: U32}}>, ImOnline: Enum<{heartbeat: {heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}, signature: [U8; 64]}}>, MessageGadget: Enum<{set_commitment_contract: {commitment_contract: [U8; 20]}}>, EcdsaAuthority: Enum<{add_authority: {new: [U8; 20]}, remove_authority: {old: [U8; 20]}, swap_authority: {old: [U8; 20], new: [U8; 20]}, submit_authorities_change_signature: {address: [U8; 20], signature: [U8; 65]}, submit_new_message_root_signature: {address: [U8; 20], signature: [U8; 65]}}>, Democracy: Enum<{propose: {proposal_hash: [U8; 32], value: Compact<U128>}, second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, vote: {ref_index: Compact<U32>, vote: Enum<{Standard, Split}>}, emergency_cancel: {ref_index: U32}, external_propose: {proposal_hash: [U8; 32]}, external_propose_majority: {proposal_hash: [U8; 32]}, external_propose_default: {proposal_hash: [U8; 32]}, fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, veto_external: {proposal_hash: [U8; 32]}, cancel_referendum: {ref_index: Compact<U32>}, cancel_queued: {which: U32}, delegate: {to: [U8; 32], conviction: Enum<{None, Locked1x, Locked2x, Locked3x, Locked4x, Locked5x, Locked6x}>, balance: U128}, undelegate: , clear_public_proposals: , note_preimage: {encoded_proposal: Vec<U8>}, note_preimage_operational: {encoded_proposal: Vec<U8>}, note_imminent_preimage: {encoded_proposal: Vec<U8>}, note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, unlock: {target: [U8; 32]}, remove_vote: {index: U32}, remove_other_vote: {target: [U8; 32], index: U32}, enact_proposal: {proposal_hash: [U8; 32], index: U32}, blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{None, Some}>}, cancel_proposal: {prop_index: Compact<U32>}}>, Council: Enum<{set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{None, Some}>, old_count: U32}, execute: {proposal: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, propose: {threshold: Compact<U32>, proposal: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, disapprove_proposal: {proposal_hash: [U8; 32]}}>, TechnicalCommittee: Enum<{set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{None, Some}>, old_count: U32}, execute: {proposal: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, propose: {threshold: Compact<U32>, proposal: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, disapprove_proposal: {proposal_hash: [U8; 32]}}>, PhragmenElection: Enum<{vote: {votes: Vec<[U8; 32]>, value: Compact<U128>}, remove_voter: , submit_candidacy: {candidate_count: Compact<U32>}, renounce_candidacy: {renouncing: Enum<{Member, RunnerUp, Candidate}>}, remove_member: {who: Enum<{Id, Index, Raw, Address32, Address20}>, has_replacement: Bool}, clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, TechnicalMembership: Enum<{add_member: {who: [U8; 32]}, remove_member: {who: [U8; 32]}, swap_member: {remove: [U8; 32], add: [U8; 32]}, reset_members: {members: Vec<[U8; 32]>}, change_key: {new: [U8; 32]}, set_prime: {who: [U8; 32]}, clear_prime: }>, Treasury: Enum<{propose_spend: {value: Compact<U128>, beneficiary: Enum<{Id, Index, Raw, Address32, Address20}>}, reject_proposal: {proposal_id: Compact<U32>}, approve_proposal: {proposal_id: Compact<U32>}}>, Tips: Enum<{report_awesome: {reason: Vec<U8>, who: [U8; 32]}, retract_tip: {hash: [U8; 32]}, tip_new: {reason: Vec<U8>, who: [U8; 32], tip_value: Compact<U128>}, tip: {hash: [U8; 32], tip_value: Compact<U128>}, close_tip: {hash: [U8; 32]}, slash_tip: {hash: [U8; 32]}}>, Bounties: Enum<{propose_bounty: {value: Compact<U128>, description: Vec<U8>}, approve_bounty: {bounty_id: Compact<U32>}, propose_curator: {bounty_id: Compact<U32>, curator: Enum<{Id, Index, Raw, Address32, Address20}>, fee: Compact<U128>}, unassign_curator: {bounty_id: Compact<U32>}, accept_curator: {bounty_id: Compact<U32>}, award_bounty: {bounty_id: Compact<U32>, beneficiary: Enum<{Id, Index, Raw, Address32, Address20}>}, claim_bounty: {bounty_id: Compact<U32>}, close_bounty: {bounty_id: Compact<U32>}, extend_bounty_expiry: {bounty_id: Compact<U32>, remark: Vec<U8>}}>, Sudo: Enum<{sudo: {call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}, sudo_unchecked_weight: {call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>, weight: U64}, set_key: {new: Enum<{Id, Index, Raw, Address32, Address20}>}, sudo_as: {who: Enum<{Id, Index, Raw, Address32, Address20}>, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}}>, Vesting: Enum<{vest: , vest_other: {target: Enum<{Id, Index, Raw, Address32, Address20}>}, vested_transfer: {target: Enum<{Id, Index, Raw, Address32, Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, force_vested_transfer: {source: Enum<{Id, Index, Raw, Address32, Address20}>, target: Enum<{Id, Index, Raw, Address32, Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, Utility: Enum<{batch: {calls: Vec<Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>>}, as_derivative: {index: U16, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}, batch_all: {calls: Vec<Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>>}, dispatch_as: {as_origin: Enum<{system, Council, TechnicalCommittee, Ethereum, Void}>, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}}>, Identity: Enum<{add_registrar: {account: [U8; 32]}, set_identity: {info: {additional: Vec<(Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>)>, display: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, legal: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, web: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, riot: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, email: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, pgp_fingerprint: Enum<{None, Some}>, image: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>, twitter: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>}}, set_subs: {subs: Vec<([U8; 32], Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>)>}, clear_identity: , request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, cancel_request: {reg_index: U32}, set_fee: {index: Compact<U32>, fee: Compact<U128>}, set_account_id: {index: Compact<U32>, new: [U8; 32]}, set_fields: {index: Compact<U32>, fields: U64}, provide_judgement: {reg_index: Compact<U32>, target: Enum<{Id, Index, Raw, Address32, Address20}>, judgement: Enum<{Unknown, FeePaid, Reasonable, KnownGood, OutOfDate, LowQuality, Erroneous}>}, kill_identity: {target: Enum<{Id, Index, Raw, Address32, Address20}>}, add_sub: {sub: Enum<{Id, Index, Raw, Address32, Address20}>, data: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>}, rename_sub: {sub: Enum<{Id, Index, Raw, Address32, Address20}>, data: Enum<{None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256}>}, remove_sub: {sub: Enum<{Id, Index, Raw, Address32, Address20}>}, quit_sub: }>, Society: Enum<{bid: {value: U128}, unbid: {pos: U32}, vouch: {who: [U8; 32], value: U128, tip: U128}, unvouch: {pos: U32}, vote: {candidate: Enum<{Id, Index, Raw, Address32, Address20}>, approve: Bool}, defender_vote: {approve: Bool}, payout: , found: {founder: [U8; 32], max_members: U32, rules: Vec<U8>}, unfound: , judge_suspended_member: {who: [U8; 32], forgive: Bool}, judge_suspended_candidate: {who: [U8; 32], judgement: Enum<{Rebid, Reject, Approve}>}, set_max_members: {max: U32}}>, Recovery: Enum<{as_recovered: {account: [U8; 32], call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}, set_recovered: {lost: [U8; 32], rescuer: [U8; 32]}, create_recovery: {friends: Vec<[U8; 32]>, threshold: U16, delay_period: U32}, initiate_recovery: {account: [U8; 32]}, vouch_recovery: {lost: [U8; 32], rescuer: [U8; 32]}, claim_recovery: {account: [U8; 32]}, close_recovery: {rescuer: [U8; 32]}, remove_recovery: , cancel_recovered: {account: [U8; 32]}}>, Scheduler: Enum<{schedule: {when: U32, maybe_periodic: Enum<{None, Some}>, priority: U8, call: Enum<{Value, Hash}>}, cancel: {when: U32, index: U32}, schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{None, Some}>, priority: U8, call: Enum<{Value, Hash}>}, cancel_named: {id: Vec<U8>}, schedule_after: {after: U32, maybe_periodic: Enum<{None, Some}>, priority: U8, call: Enum<{Value, Hash}>}, schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{None, Some}>, priority: U8, call: Enum<{Value, Hash}>}}>, Preimage: Enum<{note_preimage: {bytes: Vec<U8>}, unnote_preimage: {hash: [U8; 32]}, request_preimage: {hash: [U8; 32]}, unrequest_preimage: {hash: [U8; 32]}}>, Proxy: Enum<{proxy: {real: [U8; 32], force_proxy_type: Enum<{None, Some}>, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}, add_proxy: {delegate: [U8; 32], proxy_type: Enum<{Any, NonTransfer, Governance, Staking, IdentityJudgement, EthereumBridge}>, delay: U32}, remove_proxy: {delegate: [U8; 32], proxy_type: Enum<{Any, NonTransfer, Governance, Staking, IdentityJudgement, EthereumBridge}>, delay: U32}, remove_proxies: , anonymous: {proxy_type: Enum<{Any, NonTransfer, Governance, Staking, IdentityJudgement, EthereumBridge}>, delay: U32, index: U16}, kill_anonymous: {spawner: [U8; 32], proxy_type: Enum<{Any, NonTransfer, Governance, Staking, IdentityJudgement, EthereumBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, announce: {real: [U8; 32], call_hash: [U8; 32]}, remove_announcement: {real: [U8; 32], call_hash: [U8; 32]}, reject_announcement: {delegate: [U8; 32], call_hash: [U8; 32]}, proxy_announced: {delegate: [U8; 32], real: [U8; 32], force_proxy_type: Enum<{None, Some}>, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}}>, Multisig: Enum<{as_multi_threshold_1: {other_signatories: Vec<[U8; 32]>, call: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>}, as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{None, Some}>, call: (Compact<U32>, Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, ImOnline, MessageGadget, EcdsaAuthority, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Bounties, Sudo, Vesting, Utility, Identity, Society, Recovery, Scheduler, Preimage, Proxy, Multisig, EVM, Ethereum, BaseFee, BridgeCrabGrandpa, BridgeCrabMessages, BridgePolkadotGrandpa, BridgePolkadotParachain, BridgeDarwiniaParachainMessages, FeeMarket, DarwiniaParachainFeeMarket}>), store_call: Bool, max_weight: U64}, approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{None, Some}>, call_hash: [U8; 32], max_weight: U64}, cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, EVM: Enum<{call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{None, Some}>, nonce: Enum<{None, Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{None, Some}>, nonce: Enum<{None, Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{None, Some}>, nonce: Enum<{None, Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, Ethereum: Enum<{transact: {transaction: Enum<{Legacy, EIP2930, EIP1559}>}, message_transact: {transaction: Enum<{Legacy, EIP2930, EIP1559}>}}>, BaseFee: Enum<{set_base_fee_per_gas: {fee: [U64; 4]}, set_is_active: {is_active: Bool}, set_elasticity: {elasticity: U32}}>, BridgeCrabGrandpa: Enum<{submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}>}}, initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, set_owner: {new_owner: Enum<{None, Some}>}, set_operational: {operational: Bool}}>, BridgeCrabMessages: Enum<{set_owner: {new_owner: Enum<{None, Some}>}, set_operating_mode: {operating_mode: Enum<{Normal, RejectingOutboundMessages, Halted}>}, update_pallet_parameter: {parameter: Enum<{CrabToDarwiniaConversionRate}>}, send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{SourceRoot, TargetAccount, SourceAccount}>, dispatch_fee_payment: Enum<{AtSourceChain, AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, BridgePolkadotGrandpa: Enum<{submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}>}}, initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, set_owner: {new_owner: Enum<{None, Some}>}, set_operational: {operational: Bool}}>, BridgePolkadotParachain: Enum<{submit_parachain_heads: {relay_block_hash: [U8; 32], parachains: Vec<U32>, parachain_heads_proof: Vec<Vec<U8>>}}>, BridgeDarwiniaParachainMessages: Enum<{set_owner: {new_owner: Enum<{None, Some}>}, set_operating_mode: {operating_mode: Enum<{Normal, RejectingOutboundMessages, Halted}>}, update_pallet_parameter: {parameter: Enum<{DarwiniaParachainToDarwiniaConversionRate}>}, send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{SourceRoot, TargetAccount, SourceAccount}>, dispatch_fee_payment: Enum<{AtSourceChain, AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, FeeMarket: Enum<{enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{None, Some}>}, update_locked_collateral: {new_collateral: U128}, update_relay_fee: {new_fee: U128}, cancel_enrollment: , set_slash_protect: {slash_protect: U128}, set_assigned_relayers_number: {number: U32}}>, DarwiniaParachainFeeMarket: Enum<{enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{None, Some}>}, update_locked_collateral: {new_collateral: U128}, update_relay_fee: {new_fee: U128}, cancel_enrollment: , set_slash_protect: {slash_protect: U128}, set_assigned_relayers_number: {number: U32}}>}>
	 */
        asRecovered: async (signer: ethers.Signer, _account: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'asRecovered', false, _account, _call);
        },

        /**
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
	 */
        setRecovered: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'setRecovered', false, _lost, _rescuer);
        },

        /**
         * @param _friends: Vec<[U8; 32]>
         * @param _threshold: U16
         * @param _delay_period: U32
	 */
        createRecovery: async (signer: ethers.Signer, _friends: unknown, _threshold: unknown, _delay_period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'createRecovery', false, _friends, _threshold, _delay_period);
        },

        /**
         * @param _account: [U8; 32]
	 */
        initiateRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'initiateRecovery', false, _account);
        },

        /**
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
	 */
        vouchRecovery: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'vouchRecovery', false, _lost, _rescuer);
        },

        /**
         * @param _account: [U8; 32]
	 */
        claimRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'claimRecovery', false, _account);
        },

        /**
         * @param _rescuer: [U8; 32]
	 */
        closeRecovery: async (signer: ethers.Signer, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'closeRecovery', false, _rescuer);
        },

        /**
	 */
        removeRecovery: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'removeRecovery', false);
        },

        /**
         * @param _account: [U8; 32]
	 */
        cancelRecovered: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'cancelRecovered', false, _account);
        },


    }
}
