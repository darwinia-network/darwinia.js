/**
 * This is the doc comment for pallet `PangolinParachainFeeMarket`'s calls. 
 * 
 * `PangolinParachainFeeMarket`'s storages: {@link: module:pangolin/pangolinParachainFeeMarket/storages}
 *
 * @module pangolin/pangolinParachainFeeMarket/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPangolinParachainFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional,
         * the default value is MinimumRelayFee in runtime. (Update market needed)
         * Note: One account can enroll only once.
         *
         * @param {unknown} _lock_collateral U128
         * @param {unknown} _relay_fee Enum<{0/None: , 1/Some: U128}>
         */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'enrollAndLockCollateral', false, {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/enrollAndLockCollateral}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        enrollAndLockCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'enrollAndLockCollateral', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildEnrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'enrollAndLockCollateral', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'enrollAndLockCollateral', argsBytes)
        },

        /**
         * Increase relayer's locked collateral
         *
         * @param {unknown} _new_collateral U128
         */
        increaseLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'increaseLockedCollateral', false, {
                new_collateral: _new_collateral,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/increaseLockedCollateral}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        increaseLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'increaseLockedCollateral', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildIncreaseLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'increaseLockedCollateral', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'increaseLockedCollateral', argsBytes)
        },

        /**
         * Decrease relayer's locked collateral
         *
         * @param {unknown} _new_collateral U128
         */
        decreaseLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'decreaseLockedCollateral', false, {
                new_collateral: _new_collateral,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/decreaseLockedCollateral}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        decreaseLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'decreaseLockedCollateral', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildDecreaseLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'decreaseLockedCollateral', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'decreaseLockedCollateral', argsBytes)
        },

        /**
         * Update relay fee for enrolled relayer. (Update market needed)
         *
         * @param {unknown} _new_fee U128
         */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'updateRelayFee', false, {
                new_fee: _new_fee,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/updateRelayFee}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateRelayFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'updateRelayFee', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'updateRelayFee', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'updateRelayFee', argsBytes)
        },

        /**
         * Cancel enrolled relayer(Update market needed)
         *
         */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'cancelEnrollment', false, {
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/cancelEnrollment}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        cancelEnrollmentH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'cancelEnrollment', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'cancelEnrollment', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCancelEnrollmentCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelEnrollmentCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'cancelEnrollment', argsBytes)
        },

        /**
         *
         * @param {unknown} _slash_protect U128
         */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setSlashProtect', false, {
                slash_protect: _slash_protect,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/setSlashProtect}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setSlashProtectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setSlashProtect', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'setSlashProtect', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'setSlashProtect', argsBytes)
        },

        /**
         *
         * @param {unknown} _number U32
         */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setAssignedRelayersNumber', false, {
                number: _number,
	    });
        },

        /**
	 * Similar to {@link: pangolin/pangolinParachainFeeMarket/calls/setAssignedRelayersNumber}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setAssignedRelayersNumberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainFeeMarket', 'setAssignedRelayersNumber', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainFeeMarket', 'setAssignedRelayersNumber', {
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
            return decodeCall(metadata, 'PangolinParachainFeeMarket', 'setAssignedRelayersNumber', argsBytes)
        },

    }
}
