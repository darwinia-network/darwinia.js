import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPreimage = (dispatch: Dispatch) => {
    return {
        /**
         * @param _bytes: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, _bytes: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, _bytes);
        },

        /**
         * @param _hash: [U8; 32]
	 */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, _hash);
        },

        /**
         * @param _hash: [U8; 32]
	 */
        requestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, _hash);
        },

        /**
         * @param _hash: [U8; 32]
	 */
        unrequestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, _hash);
        },


    }
}
