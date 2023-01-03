import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgeRococoParachains = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: Vec<U32>
         * @param param2: Vec<Vec<U8>>
	 */
        submitParachainHeads: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeRococoParachains', 'submitParachainHeads', false, param0, param1, param2);
        },


    }
}
