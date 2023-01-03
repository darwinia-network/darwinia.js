import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBaseFee = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U64; 4]
	 */
        setBaseFeePerGas: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, param0);
        },

        /**
         * @param param0: Bool
	 */
        setIsActive: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', false, param0);
        },

        /**
         * @param param0: U32
	 */
        setElasticity: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, param0);
        },


    }
}
