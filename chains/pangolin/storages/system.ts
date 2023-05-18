import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `System`'s storages.
 * 
 * `System`'s calls: {@link: module:pangolin/system/calls}
 *
 * @module pangolin/system/storages
 */
export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
         * The full account information for a particular account ID.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, misc_frozen: U128, fee_frozen: U128}}
         */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'Account', param0);
        },

        /**
         * Total extrinsics count for the current block.
         *
         * @returns {Promise<string | null>} U32
         */
        extrinsicCount: async (): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicCount');
        },

        /**
         * The current weight for the block.
         *
         * @returns {Promise<string | null>} PerDispatchClass: {normal: {ref_time: Compact<U64>, proof_size: Compact<U64>}, operational: {ref_time: Compact<U64>, proof_size: Compact<U64>}, mandatory: {ref_time: Compact<U64>, proof_size: Compact<U64>}}
         */
        blockWeight: async (): Promise<string | null> => {
            return await getStorage('System', 'BlockWeight');
        },

        /**
         * Total length (in bytes) for all extrinsics put together, for the current block.
         *
         * @returns {Promise<string | null>} U32
         */
        allExtrinsicsLen: async (): Promise<string | null> => {
            return await getStorage('System', 'AllExtrinsicsLen');
        },

        /**
         * Map of block numbers to block hashes.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'BlockHash', param0);
        },

        /**
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} Vec<U8>
         */
        extrinsicData: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicData', param0);
        },

        /**
         * The current block number being processed. Set by `execute_block`.
         *
         * @returns {Promise<string | null>} U32
         */
        number: async (): Promise<string | null> => {
            return await getStorage('System', 'Number');
        },

        /**
         * Hash of the previous block.
         *
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        parentHash: async (): Promise<string | null> => {
            return await getStorage('System', 'ParentHash');
        },

        /**
         * Digest of the current block, also part of the block header.
         *
         * @returns {Promise<string | null>} Digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}
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
         * @returns {Promise<string | null>} Vec<{phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>, event: Enum<{0/System: Enum<{0/ExtrinsicSuccess: {dispatch_info: {weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 1/ExtrinsicFailed: {dispatch_error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable}>, dispatch_info: {weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 2/CodeUpdated: , 3/NewAccount: {account: [U8; 20]}, 4/KilledAccount: {account: [U8; 20]}, 5/Remarked: {sender: [U8; 20], hash: [U8; 32]}}>, 1/ParachainSystem: Enum<{0/ValidationFunctionStored: , 1/ValidationFunctionApplied: {relay_chain_block_num: U32}, 2/ValidationFunctionDiscarded: , 3/UpgradeAuthorized: {code_hash: [U8; 32]}, 4/DownwardMessagesReceived: {count: U32}, 5/DownwardMessagesProcessed: {weight_used: {ref_time: Compact<U64>, proof_size: Compact<U64>}, dmq_head: [U8; 32]}, 6/UpwardMessageSent: {message_hash: Enum<{0/None, 1/Some}>}}>, 5/Balances: Enum<{0/Endowed: {account: [U8; 20], free_balance: U128}, 1/DustLost: {account: [U8; 20], amount: U128}, 2/Transfer: {from: [U8; 20], to: [U8; 20], amount: U128}, 3/BalanceSet: {who: [U8; 20], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 20], amount: U128}, 5/Unreserved: {who: [U8; 20], amount: U128}, 6/ReserveRepatriated: {from: [U8; 20], to: [U8; 20], amount: U128, destination_status: Enum<{0/Free, 1/Reserved}>}, 7/Deposit: {who: [U8; 20], amount: U128}, 8/Withdraw: {who: [U8; 20], amount: U128}, 9/Slashed: {who: [U8; 20], amount: U128}}>, 6/TransactionPayment: Enum<{0/TransactionFeePaid: {who: [U8; 20], actual_fee: U128, tip: U128}}>, 7/Assets: Enum<{0/Created: {asset_id: U64, creator: [U8; 20], owner: [U8; 20]}, 1/Issued: {asset_id: U64, owner: [U8; 20], amount: U128}, 2/Transferred: {asset_id: U64, from: [U8; 20], to: [U8; 20], amount: U128}, 3/Burned: {asset_id: U64, owner: [U8; 20], balance: U128}, 4/TeamChanged: {asset_id: U64, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 5/OwnerChanged: {asset_id: U64, owner: [U8; 20]}, 6/Frozen: {asset_id: U64, who: [U8; 20]}, 7/Thawed: {asset_id: U64, who: [U8; 20]}, 8/AssetFrozen: {asset_id: U64}, 9/AssetThawed: {asset_id: U64}, 10/AccountsDestroyed: {asset_id: U64, accounts_destroyed: U32, accounts_remaining: U32}, 11/ApprovalsDestroyed: {asset_id: U64, approvals_destroyed: U32, approvals_remaining: U32}, 12/DestructionStarted: {asset_id: U64}, 13/Destroyed: {asset_id: U64}, 14/ForceCreated: {asset_id: U64, owner: [U8; 20]}, 15/MetadataSet: {asset_id: U64, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 16/MetadataCleared: {asset_id: U64}, 17/ApprovedTransfer: {asset_id: U64, source: [U8; 20], delegate: [U8; 20], amount: U128}, 18/ApprovalCancelled: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20]}, 19/TransferredApproved: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20], destination: [U8; 20], amount: U128}, 20/AssetStatusChanged: {asset_id: U64}}>, 8/Vesting: Enum<{0/VestingUpdated: {account: [U8; 20], unvested: U128}, 1/VestingCompleted: {account: [U8; 20]}}>, 9/Deposit: Enum<{0/DepositCreated: {owner: [U8; 20], deposit_id: U16, value: U128, start_time: U128, expired_time: U128, kton_reward: U128}, 1/DepositClaimed: {owner: [U8; 20], deposit_id: U16}, 2/DepositClaimedWithPenalty: {owner: [U8; 20], deposit_id: U16, kton_penalty: U128}}>, 10/AccountMigration: Enum<{0/Migrated: {from: [U8; 32], to: [U8; 20]}, 1/NewMultisigParamsNoted: {from: [U8; 32], to: {address: [U8; 20], members: Vec<[U8; 20]>, threshold: U16}}, 2/MultisigMigrated: {from: [U8; 32], detail: {to: [U8; 20], members: Vec<([U8; 32], Bool)>, threshold: U16}}}>, 12/DarwiniaStaking: Enum<{0/Staked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/Unstaked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/Payout: {staker: [U8; 20], ring_amount: U128}, 3/Elected: {collators: Vec<[U8; 20]>}}>, 13/Session: Enum<{0/NewSession: {session_index: U32}}>, 17/EcdsaAuthority: Enum<{0/CollectingAuthoritiesChangeSignatures: {message: [U8; 32]}, 1/CollectedEnoughAuthoritiesChangeSignatures: {operation: Enum<{0/AddMember, 1/RemoveMember, 2/SwapMembers}>, threshold: Enum<{0/None, 1/Some}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}, 2/CollectingNewMessageRootSignatures: {message: [U8; 32]}, 3/CollectedEnoughNewMessageRootSignatures: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}}>, 18/Democracy: Enum<{0/Proposed: {proposal_index: U32, deposit: U128}, 1/Tabled: {proposal_index: U32, deposit: U128}, 2/ExternalTabled: , 3/Started: {ref_index: U32, threshold: Enum<{0/SuperMajorityApprove, 1/SuperMajorityAgainst, 2/SimpleMajority}>}, 4/Passed: {ref_index: U32}, 5/NotPassed: {ref_index: U32}, 6/Cancelled: {ref_index: U32}, 7/Delegated: {who: [U8; 20], target: [U8; 20]}, 8/Undelegated: {account: [U8; 20]}, 9/Vetoed: {who: [U8; 20], proposal_hash: [U8; 32], until: U32}, 10/Blacklisted: {proposal_hash: [U8; 32]}, 11/Voted: {voter: [U8; 20], ref_index: U32, vote: Enum<{0/Standard, 1/Split}>}, 12/Seconded: {seconder: [U8; 20], prop_index: U32}, 13/ProposalCanceled: {prop_index: U32}}>, 19/Council: Enum<{0/Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 20/TechnicalCommittee: Enum<{0/Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 21/PhragmenElection: Enum<{0/NewTerm: {new_members: Vec<([U8; 20], U128)>}, 1/EmptyTerm: , 2/ElectionError: , 3/MemberKicked: {member: [U8; 20]}, 4/Renounced: {candidate: [U8; 20]}, 5/CandidateSlashed: {candidate: [U8; 20], amount: U128}, 6/SeatHolderSlashed: {seat_holder: [U8; 20], amount: U128}}>, 22/TechnicalMembership: Enum<{0/MemberAdded: , 1/MemberRemoved: , 2/MembersSwapped: , 3/MembersReset: , 4/KeyChanged: , 5/Dummy: }>, 23/Treasury: Enum<{0/Proposed: {proposal_index: U32}, 1/Spending: {budget_remaining: U128}, 2/Awarded: {proposal_index: U32, award: U128, account: [U8; 20]}, 3/Rejected: {proposal_index: U32, slashed: U128}, 4/Burnt: {burnt_funds: U128}, 5/Rollover: {rollover_balance: U128}, 6/Deposit: {value: U128}, 7/SpendApproved: {proposal_index: U32, amount: U128, beneficiary: [U8; 20]}, 8/UpdatedInactive: {reactivated: U128, deactivated: U128}}>, 24/Tips: Enum<{0/NewTip: {tip_hash: [U8; 32]}, 1/TipClosing: {tip_hash: [U8; 32]}, 2/TipClosed: {tip_hash: [U8; 32], who: [U8; 20], payout: U128}, 3/TipRetracted: {tip_hash: [U8; 32]}, 4/TipSlashed: {tip_hash: [U8; 32], finder: [U8; 20], deposit: U128}}>, 25/Sudo: Enum<{0/Sudid: {sudo_result: Enum<{0/Ok, 1/Err}>}, 1/KeyChanged: {old_sudoer: Enum<{0/None, 1/Some}>}, 2/SudoAsDone: {sudo_result: Enum<{0/Ok, 1/Err}>}}>, 26/Utility: Enum<{0/BatchInterrupted: {index: U32, error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable}>}, 1/BatchCompleted: , 2/BatchCompletedWithErrors: , 3/ItemCompleted: , 4/ItemFailed: {error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable}>}, 5/DispatchedAs: {result: Enum<{0/Ok, 1/Err}>}}>, 27/Identity: Enum<{0/IdentitySet: {who: [U8; 20]}, 1/IdentityCleared: {who: [U8; 20], deposit: U128}, 2/IdentityKilled: {who: [U8; 20], deposit: U128}, 3/JudgementRequested: {who: [U8; 20], registrar_index: U32}, 4/JudgementUnrequested: {who: [U8; 20], registrar_index: U32}, 5/JudgementGiven: {target: [U8; 20], registrar_index: U32}, 6/RegistrarAdded: {registrar_index: U32}, 7/SubIdentityAdded: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 8/SubIdentityRemoved: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 9/SubIdentityRevoked: {sub: [U8; 20], main: [U8; 20], deposit: U128}}>, 28/Scheduler: Enum<{0/Scheduled: {when: U32, index: U32}, 1/Canceled: {when: U32, index: U32}, 2/Dispatched: {task: (U32, U32), id: Enum<{0/None, 1/Some}>, result: Enum<{0/Ok, 1/Err}>}, 3/CallUnavailable: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}, 4/PeriodicFailed: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}, 5/PermanentlyOverweight: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}}>, 29/Preimage: Enum<{0/Noted: {hash: [U8; 32]}, 1/Requested: {hash: [U8; 32]}, 2/Cleared: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/ProxyExecuted: {result: Enum<{0/Ok, 1/Err}>}, 1/PureCreated: {pure: [U8; 20], who: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, disambiguation_index: U16}, 2/Announced: {real: [U8; 20], proxy: [U8; 20], call_hash: [U8; 32]}, 3/ProxyAdded: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 4/ProxyRemoved: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}}>, 32/XcmpQueue: Enum<{0/Success: {message_hash: Enum<{0/None, 1/Some}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/Fail: {message_hash: Enum<{0/None, 1/Some}>, error: Enum<{0/Overflow, 1/Unimplemented, 2/UntrustedReserveLocation, 3/UntrustedTeleportLocation, 4/LocationFull, 5/LocationNotInvertible, 6/BadOrigin, 7/InvalidLocation, 8/AssetNotFound, 9/FailedToTransactAsset, 10/NotWithdrawable, 11/LocationCannotHold, 12/ExceedsMaxMessageSize, 13/DestinationUnsupported, 14/Transport, 15/Unroutable, 16/UnknownClaim, 17/FailedToDecode, 18/MaxWeightInvalid, 19/NotHoldingFees, 20/TooExpensive, 21/Trap, 22/ExpectationFalse, 23/PalletNotFound, 24/NameMismatch, 25/VersionIncompatible, 26/HoldingWouldOverflow, 27/ExportError, 28/ReanchorFailed, 29/NoDeal, 30/FeesNotMet, 31/LockError, 32/NoPermission, 33/Unanchored, 34/NotDepositable, 35/UnhandledXcmVersion, 36/WeightLimitReached, 37/Barrier, 38/WeightNotComputable, 39/ExceedsStackLimit}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/BadVersion: {message_hash: Enum<{0/None, 1/Some}>}, 3/BadFormat: {message_hash: Enum<{0/None, 1/Some}>}, 4/XcmpMessageSent: {message_hash: Enum<{0/None, 1/Some}>}, 5/OverweightEnqueued: {sender: U32, sent_at: U32, index: U64, required: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/OverweightServiced: {index: U64, used: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/Attempted: Enum<{0/Complete, 1/Incomplete, 2/Error}>, 1/Sent: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Vec<Enum<{0/WithdrawAsset, 1/ReserveAssetDeposited, 2/ReceiveTeleportedAsset, 3/QueryResponse, 4/TransferAsset, 5/TransferReserveAsset, 6/Transact, 7/HrmpNewChannelOpenRequest, 8/HrmpChannelAccepted, 9/HrmpChannelClosing, 10/ClearOrigin, 11/DescendOrigin, 12/ReportError, 13/DepositAsset, 14/DepositReserveAsset, 15/ExchangeAsset, 16/InitiateReserveWithdraw, 17/InitiateTeleport, 18/ReportHolding, 19/BuyExecution, 20/RefundSurplus, 21/SetErrorHandler, 22/SetAppendix, 23/ClearError, 24/ClaimAsset, 25/Trap, 26/SubscribeVersion, 27/UnsubscribeVersion, 28/BurnAsset, 29/ExpectAsset, 30/ExpectOrigin, 31/ExpectError, 32/ExpectTransactStatus, 33/QueryPallet, 34/ExpectPallet, 35/ReportTransactStatus, 36/ClearTransactStatus, 37/UniversalOrigin, 38/ExportMessage, 39/LockAsset, 40/UnlockAsset, 41/NoteUnlockable, 42/RequestUnlock, 43/SetFeesMode, 44/SetTopic, 45/ClearTopic, 46/AliasOrigin, 47/UnpaidExecution}>>), 2/UnexpectedResponse: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64), 3/ResponseReady: (U64, Enum<{0/Null, 1/Assets, 2/ExecutionResult, 3/Version, 4/PalletsInfo, 5/DispatchResult}>), 4/Notified: (U64, U8, U8), 5/NotifyOverweight: (U64, U8, U8, {ref_time: Compact<U64>, proof_size: Compact<U64>}, {ref_time: Compact<U64>, proof_size: Compact<U64>}), 6/NotifyDispatchError: (U64, U8, U8), 7/NotifyDecodeFailed: (U64, U8, U8), 8/InvalidResponder: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64, Enum<{0/None, 1/Some}>), 9/InvalidResponderVersion: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64), 10/ResponseTaken: U64, 11/AssetsTrapped: ([U8; 32], {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Enum<{1/V2, 3/V3}>), 12/VersionChangeNotified: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U32, Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>), 13/SupportedVersionChanged: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U32), 14/NotifyTargetSendFail: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64, Enum<{0/Overflow, 1/Unimplemented, 2/UntrustedReserveLocation, 3/UntrustedTeleportLocation, 4/LocationFull, 5/LocationNotInvertible, 6/BadOrigin, 7/InvalidLocation, 8/AssetNotFound, 9/FailedToTransactAsset, 10/NotWithdrawable, 11/LocationCannotHold, 12/ExceedsMaxMessageSize, 13/DestinationUnsupported, 14/Transport, 15/Unroutable, 16/UnknownClaim, 17/FailedToDecode, 18/MaxWeightInvalid, 19/NotHoldingFees, 20/TooExpensive, 21/Trap, 22/ExpectationFalse, 23/PalletNotFound, 24/NameMismatch, 25/VersionIncompatible, 26/HoldingWouldOverflow, 27/ExportError, 28/ReanchorFailed, 29/NoDeal, 30/FeesNotMet, 31/LockError, 32/NoPermission, 33/Unanchored, 34/NotDepositable, 35/UnhandledXcmVersion, 36/WeightLimitReached, 37/Barrier, 38/WeightNotComputable, 39/ExceedsStackLimit}>), 15/NotifyTargetMigrationFail: (Enum<{1/V2, 3/V3}>, U64), 16/InvalidQuerierVersion: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64), 17/InvalidQuerier: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, U64, {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Enum<{0/None, 1/Some}>), 18/VersionNotifyStarted: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>), 19/VersionNotifyRequested: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>), 20/VersionNotifyUnrequested: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>), 21/FeesPaid: ({parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>), 22/AssetsClaimed: ([U8; 32], {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, Enum<{1/V2, 3/V3}>)}>, 34/CumulusXcm: Enum<{0/InvalidFormat: [U8; 32], 1/UnsupportedVersion: [U8; 32], 2/ExecutedDownward: ([U8; 32], Enum<{0/Complete, 1/Incomplete, 2/Error}>)}>, 35/DmpQueue: Enum<{0/InvalidFormat: {message_id: [U8; 32]}, 1/UnsupportedVersion: {message_id: [U8; 32]}, 2/ExecutedDownward: {message_id: [U8; 32], outcome: Enum<{0/Complete, 1/Incomplete, 2/Error}>}, 3/WeightExhausted: {message_id: [U8; 32], remaining_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, required_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/OverweightEnqueued: {message_id: [U8; 32], overweight_index: U64, required_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 5/OverweightServiced: {overweight_index: U64, weight_used: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/MaxMessagesExhausted: {message_id: [U8; 32]}}>, 36/Ethereum: Enum<{0/Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{0/Succeed, 1/Error, 2/Revert, 3/Fatal}>}}>, 37/EVM: Enum<{0/Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, 1/Created: {address: [U8; 20]}, 2/CreatedFailed: {address: [U8; 20]}, 3/Executed: {address: [U8; 20]}, 4/ExecutedFailed: {address: [U8; 20]}}>, 40/BridgeMoonbaseParachain: Enum<{0/UntrackedParachainRejected: {parachain: U32}, 1/MissingParachainHead: {parachain: U32}, 2/IncorrectParachainHeadHash: {parachain: U32, parachain_head_hash: [U8; 32], actual_parachain_head_hash: [U8; 32]}, 3/RejectedObsoleteParachainHead: {parachain: U32, parachain_head_hash: [U8; 32]}, 4/RejectedLargeParachainHead: {parachain: U32, parachain_head_hash: [U8; 32], parachain_head_size: U32}, 5/UpdatedParachainHead: {parachain: U32, parachain_head_hash: [U8; 32]}}>, 41/BridgePangoroMessages: Enum<{0/ParameterUpdated: {parameter: ()}, 1/MessageAccepted: {lane_id: [U8; 4], nonce: U64}, 2/MessagesReceived: Vec<{lane: [U8; 4], receive_results: Vec<(U64, Enum<{0/Dispatched, 1/InvalidNonce, 2/TooManyUnrewardedRelayers, 3/TooManyUnconfirmedMessages, 4/PreDispatchValidateFailed}>)>, skipped_for_not_enough_weight: Vec<U64>}>, 3/MessagesDelivered: {lane_id: [U8; 4], messages: {begin: U64, end: U64, dispatch_results: BitVec<U8>}}}>, 42/BridgePangoroDispatch: Enum<{0/MessageRejected: ([U8; 4], ([U8; 4], U64)), 1/MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), 2/MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), {ref_time: Compact<U64>, proof_size: Compact<U64>}, {ref_time: Compact<U64>, proof_size: Compact<U64>}), 3/MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), 4/MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), 5/MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{0/Invalid, 1/Unknown}>), 6/MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 20], {ref_time: Compact<U64>, proof_size: Compact<U64>}), 7/MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{0/Ok, 1/Err}>), 8/_Dummy: }>, 43/PangoroFeeMarket: Enum<{0/Enroll: ([U8; 20], U128, U128), 1/UpdateLockedCollateral: ([U8; 20], U128), 2/UpdateRelayFee: ([U8; 20], U128), 3/CancelEnrollment: [U8; 20], 4/UpdateCollateralSlashProtect: U128, 5/UpdateAssignedRelayersNumber: U32, 6/FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{0/None, 1/Some}>, delay_time: Enum<{0/None, 1/Some}>, account_id: [U8; 20], amount: U128}, 7/OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 20]>, Enum<{0/None, 1/Some}>), 8/OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 20], U128)>, to_treasury: Enum<{0/None, 1/Some}>, to_message_relayer: Enum<{0/None, 1/Some}>, to_confirm_relayer: Enum<{0/None, 1/Some}>})}>}>, topics: Vec<[U8; 32]>}>
         */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
         * The number of events in the `Events<T>` list.
         *
         * @returns {Promise<string | null>} U32
         */
        eventCount: async (): Promise<string | null> => {
            return await getStorage('System', 'EventCount');
        },

        /**
         * Mapping between a topic (represented by T::Hash) and a vector of indexes
         * of events in the `<Events<T>>` list.
         *
         * All topic vectors have deterministic storage locations depending on the topic. This
         * allows light-clients to leverage the changes trie storage tracking mechanism and
         * in case of changes fetch the list of events of interest.
         *
         * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
         * the `EventIndex` then in case if the topic has the same contents on the next block
         * no notification will be triggered thus the event might be lost.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} Vec<(U32, U32)>
         */
        eventTopics: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'EventTopics', param0);
        },

        /**
         * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
         *
         * @returns {Promise<string | null>} LastRuntimeUpgradeInfo: {spec_version: Compact<U32>, spec_name: Str}
         */
        lastRuntimeUpgrade: async (): Promise<string | null> => {
            return await getStorage('System', 'LastRuntimeUpgrade');
        },

        /**
         * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
         *
         * @returns {Promise<string | null>} Bool
         */
        upgradedToU32RefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToU32RefCount');
        },

        /**
         * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
         * (default) if not.
         *
         * @returns {Promise<string | null>} Bool
         */
        upgradedToTripleRefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToTripleRefCount');
        },

        /**
         * The execution phase of the block.
         *
         * @returns {Promise<string | null>} Phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>
         */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};
