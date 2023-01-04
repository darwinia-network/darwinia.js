import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getImOnline = (dispatch: Dispatch) => {
    return {
        /**
         * @param _heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}
         * @param _signature: [U8; 64]
	 */
        heartbeat: async (signer: ethers.Signer, _heartbeat: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', false, _heartbeat, _signature);
        },


    }
}
