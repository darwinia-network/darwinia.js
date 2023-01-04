import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTreasury = (dispatch: Dispatch) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _beneficiary: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', false, _value, _beneficiary);
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', false, _proposal_id);
        },

        /**
         * @param _proposal_id: Compact<U32>
	 */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', false, _proposal_id);
        },


    }
}
