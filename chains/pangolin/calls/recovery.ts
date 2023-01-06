import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getRecovery = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Send a call through a recovered account.
         * 
         * The dispatch origin for this call must be _Signed_ and registered to
         * be able to make calls on behalf of the recovered account.
         * 
         * Parameters:
         * - `account`: The recovered account you want to make a call on-behalf-of.
         * - `call`: The call you want to make with the recovered account.
         * 
         * # <weight>
         * - The weight of the `call` + 10,000.
         * - One storage lookup to check account is recovered by `who`. O(1)
         * # </weight>
         *
         * @param _account: [U8; 32]
         * @param _call: Enum<{0/System: Enum<{0/fill_block: {ratio: U32}, 1/remark: {remark: Vec<U8>}, 2/set_heap_pages: {pages: U64}, 3/set_code: {code: Vec<U8>}, 4/set_code_without_checks: {code: Vec<U8>}, 5/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 6/kill_storage: {keys: Vec<Vec<U8>>}, 7/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 8/remark_with_event: {remark: Vec<U8>}}>, 2/Babe: Enum<{0/report_equivocation: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/plan_config_change: {config: Enum<{"1/V1"}>}}>, 3/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 4/Balances: Enum<{0/transfer: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, amount: U128}}>, 5/Kton: Enum<{0/transfer: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 1/set_balance: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, new_free: Compact<U128>, new_reserved: Compact<U128>}, 2/force_transfer: {source: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 3/transfer_keep_alive: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Compact<U128>}, 4/transfer_all: {dest: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, keep_alive: Bool}, 5/force_unreserve: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, amount: U128}}>, 7/Authorship: Enum<{0/set_uncles: {new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}}>, 8/ElectionProviderMultiPhase: Enum<{0/submit_unsigned: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>, votes17: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 16], Compact<U16>)>, votes18: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 17], Compact<U16>)>, votes19: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 18], Compact<U16>)>, votes20: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 19], Compact<U16>)>, votes21: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 20], Compact<U16>)>, votes22: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 21], Compact<U16>)>, votes23: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 22], Compact<U16>)>, votes24: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 23], Compact<U16>)>}, score: [U128; 3], round: U32}, witness: {voters: Compact<U32>, targets: Compact<U32>}}, 1/set_minimum_untrusted_score: {maybe_next_score: Enum<{"0/None", "1/Some"}>}, 2/set_emergency_election_result: {supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>}, 3/submit: {raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>, votes17: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 16], Compact<U16>)>, votes18: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 17], Compact<U16>)>, votes19: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 18], Compact<U16>)>, votes20: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 19], Compact<U16>)>, votes21: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 20], Compact<U16>)>, votes22: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 21], Compact<U16>)>, votes23: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 22], Compact<U16>)>, votes24: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 23], Compact<U16>)>}, score: [U128; 3], round: U32}, num_signed_submissions: U32}}>, 9/Staking: Enum<{0/bond: {controller: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, value: Enum<{"0/RingBalance", "1/KtonBalance"}>, payee: Enum<{"0/Staked", "1/Stash", "2/Controller", "3/Account", "4/None"}>, promise_month: U8}, 1/bond_extra: {max_additional: Enum<{"0/RingBalance", "1/KtonBalance"}>, promise_month: U8}, 2/deposit_extra: {value: U128, promise_month: U8}, 3/unbond: {value: Enum<{"0/RingBalance", "1/KtonBalance"}>}, 4/withdraw_unbonded: {num_slashing_spans: U32}, 5/claim_mature_deposits: , 6/try_claim_deposits_with_punish: {expire_time: U64}, 7/validate: {prefs: {commission: Compact<U32>, blocked: Bool}}, 8/nominate: {targets: Vec<Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>>}, 9/chill: , 10/set_payee: {payee: Enum<{"0/Staked", "1/Stash", "2/Controller", "3/Account", "4/None"}>}, 11/set_controller: {controller: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 12/set_validator_count: {new: Compact<U32>}, 13/increase_validator_count: {additional: Compact<U32>}, 14/scale_validator_count: {factor: U8}, 15/force_no_eras: , 16/force_new_era: , 17/set_invulnerables: {invulnerables: Vec<[U8; 32]>}, 18/force_unstake: {stash: [U8; 32], num_slashing_spans: U32}, 19/force_new_era_always: , 20/cancel_deferred_slash: {era: U32, slash_indices: Vec<U32>}, 21/payout_stakers: {validator_stash: [U8; 32], era: U32}, 22/rebond: {plan_to_rebond_ring: Compact<U128>, plan_to_rebond_kton: Compact<U128>}, 23/set_history_depth: {new_history_depth: Compact<U32>, era_items_deleted: Compact<U32>}, 24/reap_stash: {stash: [U8; 32], num_slashing_spans: U32}, 25/kick: {who: Vec<Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>>}, 26/set_staking_configs: {min_nominator_bond: U128, min_validator_bond: U128, max_nominator_count: Enum<{"0/None", "1/Some"}>, max_validator_count: Enum<{"0/None", "1/Some"}>, chill_threshold: Enum<{"0/None", "1/Some"}>, min_commission: U32}, 27/chill_other: {controller: [U8; 32]}}>, 12/Session: Enum<{0/set_keys: {keys: {babe: [U8; 32], grandpa: [U8; 32], beefy: [U8; 33], im_online: [U8; 32], authority_discovery: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 13/Grandpa: Enum<{0/report_equivocation: {equivocation_proof: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 1/report_equivocation_unsigned: {equivocation_proof: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}, key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}}, 2/note_stalled: {delay: U32, best_finalized_block_number: U32}}>, 58/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 66/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {address: [U8; 20], signature: [U8; 65]}, 4/submit_new_message_root_signature: {address: [U8; 20], signature: [U8; 65]}}>, 14/ImOnline: Enum<{0/heartbeat: {heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}, signature: [U8; 64]}}>, 17/Democracy: Enum<{0/propose: {proposal_hash: [U8; 32], value: Compact<U128>}, 1/second: {proposal: Compact<U32>, seconds_upper_bound: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{"0/Standard", "1/Split"}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal_hash: [U8; 32]}, 5/external_propose_majority: {proposal_hash: [U8; 32]}, 6/external_propose_default: {proposal_hash: [U8; 32]}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/cancel_queued: {which: U32}, 11/delegate: {to: [U8; 32], conviction: Enum<{"0/None", "1/Locked1x", "2/Locked2x", "3/Locked3x", "4/Locked4x", "5/Locked5x", "6/Locked6x"}>, balance: U128}, 12/undelegate: , 13/clear_public_proposals: , 14/note_preimage: {encoded_proposal: Vec<U8>}, 15/note_preimage_operational: {encoded_proposal: Vec<U8>}, 16/note_imminent_preimage: {encoded_proposal: Vec<U8>}, 17/note_imminent_preimage_operational: {encoded_proposal: Vec<U8>}, 18/reap_preimage: {proposal_hash: [U8; 32], proposal_len_upper_bound: Compact<U32>}, 19/unlock: {target: [U8; 32]}, 20/remove_vote: {index: U32}, 21/remove_other_vote: {target: [U8; 32], index: U32}, 22/enact_proposal: {proposal_hash: [U8; 32], index: U32}, 23/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{"0/None", "1/Some"}>}, 24/cancel_proposal: {prop_index: Compact<U32>}}>, 18/Council: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{"0/None", "1/Some"}>, old_count: U32}, 1/execute: {proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 19/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 32]>, prime: Enum<{"0/None", "1/Some"}>, old_count: U32}, 1/execute: {proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 4/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: Compact<U64>, length_bound: Compact<U32>}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}}>, 20/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 32]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{"0/Member", "1/RunnerUp", "2/Candidate"}>}, 4/remove_member: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, has_replacement: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 21/TechnicalMembership: Enum<{0/add_member: {who: [U8; 32]}, 1/remove_member: {who: [U8; 32]}, 2/swap_member: {remove: [U8; 32], add: [U8; 32]}, 3/reset_members: {members: Vec<[U8; 32]>}, 4/change_key: {new: [U8; 32]}, 5/set_prime: {who: [U8; 32]}, 6/clear_prime: }>, 22/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}}>, 50/KtonTreasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}}>, 51/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 32]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 32], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 52/Bounties: Enum<{0/propose_bounty: {value: Compact<U128>, description: Vec<U8>}, 1/approve_bounty: {bounty_id: Compact<U32>}, 2/propose_curator: {bounty_id: Compact<U32>, curator: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, fee: Compact<U128>}, 3/unassign_curator: {bounty_id: Compact<U32>}, 4/accept_curator: {bounty_id: Compact<U32>}, 5/award_bounty: {bounty_id: Compact<U32>, beneficiary: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 6/claim_bounty: {bounty_id: Compact<U32>}, 7/close_bounty: {bounty_id: Compact<U32>}, 8/extend_bounty_expiry: {bounty_id: Compact<U32>, remark: Vec<U8>}}>, 23/Sudo: Enum<{0/sudo: {call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}, 1/sudo_unchecked_weight: {call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>, weight: U64}, 2/set_key: {new: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 3/sudo_as: {who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}}>, 25/Vesting: Enum<{0/vest: , 1/vest_other: {target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 2/vested_transfer: {target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 3/force_vested_transfer: {source: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, schedule: {locked: U128, per_block: U128, starting_block: U32}}, 4/merge_schedules: {schedule1_index: U32, schedule2_index: U32}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>>}, 1/as_derivative: {index: U16, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}, 2/batch_all: {calls: Vec<Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>>}, 3/dispatch_as: {as_origin: Enum<{"0/system", "18/Council", "19/TechnicalCommittee", "41/Ethereum", "4/Void"}>, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 32]}, 1/set_identity: {info: {additional: Vec<(Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>, display: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, legal: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, web: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, riot: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, email: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, pgp_fingerprint: Enum<{"0/None", "1/Some"}>, image: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, twitter: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}}, 2/set_subs: {subs: Vec<([U8; 32], Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 32]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, judgement: Enum<{"0/Unknown", "1/FeePaid", "2/Reasonable", "3/KnownGood", "4/OutOfDate", "5/LowQuality", "6/Erroneous"}>}, 10/kill_identity: {target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 11/add_sub: {sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, data: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}, 12/rename_sub: {sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, data: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}, 13/remove_sub: {sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>}, 14/quit_sub: }>, 28/Society: Enum<{0/bid: {value: U128}, 1/unbid: {pos: U32}, 2/vouch: {who: [U8; 32], value: U128, tip: U128}, 3/unvouch: {pos: U32}, 4/vote: {candidate: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>, approve: Bool}, 5/defender_vote: {approve: Bool}, 6/payout: , 7/found: {founder: [U8; 32], max_members: U32, rules: Vec<U8>}, 8/unfound: , 9/judge_suspended_member: {who: [U8; 32], forgive: Bool}, 10/judge_suspended_candidate: {who: [U8; 32], judgement: Enum<{"0/Rebid", "1/Reject", "2/Approve"}>}, 11/set_max_members: {max: U32}}>, 29/Recovery: Enum<{0/as_recovered: {account: [U8; 32], call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}, 1/set_recovered: {lost: [U8; 32], rescuer: [U8; 32]}, 2/create_recovery: {friends: Vec<[U8; 32]>, threshold: U16, delay_period: U32}, 3/initiate_recovery: {account: [U8; 32]}, 4/vouch_recovery: {lost: [U8; 32], rescuer: [U8; 32]}, 5/claim_recovery: {account: [U8; 32]}, 6/close_recovery: {rescuer: [U8; 32]}, 7/remove_recovery: , 8/cancel_recovered: {account: [U8; 32]}}>, 30/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{"0/None", "1/Some"}>, priority: U8, call: Enum<{"0/Value", "1/Hash"}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: Vec<U8>, when: U32, maybe_periodic: Enum<{"0/None", "1/Some"}>, priority: U8, call: Enum<{"0/Value", "1/Hash"}>}, 3/cancel_named: {id: Vec<U8>}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{"0/None", "1/Some"}>, priority: U8, call: Enum<{"0/Value", "1/Hash"}>}, 5/schedule_named_after: {id: Vec<U8>, after: U32, maybe_periodic: Enum<{"0/None", "1/Some"}>, priority: U8, call: Enum<{"0/Value", "1/Hash"}>}}>, 67/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 31/Proxy: Enum<{0/proxy: {real: [U8; 32], force_proxy_type: Enum<{"0/None", "1/Some"}>, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}, 1/add_proxy: {delegate: [U8; 32], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 32], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>, delay: U32}, 3/remove_proxies: , 4/anonymous: {proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>, delay: U32, index: U16}, 5/kill_anonymous: {spawner: [U8; 32], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 32], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 32], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 32], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 32], real: [U8; 32], force_proxy_type: Enum<{"0/None", "1/Some"}>, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}}>, 32/Multisig: Enum<{0/as_multi_threshold_1: {other_signatories: Vec<[U8; 32]>, call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>}, 1/as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{"0/None", "1/Some"}>, call: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>), store_call: Bool, max_weight: U64}, 2/approve_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, maybe_timepoint: Enum<{"0/None", "1/Some"}>, call_hash: [U8; 32], max_weight: U64}, 3/cancel_as_multi: {threshold: U16, other_signatories: Vec<[U8; 32]>, timepoint: {height: U32, index: U32}, call_hash: [U8; 32]}}>, 40/EVM: Enum<{0/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{"0/None", "1/Some"}>, nonce: Enum<{"0/None", "1/Some"}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 1/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{"0/None", "1/Some"}>, nonce: Enum<{"0/None", "1/Some"}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{"0/None", "1/Some"}>, nonce: Enum<{"0/None", "1/Some"}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 41/Ethereum: Enum<{0/transact: {transaction: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>}, 1/message_transact: {transaction: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>}}>, 59/BaseFee: Enum<{0/set_base_fee_per_gas: {fee: [U64; 4]}, 1/set_is_active: {is_active: Bool}, 2/set_elasticity: {elasticity: U32}}>, 45/BridgePangoroGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 3/set_operational: {operational: Bool}}>, 43/BridgePangoroMessages: Enum<{0/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 1/set_operating_mode: {operating_mode: Enum<{"0/Normal", "1/RejectingOutboundMessages", "2/Halted"}>}, 2/update_pallet_parameter: {parameter: Enum<{"0/PangoroToPangolinConversionRate"}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{"0/SourceRoot", "1/TargetAccount", "2/SourceAccount"}>, dispatch_fee_payment: Enum<{"0/AtSourceChain", "1/AtTargetChain"}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 60/BridgeRococoGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 3/set_operational: {operational: Bool}}>, 61/BridgeRococoParachains: Enum<{0/submit_parachain_heads: {relay_block_hash: [U8; 32], parachains: Vec<U32>, parachain_heads_proof: Vec<Vec<U8>>}}>, 63/BridgePangolinParachainMessages: Enum<{0/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 1/set_operating_mode: {operating_mode: Enum<{"0/Normal", "1/RejectingOutboundMessages", "2/Halted"}>}, 2/update_pallet_parameter: {parameter: Enum<{"0/PangolinParachainToPangolinConversionRate"}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{"0/SourceRoot", "1/TargetAccount", "2/SourceAccount"}>, dispatch_fee_payment: Enum<{"0/AtSourceChain", "1/AtTargetChain"}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 53/PangoroFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{"0/None", "1/Some"}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>, 64/PangolinParachainFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{"0/None", "1/Some"}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>, 54/TransactionPause: Enum<{0/pause_transaction: {pallet_name: Vec<U8>, function_name: Vec<U8>}, 1/unpause_transaction: {pallet_name: Vec<U8>, function_name: Vec<U8>}}>, 68/BridgeMoonbaseRelayGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}}, 2/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 3/set_operational: {operational: Bool}}>, 69/BridgeMoonbaseRelayParachains: Enum<{0/submit_parachain_heads: {relay_block_hash: [U8; 32], parachains: Vec<U32>, parachain_heads_proof: Vec<Vec<U8>>}}>, 71/BridgePangolinParachainAlphaMessages: Enum<{0/set_owner: {new_owner: Enum<{"0/None", "1/Some"}>}, 1/set_operating_mode: {operating_mode: Enum<{"0/Normal", "1/RejectingOutboundMessages", "2/Halted"}>}, 2/update_pallet_parameter: {parameter: Enum<{"0/PangolinParachainAlphaToPangolinConversionRate"}>}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: U64, origin: Enum<{"0/SourceRoot", "1/TargetAccount", "2/SourceAccount"}>, dispatch_fee_payment: Enum<{"0/AtSourceChain", "1/AtTargetChain"}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 4/increase_message_fee: {lane_id: [U8; 4], nonce: U64, additional_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 32], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: U64}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}}}>, 72/PangolinParachainAlphaFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{"0/None", "1/Some"}>}, 1/update_locked_collateral: {new_collateral: U128}, 2/update_relay_fee: {new_fee: U128}, 3/cancel_enrollment: , 4/set_slash_protect: {slash_protect: U128}, 5/set_assigned_relayers_number: {number: U32}}>, 65/ToPangolinParachainBacking: Enum<{0/lock_and_remote_issue: {spec_version: U32, weight: U64, value: Compact<U128>, fee: Compact<U128>, recipient: [U8; 32]}, 1/unlock_from_remote: {amount: U128, recipient: [U8; 32]}, 2/set_secure_limited_period: {period: U32}, 3/set_security_limitation_ring_amount: {limitation: U128}, 4/set_remote_mapping_token_factory_account: {account: [U8; 32]}}>}>
         */
        asRecovered: async (signer: ethers.Signer, _account: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'asRecovered', false, _account, _call);
        },

        asRecoveredD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'asRecovered', true, data);
        },

        asRecoveredCall: (_account: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'asRecovered', {
                account: _account,
                call: _call,
            });
        },

        /**
         * Allow ROOT to bypass the recovery process and set an a rescuer account
         * for a lost account directly.
         * 
         * The dispatch origin for this call must be _ROOT_.
         * 
         * Parameters:
         * - `lost`: The "lost account" to be recovered.
         * - `rescuer`: The "rescuer account" which can call as the lost account.
         * 
         * # <weight>
         * - One storage write O(1)
         * - One event
         * # </weight>
         *
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
         */
        setRecovered: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'setRecovered', false, _lost, _rescuer);
        },

        setRecoveredD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'setRecovered', true, data);
        },

        setRecoveredCall: (_lost: unknown, _rescuer: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'setRecovered', {
                lost: _lost,
                rescuer: _rescuer,
            });
        },

        /**
         * Create a recovery configuration for your account. This makes your account recoverable.
         * 
         * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
         * will be reserved for storing the recovery configuration. This deposit is returned
         * in full when the user calls `remove_recovery`.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
         *   ordered and contain no duplicate values.
         * - `threshold`: The number of friends that must vouch for a recovery attempt before the
         *   account can be recovered. Should be less than or equal to the length of the list of
         *   friends.
         * - `delay_period`: The number of blocks after a recovery attempt is initialized that
         *   needs to pass before the account can be recovered.
         * 
         * # <weight>
         * - Key: F (len of friends)
         * - One storage read to check that account is not already recoverable. O(1).
         * - A check that the friends list is sorted and unique. O(F)
         * - One currency reserve operation. O(X)
         * - One storage write. O(1). Codec O(F).
         * - One event.
         * 
         * Total Complexity: O(F + X)
         * # </weight>
         *
         * @param _friends: Vec<[U8; 32]>
         * @param _threshold: U16
         * @param _delay_period: U32
         */
        createRecovery: async (signer: ethers.Signer, _friends: unknown, _threshold: unknown, _delay_period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'createRecovery', false, _friends, _threshold, _delay_period);
        },

        createRecoveryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'createRecovery', true, data);
        },

        createRecoveryCall: (_friends: unknown, _threshold: unknown, _delay_period: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'createRecovery', {
                friends: _friends,
                threshold: _threshold,
                delay_period: _delay_period,
            });
        },

        /**
         * Initiate the process for recovering a recoverable account.
         * 
         * Payment: `RecoveryDeposit` balance will be reserved for initiating the
         * recovery process. This deposit will always be repatriated to the account
         * trying to be recovered. See `close_recovery`.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `account`: The lost account that you want to recover. This account needs to be
         *   recoverable (i.e. have a recovery configuration).
         * 
         * # <weight>
         * - One storage read to check that account is recoverable. O(F)
         * - One storage read to check that this recovery process hasn't already started. O(1)
         * - One currency reserve operation. O(X)
         * - One storage read to get the current block number. O(1)
         * - One storage write. O(1).
         * - One event.
         * 
         * Total Complexity: O(F + X)
         * # </weight>
         *
         * @param _account: [U8; 32]
         */
        initiateRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'initiateRecovery', false, _account);
        },

        initiateRecoveryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'initiateRecovery', true, data);
        },

        initiateRecoveryCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'initiateRecovery', {
                account: _account,
            });
        },

        /**
         * Allow a "friend" of a recoverable account to vouch for an active recovery
         * process for that account.
         * 
         * The dispatch origin for this call must be _Signed_ and must be a "friend"
         * for the recoverable account.
         * 
         * Parameters:
         * - `lost`: The lost account that you want to recover.
         * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
         * 
         * The combination of these two parameters must point to an active recovery
         * process.
         * 
         * # <weight>
         * Key: F (len of friends in config), V (len of vouching friends)
         * - One storage read to get the recovery configuration. O(1), Codec O(F)
         * - One storage read to get the active recovery process. O(1), Codec O(V)
         * - One binary search to confirm caller is a friend. O(logF)
         * - One binary search to confirm caller has not already vouched. O(logV)
         * - One storage write. O(1), Codec O(V).
         * - One event.
         * 
         * Total Complexity: O(F + logF + V + logV)
         * # </weight>
         *
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
         */
        vouchRecovery: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'vouchRecovery', false, _lost, _rescuer);
        },

        vouchRecoveryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'vouchRecovery', true, data);
        },

        vouchRecoveryCall: (_lost: unknown, _rescuer: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'vouchRecovery', {
                lost: _lost,
                rescuer: _rescuer,
            });
        },

        /**
         * Allow a successful rescuer to claim their recovered account.
         * 
         * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
         * who has successfully completed the account recovery process: collected
         * `threshold` or more vouches, waited `delay_period` blocks since initiation.
         * 
         * Parameters:
         * - `account`: The lost account that you want to claim has been successfully recovered by
         *   you.
         * 
         * # <weight>
         * Key: F (len of friends in config), V (len of vouching friends)
         * - One storage read to get the recovery configuration. O(1), Codec O(F)
         * - One storage read to get the active recovery process. O(1), Codec O(V)
         * - One storage read to get the current block number. O(1)
         * - One storage write. O(1), Codec O(V).
         * - One event.
         * 
         * Total Complexity: O(F + V)
         * # </weight>
         *
         * @param _account: [U8; 32]
         */
        claimRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'claimRecovery', false, _account);
        },

        claimRecoveryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'claimRecovery', true, data);
        },

        claimRecoveryCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'claimRecovery', {
                account: _account,
            });
        },

        /**
         * As the controller of a recoverable account, close an active recovery
         * process for your account.
         * 
         * Payment: By calling this function, the recoverable account will receive
         * the recovery deposit `RecoveryDeposit` placed by the rescuer.
         * 
         * The dispatch origin for this call must be _Signed_ and must be a
         * recoverable account with an active recovery process for it.
         * 
         * Parameters:
         * - `rescuer`: The account trying to rescue this recoverable account.
         * 
         * # <weight>
         * Key: V (len of vouching friends)
         * - One storage read/remove to get the active recovery process. O(1), Codec O(V)
         * - One balance call to repatriate reserved. O(X)
         * - One event.
         * 
         * Total Complexity: O(V + X)
         * # </weight>
         *
         * @param _rescuer: [U8; 32]
         */
        closeRecovery: async (signer: ethers.Signer, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'closeRecovery', false, _rescuer);
        },

        closeRecoveryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'closeRecovery', true, data);
        },

        closeRecoveryCall: (_rescuer: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'closeRecovery', {
                rescuer: _rescuer,
            });
        },

        /**
         * Remove the recovery process for your account. Recovered accounts are still accessible.
         * 
         * NOTE: The user must make sure to call `close_recovery` on all active
         * recovery attempts before calling this function else it will fail.
         * 
         * Payment: By calling this function the recoverable account will unreserve
         * their recovery configuration deposit.
         * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
         * 
         * The dispatch origin for this call must be _Signed_ and must be a
         * recoverable account (i.e. has a recovery configuration).
         * 
         * # <weight>
         * Key: F (len of friends)
         * - One storage read to get the prefix iterator for active recoveries. O(1)
         * - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
         * - One balance call to unreserved. O(X)
         * - One event.
         * 
         * Total Complexity: O(F + X)
         * # </weight>
         *
         */
        removeRecovery: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'removeRecovery', false);
        },

        removeRecoveryD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'removeRecovery', true);
        },

        removeRecoveryCall: () => {
            return buildRuntimeCall(metadata, 'Recovery', 'removeRecovery', {
            });
        },

        /**
         * Cancel the ability to use `as_recovered` for `account`.
         * 
         * The dispatch origin for this call must be _Signed_ and registered to
         * be able to make calls on behalf of the recovered account.
         * 
         * Parameters:
         * - `account`: The recovered account you are able to call on-behalf-of.
         * 
         * # <weight>
         * - One storage mutation to check account is recovered by `who`. O(1)
         * # </weight>
         *
         * @param _account: [U8; 32]
         */
        cancelRecovered: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'cancelRecovered', false, _account);
        },

        cancelRecoveredD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'cancelRecovered', true, data);
        },

        cancelRecoveredCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Recovery', 'cancelRecovered', {
                account: _account,
            });
        },

    }
}
