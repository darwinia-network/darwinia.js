import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional,
         * the default value is MinimumRelayFee in runtime. (Update market needed)
         * Note: One account can enroll only once.
         *
         * @param _lock_collateral: U128
         * @param _relay_fee: Enum<{0/None: , 1/Some: U128}>
         */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'enrollAndLockCollateral', false, {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
	    });
        },

        enrollAndLockCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'enrollAndLockCollateral', true, argsBytes);
        },

        buildEnrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'enrollAndLockCollateral', {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
            });
        },

        buildEnrollAndLockCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'enrollAndLockCollateral', argsBytes)
        },

        /**
         * Update locked collateral for enrolled relayer, only supporting lock more. (Update market
         * needed)
         *
         * @param _new_collateral: U128
         */
        updateLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateLockedCollateral', false, {
                new_collateral: _new_collateral,
	    });
        },

        updateLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateLockedCollateral', true, argsBytes);
        },

        buildUpdateLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'updateLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        buildUpdateLockedCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'updateLockedCollateral', argsBytes)
        },

        /**
         * Update relay fee for enrolled relayer. (Update market needed)
         *
         * @param _new_fee: U128
         */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateRelayFee', false, {
                new_fee: _new_fee,
	    });
        },

        updateRelayFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'updateRelayFee', true, argsBytes);
        },

        buildUpdateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'updateRelayFee', {
                new_fee: _new_fee,
            });
        },

        buildUpdateRelayFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'updateRelayFee', argsBytes)
        },

        /**
         * Cancel enrolled relayer(Update market needed)
         *
         */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'cancelEnrollment', false, {
	    });
        },

        cancelEnrollmentH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'cancelEnrollment', true);
        },

        buildCancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'cancelEnrollment', {
            });
        },

        buildCancelEnrollmentCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'cancelEnrollment', argsBytes)
        },

        /**
         *
         * @param _slash_protect: U128
         */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setSlashProtect', false, {
                slash_protect: _slash_protect,
	    });
        },

        setSlashProtectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setSlashProtect', true, argsBytes);
        },

        buildSetSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'setSlashProtect', {
                slash_protect: _slash_protect,
            });
        },

        buildSetSlashProtectCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'setSlashProtect', argsBytes)
        },

        /**
         *
         * @param _number: U32
         */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setAssignedRelayersNumber', false, {
                number: _number,
	    });
        },

        setAssignedRelayersNumberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'FeeMarket', 'setAssignedRelayersNumber', true, argsBytes);
        },

        buildSetAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'FeeMarket', 'setAssignedRelayersNumber', {
                number: _number,
            });
        },

        buildSetAssignedRelayersNumberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'FeeMarket', 'setAssignedRelayersNumber', argsBytes)
        },

    }
}
