import {GetStorage} from "../storage";

export const staking = {
    historyDepth: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'HistoryDepth');
    },
    validatorCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'ValidatorCount');
    },
    minimumValidatorCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MinimumValidatorCount');
    },
    invulnerables: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'Invulnerables');
    },
    bonded: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'Bonded', param0);
    },
    minNominatorBond: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MinNominatorBond');
    },
    minValidatorBond: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MinValidatorBond');
    },
    minCommission: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MinCommission');
    },
    ledger: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'Ledger', param0);
    },
    payee: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'Payee', param0);
    },
    validators: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'Validators', param0);
    },
    counterForValidators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'CounterForValidators');
    },
    maxValidatorsCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MaxValidatorsCount');
    },
    nominators: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'Nominators', param0);
    },
    counterForNominators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'CounterForNominators');
    },
    maxNominatorsCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'MaxNominatorsCount');
    },
    currentEra: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'CurrentEra');
    },
    activeEra: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'ActiveEra');
    },
    erasStartSessionIndex: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasStartSessionIndex', param0);
    },
    erasStakers: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasStakers', param0, param1);
    },
    erasStakersClipped: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasStakersClipped', param0, param1);
    },
    erasValidatorPrefs: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasValidatorPrefs', param0, param1);
    },
    erasValidatorReward: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasValidatorReward', param0);
    },
    erasRewardPoints: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasRewardPoints', param0);
    },
    erasTotalStake: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ErasTotalStake', param0);
    },
    forceEra: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'ForceEra');
    },
    slashRewardFraction: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'SlashRewardFraction');
    },
    canceledSlashPayout: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'CanceledSlashPayout');
    },
    unappliedSlashes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'UnappliedSlashes', param0);
    },
    bondedEras: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'BondedEras');
    },
    validatorSlashInEra: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'ValidatorSlashInEra', param0, param1);
    },
    nominatorSlashInEra: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'NominatorSlashInEra', param0, param1);
    },
    slashingSpans: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'SlashingSpans', param0);
    },
    spanSlash: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Staking', 'SpanSlash', param0);
    },
    earliestUnappliedSlash: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'EarliestUnappliedSlash');
    },
    currentPlannedSession: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'CurrentPlannedSession');
    },
    offendingValidators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'OffendingValidators');
    },
    storageVersion: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'StorageVersion');
    },
    chillThreshold: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'ChillThreshold');
    },
    livingTime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'LivingTime');
    },
    payoutFraction: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'PayoutFraction');
    },
    ringPool: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'RingPool');
    },
    ktonPool: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Staking', 'KtonPool');
    },
};