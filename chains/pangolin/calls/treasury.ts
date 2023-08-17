/**
 * This is the doc comment for pallet `Treasury`'s calls. 
 * 
 * `Treasury`'s storages: {@link: module:pangolin/treasury/storages}
 *
 * @module pangolin/treasury/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTreasury = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Put forward a suggestion for spending. A deposit proportional to the value
         * is reserved and slashed if the proposal is rejected. It is returned once the
         * proposal is awarded.
         * 
         * ## Complexity
         * - O(1)
         *
         * @param {unknown} _value Compact<U128>
         * @param {unknown} _beneficiary [U8; 20]
         * @instance
         */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', false, {
                value: _value,
                beneficiary: _beneficiary,
           });
        },

        /**
         * Similar to {@link: pangolin/treasury/calls/proposeSpend}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proposeSpendH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProposeSpendCall: (_value: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'proposeSpend', {
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
            return decodeCall(metadata, 'Treasury', 'proposeSpend', argsBytes)
        },

        /**
         * Reject a proposed spend. The original deposit will be slashed.
         * 
         * May only be called from `T::RejectOrigin`.
         * 
         * ## Complexity
         * - O(1)
         *
         * @param {unknown} _proposal_id Compact<U32>
         * @instance
         */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', false, {
                proposal_id: _proposal_id,
           });
        },

        /**
         * Similar to {@link: pangolin/treasury/calls/rejectProposal}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        rejectProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRejectProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'rejectProposal', {
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
            return decodeCall(metadata, 'Treasury', 'rejectProposal', argsBytes)
        },

        /**
         * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
         * and the original deposit will be returned.
         * 
         * May only be called from `T::ApproveOrigin`.
         * 
         * ## Complexity
         *  - O(1).
         *
         * @param {unknown} _proposal_id Compact<U32>
         * @instance
         */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', false, {
                proposal_id: _proposal_id,
           });
        },

        /**
         * Similar to {@link: pangolin/treasury/calls/approveProposal}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        approveProposalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildApproveProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'approveProposal', {
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
            return decodeCall(metadata, 'Treasury', 'approveProposal', argsBytes)
        },

        /**
         * Propose and approve a spend of treasury funds.
         * 
         * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
         * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         * - `beneficiary`: The destination account for the transfer.
         * 
         * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
         * beneficiary.
         *
         * @param {unknown} _amount Compact<U128>
         * @param {unknown} _beneficiary [U8; 20]
         * @instance
         */
        spend: async (signer: ethers.Signer, _amount: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', false, {
                amount: _amount,
                beneficiary: _beneficiary,
           });
        },

        /**
         * Similar to {@link: pangolin/treasury/calls/spend}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        spendH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSpendCall: (_amount: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'spend', {
                amount: _amount,
                beneficiary: _beneficiary,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSpendCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSpendCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Treasury', 'spend', argsBytes)
        },

        /**
         * Force a previously approved proposal to be removed from the approval queue.
         * The original deposit will no longer be returned.
         * 
         * May only be called from `T::RejectOrigin`.
         * - `proposal_id`: The index of a proposal
         * 
         * ## Complexity
         * - O(A) where `A` is the number of approvals
         * 
         * Errors:
         * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
         * i.e., the proposal has not been approved. This could also mean the proposal does not
         * exist altogether, thus there is no way it would have been approved in the first place.
         *
         * @param {unknown} _proposal_id Compact<U32>
         * @instance
         */
        removeApproval: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', false, {
                proposal_id: _proposal_id,
           });
        },

        /**
         * Similar to {@link: pangolin/treasury/calls/removeApproval}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveApprovalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'removeApproval', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveApprovalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveApprovalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Treasury', 'removeApproval', argsBytes)
        },

    }
}

