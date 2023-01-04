import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getDmpQueue = (dispatch: Dispatch) => {
    return {
        /**
         * @param _index: U64
         * @param _weight_limit: {ref_time: U64}
	 */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', false, _index, _weight_limit);
        },


    }
}
