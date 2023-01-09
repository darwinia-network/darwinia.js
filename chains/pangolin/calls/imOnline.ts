import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getImOnline = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * # <weight>
         * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
         *   length of `heartbeat.network_state.external_address`
         *   - `O(K)`: decoding of length `K`
         *   - `O(E)`: decoding/encoding of length `E`
         * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
         *   `ReceivedHeartbeats`
         * - DbWrites: `ReceivedHeartbeats`
         * # </weight>
         *
         * @param _heartbeat: {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}
         * @param _signature: [U8; 64]
         */
        heartbeat: async (signer: ethers.Signer, _heartbeat: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', false, _heartbeat, _signature);
        },

        heartbeatD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
