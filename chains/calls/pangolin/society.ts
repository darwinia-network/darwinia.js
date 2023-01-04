import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSociety = (dispatch: Dispatch) => {
    return {
        /**
         * @param _value: U128
	 */
        bid: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', false, _value);
        },

        /**
         * @param _pos: U32
	 */
        unbid: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', false, _pos);
        },

        /**
         * @param _who: [U8; 32]
         * @param _value: U128
         * @param _tip: U128
	 */
        vouch: async (signer: ethers.Signer, _who: unknown, _value: unknown, _tip: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', false, _who, _value, _tip);
        },

        /**
         * @param _pos: U32
	 */
        unvouch: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', false, _pos);
        },

        /**
         * @param _candidate: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
         * @param _approve: Bool
	 */
        vote: async (signer: ethers.Signer, _candidate: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', false, _candidate, _approve);
        },

        /**
         * @param _approve: Bool
	 */
        defenderVote: async (signer: ethers.Signer, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', false, _approve);
        },

        /**
	 */
        payout: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', false);
        },

        /**
         * @param _founder: [U8; 32]
         * @param _max_members: U32
         * @param _rules: Vec<U8>
	 */
        found: async (signer: ethers.Signer, _founder: unknown, _max_members: unknown, _rules: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', false, _founder, _max_members, _rules);
        },

        /**
	 */
        unfound: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', false);
        },

        /**
         * @param _who: [U8; 32]
         * @param _forgive: Bool
	 */
        judgeSuspendedMember: async (signer: ethers.Signer, _who: unknown, _forgive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', false, _who, _forgive);
        },

        /**
         * @param _who: [U8; 32]
         * @param _judgement: Enum<{Rebid: , Reject: , Approve: }>
	 */
        judgeSuspendedCandidate: async (signer: ethers.Signer, _who: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', false, _who, _judgement);
        },

        /**
         * @param _max: U32
	 */
        setMaxMembers: async (signer: ethers.Signer, _max: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', false, _max);
        },


    }
}
