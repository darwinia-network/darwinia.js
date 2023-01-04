import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getKtonTreasury = (dispatch: Dispatch) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _beneficiary: Enum<{Id: [U8; 32], Index: Compact<()>, Raw: Vec<U8>, Address32: [U8; 32], Address20: [U8; 20]}>
	 */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'proposeSpend', false, _value, _beneficiary);
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'rejectProposal', false, _proposal_id);
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'KtonTreasury', 'approveProposal', false, _proposal_id);
        },


    }
}
