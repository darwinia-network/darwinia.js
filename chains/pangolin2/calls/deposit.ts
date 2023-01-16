import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDeposit = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Lock the RING for some KTON profit/interest.
         *
         * @param _amount: U128
         * @param _months: U8
         */
        lock: async (signer: ethers.Signer, _amount: unknown, _months: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', false, {
                amount: _amount,
                months: _months,
	    });
        },

        lockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', true, argsBytes);
        },

        buildLockCall: (_amount: unknown, _months: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'lock', {
                amount: _amount,
                months: _months,
            });
        },

        buildLockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'lock', argsBytes)
        },

        /**
         * Claim the expired-locked RING.
         *
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', false, {
	    });
        },

        claimH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', true);
        },

        buildClaimCall: () => {
            return buildRuntimeCall(metadata, 'Deposit', 'claim', {
            });
        },

        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'claim', argsBytes)
        },

        /**
         * Claim the unexpired-locked RING by paying the KTON penalty.
         *
         * @param _id: U16
         */
        claimWithPenalty: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, {
                id: _id,
	    });
        },

        claimWithPenaltyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', true, argsBytes);
        },

        buildClaimWithPenaltyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'claimWithPenalty', {
                id: _id,
            });
        },

        buildClaimWithPenaltyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'claimWithPenalty', argsBytes)
        },

    }
}
