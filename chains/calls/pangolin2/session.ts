import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSession = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {aura: [U8; 32]}
         * @param param1: Vec<U8>
	 */
        setKeys: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', false, param0, param1);
        },

        /**
	 */
        purgeKeys: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', false);
        },


    }
}
