import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getGrandpa = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Report voter equivocation/misbehavior. This method will verify the
         * equivocation proof and validate the given key ownership proof
         * against the extracted offender. If both are valid, the offence
         * will be reported.
         *
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: Enum<{}>
         */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, _equivocation_proof, _key_owner_proof);
        },

        reportEquivocationD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', true, data);
        },

        reportEquivocationCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocation', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * Report voter equivocation/misbehavior. This method will verify the
         * equivocation proof and validate the given key ownership proof
         * against the extracted offender. If both are valid, the offence
         * will be reported.
         * 
         * This extrinsic must be called unsigned and it is expected that only
         * block authors will call it (validated in `ValidateUnsigned`), as such
         * if the block author is defined it will be defined as the equivocation
         * reporter.
         *
         * @param _equivocation_proof: {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param _key_owner_proof: Enum<{}>
         */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', false, _equivocation_proof, _key_owner_proof);
        },

        reportEquivocationUnsignedD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', true, data);
        },

        reportEquivocationUnsignedCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocationUnsigned', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * Note that the current authority set of the GRANDPA finality gadget has
         * stalled. This will trigger a forced authority set change at the beginning
         * of the next session, to be enacted `delay` blocks after that. The delay
         * should be high enough to safely assume that the block signalling the
         * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
         * will start the new authority set using the given finalized block as base.
         * Only callable by root.
         *
         * @param _delay: U32
         * @param _best_finalized_block_number: U32
         */
        noteStalled: async (signer: ethers.Signer, _delay: unknown, _best_finalized_block_number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', false, _delay, _best_finalized_block_number);
        },

        noteStalledD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
