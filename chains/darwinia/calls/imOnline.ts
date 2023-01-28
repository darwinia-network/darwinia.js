/**
 * This is the doc comment for pallet `ImOnline`'s calls. 
 * 
 * `ImOnline`'s storages: {@link: module:darwinia/imOnline/storages}
 *
 * @module darwinia/imOnline/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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
         * @param {unknown} _heartbeat {block_number: U32, network_state: {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>}, session_index: U32, authority_index: U32, validators_len: U32}
         * @param {unknown} _signature [U8; 64]
         */
        heartbeat: async (signer: ethers.Signer, _heartbeat: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', false, {
                heartbeat: _heartbeat,
                signature: _signature,
	    });
        },

        /**
	 * Similar to {@link: darwinia/imOnline/calls/heartbeat}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        heartbeatH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ImOnline', 'heartbeat', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildHeartbeatCall: (_heartbeat: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'ImOnline', 'heartbeat', {
                heartbeat: _heartbeat,
                signature: _signature,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildHeartbeatCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildHeartbeatCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ImOnline', 'heartbeat', argsBytes)
        },

    }
}
