import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getBridgeMoonbaseRelayParachains = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _relay_block_hash: [U8; 32]
         * @param _parachains: Vec<U32>
         * @param _parachain_heads_proof: Vec<Vec<U8>>
	 */
        submitParachainHeads: async (signer: ethers.Signer, _relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', false, _relay_block_hash, _parachains, _parachain_heads_proof);
        },

        submitParachainHeadsD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', true, data);
        },

        submitParachainHeadsCall: (_relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', {
                relay_block_hash: _relay_block_hash,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
            });
        },

    }
}
