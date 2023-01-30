/**
 * This is the doc comment for pallet `BridgeCrabParachainMessages`'s calls. 
 * 
 * `BridgeCrabParachainMessages`'s storages: {@link: module:crab/bridgeCrabParachainMessages/storages}
 *
 * @module crab/bridgeCrabParachainMessages/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeCrabParachainMessages = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _new_owner Enum<{0/None: , 1/Some: [U8; 32]}>
         * @instance
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'setOwner', false, {
                new_owner: _new_owner,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/setOwner}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOwnerH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'setOwner', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'setOwner', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all/some pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _operating_mode Enum<{0/Normal: , 1/RejectingOutboundMessages: , 2/Halted: }>
         * @instance
         */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'setOperatingMode', false, {
                operating_mode: _operating_mode,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/setOperatingMode}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOperatingModeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'setOperatingMode', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperatingModeCall: (_operating_mode: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'setOperatingMode', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'setOperatingMode', argsBytes)
        },

        /**
         * Update pallet parameter.
         * 
         * May only be called either by root, or by `PalletOwner`.
         * 
         * The weight is: single read for permissions check + 2 writes for parameter value and
         * event.
         *
         * @param {unknown} _parameter Enum<{0/CrabParachainToCrabConversionRate: U128}>
         * @instance
         */
        updatePalletParameter: async (signer: ethers.Signer, _parameter: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'updatePalletParameter', false, {
                parameter: _parameter,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/updatePalletParameter}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        updatePalletParameterH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'updatePalletParameter', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUpdatePalletParameterCall: (_parameter: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'updatePalletParameter', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'updatePalletParameter', argsBytes)
        },

        /**
         * Send message over lane.
         *
         * @param {unknown} _lane_id [U8; 4]
         * @param {unknown} _payload {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot: , 1/TargetAccount: ([U8; 32], Enum<{0/Ed25519: [U8; 32], 1/Sr25519: [U8; 32], 2/Ecdsa: [U8; 33]}>, Enum<{0/Ed25519: [U8; 64], 1/Sr25519: [U8; 64], 2/Ecdsa: [U8; 65]}>), 2/SourceAccount: [U8; 32]}>, dispatch_fee_payment: Enum<{0/AtSourceChain: , 1/AtTargetChain: }>, call: Vec<U8>}
         * @param {unknown} _delivery_and_dispatch_fee U128
         * @instance
         */
        sendMessage: async (signer: ethers.Signer, _lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'sendMessage', false, {
                lane_id: _lane_id,
                payload: _payload,
                delivery_and_dispatch_fee: _delivery_and_dispatch_fee,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/sendMessage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        sendMessageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'sendMessage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSendMessageCall: (_lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'sendMessage', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'sendMessage', argsBytes)
        },

        /**
         * Pay additional fee for the message.
         *
         * @param {unknown} _lane_id [U8; 4]
         * @param {unknown} _nonce U64
         * @param {unknown} _additional_fee U128
         * @instance
         */
        increaseMessageFee: async (signer: ethers.Signer, _lane_id: unknown, _nonce: unknown, _additional_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'increaseMessageFee', false, {
                lane_id: _lane_id,
                nonce: _nonce,
                additional_fee: _additional_fee,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/increaseMessageFee}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        increaseMessageFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'increaseMessageFee', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildIncreaseMessageFeeCall: (_lane_id: unknown, _nonce: unknown, _additional_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'increaseMessageFee', {
                lane_id: _lane_id,
                nonce: _nonce,
                additional_fee: _additional_fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildIncreaseMessageFeeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildIncreaseMessageFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'increaseMessageFee', argsBytes)
        },

        /**
         * Receive messages proof from bridged chain.
         * 
         * The weight of the call assumes that the transaction always brings outbound lane
         * state update. Because of that, the submitter (relayer) has no benefit of not including
         * this data in the transaction, so reward confirmations lags should be minimal.
         *
         * @param {unknown} _relayer_id_at_bridged_chain [U8; 32]
         * @param {unknown} _proof {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param {unknown} _messages_count U32
         * @param {unknown} _dispatch_weight U64
         * @instance
         */
        receiveMessagesProof: async (signer: ethers.Signer, _relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'receiveMessagesProof', false, {
                relayer_id_at_bridged_chain: _relayer_id_at_bridged_chain,
                proof: _proof,
                messages_count: _messages_count,
                dispatch_weight: _dispatch_weight,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/receiveMessagesProof}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        receiveMessagesProofH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'receiveMessagesProof', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesProofCall: (_relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'receiveMessagesProof', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'receiveMessagesProof', argsBytes)
        },

        /**
         * Receive messages delivery proof from bridged chain.
         *
         * @param {unknown} _proof {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param {unknown} _relayers_state {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}
         * @instance
         */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, _proof: unknown, _relayers_state: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'receiveMessagesDeliveryProof', false, {
                proof: _proof,
                relayers_state: _relayers_state,
           });
        },

        /**
         * Similar to {@link: crab/bridgeCrabParachainMessages/calls/receiveMessagesDeliveryProof}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        receiveMessagesDeliveryProofH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabParachainMessages', 'receiveMessagesDeliveryProof', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildReceiveMessagesDeliveryProofCall: (_proof: unknown, _relayers_state: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabParachainMessages', 'receiveMessagesDeliveryProof', {
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
            return decodeCall(metadata, 'BridgeCrabParachainMessages', 'receiveMessagesDeliveryProof', argsBytes)
        },

    }
}

