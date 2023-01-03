import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMessageGadget = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
	 */
        setCommitmentContract: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, param0);
        },


    }
}
