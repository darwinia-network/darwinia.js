/**
 * This is the doc comment for pallet `Vesting`'s calls. 
 * 
 * `Vesting`'s storages: {@link: module:darwinia/vesting/storages}
 *
 * @module darwinia/vesting/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getVesting = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Unlock any vested funds of the sender account.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have funds still
         * locked under this pallet.
         * 
         * Emits either `VestingCompleted` or `VestingUpdated`.
         * 
         * # <weight>
         * - `O(1)`.
         * - DbWeight: 2 Reads, 2 Writes
         *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
         *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
         * # </weight>
         *
         */
        vest: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', false, {
	    });
        },

        /**
	 * Similar to {@link: darwinia/vesting/calls/vest}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        vestH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestCall: () => {
            return buildRuntimeCall(metadata, 'Vesting', 'vest', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildVestCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Vesting', 'vest', argsBytes)
        },

        /**
         * Unlock any vested funds of a `target` account.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `target`: The account whose vested funds should be unlocked. Must have funds still
         * locked under this pallet.
         * 
         * Emits either `VestingCompleted` or `VestingUpdated`.
         * 
         * # <weight>
         * - `O(1)`.
         * - DbWeight: 3 Reads, 3 Writes
         *     - Reads: Vesting Storage, Balances Locks, Target Account
         *     - Writes: Vesting Storage, Balances Locks, Target Account
         * # </weight>
         *
         * @param {unknown} _target Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        vestOther: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, {
                target: _target,
	    });
        },

        /**
	 * Similar to {@link: darwinia/vesting/calls/vestOther}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        vestOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestOtherCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestOther', {
                target: _target,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildVestOtherCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestOtherCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Vesting', 'vestOther', argsBytes)
        },

        /**
         * Create a vested transfer.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `target`: The account receiving the vested funds.
         * - `schedule`: The vesting schedule attached to the transfer.
         * 
         * Emits `VestingCreated`.
         * 
         * NOTE: This will unlock all schedules through the current block.
         * 
         * # <weight>
         * - `O(1)`.
         * - DbWeight: 3 Reads, 3 Writes
         *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
         *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
         * # </weight>
         *
         * @param {unknown} _target Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _schedule {locked: U128, per_block: U128, starting_block: U32}
         */
        vestedTransfer: async (signer: ethers.Signer, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, {
                target: _target,
                schedule: _schedule,
	    });
        },

        /**
	 * Similar to {@link: darwinia/vesting/calls/vestedTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        vestedTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestedTransferCall: (_target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestedTransfer', {
                target: _target,
                schedule: _schedule,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildVestedTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildVestedTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Vesting', 'vestedTransfer', argsBytes)
        },

        /**
         * Force a vested transfer.
         * 
         * The dispatch origin for this call must be _Root_.
         * 
         * - `source`: The account whose funds should be transferred.
         * - `target`: The account that should be transferred the vested funds.
         * - `schedule`: The vesting schedule attached to the transfer.
         * 
         * Emits `VestingCreated`.
         * 
         * NOTE: This will unlock all schedules through the current block.
         * 
         * # <weight>
         * - `O(1)`.
         * - DbWeight: 4 Reads, 4 Writes
         *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
         *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
         * # </weight>
         *
         * @param {unknown} _source Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _target Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _schedule {locked: U128, per_block: U128, starting_block: U32}
         */
        forceVestedTransfer: async (signer: ethers.Signer, _source: unknown, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, {
                source: _source,
                target: _target,
                schedule: _schedule,
	    });
        },

        /**
	 * Similar to {@link: darwinia/vesting/calls/forceVestedTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceVestedTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceVestedTransferCall: (_source: unknown, _target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'forceVestedTransfer', {
                source: _source,
                target: _target,
                schedule: _schedule,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceVestedTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceVestedTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Vesting', 'forceVestedTransfer', argsBytes)
        },

        /**
         * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
         * the highest possible start and end blocks. If both schedules have already started the
         * current block will be used as the schedule start; with the caveat that if one schedule
         * is finished by the current block, the other will be treated as the new merged schedule,
         * unmodified.
         * 
         * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
         * NOTE: This will unlock all schedules through the current block prior to merging.
         * NOTE: If both schedules have ended by the current block, no new schedule will be created
         * and both will be removed.
         * 
         * Merged schedule attributes:
         * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
         *   current_block)`.
         * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
         * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `schedule1_index`: index of the first schedule to merge.
         * - `schedule2_index`: index of the second schedule to merge.
         *
         * @param {unknown} _schedule1_index U32
         * @param {unknown} _schedule2_index U32
         */
        mergeSchedules: async (signer: ethers.Signer, _schedule1_index: unknown, _schedule2_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, {
                schedule1_index: _schedule1_index,
                schedule2_index: _schedule2_index,
	    });
        },

        /**
	 * Similar to {@link: darwinia/vesting/calls/mergeSchedules}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        mergeSchedulesH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMergeSchedulesCall: (_schedule1_index: unknown, _schedule2_index: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'mergeSchedules', {
                schedule1_index: _schedule1_index,
                schedule2_index: _schedule2_index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildMergeSchedulesCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMergeSchedulesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Vesting', 'mergeSchedules', argsBytes)
        },

    }
}
