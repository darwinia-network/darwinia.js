import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getDeposit = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _amount: U128
         * @param _months: U8
	 */
        lock: async (signer: ethers.Signer, _amount: unknown, _months: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', false, _amount, _months);
        },

        lockD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'lock', true, data);
        },

        lockCall: (_amount: unknown, _months: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'lock', {
                amount: _amount,
                months: _months,
            });
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', false);
        },

        claimD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claim', true, data);
        },

        claimCall: () => {
            return buildRuntimeCall(metadata, 'Deposit', 'claim', {
            });
        },

        /**
         * @param _id: U16
	 */
        claimWithPenalty: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', false, _id);
        },

        claimWithPenaltyD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Deposit', 'claimWithPenalty', true, data);
        },

        claimWithPenaltyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Deposit', 'claimWithPenalty', {
                id: _id,
            });
        },

    }
}
