import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}
         * @param param1: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocation: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, param0, param1);
        },

        /**
         * @param param0: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}
         * @param param1: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocationUnsigned: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', false, param0, param1);
        },

        /**
         * @param param0: U32
         * @param param1: U32
	 */
        noteStalled: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', false, param0, param1);
        },


    }
}
