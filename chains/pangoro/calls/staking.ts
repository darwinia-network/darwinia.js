import { buildRuntimeCall, Dispatch, decodeCall } from "../../../src/call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Take the origin account as a stash and lock up `value` of its balance. `controller` will
         * be the account that controls it.
         * 
         * `value` must be more than the `minimum_balance` specified by `T::Currency`.
         * 
         * The dispatch origin for this call must be _Signed_ by the stash account.
         * 
         * Emits `Bonded`.
         * # <weight>
         * - Independent of the arguments. Moderate complexity.
         * - O(1).
         * - Three extra DB entries.
         * 
         * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
         * unless the `origin` falls below _existential deposit_ and gets removed as dust.
         * ------------------
         * # </weight>
         *
         * @param _controller: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
         * @param _payee: Enum<{0/Staked: , 1/Stash: , 2/Controller: , 3/Account: [U8; 32], 4/None: }>
         * @param _promise_month: U8
         */
        bond: async (signer: ethers.Signer, _controller: unknown, _value: unknown, _payee: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bond', false, _controller, _value, _payee, _promise_month);
        },

        bondH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bond', true, data);
        },

        buildBondCall: (_controller: unknown, _value: unknown, _payee: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'bond', {
                controller: _controller,
                value: _value,
                payee: _payee,
                promise_month: _promise_month,
            });
        },

        buildBondCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'bond', argsBytes)
        },

        /**
         * Add some extra amount that have appeared in the stash `free_balance` into the balance up
         * for staking.
         * 
         * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
         * 
         * Use this if there are additional funds in your stash account that you wish to bond.
         * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
         * any limitation on the amount that can be added.
         * 
         * Emits `Bonded`.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - O(1).
         * # </weight>
         *
         * @param _max_additional: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
         * @param _promise_month: U8
         */
        bondExtra: async (signer: ethers.Signer, _max_additional: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bondExtra', false, _max_additional, _promise_month);
        },

        bondExtraH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bondExtra', true, data);
        },

        buildBondExtraCall: (_max_additional: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'bondExtra', {
                max_additional: _max_additional,
                promise_month: _promise_month,
            });
        },

        buildBondExtraCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'bondExtra', argsBytes)
        },

        /**
         * Deposit some extra amount ring, and return kton to the controller.
         * 
         * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
         * 
         * Is a no-op if value to be deposited is zero.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - O(1).
         * - One DB entry.
         * ------------
         * DB Weight:
         * - Read: Era Election Status, Bonded, Ledger, [Origin Account]
         * - Write: [Origin Account], Ledger
         * # </weight>
         *
         * @param _value: U128
         * @param _promise_month: U8
         */
        depositExtra: async (signer: ethers.Signer, _value: unknown, _promise_month: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'depositExtra', false, _value, _promise_month);
        },

        depositExtraH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'depositExtra', true, data);
        },

        buildDepositExtraCall: (_value: unknown, _promise_month: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'depositExtra', {
                value: _value,
                promise_month: _promise_month,
            });
        },

        buildDepositExtraCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'depositExtra', argsBytes)
        },

        /**
         * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
         * period ends. If this leaves an amount actively bonded less than
         * T::Currency::minimum_balance(), then it is increased to the full amount.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         * 
         * Once the unlock period is done, the funds will be withdrew automatically and ready for
         * transfer.
         * 
         * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
         * can co-exists at the same time. In that case,  [`StakingLock::shrink`] need
         * to be called first to remove some of the chunks (if possible).
         * 
         * If a user encounters the `InsufficientBond` error when calling this extrinsic,
         * they should call `chill` first in order to free up their bonded funds.
         * 
         * After all pledged Ring and Kton are unbonded, the bonded accounts, namely stash and
         * controller, will also be unbonded.  Once user want to bond again, the `bond` method
         * should be called. If there are still pledged Ring or Kton and user want to bond more
         * values, the `bond_extra` method should be called.
         *
         * @param _value: Enum<{0/RingBalance: U128, 1/KtonBalance: U128}>
         */
        unbond: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unbond', false, _value);
        },

        unbondH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unbond', true, data);
        },

        buildUnbondCall: (_value: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unbond', {
                value: _value,
            });
        },

        buildUnbondCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'unbond', argsBytes)
        },

        /**
         * Remove any unlocked chunks from the `unlocking` queue from our management.
         * 
         * This essentially frees up that balance to be used by the stash account to do
         * whatever it wants.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller.
         * 
         * Emits `Withdrawn`.
         * 
         * See also [`Call::unbond`].
         * 
         * # <weight>
         * Complexity O(S) where S is the number of slashing spans to remove
         * NOTE: Weight annotation is the kill scenario, we refund otherwise.
         * # </weight>
         *
         * @param _num_slashing_spans: U32
         */
        withdrawUnbonded: async (signer: ethers.Signer, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'withdrawUnbonded', false, _num_slashing_spans);
        },

        withdrawUnbondedH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'withdrawUnbonded', true, data);
        },

        buildWithdrawUnbondedCall: (_num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'withdrawUnbonded', {
                num_slashing_spans: _num_slashing_spans,
            });
        },

        buildWithdrawUnbondedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'withdrawUnbonded', argsBytes)
        },

        /**
         * Stash accounts can get their ring back after the depositing time exceeded,
         * and the ring getting back is still in staking status.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - One storage read.
         * - One storage write.
         * - Writes are limited to the `origin` account key.
         * ----------
         * DB Weight:
         * - Read: Ledger, [Origin Account]
         * - Write: [Origin Account], Ledger
         * # </weight>
         *
         */
        claimMatureDeposits: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claimMatureDeposits', false);
        },

        claimMatureDepositsH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claimMatureDeposits', true);
        },

        buildClaimMatureDepositsCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claimMatureDeposits', {
            });
        },

        buildClaimMatureDepositsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'claimMatureDeposits', argsBytes)
        },

        /**
         * Claim deposits while the depositing time has not been exceeded, the ring
         * will not be slashed, but the account is required to pay KTON as punish.
         * 
         * Refer to https://talk.darwinia.network/topics/55
         * 
         * Assume the `expire_time` is a unique ID for the deposit
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - One storage read.
         * - One storage write.
         * - Writes are limited to the `origin` account key.
         * ----------
         * DB Weight:
         * - Read: Ledger, Locks, [Origin Account]
         * - Write: [Origin Account], Locks, Ledger
         * # </weight>
         *
         * @param _expire_time: U64
         */
        tryClaimDepositsWithPunish: async (signer: ethers.Signer, _expire_time: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'tryClaimDepositsWithPunish', false, _expire_time);
        },

        tryClaimDepositsWithPunishH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'tryClaimDepositsWithPunish', true, data);
        },

        buildTryClaimDepositsWithPunishCall: (_expire_time: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'tryClaimDepositsWithPunish', {
                expire_time: _expire_time,
            });
        },

        buildTryClaimDepositsWithPunishCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'tryClaimDepositsWithPunish', argsBytes)
        },

        /**
         * Declare the desire to validate for the origin controller.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         *
         * @param _prefs: {commission: Compact<U32>, blocked: Bool}
         */
        validate: async (signer: ethers.Signer, _prefs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'validate', false, _prefs);
        },

        validateH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'validate', true, data);
        },

        buildValidateCall: (_prefs: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'validate', {
                prefs: _prefs,
            });
        },

        buildValidateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'validate', argsBytes)
        },

        /**
         * Declare the desire to nominate `targets` for the origin controller.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         * 
         * # <weight>
         * - The transaction's complexity is proportional to the size of `targets` (N)
         * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
         * - Both the reads and writes follow a similar pattern.
         *
         * @param _targets: Vec<Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>>
         */
        nominate: async (signer: ethers.Signer, _targets: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _targets);
        },

        nominateH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', true, data);
        },

        buildNominateCall: (_targets: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                targets: _targets,
            });
        },

        buildNominateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'nominate', argsBytes)
        },

        /**
         * Declare no desire to either validate or nominate.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - Contains one read.
         * - Writes are limited to the `origin` account key.
         * # </weight>
         *
         */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        chillH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', true);
        },

        buildChillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

        buildChillCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'chill', argsBytes)
        },

        /**
         * (Re-)set the payment target for a controller.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - Contains a limited number of reads.
         * - Writes are limited to the `origin` account key.
         * ---------
         * - Weight: O(1)
         * - DB Weight:
         *     - Read: Ledger
         *     - Write: Payee
         * # </weight>
         *
         * @param _payee: Enum<{0/Staked: , 1/Stash: , 2/Controller: , 3/Account: [U8; 32], 4/None: }>
         */
        setPayee: async (signer: ethers.Signer, _payee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setPayee', false, _payee);
        },

        setPayeeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setPayee', true, data);
        },

        buildSetPayeeCall: (_payee: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setPayee', {
                payee: _payee,
            });
        },

        buildSetPayeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setPayee', argsBytes)
        },

        /**
         * (Re-)set the controller of a stash.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
         * 
         * # <weight>
         * - Independent of the arguments. Insignificant complexity.
         * - Contains a limited number of reads.
         * - Writes are limited to the `origin` account key.
         * ----------
         * Weight: O(1)
         * DB Weight:
         * - Read: Bonded, Ledger New Controller, Ledger Old Controller
         * - Write: Bonded, Ledger New Controller, Ledger Old Controller
         * # </weight>
         *
         * @param _controller: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        setController: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setController', false, _controller);
        },

        setControllerH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setController', true, data);
        },

        buildSetControllerCall: (_controller: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setController', {
                controller: _controller,
            });
        },

        buildSetControllerCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setController', argsBytes)
        },

        /**
         * Sets the ideal number of validators.
         * 
         * The dispatch origin must be Root.
         * 
         * # <weight>
         * Weight: O(1)
         * Write: Validator Count
         * # </weight>
         *
         * @param _new: Compact<U32>
         */
        setValidatorCount: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setValidatorCount', false, _new);
        },

        setValidatorCountH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setValidatorCount', true, data);
        },

        buildSetValidatorCountCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setValidatorCount', {
                new: _new,
            });
        },

        buildSetValidatorCountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setValidatorCount', argsBytes)
        },

        /**
         * Increments the ideal number of validators.
         * 
         * The dispatch origin must be Root.
         * 
         * # <weight>
         * Same as [`Self::set_validator_count`].
         * # </weight>
         *
         * @param _additional: Compact<U32>
         */
        increaseValidatorCount: async (signer: ethers.Signer, _additional: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'increaseValidatorCount', false, _additional);
        },

        increaseValidatorCountH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'increaseValidatorCount', true, data);
        },

        buildIncreaseValidatorCountCall: (_additional: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'increaseValidatorCount', {
                additional: _additional,
            });
        },

        buildIncreaseValidatorCountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'increaseValidatorCount', argsBytes)
        },

        /**
         * Scale up the ideal number of validators by a factor.
         * 
         * The dispatch origin must be Root.
         * 
         * # <weight>
         * Same as [`Self::set_validator_count`].
         * # </weight>
         *
         * @param _factor: U8
         */
        scaleValidatorCount: async (signer: ethers.Signer, _factor: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'scaleValidatorCount', false, _factor);
        },

        scaleValidatorCountH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'scaleValidatorCount', true, data);
        },

        buildScaleValidatorCountCall: (_factor: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'scaleValidatorCount', {
                factor: _factor,
            });
        },

        buildScaleValidatorCountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'scaleValidatorCount', argsBytes)
        },

        /**
         * Force there to be no new eras indefinitely.
         * 
         * The dispatch origin must be Root.
         * 
         * # Warning
         * 
         * The election process starts multiple blocks before the end of the era.
         * Thus the election process may be ongoing when this is called. In this case the
         * election will continue until the next era is triggered.
         * 
         * # <weight>
         * - No arguments.
         * - Weight: O(1)
         * - Write: ForceEra
         * # </weight>
         *
         */
        forceNoEras: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNoEras', false);
        },

        forceNoErasH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNoEras', true);
        },

        buildForceNoErasCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNoEras', {
            });
        },

        buildForceNoErasCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'forceNoEras', argsBytes)
        },

        /**
         * Force there to be a new era at the end of the next session. After this, it will be
         * reset to normal (non-forced) behaviour.
         * 
         * The dispatch origin must be Root.
         * 
         * # Warning
         * 
         * The election process starts multiple blocks before the end of the era.
         * If this is called just before a new era is triggered, the election process may not
         * have enough blocks to get a result.
         * 
         * # <weight>
         * - No arguments.
         * - Weight: O(1)
         * - Write ForceEra
         * # </weight>
         *
         */
        forceNewEra: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEra', false);
        },

        forceNewEraH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEra', true);
        },

        buildForceNewEraCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNewEra', {
            });
        },

        buildForceNewEraCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'forceNewEra', argsBytes)
        },

        /**
         * Set the validators who cannot be slashed (if any).
         * 
         * The dispatch origin must be Root.
         * 
         * # <weight>
         * - O(V)
         * - Write: Invulnerables
         * # </weight>
         *
         * @param _invulnerables: Vec<[U8; 32]>
         */
        setInvulnerables: async (signer: ethers.Signer, _invulnerables: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setInvulnerables', false, _invulnerables);
        },

        setInvulnerablesH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setInvulnerables', true, data);
        },

        buildSetInvulnerablesCall: (_invulnerables: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setInvulnerables', {
                invulnerables: _invulnerables,
            });
        },

        buildSetInvulnerablesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setInvulnerables', argsBytes)
        },

        /**
         * Force a current staker to become completely unstaked, immediately.
         * 
         * The dispatch origin must be Root.
         * 
         * # <weight>
         * O(S) where S is the number of slashing spans to be removed
         * Reads: Bonded, Slashing Spans, Account, Locks
         * Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
         * Account, Locks Writes Each: SpanSlash * S
         * # </weight>
         *
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
         */
        forceUnstake: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceUnstake', false, _stash, _num_slashing_spans);
        },

        forceUnstakeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceUnstake', true, data);
        },

        buildForceUnstakeCall: (_stash: unknown, _num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'forceUnstake', {
                stash: _stash,
                num_slashing_spans: _num_slashing_spans,
            });
        },

        buildForceUnstakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'forceUnstake', argsBytes)
        },

        /**
         * Force there to be a new era at the end of sessions indefinitely.
         * 
         * The dispatch origin must be Root.
         * 
         * # Warning
         * 
         * The election process starts multiple blocks before the end of the era.
         * If this is called just before a new era is triggered, the election process may not
         * have enough blocks to get a result.
         * 
         * # <weight>
         * - Weight: O(1)
         * - Write: ForceEra
         * # </weight>
         *
         */
        forceNewEraAlways: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEraAlways', false);
        },

        forceNewEraAlwaysH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEraAlways', true);
        },

        buildForceNewEraAlwaysCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'forceNewEraAlways', {
            });
        },

        buildForceNewEraAlwaysCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'forceNewEraAlways', argsBytes)
        },

        /**
         * Cancel enactment of a deferred slash.
         * 
         * Can be called by the `T::SlashCancelOrigin`.
         * 
         * Parameters: era and indices of the slashes for that era to kill.
         * 
         * # <weight>
         * Complexity: O(U + S)
         * with U unapplied slashes weighted with U=1000
         * and S is the number of slash indices to be canceled.
         * - Read: Unapplied Slashes
         * - Write: Unapplied Slashes
         * # </weight>
         *
         * @param _era: U32
         * @param _slash_indices: Vec<U32>
         */
        cancelDeferredSlash: async (signer: ethers.Signer, _era: unknown, _slash_indices: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'cancelDeferredSlash', false, _era, _slash_indices);
        },

        cancelDeferredSlashH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'cancelDeferredSlash', true, data);
        },

        buildCancelDeferredSlashCall: (_era: unknown, _slash_indices: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'cancelDeferredSlash', {
                era: _era,
                slash_indices: _slash_indices,
            });
        },

        buildCancelDeferredSlashCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'cancelDeferredSlash', argsBytes)
        },

        /**
         * Pay out all the stakers behind a single validator for a single era.
         * 
         * - `validator_stash` is the stash account of the validator. Their nominators, up to
         *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
         * - `era` may be any era between `[current_era - history_depth; current_era]`.
         * 
         * The origin of this call must be _Signed_. Any account can call this function, even if
         * it is not one of the stakers.
         * 
         * # <weight>
         * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
         * - Contains a limited number of reads and writes.
         * -----------
         * N is the Number of payouts for the validator (including the validator)
         * Weight:
         * - Reward Destination Staked: O(N)
         * - Reward Destination Controller (Creating): O(N)
         * 
         *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
         *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
         * # </weight>
         *
         * @param _validator_stash: [U8; 32]
         * @param _era: U32
         */
        payoutStakers: async (signer: ethers.Signer, _validator_stash: unknown, _era: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'payoutStakers', false, _validator_stash, _era);
        },

        payoutStakersH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'payoutStakers', true, data);
        },

        buildPayoutStakersCall: (_validator_stash: unknown, _era: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'payoutStakers', {
                validator_stash: _validator_stash,
                era: _era,
            });
        },

        buildPayoutStakersCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'payoutStakers', argsBytes)
        },

        /**
         * Rebond a portion of the stash scheduled to be unlocked.
         * 
         * The dispatch origin must be signed by the controller.
         * 
         * # <weight>
         * - Time complexity: O(L), where L is unlocking chunks
         * - Bounded by `MAX_UNLOCKING_CHUNKS`.
         * - Storage changes: Can't increase storage, only decrease it.
         * # </weight>
         *
         * @param _plan_to_rebond_ring: Compact<U128>
         * @param _plan_to_rebond_kton: Compact<U128>
         */
        rebond: async (signer: ethers.Signer, _plan_to_rebond_ring: unknown, _plan_to_rebond_kton: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'rebond', false, _plan_to_rebond_ring, _plan_to_rebond_kton);
        },

        rebondH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'rebond', true, data);
        },

        buildRebondCall: (_plan_to_rebond_ring: unknown, _plan_to_rebond_kton: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'rebond', {
                plan_to_rebond_ring: _plan_to_rebond_ring,
                plan_to_rebond_kton: _plan_to_rebond_kton,
            });
        },

        buildRebondCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'rebond', argsBytes)
        },

        /**
         * Set `HistoryDepth` value. This function will delete any history information
         * when `HistoryDepth` is reduced.
         * 
         * Parameters:
         * - `new_history_depth`: The new history depth you would like to set.
         * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
         *   should report all the storage items that will be deleted by clearing old era history.
         *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
         *   accurate number.
         * 
         * Origin must be root.
         * 
         * # <weight>
         * - E: Number of history depths removed, i.e. 10 -> 7 = 3
         * - Weight: O(E)
         * - DB Weight:
         *     - Reads: Current Era, History Depth
         *     - Writes: History Depth
         *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
         *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
         *       ErasStartSessionIndex
         * # </weight>
         *
         * @param _new_history_depth: Compact<U32>
         * @param _era_items_deleted: Compact<U32>
         */
        setHistoryDepth: async (signer: ethers.Signer, _new_history_depth: unknown, _era_items_deleted: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setHistoryDepth', false, _new_history_depth, _era_items_deleted);
        },

        setHistoryDepthH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setHistoryDepth', true, data);
        },

        buildSetHistoryDepthCall: (_new_history_depth: unknown, _era_items_deleted: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setHistoryDepth', {
                new_history_depth: _new_history_depth,
                era_items_deleted: _era_items_deleted,
            });
        },

        buildSetHistoryDepthCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setHistoryDepth', argsBytes)
        },

        /**
         * Remove all data structures concerning a staker/stash once it is at a state where it can
         * be considered `dust` in the staking system. The requirements are:
         * 
         * 1. the `total_balance` of the stash is below existential deposit.
         * 2. or, the `ledger.total` of the stash is below existential deposit.
         * 
         * The former can happen in cases like a slash; the latter when a fully unbonded account
         * is still receiving staking rewards in `RewardDestination::Staked`.
         * 
         * It can be called by anyone, as long as `stash` meets the above requirements.
         * 
         * Refunds the transaction fees upon successful execution.
         *
         * @param _stash: [U8; 32]
         * @param _num_slashing_spans: U32
         */
        reapStash: async (signer: ethers.Signer, _stash: unknown, _num_slashing_spans: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'reapStash', false, _stash, _num_slashing_spans);
        },

        reapStashH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'reapStash', true, data);
        },

        buildReapStashCall: (_stash: unknown, _num_slashing_spans: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'reapStash', {
                stash: _stash,
                num_slashing_spans: _num_slashing_spans,
            });
        },

        buildReapStashCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'reapStash', argsBytes)
        },

        /**
         * Remove the given nominations from the calling validator.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
         * 
         * - `who`: A list of nominator stash accounts who are nominating this validator which
         *   should no longer be nominating this validator.
         * 
         * Note: Making this call only makes sense if you first set the validator preferences to
         * block any further nominations.
         *
         * @param _who: Vec<Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>>
         */
        kick: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'kick', false, _who);
        },

        kickH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'kick', true, data);
        },

        buildKickCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'kick', {
                who: _who,
            });
        },

        buildKickCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'kick', argsBytes)
        },

        /**
         * Update the various staking configurations.
         * 
         * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
         * * `min_validator_bond`: The minimum active bond needed to be a validator.
         * * `max_nominator_count`: The max number of users who can be a nominator at once. When
         *   set to `None`, no limit is enforced.
         * * `max_validator_count`: The max number of users who can be a validator at once. When
         *   set to `None`, no limit is enforced.
         * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
         *   should be filled in order for the `chill_other` transaction to work.
         * * `min_commission`: The minimum amount of commission that each validators must maintain.
         *   This is checked only upon calling `validate`. Existing validators are not affected.
         * 
         * Origin must be Root to call this function.
         * 
         * NOTE: Existing nominators and validators will not be affected by this update.
         * to kick people under the new limits, `chill_other` should be called.
         *
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

        setStakingConfigsH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setStakingConfigs', true, data);
        },

        buildSetStakingConfigsCall: (_min_nominator_bond: unknown, _min_validator_bond: unknown, _max_nominator_count: unknown, _max_validator_count: unknown, _chill_threshold: unknown, _min_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'setStakingConfigs', {
                min_nominator_bond: _min_nominator_bond,
                min_validator_bond: _min_validator_bond,
                max_nominator_count: _max_nominator_count,
                max_validator_count: _max_validator_count,
                chill_threshold: _chill_threshold,
                min_commission: _min_commission,
            });
        },

        buildSetStakingConfigsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'setStakingConfigs', argsBytes)
        },

        /**
         * Declare a `controller` to stop participating as either a validator or nominator.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * The dispatch origin for this call must be _Signed_, but can be called by anyone.
         * 
         * If the caller is the same as the controller being targeted, then no further checks are
         * enforced, and this function behaves just like `chill`.
         * 
         * If the caller is different than the controller being targeted, the following conditions
         * must be met:
         * * A `ChillThreshold` must be set and checked which defines how close to the max
         *   nominators or validators we must reach before users can start chilling one-another.
         * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
         *   how close we are to the threshold.
         * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
         *   if this is a person that should be chilled because they have not met the threshold
         *   bond required.
         * 
         * This can be helpful if bond requirements are updated, and we need to remove old users
         * who do not satisfy these requirements.
         *
         * @param _controller: [U8; 32]
         */
        chillOther: async (signer: ethers.Signer, _controller: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chillOther', false, _controller);
        },

        chillOtherH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chillOther', true, data);
        },

        buildChillOtherCall: (_controller: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'chillOther', {
                controller: _controller,
            });
        },

        buildChillOtherCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'chillOther', argsBytes)
        },

    }
}
