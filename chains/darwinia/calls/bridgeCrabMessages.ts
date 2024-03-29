/**
 * This is the doc comment for pallet `BridgeCrabMessages`'s calls. 
 * 
 * `BridgeCrabMessages`'s storages: {@link: module:darwinia/bridgeCrabMessages/storages}
 *
 * @module darwinia/bridgeCrabMessages/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeCrabMessages = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _new_owner Enum<{0/None: , 1/Some: [U8; 20]}>
         * @instance
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'setOwner', false, {
                new_owner: _new_owner,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/setOwner}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOwnerH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'setOwner', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'setOwner', {
                new_owner: _new_owner,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetOwnerCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all/some pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _operating_mode Enum<{0/Basic: Enum<{0/Normal: , 1/Halted: }>, 1/RejectingOutboundMessages: }>
         * @instance
         */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'setOperatingMode', false, {
                operating_mode: _operating_mode,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/setOperatingMode}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOperatingModeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'setOperatingMode', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperatingModeCall: (_operating_mode: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'setOperatingMode', {
                operating_mode: _operating_mode,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetOperatingModeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperatingModeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'setOperatingMode', argsBytes)
        },

        /**
         * Update pallet parameter.
         * 
         * May only be called either by root, or by `PalletOwner`.
         * 
         * The weight is: single read for permissions check + 2 writes for parameter value and
         * event.
         *
         * @param {unknown} _parameter ()
         * @instance
         */
        updatePalletParameter: async (signer: ethers.Signer, _parameter: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'updatePalletParameter', false, {
                parameter: _parameter,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/updatePalletParameter}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updatePalletParameterH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'updatePalletParameter', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUpdatePalletParameterCall: (_parameter: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'updatePalletParameter', {
                parameter: _parameter,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUpdatePalletParameterCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUpdatePalletParameterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'updatePalletParameter', argsBytes)
        },

        /**
         * Send message over lane.
         *
         * @param {unknown} _lane_id [U8; 4]
         * @param {unknown} _payload {spec_version: U32, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, origin: Enum<{0/SourceRoot: , 1/TargetAccount: ([U8; 20], [U8; 20], [U8; 65]), 2/SourceAccount: [U8; 20]}>, dispatch_fee_payment: Enum<{0/AtSourceChain: , 1/AtTargetChain: }>, call: Vec<U8>}
         * @param {unknown} _delivery_and_dispatch_fee U128
         * @instance
         */
        sendMessage: async (signer: ethers.Signer, _lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'sendMessage', false, {
                lane_id: _lane_id,
                payload: _payload,
                delivery_and_dispatch_fee: _delivery_and_dispatch_fee,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/sendMessage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        sendMessageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'sendMessage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSendMessageCall: (_lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'sendMessage', {
                lane_id: _lane_id,
                payload: _payload,
                delivery_and_dispatch_fee: _delivery_and_dispatch_fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSendMessageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSendMessageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'sendMessage', argsBytes)
        },

        /**
         * Receive messages proof from bridged chain.
         * 
         * The weight of the call assumes that the transaction always brings outbound lane
         * state update. Because of that, the submitter (relayer) has no benefit of not including
         * this data in the transaction, so reward confirmations lags should be minimal.
         * 
         * Note: To maintain compatibility, the call index is 5 instead of 4 because the
         * call(increase_message_fee) with index 4 has been removed. https://github.com/darwinia-network/darwinia-messages-substrate/pull/207
         *
         * @param {unknown} _relayer_id_at_bridged_chain [U8; 20]
         * @param {unknown} _proof {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param {unknown} _messages_count U32
         * @param {unknown} _dispatch_weight {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        receiveMessagesProof: async (signer: ethers.Signer, _relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'receiveMessagesProof', false, {
                relayer_id_at_bridged_chain: _relayer_id_at_bridged_chain,
                proof: _proof,
                messages_count: _messages_count,
                dispatch_weight: _dispatch_weight,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/receiveMessagesProof}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        receiveMessagesProofH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'receiveMessagesProof', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesProofCall: (_relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'receiveMessagesProof', {
                relayer_id_at_bridged_chain: _relayer_id_at_bridged_chain,
                proof: _proof,
                messages_count: _messages_count,
                dispatch_weight: _dispatch_weight,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildReceiveMessagesProofCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'receiveMessagesProof', argsBytes)
        },

        /**
         * Receive messages delivery proof from bridged chain.
         *
         * @param {unknown} _proof {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param {unknown} _relayers_state {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64, last_delivered_nonce: U64}
         * @instance
         */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, _proof: unknown, _relayers_state: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'receiveMessagesDeliveryProof', false, {
                proof: _proof,
                relayers_state: _relayers_state,
           });
        },

        /**
         * Similar to {@link: darwinia/bridgeCrabMessages/calls/receiveMessagesDeliveryProof}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        receiveMessagesDeliveryProofH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeCrabMessages', 'receiveMessagesDeliveryProof', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesDeliveryProofCall: (_proof: unknown, _relayers_state: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabMessages', 'receiveMessagesDeliveryProof', {
                proof: _proof,
                relayers_state: _relayers_state,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildReceiveMessagesDeliveryProofCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesDeliveryProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabMessages', 'receiveMessagesDeliveryProof', argsBytes)
        },

    }
}

