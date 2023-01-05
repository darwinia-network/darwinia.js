import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSociety = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _value: U128
	 */
        bid: async (signer: ethers.Signer, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'bid', false, _value);
        },

        bidCall: (_value: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'bid', {
                value: _value,
            });
        },

        /**
         * @param _pos: U32
	 */
        unbid: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unbid', false, _pos);
        },

        unbidCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unbid', {
                pos: _pos,
            });
        },

        /**
         * @param _who: [U8; 32]
         * @param _value: U128
         * @param _tip: U128
	 */
        vouch: async (signer: ethers.Signer, _who: unknown, _value: unknown, _tip: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vouch', false, _who, _value, _tip);
        },

        vouchCall: (_who: unknown, _value: unknown, _tip: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vouch', {
                who: _who,
                value: _value,
                tip: _tip,
            });
        },

        /**
         * @param _pos: U32
	 */
        unvouch: async (signer: ethers.Signer, _pos: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unvouch', false, _pos);
        },

        unvouchCall: (_pos: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'unvouch', {
                pos: _pos,
            });
        },

        /**
         * @param _candidate: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _approve: Bool
	 */
        vote: async (signer: ethers.Signer, _candidate: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'vote', false, _candidate, _approve);
        },

        voteCall: (_candidate: unknown, _approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'vote', {
                candidate: _candidate,
                approve: _approve,
            });
        },

        /**
         * @param _approve: Bool
	 */
        defenderVote: async (signer: ethers.Signer, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'defenderVote', false, _approve);
        },

        defenderVoteCall: (_approve: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'defenderVote', {
                approve: _approve,
            });
        },

        /**
	 */
        payout: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'payout', false);
        },

        payoutCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'payout', {
            });
        },

        /**
         * @param _founder: [U8; 32]
         * @param _max_members: U32
         * @param _rules: Vec<U8>
	 */
        found: async (signer: ethers.Signer, _founder: unknown, _max_members: unknown, _rules: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'found', false, _founder, _max_members, _rules);
        },

        foundCall: (_founder: unknown, _max_members: unknown, _rules: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'found', {
                founder: _founder,
                max_members: _max_members,
                rules: _rules,
            });
        },

        /**
	 */
        unfound: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'unfound', false);
        },

        unfoundCall: () => {
            return buildRuntimeCall(metadata, 'Society', 'unfound', {
            });
        },

        /**
         * @param _who: [U8; 32]
         * @param _forgive: Bool
	 */
        judgeSuspendedMember: async (signer: ethers.Signer, _who: unknown, _forgive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedMember', false, _who, _forgive);
        },

        judgeSuspendedMemberCall: (_who: unknown, _forgive: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedMember', {
                who: _who,
                forgive: _forgive,
            });
        },

        /**
         * @param _who: [U8; 32]
         * @param _judgement: Enum<{0/Rebid: , 1/Reject: , 2/Approve: }>
	 */
        judgeSuspendedCandidate: async (signer: ethers.Signer, _who: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'judgeSuspendedCandidate', false, _who, _judgement);
        },

        judgeSuspendedCandidateCall: (_who: unknown, _judgement: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'judgeSuspendedCandidate', {
                who: _who,
                judgement: _judgement,
            });
        },

        /**
         * @param _max: U32
	 */
        setMaxMembers: async (signer: ethers.Signer, _max: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Society', 'setMaxMembers', false, _max);
        },

        setMaxMembersCall: (_max: unknown) => {
            return buildRuntimeCall(metadata, 'Society', 'setMaxMembers', {
                max: _max,
            });
        },

    }
}
