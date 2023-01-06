import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getPangolinParachainAlphaFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
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
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'enrollAndLockCollateral', false, _lock_collateral, _relay_fee);
        },

        enrollAndLockCollateralD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'enrollAndLockCollateral', true, data);
        },

        enrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'enrollAndLockCollateral', {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
            });
        },

        /**
         * Update locked collateral for enrolled relayer, only supporting lock more. (Update market
         * needed)
         *
         * @param _new_collateral: U128
         */
        updateLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateLockedCollateral', false, _new_collateral);
        },

        updateLockedCollateralD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateLockedCollateral', true, data);
        },

        updateLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'updateLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        /**
         * Update relay fee for enrolled relayer. (Update market needed)
         *
         * @param _new_fee: U128
         */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateRelayFee', false, _new_fee);
        },

        updateRelayFeeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateRelayFee', true, data);
        },

        updateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'updateRelayFee', {
                new_fee: _new_fee,
            });
        },

        /**
         * Cancel enrolled relayer(Update market needed)
         *
         */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'cancelEnrollment', false);
        },

        cancelEnrollmentD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'cancelEnrollment', true);
        },

        cancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'cancelEnrollment', {
            });
        },

        /**
         *
         * @param _slash_protect: U128
         */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setSlashProtect', false, _slash_protect);
        },

        setSlashProtectD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setSlashProtect', true, data);
        },

        setSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'setSlashProtect', {
                slash_protect: _slash_protect,
            });
        },

        /**
         *
         * @param _number: U32
         */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setAssignedRelayersNumber', false, _number);
        },

        setAssignedRelayersNumberD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setAssignedRelayersNumber', true, data);
        },

        setAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'setAssignedRelayersNumber', {
                number: _number,
            });
        },

    }
}
