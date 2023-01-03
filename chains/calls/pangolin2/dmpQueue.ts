import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDmpQueue = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U64
         * @param param1: {ref_time: U64}
	 */
        serviceOverweight: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', false, param0, param1);
        },


    }
}
