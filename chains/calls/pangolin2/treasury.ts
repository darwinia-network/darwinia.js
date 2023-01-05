import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getTreasury = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _beneficiary: [U8; 20]
	 */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', false, _value, _beneficiary);
        },

        proposeSpendD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', true, data);
        },

        proposeSpendCall: (_value: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'proposeSpend', {
                value: _value,
                beneficiary: _beneficiary,
            });
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', false, _proposal_id);
        },

        rejectProposalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', true, data);
        },

        rejectProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'rejectProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', false, _proposal_id);
        },

        approveProposalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', true, data);
        },

        approveProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'approveProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * @param _amount: Compact<U128>
         * @param _beneficiary: [U8; 20]
	 */
        spend: async (signer: ethers.Signer, _amount: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', false, _amount, _beneficiary);
        },

        spendD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', true, data);
        },

        spendCall: (_amount: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'spend', {
                amount: _amount,
                beneficiary: _beneficiary,
            });
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        removeApproval: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', false, _proposal_id);
        },

        removeApprovalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', true, data);
        },

        removeApprovalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'removeApproval', {
                proposal_id: _proposal_id,
            });
        },

    }
}
