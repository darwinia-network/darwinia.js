import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getImOnline = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}
         * @param _signature: [U8; 64]
	 */
        heartbeat: async (signer: ethers.Signer, _heartbeat: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', false, _heartbeat, _signature);
        },

        heartbeatD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', true, data);
        },

        heartbeatCall: (_heartbeat: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'ImOnline', 'heartbeat', {
                heartbeat: _heartbeat,
                signature: _signature,
            });
        },

    }
}
