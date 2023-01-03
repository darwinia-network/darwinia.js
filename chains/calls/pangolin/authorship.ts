import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAuthorship = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>
	 */
        setUncles: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', false, param0);
        },


    }
}
