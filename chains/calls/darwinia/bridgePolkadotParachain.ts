import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgePolkadotParachain = (dispatch: Dispatch) => {
    return {
        /**
         * @param _relay_block_hash: [U8; 32]
         * @param _parachains: Vec<U32>
         * @param _parachain_heads_proof: Vec<Vec<U8>>
	 */
        submitParachainHeads: async (signer: ethers.Signer, _relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotParachain', 'submitParachainHeads', false, _relay_block_hash, _parachains, _parachain_heads_proof);
        },


    }
}
