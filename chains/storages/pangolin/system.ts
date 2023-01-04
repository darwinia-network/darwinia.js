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
        * @return Digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}
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
        * @return Vec<{phase: Enum<{ApplyExtrinsic: U32, Finalization: , Initialization: }>, event: Enum<{System: Enum<{ExtrinsicSuccess: {dispatch_info: {weight: U64, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, ExtrinsicFailed: {dispatch_error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic}>, dispatch_info: {weight: U64, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, CodeUpdated: , NewAccount: {account: [U8; 32]}, KilledAccount: {account: [U8; 32]}, Remarked: {sender: [U8; 32], hash: [U8; 32]}}>, Balances: Enum<{Endowed: {account: [U8; 32], free_balance: U128}, DustLost: {account: [U8; 32], amount: U128}, Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, Reserved: {who: [U8; 32], amount: U128}, Unreserved: {who: [U8; 32], amount: U128}, ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{Free, Reserved}>}, Deposit: {who: [U8; 32], amount: U128}, Withdraw: {who: [U8; 32], amount: U128}, Slashed: {who: [U8; 32], amount: U128}}>, Kton: Enum<{Endowed: {account: [U8; 32], free_balance: U128}, DustLost: {account: [U8; 32], amount: U128}, Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, Reserved: {who: [U8; 32], amount: U128}, Unreserved: {who: [U8; 32], amount: U128}, ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{Free, Reserved}>}, Deposit: {who: [U8; 32], amount: U128}, Withdraw: {who: [U8; 32], amount: U128}, Slashed: {who: [U8; 32], amount: U128}}>, ElectionProviderMultiPhase: Enum<{SolutionStored: {election_compute: Enum<{OnChain, Signed, Unsigned, Fallback, Emergency}>, prev_ejected: Bool}, ElectionFinalized: {election_compute: Enum<{None, Some}>}, Rewarded: {account: [U8; 32], value: U128}, Slashed: {account: [U8; 32], value: U128}, SignedPhaseStarted: {round: U32}, UnsignedPhaseStarted: {round: U32}}>, Staking: Enum<{EraPaid: (U32, U128, U128), Rewarded: ([U8; 32], U128), Slashed: ([U8; 32], U128, U128), OldSlashingReportDiscarded: U32, StakersElected: , RingBonded: ([U8; 32], U128, U64, U64), KtonBonded: ([U8; 32], U128), RingUnbonded: ([U8; 32], U128), KtonUnbonded: ([U8; 32], U128), Kicked: ([U8; 32], [U8; 32]), StakingElectionFailed: , Chilled: [U8; 32], PayoutStarted: (U32, [U8; 32]), DepositsClaimed: [U8; 32], DepositsClaimedWithPunish: ([U8; 32], U128)}>, Offences: Enum<{Offence: {kind: [U8; 16], timeslot: Vec<U8>}}>, Session: Enum<{NewSession: {session_index: U32}}>, Grandpa: Enum<{NewAuthorities: {authority_set: Vec<([U8; 32], U64)>}, Paused: , Resumed: }>, EcdsaAuthority: Enum<{CollectingAuthoritiesChangeSignatures: {message: [U8; 32]}, CollectedEnoughAuthoritiesChangeSignatures: {operation: Enum<{AddMember, RemoveMember, SwapMembers}>, new_threshold: Enum<{None, Some}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}, CollectingNewMessageRootSignatures: {message: [U8; 32]}, CollectedEnoughNewMessageRootSignatures: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}}>, ImOnline: Enum<{HeartbeatReceived: {authority_id: [U8; 32]}, AllGood: , SomeOffline: {offline: Vec<([U8; 32], {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>})>}}>, Democracy: Enum<{Proposed: {proposal_index: U32, deposit: U128}, Tabled: {proposal_index: U32, deposit: U128, depositors: Vec<[U8; 32]>}, ExternalTabled: , Started: {ref_index: U32, threshold: Enum<{SuperMajorityApprove, SuperMajorityAgainst, SimpleMajority}>}, Passed: {ref_index: U32}, NotPassed: {ref_index: U32}, Cancelled: {ref_index: U32}, Executed: {ref_index: U32, result: Enum<{Ok, Err}>}, Delegated: {who: [U8; 32], target: [U8; 32]}, Undelegated: {account: [U8; 32]}, Vetoed: {who: [U8; 32], proposal_hash: [U8; 32], until: U32}, PreimageNoted: {proposal_hash: [U8; 32], who: [U8; 32], deposit: U128}, PreimageUsed: {proposal_hash: [U8; 32], provider: [U8; 32], deposit: U128}, PreimageInvalid: {proposal_hash: [U8; 32], ref_index: U32}, PreimageMissing: {proposal_hash: [U8; 32], ref_index: U32}, PreimageReaped: {proposal_hash: [U8; 32], provider: [U8; 32], deposit: U128, reaper: [U8; 32]}, Blacklisted: {proposal_hash: [U8; 32]}, Voted: {voter: [U8; 32], ref_index: U32, vote: Enum<{Standard, Split}>}, Seconded: {seconder: [U8; 32], prop_index: U32}}>, Council: Enum<{Proposed: {account: [U8; 32], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, Voted: {account: [U8; 32], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, Approved: {proposal_hash: [U8; 32]}, Disapproved: {proposal_hash: [U8; 32]}, Executed: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, TechnicalCommittee: Enum<{Proposed: {account: [U8; 32], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, Voted: {account: [U8; 32], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, Approved: {proposal_hash: [U8; 32]}, Disapproved: {proposal_hash: [U8; 32]}, Executed: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, PhragmenElection: Enum<{NewTerm: {new_members: Vec<([U8; 32], U128)>}, EmptyTerm: , ElectionError: , MemberKicked: {member: [U8; 32]}, Renounced: {candidate: [U8; 32]}, CandidateSlashed: {candidate: [U8; 32], amount: U128}, SeatHolderSlashed: {seat_holder: [U8; 32], amount: U128}}>, TechnicalMembership: Enum<{MemberAdded: , MemberRemoved: , MembersSwapped: , MembersReset: , KeyChanged: , Dummy: }>, Treasury: Enum<{Proposed: {proposal_index: U32}, Spending: {budget_remaining: U128}, Awarded: {proposal_index: U32, award: U128, account: [U8; 32]}, Rejected: {proposal_index: U32, slashed: U128}, Burnt: {burnt_funds: U128}, Rollover: {rollover_balance: U128}, Deposit: {value: U128}}>, KtonTreasury: Enum<{Proposed: {proposal_index: U32}, Spending: {budget_remaining: U128}, Awarded: {proposal_index: U32, award: U128, account: [U8; 32]}, Rejected: {proposal_index: U32, slashed: U128}, Burnt: {burnt_funds: U128}, Rollover: {rollover_balance: U128}, Deposit: {value: U128}}>, Tips: Enum<{NewTip: {tip_hash: [U8; 32]}, TipClosing: {tip_hash: [U8; 32]}, TipClosed: {tip_hash: [U8; 32], who: [U8; 32], payout: U128}, TipRetracted: {tip_hash: [U8; 32]}, TipSlashed: {tip_hash: [U8; 32], finder: [U8; 32], deposit: U128}}>, Bounties: Enum<{BountyProposed: {index: U32}, BountyRejected: {index: U32, bond: U128}, BountyBecameActive: {index: U32}, BountyAwarded: {index: U32, beneficiary: [U8; 32]}, BountyClaimed: {index: U32, payout: U128, beneficiary: [U8; 32]}, BountyCanceled: {index: U32}, BountyExtended: {index: U32}}>, Sudo: Enum<{Sudid: {sudo_result: Enum<{Ok, Err}>}, KeyChanged: {old_sudoer: Enum<{None, Some}>}, SudoAsDone: {sudo_result: Enum<{Ok, Err}>}}>, Vesting: Enum<{VestingUpdated: {account: [U8; 32], unvested: U128}, VestingCompleted: {account: [U8; 32]}}>, Utility: Enum<{BatchInterrupted: {index: U32, error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic}>}, BatchCompleted: , ItemCompleted: , DispatchedAs: {result: Enum<{Ok, Err}>}}>, Identity: Enum<{IdentitySet: {who: [U8; 32]}, IdentityCleared: {who: [U8; 32], deposit: U128}, IdentityKilled: {who: [U8; 32], deposit: U128}, JudgementRequested: {who: [U8; 32], registrar_index: U32}, JudgementUnrequested: {who: [U8; 32], registrar_index: U32}, JudgementGiven: {target: [U8; 32], registrar_index: U32}, RegistrarAdded: {registrar_index: U32}, SubIdentityAdded: {sub: [U8; 32], main: [U8; 32], deposit: U128}, SubIdentityRemoved: {sub: [U8; 32], main: [U8; 32], deposit: U128}, SubIdentityRevoked: {sub: [U8; 32], main: [U8; 32], deposit: U128}}>, Society: Enum<{Founded: {founder: [U8; 32]}, Bid: {candidate_id: [U8; 32], offer: U128}, Vouch: {candidate_id: [U8; 32], offer: U128, vouching: [U8; 32]}, AutoUnbid: {candidate: [U8; 32]}, Unbid: {candidate: [U8; 32]}, Unvouch: {candidate: [U8; 32]}, Inducted: {primary: [U8; 32], candidates: Vec<[U8; 32]>}, SuspendedMemberJudgement: {who: [U8; 32], judged: Bool}, CandidateSuspended: {candidate: [U8; 32]}, MemberSuspended: {member: [U8; 32]}, Challenged: {member: [U8; 32]}, Vote: {candidate: [U8; 32], voter: [U8; 32], vote: Bool}, DefenderVote: {voter: [U8; 32], vote: Bool}, NewMaxMembers: {max: U32}, Unfounded: {founder: [U8; 32]}, Deposit: {value: U128}}>, Recovery: Enum<{RecoveryCreated: {account: [U8; 32]}, RecoveryInitiated: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, RecoveryVouched: {lost_account: [U8; 32], rescuer_account: [U8; 32], sender: [U8; 32]}, RecoveryClosed: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, AccountRecovered: {lost_account: [U8; 32], rescuer_account: [U8; 32]}, RecoveryRemoved: {lost_account: [U8; 32]}}>, Scheduler: Enum<{Scheduled: {when: U32, index: U32}, Canceled: {when: U32, index: U32}, Dispatched: {task: (U32, U32), id: Enum<{None, Some}>, result: Enum<{Ok, Err}>}, CallLookupFailed: {task: (U32, U32), id: Enum<{None, Some}>, error: Enum<{Unknown, BadFormat}>}}>, Preimage: Enum<{Noted: {hash: [U8; 32]}, Requested: {hash: [U8; 32]}, Cleared: {hash: [U8; 32]}}>, Proxy: Enum<{ProxyExecuted: {result: Enum<{Ok, Err}>}, AnonymousCreated: {anonymous: [U8; 32], who: [U8; 32], proxy_type: Enum<{Any, NonTransfer, Governance, Staking, EthereumBridge}>, disambiguation_index: U16}, Announced: {real: [U8; 32], proxy: [U8; 32], call_hash: [U8; 32]}, ProxyAdded: {delegator: [U8; 32], delegatee: [U8; 32], proxy_type: Enum<{Any, NonTransfer, Governance, Staking, EthereumBridge}>, delay: U32}}>, Multisig: Enum<{NewMultisig: {approving: [U8; 32], multisig: [U8; 32], call_hash: [U8; 32]}, MultisigApproval: {approving: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32]}, MultisigExecuted: {approving: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32], result: Enum<{Ok, Err}>}, MultisigCancelled: {cancelling: [U8; 32], timepoint: {height: U32, index: U32}, multisig: [U8; 32], call_hash: [U8; 32]}}>, EVM: Enum<{Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, Created: {address: [U8; 20]}, CreatedFailed: {address: [U8; 20]}, Executed: {address: [U8; 20]}, ExecutedFailed: {address: [U8; 20]}}>, Ethereum: Enum<{Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{Succeed, Error, Revert, Fatal}>}, DVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}, KtonDVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}}>, BaseFee: Enum<{NewBaseFeePerGas: [U64; 4], BaseFeeOverflow: , IsActive: Bool, NewElasticity: U32}>, BridgePangoroDispatch: Enum<{MessageRejected: ([U8; 4], ([U8; 4], U64)), MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{Invalid, Unknown}>), MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{Ok, Err}>), _Dummy: }>, BridgePangoroMessages: Enum<{ParameterUpdated: Enum<{PangoroToPangolinConversionRate}>, MessageAccepted: ([U8; 4], U64), MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, BridgePangolinParachainDispatch: Enum<{MessageRejected: ([U8; 4], ([U8; 4], U64)), MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{Invalid, Unknown}>), MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{Ok, Err}>), _Dummy: }>, BridgePangolinParachainMessages: Enum<{ParameterUpdated: Enum<{PangolinParachainToPangolinConversionRate}>, MessageAccepted: ([U8; 4], U64), MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, PangoroFeeMarket: Enum<{Enroll: ([U8; 32], U128, U128), UpdateLockedCollateral: ([U8; 32], U128), UpdateRelayFee: ([U8; 32], U128), CancelEnrollment: [U8; 32], UpdateCollateralSlashProtect: U128, UpdateAssignedRelayersNumber: U32, FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{None, Some}>, delay_time: Enum<{None, Some}>, account_id: [U8; 32], amount: U128}, OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{None, Some}>), OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{None, Some}>, to_message_relayer: Enum<{None, Some}>, to_confirm_relayer: Enum<{None, Some}>})}>, PangolinParachainFeeMarket: Enum<{Enroll: ([U8; 32], U128, U128), UpdateLockedCollateral: ([U8; 32], U128), UpdateRelayFee: ([U8; 32], U128), CancelEnrollment: [U8; 32], UpdateCollateralSlashProtect: U128, UpdateAssignedRelayersNumber: U32, FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{None, Some}>, delay_time: Enum<{None, Some}>, account_id: [U8; 32], amount: U128}, OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{None, Some}>), OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{None, Some}>, to_message_relayer: Enum<{None, Some}>, to_confirm_relayer: Enum<{None, Some}>})}>, TransactionPause: Enum<{TransactionPaused: (Vec<U8>, Vec<U8>), TransactionUnpaused: (Vec<U8>, Vec<U8>)}>, BridgePangolinParachainAlphaDispatch: Enum<{MessageRejected: ([U8; 4], ([U8; 4], U64)), MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{Invalid, Unknown}>), MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{Ok, Err}>), _Dummy: }>, BridgePangolinParachainAlphaMessages: Enum<{ParameterUpdated: Enum<{PangolinParachainAlphaToPangolinConversionRate}>, MessageAccepted: ([U8; 4], U64), MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, PangolinParachainAlphaFeeMarket: Enum<{Enroll: ([U8; 32], U128, U128), UpdateLockedCollateral: ([U8; 32], U128), UpdateRelayFee: ([U8; 32], U128), CancelEnrollment: [U8; 32], UpdateCollateralSlashProtect: U128, UpdateAssignedRelayersNumber: U32, FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{None, Some}>, delay_time: Enum<{None, Some}>, account_id: [U8; 32], amount: U128}, OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{None, Some}>), OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{None, Some}>, to_message_relayer: Enum<{None, Some}>, to_confirm_relayer: Enum<{None, Some}>})}>, ToPangolinParachainBacking: Enum<{TokenLocked: ([U8; 4], U64, [U8; 32], [U8; 32], U128), TokenUnlocked: ([U8; 4], U64, [U8; 32], U128), TokenLockedConfirmed: ([U8; 4], U64, [U8; 32], U128, Bool), RemoteMappingFactoryAddressUpdated: [U8; 32]}>}>, topics: Vec<[U8; 32]>}>
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
        * @return Phase: Enum<{ApplyExtrinsic: U32, Finalization: , Initialization: }>
        */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};
