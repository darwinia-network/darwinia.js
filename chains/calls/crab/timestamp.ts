import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTimestamp = (dispatch: Dispatch) => {
    return {
        /**
         * @param _now: Compact<U64>
	 */
        set: async (signer: ethers.Signer, _now: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', false, _now);
        },


    }
}
