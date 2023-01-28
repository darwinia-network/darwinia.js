/**
 * This is the doc comment for pallet `BridgePolkadotParachain`'s calls. 
 * 
 * `BridgePolkadotParachain`'s storages: {@link: module:darwinia/bridgePolkadotParachain/storages}
 *
 * @module darwinia/bridgePolkadotParachain/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgePolkadotParachain = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Submit proof of one or several parachain heads.
         * 
         * The proof is supposed to be proof of some `Heads` entries from the
         * `polkadot-runtime-parachains::paras` pallet instance, deployed at the bridged chain.
         * The proof is supposed to be crafted at the `relay_header_hash` that must already be
         * imported by corresponding GRANDPA pallet at this chain.
         *
         * @param {unknown} _relay_block_hash [U8; 32]
         * @param {unknown} _parachains Vec<U32>
         * @param {unknown} _parachain_heads_proof Vec<Vec<U8>>
         */
        submitParachainHeads: async (signer: ethers.Signer, _relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotParachain', 'submitParachainHeads', false, {
                relay_block_hash: _relay_block_hash,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
	    });
        },

        /**
	 * Similar to {@link: darwinia/bridgePolkadotParachain/calls/submitParachainHeads}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        submitParachainHeadsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotParachain', 'submitParachainHeads', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitParachainHeadsCall: (_relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown) => {
            return buildRuntimeCall(metadata, 'BridgePolkadotParachain', 'submitParachainHeads', {
                relay_block_hash: _relay_block_hash,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSubmitParachainHeadsCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitParachainHeadsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgePolkadotParachain', 'submitParachainHeads', argsBytes)
        },

    }
}
