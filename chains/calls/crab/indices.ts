import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getIndices = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U32
	 */
        claim: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        transfer: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', false, param0, param1);
        },

        /**
         * @param param0: U32
	 */
        free: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
         * @param param2: Bool
	 */
        forceTransfer: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', false, param0, param1, param2);
        },

        /**
         * @param param0: U32
	 */
        freeze: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', false, param0);
        },


    }
}
