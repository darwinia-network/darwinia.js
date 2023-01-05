import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getBridgePolkadotParachain = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _relay_block_hash: [U8; 32]
         * @param _parachains: Vec<U32>
         * @param _parachain_heads_proof: Vec<Vec<U8>>
	 */
        submitParachainHeads: async (signer: ethers.Signer, _relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotParachain', 'submitParachainHeads', false, _relay_block_hash, _parachains, _parachain_heads_proof);
        },

        submitParachainHeadsD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotParachain', 'submitParachainHeads', true, data);
        },

        submitParachainHeadsCall: (_relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown) => {
            return buildRuntimeCall(metadata, 'BridgePolkadotParachain', 'submitParachainHeads', {
                relay_block_hash: _relay_block_hash,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
            });
        },

    }
}
