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
        * @return Vec<{phase: Enum<{ApplyExtrinsic: U32, Finalization: , Initialization: }>, event: Enum<{System: Enum<{ExtrinsicSuccess: {dispatch_info: {weight: U64, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, ExtrinsicFailed: {dispatch_error: Enum<{Other, CannotLookup, BadOrigin, Module, ConsumerRemaining, NoProviders, TooManyConsumers, Token, Arithmetic}>, dispatch_info: {weight: U64, class: Enum<{Normal, Operational, Mandatory}>, pays_fee: Enum<{Yes, No}>}}, CodeUpdated: , NewAccount: {account: [U8; 32]}, KilledAccount: {account: [U8; 32]}, Remarked: {sender: [U8; 32], hash: [U8; 32]}}>, Balances: Enum<{Endowed: {account: [U8; 32], free_balance: U128}, DustLost: {account: [U8; 32], amount: U128}, Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, Reserved: {who: [U8; 32], amount: U128}, Unreserved: {who: [U8; 32], amount: U128}, ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{Free, Reserved}>}, Deposit: {who: [U8; 32], amount: U128}, Withdraw: {who: [U8; 32], amount: U128}, Slashed: {who: [U8; 32], amount: U128}}>, Kton: Enum<{Endowed: {account: [U8; 32], free_balance: U128}, DustLost: {account: [U8; 32], amount: U128}, Transfer: {from: [U8; 32], to: [U8; 32], amount: U128}, BalanceSet: {who: [U8; 32], free: U128, reserved: U128}, Reserved: {who: [U8; 32], amount: U128}, Unreserved: {who: [U8; 32], amount: U128}, ReserveRepatriated: {from: [U8; 32], to: [U8; 32], amount: U128, destination_status: Enum<{Free, Reserved}>}, Deposit: {who: [U8; 32], amount: U128}, Withdraw: {who: [U8; 32], amount: U128}, Slashed: {who: [U8; 32], amount: U128}}>, ElectionProviderMultiPhase: Enum<{SolutionStored: {election_compute: Enum<{OnChain, Signed, Unsigned, Fallback, Emergency}>, prev_ejected: Bool}, ElectionFinalized: {election_compute: Enum<{None, Some}>}, Rewarded: {account: [U8; 32], value: U128}, Slashed: {account: [U8; 32], value: U128}, SignedPhaseStarted: {round: U32}, UnsignedPhaseStarted: {round: U32}}>, Staking: Enum<{EraPaid: (U32, U128, U128), Rewarded: ([U8; 32], U128), Slashed: ([U8; 32], U128, U128), OldSlashingReportDiscarded: U32, StakersElected: , RingBonded: ([U8; 32], U128, U64, U64), KtonBonded: ([U8; 32], U128), RingUnbonded: ([U8; 32], U128), KtonUnbonded: ([U8; 32], U128), Kicked: ([U8; 32], [U8; 32]), StakingElectionFailed: , Chilled: [U8; 32], PayoutStarted: (U32, [U8; 32]), DepositsClaimed: [U8; 32], DepositsClaimedWithPunish: ([U8; 32], U128)}>, Offences: Enum<{Offence: {kind: [U8; 16], timeslot: Vec<U8>}}>, Session: Enum<{NewSession: {session_index: U32}}>, Grandpa: Enum<{NewAuthorities: {authority_set: Vec<([U8; 32], U64)>}, Paused: , Resumed: }>, EcdsaAuthority: Enum<{CollectingAuthoritiesChangeSignatures: {message: [U8; 32]}, CollectedEnoughAuthoritiesChangeSignatures: {operation: Enum<{AddMember, RemoveMember, SwapMembers}>, new_threshold: Enum<{None, Some}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}, CollectingNewMessageRootSignatures: {message: [U8; 32]}, CollectedEnoughNewMessageRootSignatures: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}}>, ImOnline: Enum<{HeartbeatReceived: {authority_id: [U8; 32]}, AllGood: , SomeOffline: {offline: Vec<([U8; 32], {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>})>}}>, Treasury: Enum<{Proposed: {proposal_index: U32}, Spending: {budget_remaining: U128}, Awarded: {proposal_index: U32, award: U128, account: [U8; 32]}, Rejected: {proposal_index: U32, slashed: U128}, Burnt: {burnt_funds: U128}, Rollover: {rollover_balance: U128}, Deposit: {value: U128}}>, Sudo: Enum<{Sudid: {sudo_result: Enum<{Ok, Err}>}, KeyChanged: {old_sudoer: Enum<{None, Some}>}, SudoAsDone: {sudo_result: Enum<{Ok, Err}>}}>, Scheduler: Enum<{Scheduled: {when: U32, index: U32}, Canceled: {when: U32, index: U32}, Dispatched: {task: (U32, U32), id: Enum<{None, Some}>, result: Enum<{Ok, Err}>}, CallLookupFailed: {task: (U32, U32), id: Enum<{None, Some}>, error: Enum<{Unknown, BadFormat}>}}>, Preimage: Enum<{Noted: {hash: [U8; 32]}, Requested: {hash: [U8; 32]}, Cleared: {hash: [U8; 32]}}>, BridgePangolinDispatch: Enum<{MessageRejected: ([U8; 4], ([U8; 4], U64)), MessageVersionSpecMismatch: ([U8; 4], ([U8; 4], U64), U32, U32), MessageWeightMismatch: ([U8; 4], ([U8; 4], U64), U64, U64), MessageSignatureMismatch: ([U8; 4], ([U8; 4], U64)), MessageCallDecodeFailed: ([U8; 4], ([U8; 4], U64)), MessageCallValidateFailed: ([U8; 4], ([U8; 4], U64), Enum<{Invalid, Unknown}>), MessageDispatchPaymentFailed: ([U8; 4], ([U8; 4], U64), [U8; 32], U64), MessageDispatched: ([U8; 4], ([U8; 4], U64), Enum<{Ok, Err}>), _Dummy: }>, BridgePangolinMessages: Enum<{ParameterUpdated: Enum<{PangolinToPangoroConversionRate}>, MessageAccepted: ([U8; 4], U64), MessagesDelivered: ([U8; 4], {begin: U64, end: U64, dispatch_results: BitVec<U8>})}>, PangolinFeeMarket: Enum<{Enroll: ([U8; 32], U128, U128), UpdateLockedCollateral: ([U8; 32], U128), UpdateRelayFee: ([U8; 32], U128), CancelEnrollment: [U8; 32], UpdateCollateralSlashProtect: U128, UpdateAssignedRelayersNumber: U32, FeeMarketSlash: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{None, Some}>, delay_time: Enum<{None, Some}>, account_id: [U8; 32], amount: U128}, OrderCreated: ([U8; 4], U64, U128, Vec<[U8; 32]>, Enum<{None, Some}>), OrderReward: ([U8; 4], U64, {to_assigned_relayers: Vec<([U8; 32], U128)>, to_treasury: Enum<{None, Some}>, to_message_relayer: Enum<{None, Some}>, to_confirm_relayer: Enum<{None, Some}>})}>, TransactionPause: Enum<{TransactionPaused: (Vec<U8>, Vec<U8>), TransactionUnpaused: (Vec<U8>, Vec<U8>)}>, EVM: Enum<{Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, Created: {address: [U8; 20]}, CreatedFailed: {address: [U8; 20]}, Executed: {address: [U8; 20]}, ExecutedFailed: {address: [U8; 20]}}>, Ethereum: Enum<{Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{Succeed, Error, Revert, Fatal}>}, DVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}, KtonDVMTransfer: {from: [U8; 32], to: [U8; 32], amount: [U64; 4]}}>, BaseFee: Enum<{NewBaseFeePerGas: [U64; 4], BaseFeeOverflow: , IsActive: Bool, NewElasticity: U32}>}>, topics: Vec<[U8; 32]>}>
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
