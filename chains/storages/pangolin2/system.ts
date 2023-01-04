import {GetStorage} from "../../../storage";

export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
        * The full account information for a particular account ID.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, misc_frozen: U128, fee_frozen: U128}}
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
        * @return PerDispatchClass: {normal: {ref_time: U64}, operational: {ref_time: U64}, mandatory: {ref_time: U64}}
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
        * NOTE: The item is unbound and should therefore never be read on chain.
        * It could otherwise inflate the PoV size of a block.
        *
        * Events have a large in-memory size. Box the events to not go out-of-memory
        * just in case someone still reads them from within the runtime.
        *
        * @return Vec<{phase: Enum<{ApplyExtrinsic: U32, Finalization: , Initialization: }>, event: Enum<{System: Enum<{ExtrinsicSuccess: {dispatch_info: {weight: {ref_time: U64}, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, ExtrinsicFailed: {dispatch_error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic, Transactional}>, dispatch_info: {weight: {ref_time: U64}, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, CodeUpdated: , NewAccount: {account: [U8; 20]}, KilledAccount: {account: [U8; 20]}, Remarked: {sender: [U8; 20], hash: [U8; 32]}}>, ParachainSystem: Enum<{ValidationFunctionStored: , ValidationFunctionApplied: {relay_chain_block_num: U32}, ValidationFunctionDiscarded: , UpgradeAuthorized: {code_hash: [U8; 32]}, DownwardMessagesReceived: {count: U32}, DownwardMessagesProcessed: {weight_used: {ref_time: U64}, dmq_head: [U8; 32]}}>, Balances: Enum<{Endowed: {account: [U8; 20], free_balance: U128}, DustLost: {account: [U8; 20], amount: U128}, Transfer: {from: [U8; 20], to: [U8; 20], amount: U128}, BalanceSet: {who: [U8; 20], free: U128, reserved: U128}, Reserved: {who: [U8; 20], amount: U128}, Unreserved: {who: [U8; 20], amount: U128}, ReserveRepatriated: {from: [U8; 20], to: [U8; 20], amount: U128, destination_status: Enum<{Free, Reserved}>}, Deposit: {who: [U8; 20], amount: U128}, Withdraw: {who: [U8; 20], amount: U128}, Slashed: {who: [U8; 20], amount: U128}}>, TransactionPayment: Enum<{TransactionFeePaid: {who: [U8; 20], actual_fee: U128, tip: U128}}>, Assets: Enum<{Created: {asset_id: U64, creator: [U8; 20], owner: [U8; 20]}, Issued: {asset_id: U64, owner: [U8; 20], total_supply: U128}, Transferred: {asset_id: U64, from: [U8; 20], to: [U8; 20], amount: U128}, Burned: {asset_id: U64, owner: [U8; 20], balance: U128}, TeamChanged: {asset_id: U64, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, OwnerChanged: {asset_id: U64, owner: [U8; 20]}, Frozen: {asset_id: U64, who: [U8; 20]}, Thawed: {asset_id: U64, who: [U8; 20]}, AssetFrozen: {asset_id: U64}, AssetThawed: {asset_id: U64}, Destroyed: {asset_id: U64}, ForceCreated: {asset_id: U64, owner: [U8; 20]}, MetadataSet: {asset_id: U64, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, MetadataCleared: {asset_id: U64}, ApprovedTransfer: {asset_id: U64, source: [U8; 20], delegate: [U8; 20], amount: U128}, ApprovalCancelled: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20]}, TransferredApproved: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20], destination: [U8; 20], amount: U128}, AssetStatusChanged: {asset_id: U64}}>, Deposit: Enum<{DepositCreated: {owner: [U8; 20], deposit_id: U16, value: U128, start_time: U128, expired_time: U128, kton_reward: U128}, DepositClaimed: {owner: [U8; 20], deposit_id: U16}, DepositClaimedWithPenalty: {owner: [U8; 20], deposit_id: U16, kton_penalty: U128}}>, AccountMigration: Enum<{Migrated: {from: [U8; 32], to: [U8; 20]}}>, Staking: Enum<{Staked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, Unstaked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, Payout: {staker: [U8; 20], ring_amount: U128}, Elected: {collators: Vec<[U8; 20]>}}>, Session: Enum<{NewSession: {session_index: U32}}>, Democracy: Enum<{Proposed: {proposal_index: U32, deposit: U128}, Tabled: {proposal_index: U32, deposit: U128, depositors: Vec<[U8; 20]>}, ExternalTabled: , Started: {ref_index: U32, threshold: Enum<{SuperMajorityApprove, SuperMajorityAgainst, SimpleMajority}>}, Passed: {ref_index: U32}, NotPassed: {ref_index: U32}, Cancelled: {ref_index: U32}, Executed: {ref_index: U32, result: Enum<{Ok, Err}>}, Delegated: {who: [U8; 20], target: [U8; 20]}, Undelegated: {account: [U8; 20]}, Vetoed: {who: [U8; 20], proposal_hash: [U8; 32], until: U32}, PreimageNoted: {proposal_hash: [U8; 32], who: [U8; 20], deposit: U128}, PreimageUsed: {proposal_hash: [U8; 32], provider: [U8; 20], deposit: U128}, PreimageInvalid: {proposal_hash: [U8; 32], ref_index: U32}, PreimageMissing: {proposal_hash: [U8; 32], ref_index: U32}, PreimageReaped: {proposal_hash: [U8; 32], provider: [U8; 20], deposit: U128, reaper: [U8; 20]}, Blacklisted: {proposal_hash: [U8; 32]}, Voted: {voter: [U8; 20], ref_index: U32, vote: Enum<{Standard, Split}>}, Seconded: {seconder: [U8; 20], prop_index: U32}, ProposalCanceled: {prop_index: U32}}>, Council: Enum<{Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, Approved: {proposal_hash: [U8; 32]}, Disapproved: {proposal_hash: [U8; 32]}, Executed: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, TechnicalCommittee: Enum<{Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, Approved: {proposal_hash: [U8; 32]}, Disapproved: {proposal_hash: [U8; 32]}, Executed: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{Ok, Err}>}, Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, PhragmenElection: Enum<{NewTerm: {new_members: Vec<([U8; 20], U128)>}, EmptyTerm: , ElectionError: , MemberKicked: {member: [U8; 20]}, Renounced: {candidate: [U8; 20]}, CandidateSlashed: {candidate: [U8; 20], amount: U128}, SeatHolderSlashed: {seat_holder: [U8; 20], amount: U128}}>, TechnicalMembership: Enum<{MemberAdded: , MemberRemoved: , MembersSwapped: , MembersReset: , KeyChanged: , Dummy: }>, Treasury: Enum<{Proposed: {proposal_index: U32}, Spending: {budget_remaining: U128}, Awarded: {proposal_index: U32, award: U128, account: [U8; 20]}, Rejected: {proposal_index: U32, slashed: U128}, Burnt: {burnt_funds: U128}, Rollover: {rollover_balance: U128}, Deposit: {value: U128}, SpendApproved: {proposal_index: U32, amount: U128, beneficiary: [U8; 20]}}>, Tips: Enum<{NewTip: {tip_hash: [U8; 32]}, TipClosing: {tip_hash: [U8; 32]}, TipClosed: {tip_hash: [U8; 32], who: [U8; 20], payout: U128}, TipRetracted: {tip_hash: [U8; 32]}, TipSlashed: {tip_hash: [U8; 32], finder: [U8; 20], deposit: U128}}>, Sudo: Enum<{Sudid: {sudo_result: Enum<{Ok, Err}>}, KeyChanged: {old_sudoer: Enum<{None, Some}>}, SudoAsDone: {sudo_result: Enum<{Ok, Err}>}}>, Vesting: Enum<{VestingUpdated: {account: [U8; 20], unvested: U128}, VestingCompleted: {account: [U8; 20]}}>, Utility: Enum<{BatchInterrupted: {index: U32, error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic, Transactional}>}, BatchCompleted: , BatchCompletedWithErrors: , ItemCompleted: , ItemFailed: {error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic, Transactional}>}, DispatchedAs: {result: Enum<{Ok, Err}>}}>, Identity: Enum<{IdentitySet: {who: [U8; 20]}, IdentityCleared: {who: [U8; 20], deposit: U128}, IdentityKilled: {who: [U8; 20], deposit: U128}, JudgementRequested: {who: [U8; 20], registrar_index: U32}, JudgementUnrequested: {who: [U8; 20], registrar_index: U32}, JudgementGiven: {target: [U8; 20], registrar_index: U32}, RegistrarAdded: {registrar_index: U32}, SubIdentityAdded: {sub: [U8; 20], main: [U8; 20], deposit: U128}, SubIdentityRemoved: {sub: [U8; 20], main: [U8; 20], deposit: U128}, SubIdentityRevoked: {sub: [U8; 20], main: [U8; 20], deposit: U128}}>, Scheduler: Enum<{Scheduled: {when: U32, index: U32}, Canceled: {when: U32, index: U32}, Dispatched: {task: (U32, U32), id: Enum<{None, Some}>, result: Enum<{Ok, Err}>}, CallLookupFailed: {task: (U32, U32), id: Enum<{None, Some}>, error: Enum<{Unknown, BadFormat}>}}>, Preimage: Enum<{Noted: {hash: [U8; 32]}, Requested: {hash: [U8; 32]}, Cleared: {hash: [U8; 32]}}>, Proxy: Enum<{ProxyExecuted: {result: Enum<{Ok, Err}>}, PureCreated: {pure: [U8; 20], who: [U8; 20], proxy_type: Enum<{Any, NonTransfer, Governance, IdentityJudgement, EthereumBridge}>, disambiguation_index: U16}, Announced: {real: [U8; 20], proxy: [U8; 20], call_hash: [U8; 32]}, ProxyAdded: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{Any, NonTransfer, Governance, IdentityJudgement, EthereumBridge}>, delay: U32}, ProxyRemoved: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{Any, NonTransfer, Governance, IdentityJudgement, EthereumBridge}>, delay: U32}}>, Multisig: Enum<{NewMultisig: {approving: [U8; 20], multisig: [U8; 20], call_hash: [U8; 32]}, MultisigApproval: {approving: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32]}, MultisigExecuted: {approving: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32], result: Enum<{Ok, Err}>}, MultisigCancelled: {cancelling: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32]}}>, XcmpQueue: Enum<{Success: {message_hash: Enum<{None, Some}>, weight: {ref_time: U64}}, Fail: {message_hash: Enum<{None, Some}>, error: Enum<{Overflow, Unimplemented, UntrustedReserveLocation, UntrustedTeleportLocation, MultiLocationFull, MultiLocationNotInvertible, BadOrigin, InvalidLocation, AssetNotFound, FailedToTransactAsset, NotWithdrawable, LocationCannotHold, ExceedsMaxMessageSize, DestinationUnsupported, Transport, Unroutable, UnknownClaim, FailedToDecode, MaxWeightInvalid, NotHoldingFees, TooExpensive, Trap, UnhandledXcmVersion, WeightLimitReached, Barrier, WeightNotComputable}>, weight: {ref_time: U64}}, BadVersion: {message_hash: Enum<{None, Some}>}, BadFormat: {message_hash: Enum<{None, Some}>}, UpwardMessageSent: {message_hash: Enum<{None, Some}>}, XcmpMessageSent: {message_hash: Enum<{None, Some}>}, OverweightEnqueued: {sender: U32, sent_at: U32, index: U64, required: {ref_time: U64}}, OverweightServiced: {index: U64, used: {ref_time: U64}}}>, PolkadotXcm: Enum<{Attempted: Enum<{Complete, Incomplete, Error}>, Sent: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, {parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, Vec<Enum<{WithdrawAsset, ReserveAssetDeposited, ReceiveTeleportedAsset, QueryResponse, TransferAsset, TransferReserveAsset, Transact, HrmpNewChannelOpenRequest, HrmpChannelAccepted, HrmpChannelClosing, ClearOrigin, DescendOrigin, ReportError, DepositAsset, DepositReserveAsset, ExchangeAsset, InitiateReserveWithdraw, InitiateTeleport, QueryHolding, BuyExecution, RefundSurplus, SetErrorHandler, SetAppendix, ClearError, ClaimAsset, Trap, SubscribeVersion, UnsubscribeVersion}>>), UnexpectedResponse: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U64), ResponseReady: (U64, Enum<{Null, Assets, ExecutionResult, Version}>), Notified: (U64, U8, U8), NotifyOverweight: (U64, U8, U8, {ref_time: U64}, {ref_time: U64}), NotifyDispatchError: (U64, U8, U8), NotifyDecodeFailed: (U64, U8, U8), InvalidResponder: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U64, Enum<{None, Some}>), InvalidResponderVersion: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U64), ResponseTaken: U64, AssetsTrapped: ([U8; 32], {parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, Enum<{V0, V1}>), VersionChangeNotified: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U32), SupportedVersionChanged: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U32), NotifyTargetSendFail: ({parents: U8, interior: Enum<{Here, X1, X2, X3, X4, X5, X6, X7, X8}>}, U64, Enum<{Overflow, Unimplemented, UntrustedReserveLocation, UntrustedTeleportLocation, MultiLocationFull, MultiLocationNotInvertible, BadOrigin, InvalidLocation, AssetNotFound, FailedToTransactAsset, NotWithdrawable, LocationCannotHold, ExceedsMaxMessageSize, DestinationUnsupported, Transport, Unroutable, UnknownClaim, FailedToDecode, MaxWeightInvalid, NotHoldingFees, TooExpensive, Trap, UnhandledXcmVersion, WeightLimitReached, Barrier, WeightNotComputable}>), NotifyTargetMigrationFail: (Enum<{V0, V1}>, U64)}>, CumulusXcm: Enum<{InvalidFormat: [U8; 8], UnsupportedVersion: [U8; 8], ExecutedDownward: ([U8; 8], Enum<{Complete, Incomplete, Error}>)}>, DmpQueue: Enum<{InvalidFormat: {message_id: [U8; 32]}, UnsupportedVersion: {message_id: [U8; 32]}, ExecutedDownward: {message_id: [U8; 32], outcome: Enum<{Complete, Incomplete, Error}>}, WeightExhausted: {message_id: [U8; 32], remaining_weight: {ref_time: U64}, required_weight: {ref_time: U64}}, OverweightEnqueued: {message_id: [U8; 32], overweight_index: U64, required_weight: {ref_time: U64}}, OverweightServiced: {overweight_index: U64, weight_used: {ref_time: U64}}}>, Ethereum: Enum<{Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{Succeed, Error, Revert, Fatal}>}}>, Evm: Enum<{Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, Created: {address: [U8; 20]}, CreatedFailed: {address: [U8; 20]}, Executed: {address: [U8; 20]}, ExecutedFailed: {address: [U8; 20]}}>, BaseFee: Enum<{NewBaseFeePerGas: {fee: [U64; 4]}, BaseFeeOverflow: , NewElasticity: {elasticity: U32}}>}>, topics: Vec<[U8; 32]>}>
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
