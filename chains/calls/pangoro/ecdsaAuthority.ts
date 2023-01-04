import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEcdsaAuthority = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new: [U8; 20]
	 */
        addAuthority: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, _new);
        },

        /**
         * @param _old: [U8; 20]
	 */
        removeAuthority: async (signer: ethers.Signer, _old: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, _old);
        },

        /**
         * @param _old: [U8; 20]
         * @param _new: [U8; 20]
	 */
        swapAuthority: async (signer: ethers.Signer, _old: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, _old, _new);
        },

        /**
         * @param _address: [U8; 20]
         * @param _signature: [U8; 65]
	 */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, _address, _signature);
        },

        /**
         * @param _address: [U8; 20]
         * @param _signature: [U8; 65]
	 */
        submitNewMessageRootSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, _address, _signature);
        },


    }
}
