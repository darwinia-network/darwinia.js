import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getGrandpa = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: Enum<{}>
	 */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, _equivocation_proof, _key_owner_proof);
        },

        reportEquivocationD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', true, data);
        },

        reportEquivocationCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocation', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: Enum<{}>
	 */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', false, _equivocation_proof, _key_owner_proof);
        },

        reportEquivocationUnsignedD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', true, data);
        },

        reportEquivocationUnsignedCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocationUnsigned', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * @param _delay: U32
         * @param _best_finalized_block_number: U32
	 */
        noteStalled: async (signer: ethers.Signer, _delay: unknown, _best_finalized_block_number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', false, _delay, _best_finalized_block_number);
        },

        noteStalledD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', true, data);
        },

        noteStalledCall: (_delay: unknown, _best_finalized_block_number: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'noteStalled', {
                delay: _delay,
                best_finalized_block_number: _best_finalized_block_number,
            });
        },

    }
}
