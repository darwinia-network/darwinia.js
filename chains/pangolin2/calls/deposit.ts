import { buildRuntimeCall, Dispatch } from "../../../call";
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
            return await dispatch(signer, 'Deposit', 'lock', false, _amount, _months);
        },

        lockD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', true, data);
        },

        lockCall: (_amount: unknown, _months: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'lock', {
                amount: _amount,
                months: _months,
            });
        },

        /**
         * Claim the expired-locked RING.
         *
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', false);
        },

        claimD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', true);
        },

        claimCall: () => {
            return buildRuntimeCall(metadata, 'Deposit', 'claim', {
            });
        },

        /**
         * Claim the unexpired-locked RING by paying the KTON penalty.
         *
         * @param _id: U16
         */
        claimWithPenalty: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, _id);
        },

        claimWithPenaltyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', true, data);
        },

        claimWithPenaltyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'claimWithPenalty', {
                id: _id,
            });
        },

    }
}
