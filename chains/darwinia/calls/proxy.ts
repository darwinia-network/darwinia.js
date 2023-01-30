/**
 * This is the doc comment for pallet `Proxy`'s calls. 
 * 
 * `Proxy`'s storages: {@link: module:darwinia/proxy/storages}
 *
 * @module darwinia/proxy/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
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
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         *
         * @param {unknown} _real [U8; 32]
         * @param {unknown} _force_proxy_type Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>}>
         * @param {unknown} _call Enum<{0/System: Enum<{0/fill_block: {ratio: U32}, 1/remark: {remark: Vec<U8>}, 2/set_heap_pages: {pages: U64}, 3/set_code: {code: Vec<U8>}, 4/set_code_without_checks: {code: Vec<U8>}, 5/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 6/kill_storage: {keys: Vec<Vec<U8>>}, 7/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 8/remark_with_event: {remark: Vec<U8>}}>, 2/Babe: Enum<{0/report_equivocation: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/plan_config_change: {config: Enum<{1/V1}>}}>, 3/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 4/Balances: Enum<{0/transfer: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, amount: U128}}>, 5/Kton: Enum<{0/transfer: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, amount: U128}}>, 7/Authorship: Enum<{0/set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, witness: {voters: Compact<U32>, targets: Compact<U32>}}, 1/set_minimum_untrusted_score: {maybe_next_score: Enum<{0/None, 1/Some}>}, 2/set_emergency_election_result: {supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>}, 3/submit: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, num_signed_submissions: U32}}>, 8/Staking: Enum<{0/bond: {controller: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Enum<{0/RingBalance, 1/KtonBalance}>, payee: Enum<{0/Staked, 1/Stash, 2/Controller, 3/Account, 4/None}>, promise_month: U8}, 1/bond_extra: {max_additional: Enum<{0/RingBalance, 1/KtonBalance}>, promise_month: U8}, 2/deposit_extra: {value: U128, promise_month: U8}, 3/unbond: {value: Enum<{0/RingBalance, 1/KtonBalance}>}, 4/withdraw_unbonded: {num_slashing_spans: U32}, 5/claim_mature_deposits: , 6/try_claim_deposits_with_punish: {expire_time: U64}, 7/validate: {prefs: {commission: Compact<U32>, blocked: Bool}}, 8/nominate: {targets: Vec<Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>>}, 9/chill: , 10/set_payee: {payee: Enum<{0/Staked, 1/Stash, 2/Controller, 3/Account, 4/None}>}, 11/set_controller: {controller: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 12/set_validator_count: {new: Compact<U32>}, 13/increase_validator_count: {additional: Compact<U32>}, 14/scale_validator_count: {factor: U8}, 15/force_no_eras: , 16/force_new_era: , 17/set_invulnerables: {invulnerables: Vec<[U8; 32]>}, 18/force_unstake: {stash: [U8; 32], num_slashing_spans: U32}, 19/force_new_era_always: , 20/cancel_deferred_slash: {era: U32, slash_indices: Vec<U32>}, 21/payout_stakers: {validator_stash: [U8; 32], era: U32}, 22/rebond: {plan_to_rebond_ring: Compact<U128>, plan_to_rebond_kton: Compact<U128>}, 23/set_history_depth: {new_history_depth: Compact<U32>, era_items_deleted: Compact<U32>}, 24/reap_stash: {stash: [U8; 32], num_slashing_spans: U32}, 25/kick: {who: Vec<Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>>}, 26/set_staking_configs: {min_nominator_bond: U128, min_validator_bond: U128, max_nominator_count: Enum<{0/None, 1/Some}>, max_validator_count: Enum<{0/None, 1/Some}>, chill_threshold: Enum<{0/None, 1/Some}>, min_commission: U32}, 27/chill_other: {controller: [U8; 32]}}>, 11/Session: Enum<{0/set_keys: {keys: {babe: [U8; 32], grandpa: [U8; 32], im_online: [U8; 32], authority_discovery: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 13/Grandpa: Enum<{0/report_equivocation: {equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote, 1/Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote, 1/Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/note_stalled: {delay: U32, best_finalized_block_number: U32}}>, 14/ImOnline: Enum<{0/heartbeat: {heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}, signature: [U8; 64]}}>, 50/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 51/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {address: [U8; 20], signature: [U8; 65]}, 4/submit_new_message_root_signature: {address: [U8; 20], signature: [U8; 65]}}>, 37/Democracy: Enum<{0/propose: {proposal_hash: [U8; 32], value: Compact<U128>}, 1/second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal_hash: [U8; 32]}, 5/external_propose_majority: {proposal_hash: [U8; 32]}, 6/external_propose_default: {proposal_hash: [U8; 32]}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/cancel_queued: {which: U32}, 11/delegate: {to: [U8; 32], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 12/undelegate: , 13/clear_public_proposals: , 14/note_preimage: {encoded_proposal: Vec<U8>}, 15/note_preimage_operational: {encoded_proposal: Vec<U8>}, 16/note_imminent_preimage: {encoded_proposal: Vec<U8>}, 17/note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, 18/reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, 19/unlock: {target: [U8; 32]}, 20/remove_vote: {index: U32}, 21/remove_other_vote: {target: [U8; 32], index: U32}, 22/enact_proposal: {proposal_hash: [U8; 32], index: U32}, 23/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 24/cancel_proposal: {prop_index: Compact<U32>}}>, 16/Council: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 17/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 18/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 32]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, has_replacement: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 19/TechnicalMembership: Enum<{0/add_member: {who: [U8; 32]}, 1/remove_member: {who: [U8; 32]}, 2/swap_member: {remove: [U8; 32], add: [U8; 32]}, 3/reset_members: {members: Vec<[U8; 32]>}, 4/change_key: {new: [U8; 32]}, 5/set_prime: {who: [U8; 32]}, 6/clear_prime: }>, 20/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}}>, 40/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 32]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 32], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 41/Bounties: Enum<{0/propose_bounty: {value: Compact<U128>, description: Vec<U8>}, 1/approve_bounty: {bounty_id: Compact<U32>}, 2/propose_curator: {bounty_id: Compact<U32>, curator: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, fee: Compact<U128>}, 3/unassign_curator: {bounty_id: Compact<U32>}, 4/accept_curator: {bounty_id: Compact<U32>}, 5/award_bounty: {bounty_id: Compact<U32>, beneficiary: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 6/claim_bounty: {bounty_id: Compact<U32>}, 7/close_bounty: {bounty_id: Compact<U32>}, 8/extend_bounty_expiry: {bounty_id: Compact<U32>, remark: Vec<U8>}}>, 27/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, weight: U64}, 2/set_key: {new: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 3/sudo_as: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 21/Vesting: Enum<{0/vest: , 1/vest_other: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 2/vested_transfer: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 22/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 16/Council, 17/TechnicalCommittee, 48/Ethereum, 4/Void}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 23/Identity: Enum<{0/add_registrar: {account: [U8; 32]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 32], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 32]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>}, 10/kill_identity: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 11/add_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 14/quit_sub: }>, 24/Society: Enum<{0/bid: {value: U128}, 1/unbid: {pos: U32}, 2/vouch: {who: [U8; 32], value: U128, tip: U128}, 3/unvouch: {pos: U32}, 4/vote: {candidate: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, approve: Bool}, 5/defender_vote: {approve: Bool}, 6/payout: , 7/found: {founder: [U8; 32], max_members: U32, rules: Vec<U8>}, 8/unfound: , 9/judge_suspended_member: {who: [U8; 32], forgive: Bool}, 10/judge_suspended_candidate: {who: [U8; 32], judgement: Enum<{0/Rebid, 1/Reject, 2/Approve}>}, 11/set_max_members: {max: U32}}>, 25/Recovery: Enum<{0/as_recovered: {account: [U8; 32], call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/set_recovered: {lost: [U8; 32], rescuer: [U8; 32]}, 2/create_recovery: {friends: Vec<[U8; 32]>, threshold: U16, delay_period: U32}, 3/initiate_recovery: {account: [U8; 32]}, 4/vouch_recovery: {lost: [U8; 32], rescuer: [U8; 32]}, 5/claim_recovery: {account: [U8; 32]}, 6/close_recovery: {rescuer: [U8; 32]}, 7/remove_recovery: , 8/cancel_recovered: {account: [U8; 32]}}>, 26/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 3/cancel_named: {id: Vec<U8>}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 5/schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}}>, 52/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 28/Proxy: Enum<{0/proxy: {real: [U8; 32], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/add_proxy: {delegate: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32}, 3/remove_proxies: , 4/anonymous: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32, index: U16}, 5/kill_anonymous: {spawner: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 32], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 32], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 32], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 32], real: [U8; 32], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 29/Multisig: Enum<{0/as_multi_threshold_1: {other_signatories: Vec<[U8; 32]>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call: (Compact<U32>, Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>), store_call: Bool, max_weight: U64}, 2/approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call_hash: [U8; 32], max_weight: U64}, 3/cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, 47/EVM: Enum<{0/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 1/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 48/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}, 1/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas: {fee: [U64; 4]}, 1/set_is_active: {is_active: Bool}, 2/set_elasticity: {elasticity: U32}}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operational: {operational: Bool}}>, 44/BridgeCrabMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/RejectingOutboundMessages, 2/Halted}>}, 2/update_pallet_parameter: {parameter: Enum<{0/CrabToDarwiniaConversionRate}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operational: {operational: Bool}}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads: {relay_block_hash: [U8; 32], parachains: Vec<U32>, parachain_heads_proof: Vec<Vec<U8>>}}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/RejectingOutboundMessages, 2/Halted}>}, 2/update_pallet_parameter: {parameter: Enum<{0/DarwiniaParachainToDarwiniaConversionRate}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>}>
         * @instance
         */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, {
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/proxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProxyCall: (_real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxy', {
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         *
         * @param {unknown} _delegate [U8; 32]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>
         * @param {unknown} _delay U32
         * @instance
         */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/addProxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addProxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'addProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         *
         * @param {unknown} _delegate [U8; 32]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>
         * @param {unknown} _delay U32
         * @instance
         */
        removeProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', false, {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/removeProxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeProxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeProxy', argsBytes)
        },

        /**
         * Unregister all proxy accounts for the sender.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * WARNING: This may be called on accounts created by `anonymous`, however if done, then
         * the unreserved fees will be inaccessible. **All access to this account will be lost.**
         * 
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         *
         * @instance
         */
        removeProxies: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/removeProxies}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeProxiesH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxiesCall: () => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxies', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveProxiesCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         * TODO: Might be over counting 1 read
         *
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>
         * @param {unknown} _delay U32
         * @param {unknown} _index U16
         * @instance
         */
        anonymous: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', false, {
                proxy_type: _proxy_type,
                delay: _delay,
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/anonymous}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        anonymousH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAnonymousCall: (_proxy_type: unknown, _delay: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'anonymous', {
                proxy_type: _proxy_type,
                delay: _delay,
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAnonymousCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAnonymousCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'anonymous', argsBytes)
        },

        /**
         * Removes a previously spawned anonymous proxy.
         * 
         * WARNING: **All access to this account will be lost.** Any funds held in it will be
         * inaccessible.
         * 
         * Requires a `Signed` origin, and the sender account must have been created by a call to
         * `anonymous` with corresponding parameters.
         * 
         * - `spawner`: The account that originally called `anonymous` to create this account.
         * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
         * - `proxy_type`: The proxy type originally passed to `anonymous`.
         * - `height`: The height of the chain when the call to `anonymous` was processed.
         * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
         * 
         * Fails with `NoPermission` in case the caller is not a previously created anonymous
         * account whose `anonymous` call has corresponding parameters.
         * 
         * # <weight>
         * Weight is a function of the number of proxies the user has (P).
         * # </weight>
         *
         * @param {unknown} _spawner [U8; 32]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>
         * @param {unknown} _index U16
         * @param {unknown} _height Compact<U32>
         * @param {unknown} _ext_index Compact<U32>
         * @instance
         */
        killAnonymous: async (signer: ethers.Signer, _spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killAnonymous', false, {
                spawner: _spawner,
                proxy_type: _proxy_type,
                index: _index,
                height: _height,
                ext_index: _ext_index,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/killAnonymous}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killAnonymousH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killAnonymous', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillAnonymousCall: (_spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'killAnonymous', {
                spawner: _spawner,
                proxy_type: _proxy_type,
                index: _index,
                height: _height,
                ext_index: _ext_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillAnonymousCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillAnonymousCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'killAnonymous', argsBytes)
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
         * # <weight>
         * Weight is a function of:
         * - A: the number of announcements made.
         * - P: the number of proxies the user has.
         * # </weight>
         *
         * @param {unknown} _real [U8; 32]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        announce: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, {
                real: _real,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/announce}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        announceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAnnounceCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'announce', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAnnounceCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of:
         * - A: the number of announcements made.
         * - P: the number of proxies the user has.
         * # </weight>
         *
         * @param {unknown} _real [U8; 32]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        removeAnnouncement: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, {
                real: _real,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/removeAnnouncement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeAnnouncementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveAnnouncementCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeAnnouncement', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveAnnouncementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of:
         * - A: the number of announcements made.
         * - P: the number of proxies the user has.
         * # </weight>
         *
         * @param {unknown} _delegate [U8; 32]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        rejectAnnouncement: async (signer: ethers.Signer, _delegate: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, {
                delegate: _delegate,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/rejectAnnouncement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        rejectAnnouncementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRejectAnnouncementCall: (_delegate: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'rejectAnnouncement', {
                delegate: _delegate,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRejectAnnouncementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
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
         * # <weight>
         * Weight is a function of:
         * - A: the number of announcements made.
         * - P: the number of proxies the user has.
         * # </weight>
         *
         * @param {unknown} _delegate [U8; 32]
         * @param {unknown} _real [U8; 32]
         * @param {unknown} _force_proxy_type Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/EthereumBridge: }>}>
         * @param {unknown} _call Enum<{0/System: Enum<{0/fill_block: {ratio: U32}, 1/remark: {remark: Vec<U8>}, 2/set_heap_pages: {pages: U64}, 3/set_code: {code: Vec<U8>}, 4/set_code_without_checks: {code: Vec<U8>}, 5/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 6/kill_storage: {keys: Vec<Vec<U8>>}, 7/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 8/remark_with_event: {remark: Vec<U8>}}>, 2/Babe: Enum<{0/report_equivocation: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/plan_config_change: {config: Enum<{1/V1}>}}>, 3/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 4/Balances: Enum<{0/transfer: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, amount: U128}}>, 5/Kton: Enum<{0/transfer: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, amount: U128}}>, 7/Authorship: Enum<{0/set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}>, 38/ElectionProviderMultiPhase: Enum<{0/submit_unsigned: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, witness: {voters: Compact<U32>, targets: Compact<U32>}}, 1/set_minimum_untrusted_score: {maybe_next_score: Enum<{0/None, 1/Some}>}, 2/set_emergency_election_result: {supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>}, 3/submit: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}, num_signed_submissions: U32}}>, 8/Staking: Enum<{0/bond: {controller: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, value: Enum<{0/RingBalance, 1/KtonBalance}>, payee: Enum<{0/Staked, 1/Stash, 2/Controller, 3/Account, 4/None}>, promise_month: U8}, 1/bond_extra: {max_additional: Enum<{0/RingBalance, 1/KtonBalance}>, promise_month: U8}, 2/deposit_extra: {value: U128, promise_month: U8}, 3/unbond: {value: Enum<{0/RingBalance, 1/KtonBalance}>}, 4/withdraw_unbonded: {num_slashing_spans: U32}, 5/claim_mature_deposits: , 6/try_claim_deposits_with_punish: {expire_time: U64}, 7/validate: {prefs: {commission: Compact<U32>, blocked: Bool}}, 8/nominate: {targets: Vec<Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>>}, 9/chill: , 10/set_payee: {payee: Enum<{0/Staked, 1/Stash, 2/Controller, 3/Account, 4/None}>}, 11/set_controller: {controller: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 12/set_validator_count: {new: Compact<U32>}, 13/increase_validator_count: {additional: Compact<U32>}, 14/scale_validator_count: {factor: U8}, 15/force_no_eras: , 16/force_new_era: , 17/set_invulnerables: {invulnerables: Vec<[U8; 32]>}, 18/force_unstake: {stash: [U8; 32], num_slashing_spans: U32}, 19/force_new_era_always: , 20/cancel_deferred_slash: {era: U32, slash_indices: Vec<U32>}, 21/payout_stakers: {validator_stash: [U8; 32], era: U32}, 22/rebond: {plan_to_rebond_ring: Compact<U128>, plan_to_rebond_kton: Compact<U128>}, 23/set_history_depth: {new_history_depth: Compact<U32>, era_items_deleted: Compact<U32>}, 24/reap_stash: {stash: [U8; 32], num_slashing_spans: U32}, 25/kick: {who: Vec<Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>>}, 26/set_staking_configs: {min_nominator_bond: U128, min_validator_bond: U128, max_nominator_count: Enum<{0/None, 1/Some}>, max_validator_count: Enum<{0/None, 1/Some}>, chill_threshold: Enum<{0/None, 1/Some}>, min_commission: U32}, 27/chill_other: {controller: [U8; 32]}}>, 11/Session: Enum<{0/set_keys: {keys: {babe: [U8; 32], grandpa: [U8; 32], im_online: [U8; 32], authority_discovery: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 13/Grandpa: Enum<{0/report_equivocation: {equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote, 1/Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote, 1/Precommit}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/note_stalled: {delay: U32, best_finalized_block_number: U32}}>, 14/ImOnline: Enum<{0/heartbeat: {heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}, signature: [U8; 64]}}>, 50/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 51/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {address: [U8; 20], signature: [U8; 65]}, 4/submit_new_message_root_signature: {address: [U8; 20], signature: [U8; 65]}}>, 37/Democracy: Enum<{0/propose: {proposal_hash: [U8; 32], value: Compact<U128>}, 1/second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal_hash: [U8; 32]}, 5/external_propose_majority: {proposal_hash: [U8; 32]}, 6/external_propose_default: {proposal_hash: [U8; 32]}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/cancel_queued: {which: U32}, 11/delegate: {to: [U8; 32], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 12/undelegate: , 13/clear_public_proposals: , 14/note_preimage: {encoded_proposal: Vec<U8>}, 15/note_preimage_operational: {encoded_proposal: Vec<U8>}, 16/note_imminent_preimage: {encoded_proposal: Vec<U8>}, 17/note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, 18/reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, 19/unlock: {target: [U8; 32]}, 20/remove_vote: {index: U32}, 21/remove_other_vote: {target: [U8; 32], index: U32}, 22/enact_proposal: {proposal_hash: [U8; 32], index: U32}, 23/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 24/cancel_proposal: {prop_index: Compact<U32>}}>, 16/Council: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 17/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 18/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 32]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, has_replacement: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 19/TechnicalMembership: Enum<{0/add_member: {who: [U8; 32]}, 1/remove_member: {who: [U8; 32]}, 2/swap_member: {remove: [U8; 32], add: [U8; 32]}, 3/reset_members: {members: Vec<[U8; 32]>}, 4/change_key: {new: [U8; 32]}, 5/set_prime: {who: [U8; 32]}, 6/clear_prime: }>, 20/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}}>, 40/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 32]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 32], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 41/Bounties: Enum<{0/propose_bounty: {value: Compact<U128>, description: Vec<U8>}, 1/approve_bounty: {bounty_id: Compact<U32>}, 2/propose_curator: {bounty_id: Compact<U32>, curator: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, fee: Compact<U128>}, 3/unassign_curator: {bounty_id: Compact<U32>}, 4/accept_curator: {bounty_id: Compact<U32>}, 5/award_bounty: {bounty_id: Compact<U32>, beneficiary: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 6/claim_bounty: {bounty_id: Compact<U32>}, 7/close_bounty: {bounty_id: Compact<U32>}, 8/extend_bounty_expiry: {bounty_id: Compact<U32>, remark: Vec<U8>}}>, 27/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, weight: U64}, 2/set_key: {new: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 3/sudo_as: {who: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 21/Vesting: Enum<{0/vest: , 1/vest_other: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 2/vested_transfer: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 22/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 16/Council, 17/TechnicalCommittee, 48/Ethereum, 4/Void}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 23/Identity: Enum<{0/add_registrar: {account: [U8; 32]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 32], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 32]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>}, 10/kill_identity: {target: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 11/add_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>}, 14/quit_sub: }>, 24/Society: Enum<{0/bid: {value: U128}, 1/unbid: {pos: U32}, 2/vouch: {who: [U8; 32], value: U128, tip: U128}, 3/unvouch: {pos: U32}, 4/vote: {candidate: Enum<{0/Id, 1/Index, 2/Raw, 3/Address32, 4/Address20}>, approve: Bool}, 5/defender_vote: {approve: Bool}, 6/payout: , 7/found: {founder: [U8; 32], max_members: U32, rules: Vec<U8>}, 8/unfound: , 9/judge_suspended_member: {who: [U8; 32], forgive: Bool}, 10/judge_suspended_candidate: {who: [U8; 32], judgement: Enum<{0/Rebid, 1/Reject, 2/Approve}>}, 11/set_max_members: {max: U32}}>, 25/Recovery: Enum<{0/as_recovered: {account: [U8; 32], call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/set_recovered: {lost: [U8; 32], rescuer: [U8; 32]}, 2/create_recovery: {friends: Vec<[U8; 32]>, threshold: U16, delay_period: U32}, 3/initiate_recovery: {account: [U8; 32]}, 4/vouch_recovery: {lost: [U8; 32], rescuer: [U8; 32]}, 5/claim_recovery: {account: [U8; 32]}, 6/close_recovery: {rescuer: [U8; 32]}, 7/remove_recovery: , 8/cancel_recovered: {account: [U8; 32]}}>, 26/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 3/cancel_named: {id: Vec<U8>}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}, 5/schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/Value, 1/Hash}>}}>, 52/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 28/Proxy: Enum<{0/proxy: {real: [U8; 32], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/add_proxy: {delegate: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32}, 3/remove_proxies: , 4/anonymous: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, delay: U32, index: U16}, 5/kill_anonymous: {spawner: [U8; 32], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/EthereumBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 32], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 32], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 32], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 32], real: [U8; 32], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}}>, 29/Multisig: Enum<{0/as_multi_threshold_1: {other_signatories: Vec<[U8; 32]>, call: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>}, 1/as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call: (Compact<U32>, Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>), store_call: Bool, max_weight: U64}, 2/approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{0/None, 1/Some}>, call_hash: [U8; 32], max_weight: U64}, 3/cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, 47/EVM: Enum<{0/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 1/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 48/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}, 1/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 49/BaseFee: Enum<{0/set_base_fee_per_gas: {fee: [U64; 4]}, 1/set_is_active: {is_active: Bool}, 2/set_elasticity: {elasticity: U32}}>, 43/BridgeCrabGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operational: {operational: Bool}}>, 44/BridgeCrabMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/RejectingOutboundMessages, 2/Halted}>}, 2/update_pallet_parameter: {parameter: Enum<{0/CrabToDarwiniaConversionRate}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 53/BridgePolkadotGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operational: {operational: Bool}}>, 54/BridgePolkadotParachain: Enum<{0/submit_parachain_heads: {relay_block_hash: [U8; 32], parachains: Vec<U32>, parachain_heads_proof: Vec<Vec<U8>>}}>, 56/BridgeDarwiniaParachainMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/RejectingOutboundMessages, 2/Halted}>}, 2/update_pallet_parameter: {parameter: Enum<{0/DarwiniaParachainToDarwiniaConversionRate}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 45/FeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>, 57/DarwiniaParachainFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>}>
         * @instance
         */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, {
                delegate: _delegate,
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
           });
        },

        /**
         * Similar to {@link: darwinia/proxy/calls/proxyAnnounced}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proxyAnnouncedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProxyAnnouncedCall: (_delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxyAnnounced', {
                delegate: _delegate,
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProxyAnnouncedCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProxyAnnouncedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'proxyAnnounced', argsBytes)
        },

    }
}

