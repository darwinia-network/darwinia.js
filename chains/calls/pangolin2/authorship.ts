import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAuthorship = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new_uncles: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}>
	 */
        setUncles: async (signer: ethers.Signer, _new_uncles: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Authorship', 'setUncles', false, _new_uncles);
        },


    }
}
