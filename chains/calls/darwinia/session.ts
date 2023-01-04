import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSession = (dispatch: Dispatch) => {
    return {
        /**
         * @param _keys: {babe: [U8; 32], grandpa: [U8; 32], im_online: [U8; 32], authority_discovery: [U8; 32]}
         * @param _proof: Vec<U8>
	 */
        setKeys: async (signer: ethers.Signer, _keys: unknown, _proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', false, _keys, _proof);
        },

        /**
	 */
        purgeKeys: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', false);
        },


    }
}
