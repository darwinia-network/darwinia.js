/**
 * This is the doc comment for pallet `CrabFeeMarket`'s calls. 
 * 
 * `CrabFeeMarket`'s storages: {@link: module:darwinia/crabFeeMarket/storages}
 *
 * @module darwinia/crabFeeMarket/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getCrabFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional,
         * the default value is MinimumRelayFee in runtime. (Update market needed)
         * Note: One account can enroll only once.
         *
         * @param {unknown} _lock_collateral U128
         * @param {unknown} _relay_fee Enum<{0/None: , 1/Some: U128}>
         * @instance
         */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'enrollAndLockCollateral', false, {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/enrollAndLockCollateral}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        enrollAndLockCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'enrollAndLockCollateral', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildEnrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'enrollAndLockCollateral', {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildEnrollAndLockCollateralCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildEnrollAndLockCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'enrollAndLockCollateral', argsBytes)
        },

        /**
         * Increase relayer's locked collateral
         *
         * @param {unknown} _new_collateral U128
         * @instance
         */
        increaseLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'increaseLockedCollateral', false, {
                new_collateral: _new_collateral,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/increaseLockedCollateral}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        increaseLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'increaseLockedCollateral', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildIncreaseLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'increaseLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildIncreaseLockedCollateralCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildIncreaseLockedCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'increaseLockedCollateral', argsBytes)
        },

        /**
         * Decrease relayer's locked collateral
         *
         * @param {unknown} _new_collateral U128
         * @instance
         */
        decreaseLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'decreaseLockedCollateral', false, {
                new_collateral: _new_collateral,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/decreaseLockedCollateral}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        decreaseLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'decreaseLockedCollateral', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDecreaseLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'decreaseLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDecreaseLockedCollateralCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDecreaseLockedCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'decreaseLockedCollateral', argsBytes)
        },

        /**
         * Update relay fee for enrolled relayer. (Update market needed)
         *
         * @param {unknown} _new_fee U128
         * @instance
         */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'updateRelayFee', false, {
                new_fee: _new_fee,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/updateRelayFee}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updateRelayFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'updateRelayFee', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUpdateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'updateRelayFee', {
                new_fee: _new_fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUpdateRelayFeeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUpdateRelayFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'updateRelayFee', argsBytes)
        },

        /**
         * Cancel enrolled relayer(Update market needed)
         *
         * @instance
         */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'cancelEnrollment', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/cancelEnrollment}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelEnrollmentH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'cancelEnrollment', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'cancelEnrollment', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelEnrollmentCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelEnrollmentCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'cancelEnrollment', argsBytes)
        },

        /**
         *
         * @param {unknown} _slash_protect U128
         * @instance
         */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'setSlashProtect', false, {
                slash_protect: _slash_protect,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/setSlashProtect}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setSlashProtectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'setSlashProtect', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'setSlashProtect', {
                slash_protect: _slash_protect,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetSlashProtectCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetSlashProtectCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'setSlashProtect', argsBytes)
        },

        /**
         *
         * @param {unknown} _number U32
         * @instance
         */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'setAssignedRelayersNumber', false, {
                number: _number,
           });
        },

        /**
         * Similar to {@link: darwinia/crabFeeMarket/calls/setAssignedRelayersNumber}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setAssignedRelayersNumberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'CrabFeeMarket', 'setAssignedRelayersNumber', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'CrabFeeMarket', 'setAssignedRelayersNumber', {
                number: _number,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetAssignedRelayersNumberCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetAssignedRelayersNumberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'CrabFeeMarket', 'setAssignedRelayersNumber', argsBytes)
        },

    }
}

