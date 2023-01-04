import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getIndices = (dispatch: Dispatch) => {
    return {
        /**
         * @param _index: U32
	 */
        claim: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', false, _index);
        },

        /**
         * @param _new: [U8; 32]
         * @param _index: U32
	 */
        transfer: async (signer: ethers.Signer, _new: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', false, _new, _index);
        },

        /**
         * @param _index: U32
	 */
        free: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', false, _index);
        },

        /**
         * @param _new: [U8; 32]
         * @param _index: U32
         * @param _freeze: Bool
	 */
        forceTransfer: async (signer: ethers.Signer, _new: unknown, _index: unknown, _freeze: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', false, _new, _index, _freeze);
        },

        /**
         * @param _index: U32
	 */
        freeze: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', false, _index);
        },


    }
}
