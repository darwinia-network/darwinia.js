import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBaseFee = (dispatch: Dispatch) => {
    return {
        /**
         * @param _fee: [U64; 4]
	 */
        setBaseFeePerGas: async (signer: ethers.Signer, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, _fee);
        },

        /**
         * @param _elasticity: U32
	 */
        setElasticity: async (signer: ethers.Signer, _elasticity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, _elasticity);
        },


    }
}
