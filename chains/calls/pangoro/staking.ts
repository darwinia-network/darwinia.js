import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _controller: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
         * @param _payee: Enum<{0/Staked: , 1/Stash: , 2/Controller: , 3/Account: [U8; 32], 4/None: }>
         * @param _promise_month: U8
	 */
        bond: async (signer: ethers.Signer, _controller: unknown, _value: unknown, _payee: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bond', false, _controller, _value, _payee, _promise_month);
        },

        bondCall: (_controller: unknown, _value: unknown, _payee: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'bond', {
                controller: _controller,
                value: _value,
                payee: _payee,
                promise_month: _promise_month,
            });
        },

        /**
         * @param _max_additional: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
         * @param _promise_month: U8
	 */
        bondExtra: async (signer: ethers.Signer, _max_additional: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bondExtra', false, _max_additional, _promise_month);
        },

        bondExtraCall: (_max_additional: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'bondExtra', {
                max_additional: _max_additional,
                promise_month: _promise_month,
            });
        },

        /**
         * @param _value: U128
         * @param _promise_month: U8
	 */
        depositExtra: async (signer: ethers.Signer, _value: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'depositExtra', false, _value, _promise_month);
        },

        depositExtraCall: (_value: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'depositExtra', {
                value: _value,
                promise_month: _promise_month,
            });
        },

        /**
         * @param _value: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
	 */
        unbond: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unbond', false, _value);
        },

        unbondCall: (_value: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unbond', {
                value: _value,
            });
        },

        /**
         * @param _num_slashing_spans: U32
	 */
        withdrawUnbonded: async (signer: ethers.Signer, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'withdrawUnbonded', false, _num_slashing_spans);
        },

        withdrawUnbondedCall: (_num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'withdrawUnbonded', {
                num_slashing_spans: _num_slashing_spans,
            });
        },

        /**
	 */
        claimMatureDeposits: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claimMatureDeposits', false);
        },

        claimMatureDepositsCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claimMatureDeposits', {
            });
        },

        /**
         * @param _expire_time: U64
	 */
        tryClaimDepositsWithPunish: async (signer: ethers.Signer, _expire_time: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'tryClaimDepositsWithPunish', false, _expire_time);
        },

        tryClaimDepositsWithPunishCall: (_expire_time: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'tryClaimDepositsWithPunish', {
                expire_time: _expire_time,
            });
        },

        /**
         * @param _prefs: {commission: Compact<U32>, blocked: Bool}
	 */
        validate: async (signer: ethers.Signer, _prefs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'validate', false, _prefs);
        },

        validateCall: (_prefs: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'validate', {
                prefs: _prefs,
            });
        },

        /**
         * @param _targets: Vec<Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>>
	 */
        nominate: async (signer: ethers.Signer, _targets: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _targets);
        },

        nominateCall: (_targets: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                targets: _targets,
            });
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        chillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

        /**
         * @param _payee: Enum<{0/Staked: , 1/Stash: , 2/Controller: , 3/Account: [U8; 32], 4/None: }>
	 */
        setPayee: async (signer: ethers.Signer, _payee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setPayee', false, _payee);
        },

        setPayeeCall: (_payee: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setPayee', {
                payee: _payee,
            });
        },

        /**
         * @param _controller: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
	 */
        setController: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setController', false, _controller);
        },

        setControllerCall: (_controller: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setController', {
                controller: _controller,
            });
        },

        /**
         * @param _new: Compact<U32>
	 */
        setValidatorCount: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setValidatorCount', false, _new);
        },

        setValidatorCountCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setValidatorCount', {
                new: _new,
            });
        },

        /**
         * @param _additional: Compact<U32>
	 */
        increaseValidatorCount: async (signer: ethers.Signer, _additional: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'increaseValidatorCount', false, _additional);
        },

        increaseValidatorCountCall: (_additional: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'increaseValidatorCount', {
                additional: _additional,
            });
        },

        /**
         * @param _factor: U8
	 */
        scaleValidatorCount: async (signer: ethers.Signer, _factor: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'scaleValidatorCount', false, _factor);
        },

        scaleValidatorCountCall: (_factor: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'scaleValidatorCount', {
                factor: _factor,
            });
        },

        /**
	 */
        forceNoEras: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNoEras', false);
        },

        forceNoErasCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNoEras', {
            });
        },

        /**
	 */
        forceNewEra: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEra', false);
        },

        forceNewEraCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNewEra', {
            });
        },

        /**
         * @param _invulnerables: Vec<[U8; 32]>
	 */
        setInvulnerables: async (signer: ethers.Signer, _invulnerables: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setInvulnerables', false, _invulnerables);
        },

        setInvulnerablesCall: (_invulnerables: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setInvulnerables', {
                invulnerables: _invulnerables,
            });
        },

        /**
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
	 */
        forceUnstake: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceUnstake', false, _stash, _num_slashing_spans);
        },

        forceUnstakeCall: (_stash: unknown, _num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'forceUnstake', {
                stash: _stash,
                num_slashing_spans: _num_slashing_spans,
            });
        },

        /**
	 */
        forceNewEraAlways: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEraAlways', false);
        },

        forceNewEraAlwaysCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNewEraAlways', {
            });
        },

        /**
         * @param _era: U32
         * @param _slash_indices: Vec<U32>
	 */
        cancelDeferredSlash: async (signer: ethers.Signer, _era: unknown, _slash_indices: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'cancelDeferredSlash', false, _era, _slash_indices);
        },

        cancelDeferredSlashCall: (_era: unknown, _slash_indices: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'cancelDeferredSlash', {
                era: _era,
                slash_indices: _slash_indices,
            });
        },

        /**
         * @param _validator_stash: [U8; 32]
         * @param _era: U32
	 */
        payoutStakers: async (signer: ethers.Signer, _validator_stash: unknown, _era: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'payoutStakers', false, _validator_stash, _era);
        },

        payoutStakersCall: (_validator_stash: unknown, _era: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'payoutStakers', {
                validator_stash: _validator_stash,
                era: _era,
            });
        },

        /**
         * @param _plan_to_rebond_ring: Compact<U128>
         * @param _plan_to_rebond_kton: Compact<U128>
	 */
        rebond: async (signer: ethers.Signer, _plan_to_rebond_ring: unknown, _plan_to_rebond_kton: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'rebond', false, _plan_to_rebond_ring, _plan_to_rebond_kton);
        },

        rebondCall: (_plan_to_rebond_ring: unknown, _plan_to_rebond_kton: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'rebond', {
                plan_to_rebond_ring: _plan_to_rebond_ring,
                plan_to_rebond_kton: _plan_to_rebond_kton,
            });
        },

        /**
         * @param _new_history_depth: Compact<U32>
         * @param _era_items_deleted: Compact<U32>
	 */
        setHistoryDepth: async (signer: ethers.Signer, _new_history_depth: unknown, _era_items_deleted: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setHistoryDepth', false, _new_history_depth, _era_items_deleted);
        },

        setHistoryDepthCall: (_new_history_depth: unknown, _era_items_deleted: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setHistoryDepth', {
                new_history_depth: _new_history_depth,
                era_items_deleted: _era_items_deleted,
            });
        },

        /**
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
	 */
        reapStash: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'reapStash', false, _stash, _num_slashing_spans);
        },

        reapStashCall: (_stash: unknown, _num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'reapStash', {
                stash: _stash,
                num_slashing_spans: _num_slashing_spans,
            });
        },

        /**
         * @param _who: Vec<Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>>
	 */
        kick: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'kick', false, _who);
        },

        kickCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'kick', {
                who: _who,
            });
        },

        /**
         * @param _min_nominator_bond: U128
         * @param _min_validator_bond: U128
         * @param _max_nominator_count: Enum<{0/None: , 1/Some: U32}>
         * @param _max_validator_count: Enum<{0/None: , 1/Some: U32}>
         * @param _chill_threshold: Enum<{0/None: , 1/Some: U8}>
         * @param _min_commission: U32
	 */
        setStakingConfigs: async (signer: ethers.Signer, _min_nominator_bond: unknown, _min_validator_bond: unknown, _max_nominator_count: unknown, _max_validator_count: unknown, _chill_threshold: unknown, _min_commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setStakingConfigs', false, _min_nominator_bond, _min_validator_bond, _max_nominator_count, _max_validator_count, _chill_threshold, _min_commission);
        },

        setStakingConfigsCall: (_min_nominator_bond: unknown, _min_validator_bond: unknown, _max_nominator_count: unknown, _max_validator_count: unknown, _chill_threshold: unknown, _min_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setStakingConfigs', {
                min_nominator_bond: _min_nominator_bond,
                min_validator_bond: _min_validator_bond,
                max_nominator_count: _max_nominator_count,
                max_validator_count: _max_validator_count,
                chill_threshold: _chill_threshold,
                min_commission: _min_commission,
            });
        },

        /**
         * @param _controller: [U8; 32]
	 */
        chillOther: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chillOther', false, _controller);
        },

        chillOtherCall: (_controller: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'chillOther', {
                controller: _controller,
            });
        },

    }
}
