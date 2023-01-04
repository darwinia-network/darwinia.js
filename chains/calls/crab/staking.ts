import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getStaking = (dispatch: Dispatch) => {
    return {
        /**
         * @param _controller: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _value: Enum<{RingBalance: U128, KtonBalance: U128}>
         * @param _payee: Enum<{Staked: , Stash: , Controller: , Account: [U8; 32], None: }>
         * @param _promise_month: U8
	 */
        bond: async (signer: ethers.Signer, _controller: unknown, _value: unknown, _payee: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bond', false, _controller, _value, _payee, _promise_month);
        },

        /**
         * @param _max_additional: Enum<{RingBalance: U128, KtonBalance: U128}>
         * @param _promise_month: U8
	 */
        bondExtra: async (signer: ethers.Signer, _max_additional: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bondExtra', false, _max_additional, _promise_month);
        },

        /**
         * @param _value: U128
         * @param _promise_month: U8
	 */
        depositExtra: async (signer: ethers.Signer, _value: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'depositExtra', false, _value, _promise_month);
        },

        /**
         * @param _value: Enum<{RingBalance: U128, KtonBalance: U128}>
	 */
        unbond: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unbond', false, _value);
        },

        /**
         * @param _num_slashing_spans: U32
	 */
        withdrawUnbonded: async (signer: ethers.Signer, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'withdrawUnbonded', false, _num_slashing_spans);
        },

        /**
	 */
        claimMatureDeposits: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claimMatureDeposits', false);
        },

        /**
         * @param _expire_time: U64
	 */
        tryClaimDepositsWithPunish: async (signer: ethers.Signer, _expire_time: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'tryClaimDepositsWithPunish', false, _expire_time);
        },

        /**
         * @param _prefs: {commission: Compact<U32>, blocked: Bool}
	 */
        validate: async (signer: ethers.Signer, _prefs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'validate', false, _prefs);
        },

        /**
         * @param _targets: Vec<Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>>
	 */
        nominate: async (signer: ethers.Signer, _targets: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _targets);
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        /**
         * @param _payee: Enum<{Staked: , Stash: , Controller: , Account: [U8; 32], None: }>
	 */
        setPayee: async (signer: ethers.Signer, _payee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setPayee', false, _payee);
        },

        /**
         * @param _controller: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
	 */
        setController: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setController', false, _controller);
        },

        /**
         * @param _new: Compact<U32>
	 */
        setValidatorCount: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setValidatorCount', false, _new);
        },

        /**
         * @param _additional: Compact<U32>
	 */
        increaseValidatorCount: async (signer: ethers.Signer, _additional: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'increaseValidatorCount', false, _additional);
        },

        /**
         * @param _factor: U8
	 */
        scaleValidatorCount: async (signer: ethers.Signer, _factor: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'scaleValidatorCount', false, _factor);
        },

        /**
	 */
        forceNoEras: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNoEras', false);
        },

        /**
	 */
        forceNewEra: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEra', false);
        },

        /**
         * @param _invulnerables: Vec<[U8; 32]>
	 */
        setInvulnerables: async (signer: ethers.Signer, _invulnerables: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setInvulnerables', false, _invulnerables);
        },

        /**
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
	 */
        forceUnstake: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceUnstake', false, _stash, _num_slashing_spans);
        },

        /**
	 */
        forceNewEraAlways: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEraAlways', false);
        },

        /**
         * @param _era: U32
         * @param _slash_indices: Vec<U32>
	 */
        cancelDeferredSlash: async (signer: ethers.Signer, _era: unknown, _slash_indices: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'cancelDeferredSlash', false, _era, _slash_indices);
        },

        /**
         * @param _validator_stash: [U8; 32]
         * @param _era: U32
	 */
        payoutStakers: async (signer: ethers.Signer, _validator_stash: unknown, _era: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'payoutStakers', false, _validator_stash, _era);
        },

        /**
         * @param _plan_to_rebond_ring: Compact<U128>
         * @param _plan_to_rebond_kton: Compact<U128>
	 */
        rebond: async (signer: ethers.Signer, _plan_to_rebond_ring: unknown, _plan_to_rebond_kton: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'rebond', false, _plan_to_rebond_ring, _plan_to_rebond_kton);
        },

        /**
         * @param _new_history_depth: Compact<U32>
         * @param _era_items_deleted: Compact<U32>
	 */
        setHistoryDepth: async (signer: ethers.Signer, _new_history_depth: unknown, _era_items_deleted: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setHistoryDepth', false, _new_history_depth, _era_items_deleted);
        },

        /**
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
	 */
        reapStash: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'reapStash', false, _stash, _num_slashing_spans);
        },

        /**
         * @param _who: Vec<Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>>
	 */
        kick: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'kick', false, _who);
        },

        /**
         * @param _min_nominator_bond: U128
         * @param _min_validator_bond: U128
         * @param _max_nominator_count: Enum<{None: , Some: U32}>
         * @param _max_validator_count: Enum<{None: , Some: U32}>
         * @param _chill_threshold: Enum<{None: , Some: U8}>
         * @param _min_commission: U32
	 */
        setStakingConfigs: async (signer: ethers.Signer, _min_nominator_bond: unknown, _min_validator_bond: unknown, _max_nominator_count: unknown, _max_validator_count: unknown, _chill_threshold: unknown, _min_commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setStakingConfigs', false, _min_nominator_bond, _min_validator_bond, _max_nominator_count, _max_validator_count, _chill_threshold, _min_commission);
        },

        /**
         * @param _controller: [U8; 32]
	 */
        chillOther: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chillOther', false, _controller);
        },


    }
}
