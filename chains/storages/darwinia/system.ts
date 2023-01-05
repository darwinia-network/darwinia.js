import {GetStorage} from "../../../storage";

export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
        * The full account information for a particular account ID.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'Account', param0);
        },

        /**
        * Total extrinsics count for the current block.
        *
        * @return U32
        */
        extrinsicCount: async (): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicCount');
        },

        /**
        * The current weight for the block.
        *
        * @return PerDispatchClass: {normal: U64, operational: U64, mandatory: U64}
        */
        blockWeight: async (): Promise<string | null> => {
            return await getStorage('System', 'BlockWeight');
        },

        /**
        * Total length (in bytes) for all extrinsics put together, for the current block.
        *
        * @return U32
        */
        allExtrinsicsLen: async (): Promise<string | null> => {
            return await getStorage('System', 'AllExtrinsicsLen');
        },

        /**
        * Map of block numbers to block hashes.
        *
        * @param param0: U32
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'BlockHash', param0);
        },

        /**
        * Extrinsics data for the current block (maps an extrinsic&#39;s index to its data).
        *
        * @param param0: U32
        * @return Vec<U8>
        */
        extrinsicData: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicData', param0);
        },

        /**
        * The current block number being processed. Set by `execute_block`.
        *
        * @return U32
        */
        number: async (): Promise<string | null> => {
            return await getStorage('System', 'Number');
        },

        /**
        * Hash of the previous block.
        *
        * @return H256: [U8; 32]
        */
        parentHash: async (): Promise<string | null> => {
            return await getStorage('System', 'ParentHash');
        },

        /**
        * Digest of the current block, also part of the block header.
        *
        * @return Digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}
        */
        digest: async (): Promise<string | null> => {
            return await getStorage('System', 'Digest');
        },

        /**
        * Events deposited for the current block.
        *
        * NOTE: This storage item is explicitly unbounded since it is never intended to be read
        * from within the runtime.
        *
        * @return Vec<{phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>, event: Enum<{0/System: Enum<{0/ExtrinsicSuccess: {dispatch_info: {weight: U64, class: Enum<{"0/Normal", "1/Operational", "2/Mandatory"}>, pays_fee: Enum<{"0/Yes", "1/No"}>}}, 1/ExtrinsicFailed: {dispatch_error: Enum<{"0/Other", "1/CannotLookup", "2/BadOrigin", "3/Module", "4/ConsumerRemaining", "5/NoProviders", "6/TooManyConsumers", "7/Token", "8/Arithmetic"}>, dispatch_info: {weight: U64, class: Enum<{"0/Normal", "1/Operational", "2/Mandatory"}>, pays_fee: Enum<{"0/Yes", "1/No"}>}}, 2/CodeUpdated: , 3/NewAccount: {account: [U8; 32]}, 4/KilledAccount: {account: [U8; 32]}, 5/Remarked: {sender: [U8; 32], hash: [U8; 32]}}>, 4/Balances: Enum<{0/Endowed: {account: [U8; 32], free_balance: U128}, 1/DustLost: {account: [U8; 32], amount: U128}, 2/Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, 3/BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 32], amount: U128}, 5/Unreserved: {who: [U8; 32], amount: U128}, 6/ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{"0/Free", "1/Reserved"}>}, 7/Deposit: {who: [U8; 32], amount: U128}, 8/Withdraw: {who: [U8; 32], amount: U128}, 9/Slashed: {who: [U8; 32], amount: U128}}>, 5/Kton: Enum<{0/Endowed: {account: [U8; 32], free_balance: U128}, 1/DustLost: {account: [U8; 32], amount: U128}, 2/Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, 3/BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 32], amount: U128}, 5/Unreserved: {who: [U8; 32], amount: U128}, 6/ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{"0/Free", "1/Reserved"}>}, 7/Deposit: {who: [U8; 32], amount: U128}, 8/Withdraw: {who: [U8; 32], amount: U128}, 9/Slashed: {who: [U8; 32], amount: U128}}>, 38/ElectionProviderMultiPhase: Enum<{0/SolutionStored: {election_compute: Enum<{"0/OnChain", "1/Signed", "2/Unsigned", "3/Fallback", "4/Emergency"}>, prev_ejected: Bool}, 1/ElectionFinalized: {election_compute: Enum<{"0/None", "1/Some"}>}, 2/Rewarded: {account: [U8; 32], value: U128}, 3/Slashed: {account: [U8; 32], value: U128}, 4/SignedPhaseStarted: {round: U32}, 5/UnsignedPhaseStarted: {round: U32}}>, 8/Staking: Enum<{0/EraPaid: (U32, U128, U128), 1/Rewarded: ([U8; 32], U128), 2/Slashed: ([U8; 32], U128, U128), 3/OldSlashingReportDiscarded: U32, 4/StakersElected: , 5/RingBonded: ([U8; 32], U128, U64, U64), 6/KtonBonded: ([U8; 32], U128), 7/RingUnbonded: ([U8; 32], U128), 8/KtonUnbonded: ([U8; 32], U128), 9/Kicked: ([U8; 32], [U8; 32]), 10/StakingElectionFailed: , 11/Chilled: [U8; 32], 12/PayoutStarted: (U32, [U8; 32]), 13/DepositsClaimed: [U8; 32], 14/DepositsClaimedWithPunish: ([U8; 32], U128)}>, 9/Offences: Enum<{0/Offence: {kind: [U8; 16], timeslot: Vec<U8>}}>, 11/Session: Enum<{0/NewSession: {session_index: U32}}>, 13/Grandpa: Enum<{0/NewAuthorities: {authority_set: Vec<([U8; 32], U64)>}, 1/Paused: , 2/Resumed: }>, 14/ImOnline: Enum<{0/HeartbeatReceived: {authority_id: [U8; 32]}, 1/AllGood: , 2/SomeOffline: {offline: Vec<([U8; 32], {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>})>}}>, 51/EcdsaAuthority: Enum<{0/CollectingAuthoritiesChangeSignatures: {message: [U8; 32]}, 1/CollectedEnoughAuthoritiesChangeSignatures: {operation: Enum<{"0/AddMember", "1/RemoveMember", "2/SwapMembers"}>, new_threshold: Enum<{"0/None", "1/Some"}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}, 2/CollectingNewMessageRootSignatures: {message: [U8; 32]}, 3/CollectedEnoughNewMessageRootSignatures: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}}>, 37/Democracy: Enum<{0/Proposed: {proposal_index: U32, deposit: U128}, 1/Tabled: {proposal_index: U32, deposit: U128, depositors: Vec<[U8; 32]>}, 2/ExternalTabled: , 3/Started: {ref_index: U32, threshold: Enum<{"0/SuperMajorityApprove", "1/SuperMajorityAgainst", "2/SimpleMajority"}>}, 4/Passed: {ref_index: U32}, 5/NotPassed: {ref_index: U32}, 6/Cancelled: {ref_index: U32}, 7/Executed: {ref_index: U32, result: Enum<{"0/Ok", "1/Err"}>}, 8/Delegated: {who: [U8; 32], target: [U8; 32]}, 9/Undelegated: {account: [U8; 32]}, 10/Vetoed: {who: [U8; 32], proposal_hash: [U8; 32], until: U32}, 11/PreimageNoted: {proposal_hash: [U8; 32], who: [U8; 32], deposit: U128}, 12/PreimageUsed: {proposal_hash: [U8; 32], provider: [U8; 32], deposit: U128}, 13/PreimageInvalid: {proposal_hash: [U8; 32], ref_index: U32}, 14/PreimageMissing: {proposal_hash: [U8; 32], ref_index: U32}, 15/PreimageReaped: {proposal_hash: [U8; 32], provider: [U8; 32], deposit: U128, reaper: [U8; 32]}, 16/Blacklisted: {proposal_hash: [U8; 32]}, 17/Voted: {voter: [U8; 32], ref_index: U32, vote: Enum<{"0/Standard", "1/Split"}>}, 18/Seconded: {seconder: [U8; 32], prop_index: U32}}>, 16/Council: Enum<{0/Proposed: {account: [U8; 32], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 32], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 17/TechnicalCommittee: Enum<{0/Proposed: {account: [U8; 32], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 32], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 18/PhragmenElection: Enum<{0/NewTerm: {new_members: Vec<([U8; 32], U128)>}, 1/EmptyTerm: , 2/ElectionError: , 3/MemberKicked: {member: [U8; 32]}, 4/Renounced: {candidate: [U8; 32]}, 5/CandidateSlashed: {candidate: [U8; 32], amount: U128}, 6/SeatHolderSlashed: {seat_holder: [U8; 32], amount: U128}}>, 19/TechnicalMembership: Enum<{0/MemberAdded: , 1/MemberRemoved: , 2/MembersSwapped: , 3/MembersReset: , 4/KeyChanged: , 5/Dummy: }>, 20/Treasury: Enum<{0/Proposed: {proposal_index: U32}, 1/Spending: {budget_remaining: U128}, 2/Awarded: {proposal_index: U32, award: U128, account: [U8; 32]}, 3/Rejected: {proposal_index: U32, slashed: U128}, 4/Burnt: {burnt_funds: U128}, 5/Rollover: {rollover_balance: U128}, 6/Deposit: {value: U128}}>, 40/Tips: Enum<{0/NewTip: {tip_hash: [U8; 32]}, 1/TipClosing: {tip_hash: [U8; 32]}, 2/TipClosed: {tip_hash: [U8; 32], who: [U8; 32], payout: U128}, 3/TipRetracted: {tip_hash: [U8; 32]}, 4/TipSlashed: {tip_hash: [U8; 32], finder: [U8; 32], deposit: U128}}>, 41/Bounties: Enum<{0/BountyProposed: {index: U32}, 1/BountyRejected: {index: U32, bond: U128}, 2/BountyBecameActive: {index: U32}, 3/BountyAwarded: {index: U32, beneficiary: [U8; 32]}, 4/BountyClaimed: {index: U32, payout: U128, beneficiary: [U8; 32]}, 5/BountyCanceled: {index: U32}, 6/BountyExtended: {index: U32}}>, 27/Sudo: Enum<{0/Sudid: {sudo_result: Enum<{"0/Ok", "1/Err"}>}, 1/KeyChanged: {old_sudoer: Enum<{"0/None", "1/Some"}>}, 2/SudoAsDone: {sudo_result: Enum<{"0/Ok", "1/Err"}>}}>, 21/Vesting: Enum<{0/VestingUpdated: {account: [U8; 32], unvested: U128}, 1/VestingCompleted: {account: [U8; 32]}}>, 22/Utility: Enum<{0/BatchInterrupted: {index: U32, error: Enum<{"0/Other", "1/CannotLookup", "2/BadOrigin", "3/Module", "4/ConsumerRemaining", "5/NoProviders", "6/TooManyConsumers", "7/Token", "8/Arithmetic"}>}, 1/BatchCompleted: , 2/ItemCompleted: , 3/DispatchedAs: {result: Enum<{"0/Ok", "1/Err"}>}}>, 23/Identity: Enum<{0/IdentitySet: {who: [U8; 32]}, 1/IdentityCleared: {who: [U8; 32], deposit: U128}, 2/IdentityKilled: {who: [U8; 32], deposit: U128}, 3/JudgementRequested: {who: [U8; 32], registrar_index: U32}, 4/JudgementUnrequested: {who: [U8; 32], registrar_index: U32}, 5/JudgementGiven: {target: [U8; 32], registrar_index: U32}, 6/RegistrarAdded: {registrar_index: U32}, 7/SubIdentityAdded: {sub: [U8; 32], main: [U8; 32], deposit: U128}, 8/SubIdentityRemoved: {sub: [U8; 32], main: [U8; 32], deposit: U128}, 9/SubIdentityRevoked: {sub: [U8; 32], main: [U8; 32], deposit: U128}}>, 24/Society: Enum<{0/Founded: {founder: [U8; 32]}, 1/Bid: {candidate_id: [U8; 32], offer: U128}, 2/Vouch: {candidate_id: [U8; 32], offer: U128, vouching: [U8; 32]}, 3/AutoUnbid: {candidate: [U8; 32]}, 4/Unbid: {candidate: [U8; 32]}, 5/Unvouch: {candidate: [U8; 32]}, 6/Inducted: {primary: [U8; 32], candidates: Vec<[U8; 32]>}, 7/SuspendedMemberJudgement: {who: [U8; 32], judged: Bool}, 8/CandidateSuspended: {candidate: [U8; 32]}, 9/MemberSuspended: {member: [U8; 32]}, 10/Challenged: {member: [U8; 32]}, 11/Vote: {candidate: [U8; 32], voter: [U8; 32], vote: Bool}, 12/DefenderVote: {voter: [U8; 32], vote: Bool}, 13/NewMaxMembers: {max: U32}, 14/Unfounded: {founder: [U8; 32]}, 15/Deposit: {value: U128}}>, 25/Recovery: Enum<{0/RecoveryCreated: {account: [U8; 32]}, 1/RecoveryInitiated: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, 2/RecoveryVouched: {lost_account: [U8; 32], rescuer_account: [U8; 32], sender: [U8; 32]}, 3/RecoveryClosed: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, 4/AccountRecovered: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, 5/RecoveryRemoved: {lost_account: [U8; 32]}}>, 26/Scheduler: Enum<{0/Scheduled: {when: U32, index: U32}, 1/Canceled: {when: U32, index: U32}, 2/Dispatched: {task: (U32, U32), id: Enum<{"0/None", "1/Some"}>, result: Enum<{"0/Ok", "1/Err"}>}, 3/CallLookupFailed: {task: (U32, U32), id: Enum<{"0/None", "1/Some"}>, error: Enum<{"0/Unknown", "1/BadFormat"}>}}>, 52/Preimage: Enum<{0/Noted: {hash: [U8; 32]}, 1/Requested: {hash: [U8; 32]}, 2/Cleared: {hash: [U8; 32]}}>, 28/Proxy: Enum<{0/ProxyExecuted: {result: Enum<{"0/Ok", "1/Err"}>}, 1/AnonymousCreated: {anonymous: [U8; 32], who: [U8; 32], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>, disambiguation_index: U16}, 2/Announced: {real: [U8; 32], proxy: [U8; 32], call_hash: [U8; 32]}, 3/ProxyAdded: {delegator: [U8; 32], delegatee: [U8; 32], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>, delay: U32}}>, 29/Multisig: Enum<{0/NewMultisig: {approving: [U8; 32], multisig: [U8; 32], call_hash: [U8; 32]}, 1/MultisigApproval: {approving: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32]}, 2/MultisigExecuted: {approving: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 3/MultisigCancelled: {cancelling: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32]}}>, 47/EVM: Enum<{0/Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, 1/Created: {address: [U8; 20]}, 2/CreatedFailed: {address: [U8; 20]}, 3/Executed: {address: [U8; 20]}, 4/ExecutedFailed: {address: [U8; 20]}}>, 48/Ethereum: Enum<{0/Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{"0/Succeed", "1/Error", "2/Revert", "3/Fatal"}>}, 1/DVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}, 2/KtonDVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}}>, 49/BaseFee: Enum<{0/NewBaseFeePerGas: [U64; 4], 1/BaseFeeOverflow: , 2/IsActive: Bool, 3/NewElasticity: U32}>, 44/BridgeCrabMessages: Enum<{0/ParameterUpdated: Enum<{"0/CrabToDarwiniaConversionRate"}>, 1/MessageAccepted: ([U8; 4], U64), 2/MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, 42/BridgeCrabDispatch: Enum<{0/MessageRejected: ([U8; 4], ([U8; 4], U64)), 1/MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), 2/MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), 3/MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), 4/MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), 5/MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{"0/Invalid", "1/Unknown"}>), 6/MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), 7/MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{"0/Ok", "1/Err"}>), 8/_Dummy: }>, 56/BridgeDarwiniaParachainMessages: Enum<{0/ParameterUpdated: Enum<{"0/DarwiniaParachainToDarwiniaConversionRate"}>, 1/MessageAccepted: ([U8; 4], U64), 2/MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, 55/BridgeDarwiniaParachainDispatch: Enum<{0/MessageRejected: ([U8; 4], ([U8; 4], U64)), 1/MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), 2/MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), 3/MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), 4/MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), 5/MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{"0/Invalid", "1/Unknown"}>), 6/MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), 7/MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{"0/Ok", "1/Err"}>), 8/_Dummy: }>, 45/FeeMarket: Enum<{0/Enroll: ([U8; 32], U128, U128), 1/UpdateLockedCollateral: ([U8; 32], U128), 2/UpdateRelayFee: ([U8; 32], U128), 3/CancelEnrollment: [U8; 32], 4/UpdateCollateralSlashProtect: U128, 5/UpdateAssignedRelayersNumber: U32, 6/FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{"0/None", "1/Some"}>, delay_time: Enum<{"0/None", "1/Some"}>, account_id: [U8; 32], amount: U128}, 7/OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{"0/None", "1/Some"}>), 8/OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{"0/None", "1/Some"}>, to_message_relayer: Enum<{"0/None", "1/Some"}>, to_confirm_relayer: Enum<{"0/None", "1/Some"}>})}>, 57/DarwiniaParachainFeeMarket: Enum<{0/Enroll: ([U8; 32], U128, U128), 1/UpdateLockedCollateral: ([U8; 32], U128), 2/UpdateRelayFee: ([U8; 32], U128), 3/CancelEnrollment: [U8; 32], 4/UpdateCollateralSlashProtect: U128, 5/UpdateAssignedRelayersNumber: U32, 6/FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{"0/None", "1/Some"}>, delay_time: Enum<{"0/None", "1/Some"}>, account_id: [U8; 32], amount: U128}, 7/OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{"0/None", "1/Some"}>), 8/OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{"0/None", "1/Some"}>, to_message_relayer: Enum<{"0/None", "1/Some"}>, to_confirm_relayer: Enum<{"0/None", "1/Some"}>})}>}>, topics: Vec<[U8; 32]>}>
        */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
        * The number of events in the `Events&lt;T&gt;` list.
        *
        * @return U32
        */
        eventCount: async (): Promise<string | null> => {
            return await getStorage('System', 'EventCount');
        },

        /**
        * Mapping between a topic (represented by T::Hash) and a vector of indexes
        * of events in the `&lt;Events&lt;T&gt;&gt;` list.
        *
        * All topic vectors have deterministic storage locations depending on the topic. This
        * allows light-clients to leverage the changes trie storage tracking mechanism and
        * in case of changes fetch the list of events of interest.
        *
        * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
        * the `EventIndex` then in case if the topic has the same contents on the next block
        * no notification will be triggered thus the event might be lost.
        *
        * @param param0: H256: [U8; 32]
        * @return Vec<(U32, U32)>
        */
        eventTopics: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'EventTopics', param0);
        },

        /**
        * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
        *
        * @return LastRuntimeUpgradeInfo: {spec_version: Compact<U32>, spec_name: Str}
        */
        lastRuntimeUpgrade: async (): Promise<string | null> => {
            return await getStorage('System', 'LastRuntimeUpgrade');
        },

        /**
        * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
        *
        * @return Bool
        */
        upgradedToU32RefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToU32RefCount');
        },

        /**
        * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
        * (default) if not.
        *
        * @return Bool
        */
        upgradedToTripleRefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToTripleRefCount');
        },

        /**
        * The execution phase of the block.
        *
        * @return Phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>
        */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};
