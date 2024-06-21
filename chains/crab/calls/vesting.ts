/**
 * This is the doc comment for pallet `Vesting`'s calls. 
 * 
 * `Vesting`'s storages: {@link: module:crab/vesting/storages}
 *
 * @module crab/vesting/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getVesting = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::vest`].
         *
         * @instance
         */
        vest: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Vesting', 'vest', false, {
           });
        },

        /**
         * Similar to {@link: crab/vesting/calls/vest}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        vestH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::vest_other`].
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        vestOther: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: crab/vesting/calls/vestOther}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        vestOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::vested_transfer`].
         *
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _schedule {locked: U128, per_block: U128, starting_block: U32}
         * @instance
         */
        vestedTransfer: async (signer: ethers.Signer, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, {
                target: _target,
                schedule: _schedule,
           });
        },

        /**
         * Similar to {@link: crab/vesting/calls/vestedTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        vestedTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_vested_transfer`].
         *
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _schedule {locked: U128, per_block: U128, starting_block: U32}
         * @instance
         */
        forceVestedTransfer: async (signer: ethers.Signer, _source: unknown, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, {
                source: _source,
                target: _target,
                schedule: _schedule,
           });
        },

        /**
         * Similar to {@link: crab/vesting/calls/forceVestedTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceVestedTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::merge_schedules`].
         *
         * @param {unknown} _schedule1_index U32
         * @param {unknown} _schedule2_index U32
         * @instance
         */
        mergeSchedules: async (signer: ethers.Signer, _schedule1_index: unknown, _schedule2_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, {
                schedule1_index: _schedule1_index,
                schedule2_index: _schedule2_index,
           });
        },

        /**
         * Similar to {@link: crab/vesting/calls/mergeSchedules}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        mergeSchedulesH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

