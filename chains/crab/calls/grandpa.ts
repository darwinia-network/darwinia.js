/**
 * This is the doc comment for pallet `Grandpa`'s calls. 
 * 
 * `Grandpa`'s storages: {@link: module:crab/grandpa/storages}
 *
 * @module crab/grandpa/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getGrandpa = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Report voter equivocation/misbehavior. This method will verify the
         * equivocation proof and validate the given key ownership proof
         * against the extracted offender. If both are valid, the offence
         * will be reported.
         *
         * @param {unknown} _equivocation_proof {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param {unknown} _key_owner_proof {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
         * @instance
         */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', false, {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
           });
        },

        /**
         * Similar to {@link: crab/grandpa/calls/reportEquivocation}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        reportEquivocationH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocation', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReportEquivocationCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocation', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildReportEquivocationCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildReportEquivocationCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Grandpa', 'reportEquivocation', argsBytes)
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
         * @param {unknown} _equivocation_proof {set_id: U64, equivocation: Enum<{0/Prevote: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}, 1/Precommit: {round_number: U64, identity: [U8; 32], first: ({target_hash: [U8; 32], target_number: U32}, [U8; 64]), second: ({target_hash: [U8; 32], target_number: U32}, [U8; 64])}}>}
         * @param {unknown} _key_owner_proof {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
         * @instance
         */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', false, {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
           });
        },

        /**
         * Similar to {@link: crab/grandpa/calls/reportEquivocationUnsigned}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        reportEquivocationUnsignedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'reportEquivocationUnsigned', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReportEquivocationUnsignedCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'reportEquivocationUnsigned', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildReportEquivocationUnsignedCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildReportEquivocationUnsignedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Grandpa', 'reportEquivocationUnsigned', argsBytes)
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
         * @param {unknown} _delay U32
         * @param {unknown} _best_finalized_block_number U32
         * @instance
         */
        noteStalled: async (signer: ethers.Signer, _delay: unknown, _best_finalized_block_number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', false, {
                delay: _delay,
                best_finalized_block_number: _best_finalized_block_number,
           });
        },

        /**
         * Similar to {@link: crab/grandpa/calls/noteStalled}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        noteStalledH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Grandpa', 'noteStalled', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildNoteStalledCall: (_delay: unknown, _best_finalized_block_number: unknown) => {
            return buildRuntimeCall(metadata, 'Grandpa', 'noteStalled', {
                delay: _delay,
                best_finalized_block_number: _best_finalized_block_number,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildNoteStalledCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildNoteStalledCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Grandpa', 'noteStalled', argsBytes)
        },

    }
}

