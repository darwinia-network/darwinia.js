import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEcdsaAuthority = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
	 */
        addAuthority: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, param0);
        },

        /**
         * @param param0: [U8; 20]
	 */
        removeAuthority: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, param0);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 20]
	 */
        swapAuthority: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 65]
	 */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 65]
	 */
        submitNewMessageRootSignature: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, param0, param1);
        },


    }
}
