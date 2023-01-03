import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPreimage = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        unnotePreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        requestPreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        unrequestPreimage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, param0);
        },


    }
}
