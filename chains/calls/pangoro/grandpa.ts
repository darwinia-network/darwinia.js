import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}
         * @param _key_owner_proof: Enum<{}>
	 */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, _equivocation_proof, _key_owner_proof);
        },

        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{"0/Prevote", "1/Precommit"}>}
         * @param _key_owner_proof: Enum<{}>
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
