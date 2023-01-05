import {GetStorage} from "../../../storage";

export const getStaking = (getStorage: GetStorage) => {
    return {

        /**
        * Number of eras to keep in history.
        *
        * Information is kept for eras in `[current_era - history_depth; current_era]`.
        *
        * Must be more than the number of eras delayed by session otherwise. I.e. active era must
        * always be in history. I.e. `active_era &gt; current_era - history_depth` must be
        * guaranteed.
        *
        * @return U32
        */
        historyDepth: async (): Promise<string | null> => {
            return await getStorage('Staking', 'HistoryDepth');
        },

        /**
        * The ideal number of staking participants.
        *
        * @return U32
        */
        validatorCount: async (): Promise<string | null> => {
            return await getStorage('Staking', 'ValidatorCount');
        },

        /**
        * Minimum number of staking participants before emergency conditions are imposed.
        *
        * @return U32
        */
        minimumValidatorCount: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MinimumValidatorCount');
        },

        /**
        * Any validators that may never be slashed or forcibly kicked. It&#39;s a Vec since they&#39;re
        * easy to initialize and the performance hit is minimal (we expect no more than four
        * invulnerables) and restricted to testnets.
        *
        * @return Vec<[U8; 32]>
        */
        invulnerables: async (): Promise<string | null> => {
            return await getStorage('Staking', 'Invulnerables');
        },

        /**
        * Map from all locked &#34;stash&#34; accounts to the controller account.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return AccountId32: [U8; 32]
        */
        bonded: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Bonded', param0);
        },

        /**
        * The minimum active bond to become and maintain the role of a nominator.
        *
        * @return U128
        */
        minNominatorBond: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MinNominatorBond');
        },

        /**
        * The minimum active bond to become and maintain the role of a validator.
        *
        * @return U128
        */
        minValidatorBond: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MinValidatorBond');
        },

        /**
        * The minimum amount of commission that validators can set.
        *
        * If set to `0`, no limit exists.
        *
        * @return Perbill: U32
        */
        minCommission: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MinCommission');
        },

        /**
        * Map from all (unlocked) &#34;controller&#34; accounts to the info regarding the staking.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return StakingLedger: {stash: [U8; 32], active: Compact<U128>, active_deposit_ring: Compact<U128>, active_kton: Compact<U128>, deposit_items: Vec<{value: Compact<U128>, start_time: Compact<U64>, expire_time: Compact<U64>}>, ring_staking_lock: {staking_amount: U128, unbondings: Vec<{amount: U128, until: U32}>}, kton_staking_lock: {staking_amount: U128, unbondings: Vec<{amount: U128, until: U32}>}, claimed_rewards: Vec<U32>}
        */
        ledger: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Ledger', param0);
        },

        /**
        * Where the reward payment should be made. Keyed by stash.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return RewardDestination: Enum<{0/Staked: , 1/Stash: , 2/Controller: , 3/Account: [U8; 32], 4/None: }>
        */
        payee: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Payee', param0);
        },

        /**
        * The map from (wannabe) validator stash key to the preferences of that validator.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return ValidatorPrefs: {commission: Compact<U32>, blocked: Bool}
        */
        validators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Validators', param0);
        },

        /**
        *Counter for the related counted storage map
        *
        * @return U32
        */
        counterForValidators: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CounterForValidators');
        },

        /**
        * The maximum validator count before we stop allowing new validators to join.
        *
        * When this value is not set, no limits are enforced.
        *
        * @return U32
        */
        maxValidatorsCount: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MaxValidatorsCount');
        },

        /**
        * The map from nominator stash key to the set of stash keys of all validators to nominate.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return Nominations: {targets: Vec<[U8; 32]>, submitted_in: U32, suppressed: Bool}
        */
        nominators: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'Nominators', param0);
        },

        /**
        *Counter for the related counted storage map
        *
        * @return U32
        */
        counterForNominators: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CounterForNominators');
        },

        /**
        * The maximum nominator count before we stop allowing new validators to join.
        *
        * When this value is not set, no limits are enforced.
        *
        * @return U32
        */
        maxNominatorsCount: async (): Promise<string | null> => {
            return await getStorage('Staking', 'MaxNominatorsCount');
        },

        /**
        * The current era index.
        *
        * This is the latest planned era, depending on how the Session pallet queues the validator
        * set, it might be active or not.
        *
        * @return U32
        */
        currentEra: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CurrentEra');
        },

        /**
        * The active era information, it holds index and start.
        *
        * The active era is the era being currently rewarded. Validator set of this era must be
        * equal to [`SessionInterface::validators`].
        *
        * @return ActiveEraInfo: {index: U32, start: Enum<{0/None: , 1/Some: U64}>}
        */
        activeEra: async (): Promise<string | null> => {
            return await getStorage('Staking', 'ActiveEra');
        },

        /**
        * The session index at which the era start for the last `HISTORY_DEPTH` eras.
        *
        * Note: This tracks the starting session (i.e. session index when era start being active)
        * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
        *
        * @param param0: U32
        * @return U32
        */
        erasStartSessionIndex: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasStartSessionIndex', param0);
        },

        /**
        * Exposure of validator at era.
        *
        * This is keyed first by the era index to allow bulk deletion and then the stash account.
        *
        * Is it removed after `HISTORY_DEPTH` eras.
        * If stakers hasn&#39;t been set or has been removed then empty exposure is returned.
        *
        * @param param0: U32
        * @param param1: AccountId32: [U8; 32]
        * @return Exposure: {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>}
        */
        erasStakers: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasStakers', param0, param1);
        },

        /**
        * Clipped Exposure of validator at era.
        *
        * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
        * `T::MaxNominatorRewardedPerValidator` biggest stakers.
        * (Note: the field `total` and `own` of the exposure remains unchanged).
        * This is used to limit the i/o cost for the nominator payout.
        *
        * This is keyed fist by the era index to allow bulk deletion and then the stash account.
        *
        * Is it removed after `HISTORY_DEPTH` eras.
        * If stakers hasn&#39;t been set or has been removed then empty exposure is returned.
        *
        * @param param0: U32
        * @param param1: AccountId32: [U8; 32]
        * @return Exposure: {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>}
        */
        erasStakersClipped: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasStakersClipped', param0, param1);
        },

        /**
        * Similar to `ErasStakers`, this holds the preferences of validators.
        *
        * This is keyed first by the era index to allow bulk deletion and then the stash account.
        *
        * Is it removed after `HISTORY_DEPTH` eras.
        *
        * @param param0: U32
        * @param param1: AccountId32: [U8; 32]
        * @return ValidatorPrefs: {commission: Compact<U32>, blocked: Bool}
        */
        erasValidatorPrefs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasValidatorPrefs', param0, param1);
        },

        /**
        * The total validator era payout for the last `HISTORY_DEPTH` eras.
        *
        * Eras that haven&#39;t finished yet or has been removed doesn&#39;t have reward.
        *
        * @param param0: U32
        * @return U128
        */
        erasValidatorReward: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasValidatorReward', param0);
        },

        /**
        * Rewards for the last `HISTORY_DEPTH` eras.
        * If reward hasn&#39;t been set or has been removed then 0 reward is returned.
        *
        * @param param0: U32
        * @return EraRewardPoints: {total: U32, individual: Vec<([U8; 32], U32)>}
        */
        erasRewardPoints: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasRewardPoints', param0);
        },

        /**
        * The total amount staked for the last `HISTORY_DEPTH` eras.
        * If total hasn&#39;t been set or has been removed then 0 stake is returned.
        *
        * @param param0: U32
        * @return U32
        */
        erasTotalStake: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ErasTotalStake', param0);
        },

        /**
        * Mode of era forcing.
        *
        * @return Forcing: Enum<{0/NotForcing: , 1/ForceNew: , 2/ForceNone: , 3/ForceAlways: }>
        */
        forceEra: async (): Promise<string | null> => {
            return await getStorage('Staking', 'ForceEra');
        },

        /**
        * The percentage of the slash that is distributed to reporters.
        *
        * The rest of the slashed value is handled by the `Slash`.
        *
        * @return Perbill: U32
        */
        slashRewardFraction: async (): Promise<string | null> => {
            return await getStorage('Staking', 'SlashRewardFraction');
        },

        /**
        * The amount of currency given to reporters of a slash event which was
        * canceled by extraordinary circumstances (e.g. governance).
        *
        * @return U32
        */
        canceledSlashPayout: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CanceledSlashPayout');
        },

        /**
        * All unapplied slashes that are queued for later.
        *
        * @param param0: U32
        * @return Vec<{validator: [U8; 32], own: {r: U128, k: U128}, others: Vec<([U8; 32], {r: U128, k: U128})>, reporters: Vec<[U8; 32]>, payout: {r: U128, k: U128}}>
        */
        unappliedSlashes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'UnappliedSlashes', param0);
        },

        /**
        * A mapping from still-bonded eras to the first session index of that era.
        *
        * Must contains information for eras for the range:
        * `[active_era - bounding_duration; active_era]`
        *
        * @return Vec<(U32, U32)>
        */
        bondedEras: async (): Promise<string | null> => {
            return await getStorage('Staking', 'BondedEras');
        },

        /**
        * All slashing events on validators, mapped by era to the highest slash proportion
        * and slash value of the era.
        *
        * @param param0: U32
        * @param param1: AccountId32: [U8; 32]
        * @return (U32, {r: U128, k: U128})
        */
        validatorSlashInEra: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'ValidatorSlashInEra', param0, param1);
        },

        /**
        * All slashing events on nominators, mapped by era to the highest slash value of the era.
        *
        * @param param0: U32
        * @param param1: AccountId32: [U8; 32]
        * @return RK: {r: U128, k: U128}
        */
        nominatorSlashInEra: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'NominatorSlashInEra', param0, param1);
        },

        /**
        * Slashing spans for stash accounts.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return SlashingSpans: {span_index: U32, last_start: U32, last_nonzero_slash: U32, prior: Vec<U32>}
        */
        slashingSpans: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'SlashingSpans', param0);
        },

        /**
        * Records information about the maximum slash of a stash within a slashing span,
        * as well as how much reward has been paid out.
        *
        * @param param0: ([U8; 32], U32)
        * @return SpanRecord: {slashed: {r: U128, k: U128}, paid_out: {r: U128, k: U128}}
        */
        spanSlash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Staking', 'SpanSlash', param0);
        },

        /**
        * The earliest era for which we have a pending, unapplied slash.
        *
        * @return U32
        */
        earliestUnappliedSlash: async (): Promise<string | null> => {
            return await getStorage('Staking', 'EarliestUnappliedSlash');
        },

        /**
        * The last planned session scheduled by the session pallet.
        *
        * This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
        *
        * @return U32
        */
        currentPlannedSession: async (): Promise<string | null> => {
            return await getStorage('Staking', 'CurrentPlannedSession');
        },

        /**
        * Indices of validators that have offended in the active era and whether they are currently
        * disabled.
        *
        * This value should be a superset of disabled validators since not all offences lead to the
        * validator being disabled (if there was no slash). This is needed to track the percentage of
        * validators that have offended in the current era, ensuring a new era is forced if
        * `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
        * whether a given validator has previously offended using binary search. It gets cleared when
        * the era ends.
        *
        * @return Vec<(U32, Bool)>
        */
        offendingValidators: async (): Promise<string | null> => {
            return await getStorage('Staking', 'OffendingValidators');
        },

        /**
        * True if network has been upgraded to this version.
        * Storage version of the pallet.
        *
        * This is set to v7.0.0 for new networks.
        *
        * @return Releases: Enum<{0/V1_0_0Ancient: , 1/V2_0_0: , 2/V3_0_0: , 3/V4_0_0: , 4/V5_0_0: , 5/V6_0_0: , 6/V7_0_0: }>
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Staking', 'StorageVersion');
        },

        /**
        * The threshold for when users can start calling `chill_other` for other validators /
        * nominators. The threshold is compared to the actual number of validators / nominators
        * (`CountFor*`) in the system compared to the configured max (`Max*Count`).
        *
        * @return Percent: U8
        */
        chillThreshold: async (): Promise<string | null> => {
            return await getStorage('Staking', 'ChillThreshold');
        },

        /**
        * The chain&#39;s running time form genesis in milliseconds,
        * use for calculate darwinia era payout
        *
        * @return U64
        */
        livingTime: async (): Promise<string | null> => {
            return await getStorage('Staking', 'LivingTime');
        },

        /**
        * The percentage of the total payout that is distributed to validators and nominators
        *
        * The reset might go to Treasury or something else.
        *
        * @return Perbill: U32
        */
        payoutFraction: async (): Promise<string | null> => {
            return await getStorage('Staking', 'PayoutFraction');
        },

        /**
        * Total *RING* in pool.
        *
        * @return U128
        */
        ringPool: async (): Promise<string | null> => {
            return await getStorage('Staking', 'RingPool');
        },

        /**
        * Total *KTON* in pool.
        *
        * @return U128
        */
        ktonPool: async (): Promise<string | null> => {
            return await getStorage('Staking', 'KtonPool');
        },
    };
};
