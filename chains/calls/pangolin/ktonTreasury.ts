import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getKtonTreasury = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _beneficiary: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
	 */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'proposeSpend', false, _value, _beneficiary);
        },

        proposeSpendD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'proposeSpend', true, data);
        },

        proposeSpendCall: (_value: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'proposeSpend', {
                value: _value,
                beneficiary: _beneficiary,
            });
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'rejectProposal', false, _proposal_id);
        },

        rejectProposalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'rejectProposal', true, data);
        },

        rejectProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'rejectProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'approveProposal', false, _proposal_id);
        },

        approveProposalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'approveProposal', true, data);
        },

        approveProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'KtonTreasury', 'approveProposal', {
                proposal_id: _proposal_id,
            });
        },

    }
}
