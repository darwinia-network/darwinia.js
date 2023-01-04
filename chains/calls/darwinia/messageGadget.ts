import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMessageGadget = (dispatch: Dispatch) => {
    return {
        /**
         * @param _commitment_contract: [U8; 20]
	 */
        setCommitmentContract: async (signer: ethers.Signer, _commitment_contract: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, _commitment_contract);
        },


    }
}
