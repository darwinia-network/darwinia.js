import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getParachainSystem = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}
	 */
        setValidationData: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        sudoSendUpwardMessage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        authorizeUpgrade: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        enactAuthorizedUpgrade: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', false, param0);
        },


    }
}
