/**
 * This is the doc comment for pallet `Deposit`'s calls. 
 * 
 * `Deposit`'s storages: {@link: module:darwinia/deposit/storages}
 *
 * @module darwinia/deposit/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDeposit = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Lock the RING for some KTON profit/interest.
         *
         * @param {unknown} _amount U128
         * @param {unknown} _months U8
         * @instance
         */
        lock: async (signer: ethers.Signer, _amount: unknown, _months: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'lock', false, {
                amount: _amount,
                months: _months,
           });
        },

        /**
         * Similar to {@link: darwinia/deposit/calls/lock}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        lockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'lock', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildLockCall: (_amount: unknown, _months: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'lock', {
                amount: _amount,
                months: _months,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildLockCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildLockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'lock', argsBytes)
        },

        /**
         * Claim the expired-locked RING.
         *
         * @instance
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'claim', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/deposit/calls/claim}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        claimH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'claim', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClaimCall: () => {
            return buildRuntimeCall(metadata, 'Deposit', 'claim', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClaimCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'claim', argsBytes)
        },

        /**
         * Claim the unexpired-locked RING by paying the KTON penalty.
         *
         * @param {unknown} _id U16
         * @instance
         */
        claimWithPenalty: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/deposit/calls/claimWithPenalty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        claimWithPenaltyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClaimWithPenaltyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'claimWithPenalty', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClaimWithPenaltyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClaimWithPenaltyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Deposit', 'claimWithPenalty', argsBytes)
        },

    }
}

