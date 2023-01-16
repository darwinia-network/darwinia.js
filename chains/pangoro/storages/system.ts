import { GetStorage } from "../../../src/storage";

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
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
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
         * @return Vec<{phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>, event: Enum<{0/System: Enum<{0/ExtrinsicSuccess: {dispatch_info: {weight: U64, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 1/ExtrinsicFailed: {dispatch_error: Enum<{0/Other, 1/CannotLookup, 2/BadOrigin, 3/Module, 4/ConsumerRemaining, 5/NoProviders, 6/TooManyConsumers, 7/Token, 8/Arithmetic}>, dispatch_info: {weight: U64, class: Enum<{0/Normal, 1/Operational, 2/Mandatory}>, pays_fee: Enum<{0/Yes, 1/No}>}}, 2/CodeUpdated: , 3/NewAccount: {account: [U8; 32]}, 4/KilledAccount: {account: [U8; 32]}, 5/Remarked: {sender: [U8; 32], hash: [U8; 32]}}>, 4/Balances: Enum<{0/Endowed: {account: [U8; 32], free_balance: U128}, 1/DustLost: {account: [U8; 32], amount: U128}, 2/Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, 3/BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 32], amount: U128}, 5/Unreserved: {who: [U8; 32], amount: U128}, 6/ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{0/Free, 1/Reserved}>}, 7/Deposit: {who: [U8; 32], amount: U128}, 8/Withdraw: {who: [U8; 32], amount: U128}, 9/Slashed: {who: [U8; 32], amount: U128}}>, 5/Kton: Enum<{0/Endowed: {account: [U8; 32], free_balance: U128}, 1/DustLost: {account: [U8; 32], amount: U128}, 2/Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, 3/BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 32], amount: U128}, 5/Unreserved: {who: [U8; 32], amount: U128}, 6/ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{0/Free, 1/Reserved}>}, 7/Deposit: {who: [U8; 32], amount: U128}, 8/Withdraw: {who: [U8; 32], amount: U128}, 9/Slashed: {who: [U8; 32], amount: U128}}>, 8/ElectionProviderMultiPhase: Enum<{0/SolutionStored: {election_compute: Enum<{0/OnChain, 1/Signed, 2/Unsigned, 3/Fallback, 4/Emergency}>, prev_ejected: Bool}, 1/ElectionFinalized: {election_compute: Enum<{0/None, 1/Some}>}, 2/Rewarded: {account: [U8; 32], value: U128}, 3/Slashed: {account: [U8; 32], value: U128}, 4/SignedPhaseStarted: {round: U32}, 5/UnsignedPhaseStarted: {round: U32}}>, 9/Staking: Enum<{0/EraPaid: (U32, U128, U128), 1/Rewarded: ([U8; 32], U128), 2/Slashed: ([U8; 32], U128, U128), 3/OldSlashingReportDiscarded: U32, 4/StakersElected: , 5/RingBonded: ([U8; 32], U128, U64, U64), 6/KtonBonded: ([U8; 32], U128), 7/RingUnbonded: ([U8; 32], U128), 8/KtonUnbonded: ([U8; 32], U128), 9/Kicked: ([U8; 32], [U8; 32]), 10/StakingElectionFailed: , 11/Chilled: [U8; 32], 12/PayoutStarted: (U32, [U8; 32]), 13/DepositsClaimed: [U8; 32], 14/DepositsClaimedWithPunish: ([U8; 32], U128)}>, 10/Offences: Enum<{0/Offence: {kind: [U8; 16], timeslot: Vec<U8>}}>, 12/Session: Enum<{0/NewSession: {session_index: U32}}>, 13/Grandpa: Enum<{0/NewAuthorities: {authority_set: Vec<([U8; 32], U64)>}, 1/Paused: , 2/Resumed: }>, 32/EcdsaAuthority: Enum<{0/CollectingAuthoritiesChangeSignatures: {message: [U8; 32]}, 1/CollectedEnoughAuthoritiesChangeSignatures: {operation: Enum<{0/AddMember, 1/RemoveMember, 2/SwapMembers}>, new_threshold: Enum<{0/None, 1/Some}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}, 2/CollectingNewMessageRootSignatures: {message: [U8; 32]}, 3/CollectedEnoughNewMessageRootSignatures: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}}>, 14/ImOnline: Enum<{0/HeartbeatReceived: {authority_id: [U8; 32]}, 1/AllGood: , 2/SomeOffline: {offline: Vec<([U8; 32], {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>})>}}>, 24/Treasury: Enum<{0/Proposed: {proposal_index: U32}, 1/Spending: {budget_remaining: U128}, 2/Awarded: {proposal_index: U32, award: U128, account: [U8; 32]}, 3/Rejected: {proposal_index: U32, slashed: U128}, 4/Burnt: {burnt_funds: U128}, 5/Rollover: {rollover_balance: U128}, 6/Deposit: {value: U128}}>, 16/Sudo: Enum<{0/Sudid: {sudo_result: Enum<{0/Ok, 1/Err}>}, 1/KeyChanged: {old_sudoer: Enum<{0/None, 1/Some}>}, 2/SudoAsDone: {sudo_result: Enum<{0/Ok, 1/Err}>}}>, 21/Scheduler: Enum<{0/Scheduled: {when: U32, index: U32}, 1/Canceled: {when: U32, index: U32}, 2/Dispatched: {task: (U32, U32), id: Enum<{0/None, 1/Some}>, result: Enum<{0/Ok, 1/Err}>}, 3/CallLookupFailed: {task: (U32, U32), id: Enum<{0/None, 1/Some}>, error: Enum<{0/Unknown, 1/BadFormat}>}}>, 33/Preimage: Enum<{0/Noted: {hash: [U8; 32]}, 1/Requested: {hash: [U8; 32]}, 2/Cleared: {hash: [U8; 32]}}>, 18/BridgePangolinDispatch: Enum<{0/MessageRejected: ([U8; 4], ([U8; 4], U64)), 1/MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), 2/MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), 3/MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), 4/MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), 5/MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{0/Invalid, 1/Unknown}>), 6/MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), 7/MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{0/Ok, 1/Err}>), 8/_Dummy: }>, 17/BridgePangolinMessages: Enum<{0/ParameterUpdated: Enum<{0/PangolinToPangoroConversionRate}>, 1/MessageAccepted: ([U8; 4], U64), 2/MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, 22/PangolinFeeMarket: Enum<{0/Enroll: ([U8; 32], U128, U128), 1/UpdateLockedCollateral: ([U8; 32], U128), 2/UpdateRelayFee: ([U8; 32], U128), 3/CancelEnrollment: [U8; 32], 4/UpdateCollateralSlashProtect: U128, 5/UpdateAssignedRelayersNumber: U32, 6/FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{0/None, 1/Some}>, delay_time: Enum<{0/None, 1/Some}>, account_id: [U8; 32], amount: U128}, 7/OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{0/None, 1/Some}>), 8/OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{0/None, 1/Some}>, to_message_relayer: Enum<{0/None, 1/Some}>, to_confirm_relayer: Enum<{0/None, 1/Some}>})}>, 23/TransactionPause: Enum<{0/TransactionPaused: (Vec<U8>, Vec<U8>), 1/TransactionUnpaused: (Vec<U8>, Vec<U8>)}>, 25/EVM: Enum<{0/Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, 1/Created: {address: [U8; 20]}, 2/CreatedFailed: {address: [U8; 20]}, 3/Executed: {address: [U8; 20]}, 4/ExecutedFailed: {address: [U8; 20]}}>, 26/Ethereum: Enum<{0/Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{0/Succeed, 1/Error, 2/Revert, 3/Fatal}>}, 1/DVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}, 2/KtonDVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}}>, 31/BaseFee: Enum<{0/NewBaseFeePerGas: [U64; 4], 1/BaseFeeOverflow: , 2/IsActive: Bool, 3/NewElasticity: U32}>}>, topics: Vec<[U8; 32]>}>
         */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
         * The number of events in the `Events<T>` list.
         *
         * @return U32
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
