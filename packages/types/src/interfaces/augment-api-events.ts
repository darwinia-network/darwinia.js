// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U256, Vec, bool, u16, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Status } from '@darwinia/types/interfaces/balances';
import type { AddressT, DepositId, EthereumBlockNumber, EthereumHeader, EthereumReceipt, EthereumTransactionIndex, KtonBalance, MMRRoot, MappedRing, RelayAuthorityMessage, RelayAuthoritySignature, RelayAuthoritySigner, RingBalance, Term, TsInMs } from '@darwinia/types/interfaces/darwiniaInject';
import type { RelayAffirmationId } from '@darwinia/types/interfaces/relayerGame';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { EvmLog, ExitReason } from '@polkadot/types/interfaces/evm';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, Balance, BlockNumber, H160, H256, Hash, PhantomData } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ElectionCompute, EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. [who, free, reserved]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). [who, deposit]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. [account, balance]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. [account, free_balance]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). [who, value]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * [from, to, balance, destination_status]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. [from, to, value]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). [who, value]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    claims: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Someone claimed some *RING*s. [account, address, amount]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, AddressT, RingBalance]>;
    };
    council: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    crabIssuing: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Dummy Event. [who, swapped *CRING*, burned Mapped *RING*]
       **/
      DummyEvent: AugmentedEvent<ApiType, [AccountId, RingBalance, MappedRing]>;
    };
    democracy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. [ref_index]
       **/
      Cancelled: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. [who, target]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. [ref_index, is_ok]
       **/
      Executed: AugmentedEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. [ref_index]
       **/
      NotPassed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. [ref_index]
       **/
      Passed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid. [proposal_hash, ref_index]
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing. [proposal_hash, ref_index]
       **/
      PreimageMissing: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. [proposal_hash, who, deposit]
       **/
      PreimageNoted: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * [proposal_hash, provider, deposit, reaper]
       **/
      PreimageReaped: AugmentedEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * [proposal_hash, provider, deposit]
       **/
      PreimageUsed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. [proposal_index, deposit]
       **/
      Proposed: AugmentedEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. [ref_index, threshold]
       **/
      Started: AugmentedEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. [proposal_index, deposit, depositors]
       **/
      Tabled: AugmentedEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An [account] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An [account] has been unlocked successfully.
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. [who, proposal_hash, until]
       **/
      Vetoed: AugmentedEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    electionsPhragmen: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    ethereum: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
       **/
      Executed: AugmentedEvent<ApiType, [H160, H160, H256, ExitReason]>;
    };
    ethereumBacking: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Someone lock some *KTON*. [account, ethereum account, asset address, amount]
       **/
      LockKton: AugmentedEvent<ApiType, [AccountId, EthereumAddress, EthereumAddress, KtonBalance]>;
      /**
       * Someone lock some *RING*. [account, ethereum account, asset address, amount]
       **/
      LockRing: AugmentedEvent<ApiType, [AccountId, EthereumAddress, EthereumAddress, RingBalance]>;
      /**
       * Someone redeem a deposit. [account, deposit id, amount, transaction index]
       **/
      RedeemDeposit: AugmentedEvent<ApiType, [AccountId, DepositId, RingBalance, EthereumTransactionIndex]>;
      /**
       * Someone redeem some *KTON*. [account, amount, transaction index]
       **/
      RedeemKton: AugmentedEvent<ApiType, [AccountId, Balance, EthereumTransactionIndex]>;
      /**
       * Someone redeem some *RING*. [account, amount, transaction index]
       **/
      RedeemRing: AugmentedEvent<ApiType, [AccountId, Balance, EthereumTransactionIndex]>;
    };
    ethereumRelay: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A new relay header parcel affirmed. [relayer, relay affirmation id]
       **/
      Affirmed: AugmentedEvent<ApiType, [AccountId, RelayAffirmationId]>;
      /**
       * A different affirmation submitted, dispute found. [relayer, relay affirmation id]
       **/
      DisputedAndAffirmed: AugmentedEvent<ApiType, [AccountId, RelayAffirmationId]>;
      /**
       * An extended affirmation submitted, dispute go on. [relayer, relay affirmation id]
       **/
      Extended: AugmentedEvent<ApiType, [AccountId, RelayAffirmationId]>;
      /**
       * A game has been settled. [game id]
       **/
      GameOver: AugmentedEvent<ApiType, [EthereumBlockNumber]>;
      /**
       * A guard voted. [ethereum block number, aye]
       **/
      GuardVoted: AugmentedEvent<ApiType, [EthereumBlockNumber, bool]>;
      /**
       * A new round started. [game id, game sample points]
       **/
      NewRound: AugmentedEvent<ApiType, [EthereumBlockNumber, Vec<EthereumBlockNumber>]>;
      /**
       * A relay header parcel got pended. [ethereum block number]
       **/
      Pended: AugmentedEvent<ApiType, [EthereumBlockNumber]>;
      /**
       * Pending relay header parcel confirmed. [ethereum block number, reason]
       **/
      PendingRelayHeaderParcelConfirmed: AugmentedEvent<ApiType, [EthereumBlockNumber, Bytes]>;
      /**
       * Pending relay header parcel rejected. [ethereum block number]
       **/
      PendingRelayHeaderParcelRejected: AugmentedEvent<ApiType, [EthereumBlockNumber]>;
      /**
       * The specific confirmed parcel removed. [ethereum block number]
       **/
      RemoveConfirmedParcel: AugmentedEvent<ApiType, [EthereumBlockNumber]>;
      /**
       * EthereumReceipt verification. [account, ethereum receipt, ethereum header]
       **/
      VerifyReceipt: AugmentedEvent<ApiType, [AccountId, EthereumReceipt, EthereumHeader]>;
    };
    ethereumRelayAuthorities: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The Next Authorities Signed. [term, next authorities, signatures]
       **/
      AuthoritiesChangeSigned: AugmentedEvent<ApiType, [Term, Vec<RelayAuthoritySigner>, Vec<ITuple<[AccountId, RelayAuthoritySignature]>>]>;
      /**
       * MMR Root Signed. [block number of the mmr root, mmr root, signatures]
       **/
      MMRRootSigned: AugmentedEvent<ApiType, [BlockNumber, MMRRoot, Vec<ITuple<[AccountId, RelayAuthoritySignature]>>]>;
      /**
       * A New Authority Set Change Scheduled Request to be Signed. [message to sign]
       **/
      ScheduleAuthoritiesChange: AugmentedEvent<ApiType, [RelayAuthorityMessage]>;
      /**
       * A New MMR Root Scheduled Request to be Signed. [block number of the mmr root to sign]
       **/
      ScheduleMMRRoot: AugmentedEvent<ApiType, [BlockNumber]>;
      /**
       * Slash on Misbehavior. [who, slashed]
       **/
      SlashOnMisbehavior: AugmentedEvent<ApiType, [AccountId, RingBalance]>;
    };
    evm: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A deposit has been made at a given address. \[sender, address, value\]
       **/
      BalanceDeposit: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A withdrawal has been made from a given address. \[sender, address, value\]
       **/
      BalanceWithdraw: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A contract has been created at given \[address\].
       **/
      Created: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [EvmLog]>;
    };
    grandpa: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    imOnline: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    kton: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. [who, free, reserved]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). [who, deposit]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. [account, balance]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. [account, free_balance]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). [who, value]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * [from, to, balance, destination_status]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, Status]>;
      /**
       * Transfer succeeded. [from, to, value]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). [who, value]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    offences: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proxy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    scheduler: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    staking: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account has bonded this amount. [amount, start, end]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      BondKton: AugmentedEvent<ApiType, [KtonBalance]>;
      /**
       * An account has bonded this amount. [amount, start, end]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      BondRing: AugmentedEvent<ApiType, [RingBalance, TsInMs, TsInMs]>;
      /**
       * Someone claimed his deposits. [stash]
       **/
      DepositsClaimed: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Someone claimed his deposits with some *KTON*s punishment. [stash, forfeit]
       **/
      DepositsClaimedWithPunish: AugmentedEvent<ApiType, [AccountId, KtonBalance]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * [era_index, validator_payout, remainder]
       **/
      EraPayout: AugmentedEvent<ApiType, [EraIndex, RingBalance, RingBalance]>;
      /**
       * A nominator has been kicked from a validator. \[nominator, stash\]
       **/
      Kicked: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. [session_index]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [SessionIndex]>;
      /**
       * The staker has been rewarded by this amount. [stash, amount]
       **/
      Reward: AugmentedEvent<ApiType, [AccountId, RingBalance]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * [validator, amount, amount]
       **/
      Slash: AugmentedEvent<ApiType, [AccountId, RingBalance, KtonBalance]>;
      /**
       * A new solution for the upcoming election has been stored. [compute]
       **/
      SolutionStored: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given [compute].
       **/
      StakingElection: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. [amount, now]
       **/
      UnbondKton: AugmentedEvent<ApiType, [KtonBalance, BlockNumber]>;
      /**
       * An account has unbonded this amount. [amount, now]
       **/
      UnbondRing: AugmentedEvent<ApiType, [RingBalance, BlockNumber]>;
    };
    sudo: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    treasury: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Some funds have been allocated. [proposal_index, award, beneficiary]
       **/
      Awarded: AugmentedEvent<ApiType, [ProposalIndex, RingBalance, KtonBalance, AccountId]>;
      /**
       * A bounty is awarded to a beneficiary. [index, beneficiary]
       **/
      BountyAwarded: AugmentedEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. [index]
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. [index]
       **/
      BountyCanceled: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. [index, payout, beneficiary]
       **/
      BountyClaimed: AugmentedEvent<ApiType, [BountyIndex, RingBalance, AccountId]>;
      /**
       * A bounty expiry is extended. [index]
       **/
      BountyExtended: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. [index]
       **/
      BountyProposed: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. [index, bond]
       **/
      BountyRejected: AugmentedEvent<ApiType, [BountyIndex, RingBalance]>;
      /**
       * Some of our funds have been burnt. [burn]
       **/
      Burnt: AugmentedEvent<ApiType, [RingBalance, KtonBalance]>;
      /**
       * Some *KTON* have been deposited. [deposit]
       **/
      DepositKton: AugmentedEvent<ApiType, [KtonBalance]>;
      /**
       * Some *RING* have been deposited. [deposit]
       **/
      DepositRing: AugmentedEvent<ApiType, [RingBalance]>;
      /**
       * A new tip suggestion has been opened. [tip_hash]
       **/
      NewTip: AugmentedEvent<ApiType, [Hash]>;
      /**
       * New proposal. [proposal_index]
       **/
      Proposed: AugmentedEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. [proposal_index, slashed]
       **/
      Rejected: AugmentedEvent<ApiType, [ProposalIndex, RingBalance, KtonBalance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend. [budget_remaining_ring]
       **/
      Rollover: AugmentedEvent<ApiType, [RingBalance, KtonBalance]>;
      /**
       * We have ended a spend period and will now allocate funds. [budget_remaining_ring]
       **/
      Spending: AugmentedEvent<ApiType, [RingBalance, KtonBalance]>;
      /**
       * A tip suggestion has been closed. [tip_hash, who, payout]
       **/
      TipClosed: AugmentedEvent<ApiType, [Hash, AccountId, RingBalance]>;
      /**
       * A tip suggestion has reached threshold and is closing. [tip_hash]
       **/
      TipClosing: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. [tip_hash]
       **/
      TipRetracted: AugmentedEvent<ApiType, [Hash]>;
    };
    vesting: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An [account] has become fully vested. No further vesting can happen.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * [account, unvested]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
