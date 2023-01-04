import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getParachainSystem = (dispatch: Dispatch) => {
    return {
        /**
         * @param _data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}
	 */
        setValidationData: async (signer: ethers.Signer, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', false, _data);
        },

        /**
         * @param _message: Vec<U8>
	 */
        sudoSendUpwardMessage: async (signer: ethers.Signer, _message: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', false, _message);
        },

        /**
         * @param _code_hash: [U8; 32]
	 */
        authorizeUpgrade: async (signer: ethers.Signer, _code_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', false, _code_hash);
        },

        /**
         * @param _code: Vec<U8>
	 */
        enactAuthorizedUpgrade: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', false, _code);
        },


    }
}
