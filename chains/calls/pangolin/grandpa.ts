import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, _equivocation_proof, _key_owner_proof);
        },

        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', false, _equivocation_proof, _key_owner_proof);
        },

        /**
         * @param _delay: U32
         * @param _best_finalized_block_number: U32
	 */
        noteStalled: async (signer: ethers.Signer, _delay: unknown, _best_finalized_block_number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', false, _delay, _best_finalized_block_number);
        },


    }
}