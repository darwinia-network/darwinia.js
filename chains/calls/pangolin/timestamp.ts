import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTimestamp = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Compact<U64>
	 */
        set: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', false, param0);
        },


    }
}
