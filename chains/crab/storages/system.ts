import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `System`'s storages.
 * 
 * `System`'s calls: {@link: module:crab/system/calls}
 *
 * @module crab/system/storages
 */
export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
         * The full account information for a particular account ID.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, frozen: U128, flags: U128}}
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
         * @returns {Promise<string | null>} Vec<{phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>, event: Enum<{0/System: Enum<{0/ExtrinsicSuccess: {dispatch_info: {weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 1/ExtrinsicFailed: {dispatch_error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable, 13/RootNotAllowed}>, dispatch_info: {weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 2/CodeUpdated: , 3/NewAccount: {account: [U8; 20]}, 4/KilledAccount: {account: [U8; 20]}, 5/Remarked: {sender: [U8; 20], hash: [U8; 32]}}>, 1/ParachainSystem: Enum<{0/ValidationFunctionStored: , 1/ValidationFunctionApplied: {relay_chain_block_num: U32}, 2/ValidationFunctionDiscarded: , 3/UpgradeAuthorized: {code_hash: [U8; 32]}, 4/DownwardMessagesReceived: {count: U32}, 5/DownwardMessagesProcessed: {weight_used: {ref_time: Compact<U64>, proof_size: Compact<U64>}, dmq_head: [U8; 32]}, 6/UpwardMessageSent: {message_hash: Enum<{0/None, 1/Some}>}}>, 5/Balances: Enum<{0/Endowed: {account: [U8; 20], free_balance: U128}, 1/DustLost: {account: [U8; 20], amount: U128}, 2/Transfer: {from: [U8; 20], to: [U8; 20], amount: U128}, 3/BalanceSet: {who: [U8; 20], free: U128}, 4/Reserved: {who: [U8; 20], amount: U128}, 5/Unreserved: {who: [U8; 20], amount: U128}, 6/ReserveRepatriated: {from: [U8; 20], to: [U8; 20], amount: U128, destination_status: Enum<{0/Free, 1/Reserved}>}, 7/Deposit: {who: [U8; 20], amount: U128}, 8/Withdraw: {who: [U8; 20], amount: U128}, 9/Slashed: {who: [U8; 20], amount: U128}, 10/Minted: {who: [U8; 20], amount: U128}, 11/Burned: {who: [U8; 20], amount: U128}, 12/Suspended: {who: [U8; 20], amount: U128}, 13/Restored: {who: [U8; 20], amount: U128}, 14/Upgraded: {who: [U8; 20]}, 15/Issued: {amount: U128}, 16/Rescinded: {amount: U128}, 17/Locked: {who: [U8; 20], amount: U128}, 18/Unlocked: {who: [U8; 20], amount: U128}, 19/Frozen: {who: [U8; 20], amount: U128}, 20/Thawed: {who: [U8; 20], amount: U128}}>, 6/TransactionPayment: Enum<{0/TransactionFeePaid: {who: [U8; 20], actual_fee: U128, tip: U128}}>, 7/Assets: Enum<{0/Created: {asset_id: U64, creator: [U8; 20], owner: [U8; 20]}, 1/Issued: {asset_id: U64, owner: [U8; 20], amount: U128}, 2/Transferred: {asset_id: U64, from: [U8; 20], to: [U8; 20], amount: U128}, 3/Burned: {asset_id: U64, owner: [U8; 20], balance: U128}, 4/TeamChanged: {asset_id: U64, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 5/OwnerChanged: {asset_id: U64, owner: [U8; 20]}, 6/Frozen: {asset_id: U64, who: [U8; 20]}, 7/Thawed: {asset_id: U64, who: [U8; 20]}, 8/AssetFrozen: {asset_id: U64}, 9/AssetThawed: {asset_id: U64}, 10/AccountsDestroyed: {asset_id: U64, accounts_destroyed: U32, accounts_remaining: U32}, 11/ApprovalsDestroyed: {asset_id: U64, approvals_destroyed: U32, approvals_remaining: U32}, 12/DestructionStarted: {asset_id: U64}, 13/Destroyed: {asset_id: U64}, 14/ForceCreated: {asset_id: U64, owner: [U8; 20]}, 15/MetadataSet: {asset_id: U64, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 16/MetadataCleared: {asset_id: U64}, 17/ApprovedTransfer: {asset_id: U64, source: [U8; 20], delegate: [U8; 20], amount: U128}, 18/ApprovalCancelled: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20]}, 19/TransferredApproved: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20], destination: [U8; 20], amount: U128}, 20/AssetStatusChanged: {asset_id: U64}, 21/AssetMinBalanceChanged: {asset_id: U64, new_min_balance: U128}, 22/Touched: {asset_id: U64, who: [U8; 20], depositor: [U8; 20]}, 23/Blocked: {asset_id: U64, who: [U8; 20]}}>, 8/Vesting: Enum<{0/VestingUpdated: {account: [U8; 20], unvested: U128}, 1/VestingCompleted: {account: [U8; 20]}}>, 9/Deposit: Enum<{0/DepositCreated: {owner: [U8; 20], deposit_id: U16, value: U128, start_time: U128, expired_time: U128, kton_reward: U128}, 1/DepositClaimed: {owner: [U8; 20], deposit_id: U16}, 2/DepositClaimedWithPenalty: {owner: [U8; 20], deposit_id: U16, kton_penalty: U128}}>, 10/AccountMigration: Enum<{0/Migrated: {from: [U8; 32], to: [U8; 20]}, 1/NewMultisigParamsNoted: {from: [U8; 32], to: {address: [U8; 20], members: Vec<[U8; 20]>, threshold: U16}}, 2/MultisigMigrated: {from: [U8; 32], detail: {to: [U8; 20], members: Vec<([U8; 32], Bool)>, threshold: U16}}}>, 12/DarwiniaStaking: Enum<{0/Staked: {who: [U8; 20], ring_amount: U128, deposits: Vec<U16>}, 1/Unstaked: {who: [U8; 20], ring_amount: U128, deposits: Vec<U16>}, 2/CommissionUpdated: {who: [U8; 20], commission: U32}, 3/Payout: {who: [U8; 20], amount: U128}, 4/Unpaid: {who: [U8; 20], amount: U128}, 5/Elected: {collators: Vec<[U8; 20]>}}>, 13/Session: Enum<{0/NewSession: {session_index: U32}}>, 20/TechnicalCommittee: Enum<{0/Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 23/Treasury: Enum<{0/Proposed: {proposal_index: U32}, 1/Spending: {budget_remaining: U128}, 2/Awarded: {proposal_index: U32, award: U128, account: [U8; 20]}, 3/Rejected: {proposal_index: U32, slashed: U128}, 4/Burnt: {burnt_funds: U128}, 5/Rollover: {rollover_balance: U128}, 6/Deposit: {value: U128}, 7/SpendApproved: {proposal_index: U32, amount: U128, beneficiary: [U8; 20]}, 8/UpdatedInactive: {reactivated: U128, deactivated: U128}}>, 44/ConvictionVoting: Enum<{0/Delegated: ([U8; 20], [U8; 20]), 1/Undelegated: [U8; 20]}>, 45/Referenda: Enum<{0/Submitted: {index: U32, track: U16, proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 1/DecisionDepositPlaced: {index: U32, who: [U8; 20], amount: U128}, 2/DecisionDepositRefunded: {index: U32, who: [U8; 20], amount: U128}, 3/DepositSlashed: {who: [U8; 20], amount: U128}, 4/DecisionStarted: {index: U32, track: U16, proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, tally: {ayes: U128, nays: U128, support: U128}}, 5/ConfirmStarted: {index: U32}, 6/ConfirmAborted: {index: U32}, 7/Confirmed: {index: U32, tally: {ayes: U128, nays: U128, support: U128}}, 8/Approved: {index: U32}, 9/Rejected: {index: U32, tally: {ayes: U128, nays: U128, support: U128}}, 10/TimedOut: {index: U32, tally: {ayes: U128, nays: U128, support: U128}}, 11/Cancelled: {index: U32, tally: {ayes: U128, nays: U128, support: U128}}, 12/Killed: {index: U32, tally: {ayes: U128, nays: U128, support: U128}}, 13/SubmissionDepositRefunded: {index: U32, who: [U8; 20], amount: U128}, 14/MetadataSet: {index: U32, hash: [U8; 32]}, 15/MetadataCleared: {index: U32, hash: [U8; 32]}}>, 47/Whitelist: Enum<{0/CallWhitelisted: {call_hash: [U8; 32]}, 1/WhitelistedCallRemoved: {call_hash: [U8; 32]}, 2/WhitelistedCallDispatched: {call_hash: [U8; 32], result: Enum<{0/Ok, 1/Err}>}}>, 26/Utility: Enum<{0/BatchInterrupted: {index: U32, error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable, 13/RootNotAllowed}>}, 1/BatchCompleted: , 2/BatchCompletedWithErrors: , 3/ItemCompleted: , 4/ItemFailed: {error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic, 9/Transactional, 10/Exhausted, 11/Corruption, 12/Unavailable, 13/RootNotAllowed}>}, 5/DispatchedAs: {result: Enum<{0/Ok, 1/Err}>}}>, 27/Identity: Enum<{0/IdentitySet: {who: [U8; 20]}, 1/IdentityCleared: {who: [U8; 20], deposit: U128}, 2/IdentityKilled: {who: [U8; 20], deposit: U128}, 3/JudgementRequested: {who: [U8; 20], registrar_index: U32}, 4/JudgementUnrequested: {who: [U8; 20], registrar_index: U32}, 5/JudgementGiven: {target: [U8; 20], registrar_index: U32}, 6/RegistrarAdded: {registrar_index: U32}, 7/SubIdentityAdded: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 8/SubIdentityRemoved: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 9/SubIdentityRevoked: {sub: [U8; 20], main: [U8; 20], deposit: U128}}>, 28/Scheduler: Enum<{0/Scheduled: {when: U32, index: U32}, 1/Canceled: {when: U32, index: U32}, 2/Dispatched: {task: (U32, U32), id: Enum<{0/None, 1/Some}>, result: Enum<{0/Ok, 1/Err}>}, 3/CallUnavailable: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}, 4/PeriodicFailed: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}, 5/PermanentlyOverweight: {task: (U32, U32), id: Enum<{0/None, 1/Some}>}}>, 29/Preimage: Enum<{0/Noted: {hash: [U8; 32]}, 1/Requested: {hash: [U8; 32]}, 2/Cleared: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/ProxyExecuted: {result: Enum<{0/Ok, 1/Err}>}, 1/PureCreated: {pure: [U8; 20], who: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, disambiguation_index: U16}, 2/Announced: {real: [U8; 20], proxy: [U8; 20], call_hash: [U8; 32]}, 3/ProxyAdded: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}, 4/ProxyRemoved: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge, 7/SubstrateBridge}>, delay: U32}}>, 48/TxPause: Enum<{0/CallPaused: {full_name: (Vec<U8>, Vec<U8>)}, 1/CallUnpaused: {full_name: (Vec<U8>, Vec<U8>)}}>, 32/XcmpQueue: Enum<{0/Success: {message_hash: [U8; 32], message_id: [U8; 32], weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/Fail: {message_hash: [U8; 32], message_id: [U8; 32], error: Enum<{0/Overflow, 1/Unimplemented, 2/UntrustedReserveLocation, 3/UntrustedTeleportLocation, 4/LocationFull, 5/LocationNotInvertible, 6/BadOrigin, 7/InvalidLocation, 8/AssetNotFound, 9/FailedToTransactAsset, 10/NotWithdrawable, 11/LocationCannotHold, 12/ExceedsMaxMessageSize, 13/DestinationUnsupported, 14/Transport, 15/Unroutable, 16/UnknownClaim, 17/FailedToDecode, 18/MaxWeightInvalid, 19/NotHoldingFees, 20/TooExpensive, 21/Trap, 22/ExpectationFalse, 23/PalletNotFound, 24/NameMismatch, 25/VersionIncompatible, 26/HoldingWouldOverflow, 27/ExportError, 28/ReanchorFailed, 29/NoDeal, 30/FeesNotMet, 31/LockError, 32/NoPermission, 33/Unanchored, 34/NotDepositable, 35/UnhandledXcmVersion, 36/WeightLimitReached, 37/Barrier, 38/WeightNotComputable, 39/ExceedsStackLimit}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/BadVersion: {message_hash: [U8; 32]}, 3/BadFormat: {message_hash: [U8; 32]}, 4/XcmpMessageSent: {message_hash: [U8; 32]}, 5/OverweightEnqueued: {sender: U32, sent_at: U32, index: U64, required: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/OverweightServiced: {index: U64, used: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/Attempted: {outcome: Enum<{0/Complete, 1/Incomplete, 2/Error}>}, 1/Sent: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, destination: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, message: Vec<Enum<{0/WithdrawAsset, 1/ReserveAssetDeposited, 2/ReceiveTeleportedAsset, 3/QueryResponse, 4/TransferAsset, 5/TransferReserveAsset, 6/Transact, 7/HrmpNewChannelOpenRequest, 8/HrmpChannelAccepted, 9/HrmpChannelClosing, 10/ClearOrigin, 11/DescendOrigin, 12/ReportError, 13/DepositAsset, 14/DepositReserveAsset, 15/ExchangeAsset, 16/InitiateReserveWithdraw, 17/InitiateTeleport, 18/ReportHolding, 19/BuyExecution, 20/RefundSurplus, 21/SetErrorHandler, 22/SetAppendix, 23/ClearError, 24/ClaimAsset, 25/Trap, 26/SubscribeVersion, 27/UnsubscribeVersion, 28/BurnAsset, 29/ExpectAsset, 30/ExpectOrigin, 31/ExpectError, 32/ExpectTransactStatus, 33/QueryPallet, 34/ExpectPallet, 35/ReportTransactStatus, 36/ClearTransactStatus, 37/UniversalOrigin, 38/ExportMessage, 39/LockAsset, 40/UnlockAsset, 41/NoteUnlockable, 42/RequestUnlock, 43/SetFeesMode, 44/SetTopic, 45/ClearTopic, 46/AliasOrigin, 47/UnpaidExecution}>>, message_id: [U8; 32]}, 2/UnexpectedResponse: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64}, 3/ResponseReady: {query_id: U64, response: Enum<{0/Null, 1/Assets, 2/ExecutionResult, 3/Version, 4/PalletsInfo, 5/DispatchResult}>}, 4/Notified: {query_id: U64, pallet_index: U8, call_index: U8}, 5/NotifyOverweight: {query_id: U64, pallet_index: U8, call_index: U8, actual_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, max_budgeted_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/NotifyDispatchError: {query_id: U64, pallet_index: U8, call_index: U8}, 7/NotifyDecodeFailed: {query_id: U64, pallet_index: U8, call_index: U8}, 8/InvalidResponder: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64, expected_location: Enum<{0/None, 1/Some}>}, 9/InvalidResponderVersion: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64}, 10/ResponseTaken: {query_id: U64}, 11/AssetsTrapped: {hash: [U8; 32], origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, assets: Enum<{1/V2, 3/V3}>}, 12/VersionChangeNotified: {destination: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, result: U32, cost: Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>, message_id: [U8; 32]}, 13/SupportedVersionChanged: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, version: U32}, 14/NotifyTargetSendFail: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64, error: Enum<{0/Overflow, 1/Unimplemented, 2/UntrustedReserveLocation, 3/UntrustedTeleportLocation, 4/LocationFull, 5/LocationNotInvertible, 6/BadOrigin, 7/InvalidLocation, 8/AssetNotFound, 9/FailedToTransactAsset, 10/NotWithdrawable, 11/LocationCannotHold, 12/ExceedsMaxMessageSize, 13/DestinationUnsupported, 14/Transport, 15/Unroutable, 16/UnknownClaim, 17/FailedToDecode, 18/MaxWeightInvalid, 19/NotHoldingFees, 20/TooExpensive, 21/Trap, 22/ExpectationFalse, 23/PalletNotFound, 24/NameMismatch, 25/VersionIncompatible, 26/HoldingWouldOverflow, 27/ExportError, 28/ReanchorFailed, 29/NoDeal, 30/FeesNotMet, 31/LockError, 32/NoPermission, 33/Unanchored, 34/NotDepositable, 35/UnhandledXcmVersion, 36/WeightLimitReached, 37/Barrier, 38/WeightNotComputable, 39/ExceedsStackLimit}>}, 15/NotifyTargetMigrationFail: {location: Enum<{1/V2, 3/V3}>, query_id: U64}, 16/InvalidQuerierVersion: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64}, 17/InvalidQuerier: {origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, query_id: U64, expected_querier: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, maybe_actual_querier: Enum<{0/None, 1/Some}>}, 18/VersionNotifyStarted: {destination: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, cost: Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>, message_id: [U8; 32]}, 19/VersionNotifyRequested: {destination: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, cost: Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>, message_id: [U8; 32]}, 20/VersionNotifyUnrequested: {destination: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, cost: Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>, message_id: [U8; 32]}, 21/FeesPaid: {paying: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, fees: Vec<{id: Enum<{0/Concrete, 1/Abstract}>, fun: Enum<{0/Fungible, 1/NonFungible}>}>}, 22/AssetsClaimed: {hash: [U8; 32], origin: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, assets: Enum<{1/V2, 3/V3}>}}>, 34/CumulusXcm: Enum<{0/InvalidFormat: [U8; 32], 1/UnsupportedVersion: [U8; 32], 2/ExecutedDownward: ([U8; 32], Enum<{0/Complete, 1/Incomplete, 2/Error}>)}>, 35/DmpQueue: Enum<{0/InvalidFormat: {message_hash: [U8; 32]}, 1/UnsupportedVersion: {message_hash: [U8; 32]}, 2/ExecutedDownward: {message_hash: [U8; 32], message_id: [U8; 32], outcome: Enum<{0/Complete, 1/Incomplete, 2/Error}>}, 3/WeightExhausted: {message_hash: [U8; 32], message_id: [U8; 32], remaining_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, required_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/OverweightEnqueued: {message_hash: [U8; 32], message_id: [U8; 32], overweight_index: U64, required_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 5/OverweightServiced: {overweight_index: U64, weight_used: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/MaxMessagesExhausted: {message_hash: [U8; 32]}}>, 36/Ethereum: Enum<{0/Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{0/Succeed, 1/Error, 2/Revert, 3/Fatal}>, extra_data: Vec<U8>}}>, 37/EVM: Enum<{0/Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, 1/Created: {address: [U8; 20]}, 2/CreatedFailed: {address: [U8; 20]}, 3/Executed: {address: [U8; 20]}, 4/ExecutedFailed: {address: [U8; 20]}}>}>, topics: Vec<[U8; 32]>}>
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
         * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
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
