import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

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
            return await dispatch(signer, 'Vesting', 'vest', false);
        },

        vestD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', true);
        },

        vestCall: () => {
            return buildRuntimeCall(metadata, 'Vesting', 'vest', {
            });
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
         * @param _target: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        vestOther: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, _target);
        },

        vestOtherD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', true, data);
        },

        vestOtherCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestOther', {
                target: _target,
            });
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
         * @param _target: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
         */
        vestedTransfer: async (signer: ethers.Signer, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, _target, _schedule);
        },

        vestedTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', true, data);
        },

        vestedTransferCall: (_target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestedTransfer', {
                target: _target,
                schedule: _schedule,
            });
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
         * @param _source: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _target: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
         */
        forceVestedTransfer: async (signer: ethers.Signer, _source: unknown, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, _source, _target, _schedule);
        },

        forceVestedTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', true, data);
        },

        forceVestedTransferCall: (_source: unknown, _target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'forceVestedTransfer', {
                source: _source,
                target: _target,
                schedule: _schedule,
            });
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
         * @param _schedule1_index: U32
         * @param _schedule2_index: U32
         */
        mergeSchedules: async (signer: ethers.Signer, _schedule1_index: unknown, _schedule2_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, _schedule1_index, _schedule2_index);
        },

        mergeSchedulesD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', true, data);
        },

        mergeSchedulesCall: (_schedule1_index: unknown, _schedule2_index: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'mergeSchedules', {
                schedule1_index: _schedule1_index,
                schedule2_index: _schedule2_index,
            });
        },

    }
}
