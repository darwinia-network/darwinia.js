/**
 * This is the doc comment for pallet `KtonTreasury`'s calls. 
 * 
 * `KtonTreasury`'s storages: {@link: module:pangolin/ktonTreasury/storages}
 *
 * @module pangolin/ktonTreasury/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getKtonTreasury = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Put forward a suggestion for spending. A deposit proportional to the value
         * is reserved and slashed if the proposal is rejected. It is returned once the
         * proposal is awarded.
         * 
         * # <weight>
         * - Complexity: O(1)
         * - DbReads: `ProposalCount`, `origin account`
         * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
         * # </weight>
         *
         * @param {unknown} _value Compact<U128>
         * @param {unknown} _beneficiary Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'proposeSpend', false, {
                value: _value,
                beneficiary: _beneficiary,
	    });
        },

        /**
	 * Similar to {@link: pangolin/ktonTreasury/calls/proposeSpend}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        proposeSpendH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'proposeSpend', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildProposeSpendCall: (_value: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'proposeSpend', {
                value: _value,
                beneficiary: _beneficiary,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildProposeSpendCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildProposeSpendCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'KtonTreasury', 'proposeSpend', argsBytes)
        },

        /**
         * Reject a proposed spend. The original deposit will be slashed.
         * 
         * May only be called from `T::RejectOrigin`.
         * 
         * # <weight>
         * - Complexity: O(1)
         * - DbReads: `Proposals`, `rejected proposer account`
         * - DbWrites: `Proposals`, `rejected proposer account`
         * # </weight>
         *
         * @param {unknown} _proposal_id Compact<U32>
         */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'rejectProposal', false, {
                proposal_id: _proposal_id,
	    });
        },

        /**
	 * Similar to {@link: pangolin/ktonTreasury/calls/rejectProposal}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        rejectProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'rejectProposal', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRejectProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'rejectProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildRejectProposalCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRejectProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'KtonTreasury', 'rejectProposal', argsBytes)
        },

        /**
         * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
         * and the original deposit will be returned.
         * 
         * May only be called from `T::ApproveOrigin`.
         * 
         * # <weight>
         * - Complexity: O(1).
         * - DbReads: `Proposals`, `Approvals`
         * - DbWrite: `Approvals`
         * # </weight>
         *
         * @param {unknown} _proposal_id Compact<U32>
         */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'approveProposal', false, {
                proposal_id: _proposal_id,
	    });
        },

        /**
	 * Similar to {@link: pangolin/ktonTreasury/calls/approveProposal}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        approveProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'approveProposal', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildApproveProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'approveProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildApproveProposalCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildApproveProposalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'KtonTreasury', 'approveProposal', argsBytes)
        },

    }
}
