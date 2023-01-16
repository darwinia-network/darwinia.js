import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeDarwiniaParachainMessages = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param _new_owner: Enum<{0/None: , 1/Some: [U8; 32]}>
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOwner', false, _new_owner);
        },

        setOwnerH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOwner', true, data);
        },

        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'setOwner', {
                new_owner: _new_owner,
            });
        },

        buildSetOwnerCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all/some pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param _operating_mode: Enum<{0/Normal: , 1/RejectingOutboundMessages: , 2/Halted: }>
         */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOperatingMode', false, _operating_mode);
        },

        setOperatingModeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOperatingMode', true, data);
        },

        buildSetOperatingModeCall: (_operating_mode: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'setOperatingMode', {
                operating_mode: _operating_mode,
            });
        },

        buildSetOperatingModeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'setOperatingMode', argsBytes)
        },

        /**
         * Update pallet parameter.
         * 
         * May only be called either by root, or by `PalletOwner`.
         * 
         * The weight is: single read for permissions check + 2 writes for parameter value and
         * event.
         *
         * @param _parameter: Enum<{0/DarwiniaParachainToDarwiniaConversionRate: U128}>
         */
        updatePalletParameter: async (signer: ethers.Signer, _parameter: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'updatePalletParameter', false, _parameter);
        },

        updatePalletParameterH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'updatePalletParameter', true, data);
        },

        buildUpdatePalletParameterCall: (_parameter: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'updatePalletParameter', {
                parameter: _parameter,
            });
        },

        buildUpdatePalletParameterCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'updatePalletParameter', argsBytes)
        },

        /**
         * Send message over lane.
         *
         * @param _lane_id: [U8; 4]
         * @param _payload: {spec_version: U32, weight: U64, origin: Enum<{0/SourceRoot: , 1/TargetAccount: ([U8; 32], Enum<{0/Ed25519: [U8; 32], 1/Sr25519: [U8; 32], 2/Ecdsa: [U8; 33]}>, Enum<{0/Ed25519: [U8; 64], 1/Sr25519: [U8; 64], 2/Ecdsa: [U8; 65]}>), 2/SourceAccount: [U8; 32]}>, dispatch_fee_payment: Enum<{0/AtSourceChain: , 1/AtTargetChain: }>, call: Vec<U8>}
         * @param _delivery_and_dispatch_fee: U128
         */
        sendMessage: async (signer: ethers.Signer, _lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'sendMessage', false, _lane_id, _payload, _delivery_and_dispatch_fee);
        },

        sendMessageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'sendMessage', true, data);
        },

        buildSendMessageCall: (_lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'sendMessage', {
                lane_id: _lane_id,
                payload: _payload,
                delivery_and_dispatch_fee: _delivery_and_dispatch_fee,
            });
        },

        buildSendMessageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'sendMessage', argsBytes)
        },

        /**
         * Pay additional fee for the message.
         *
         * @param _lane_id: [U8; 4]
         * @param _nonce: U64
         * @param _additional_fee: U128
         */
        increaseMessageFee: async (signer: ethers.Signer, _lane_id: unknown, _nonce: unknown, _additional_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'increaseMessageFee', false, _lane_id, _nonce, _additional_fee);
        },

        increaseMessageFeeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'increaseMessageFee', true, data);
        },

        buildIncreaseMessageFeeCall: (_lane_id: unknown, _nonce: unknown, _additional_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'increaseMessageFee', {
                lane_id: _lane_id,
                nonce: _nonce,
                additional_fee: _additional_fee,
            });
        },

        buildIncreaseMessageFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'increaseMessageFee', argsBytes)
        },

        /**
         * Receive messages proof from bridged chain.
         * 
         * The weight of the call assumes that the transaction always brings outbound lane
         * state update. Because of that, the submitter (relayer) has no benefit of not including
         * this data in the transaction, so reward confirmations lags should be minimal.
         *
         * @param _relayer_id_at_bridged_chain: [U8; 32]
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param _messages_count: U32
         * @param _dispatch_weight: U64
         */
        receiveMessagesProof: async (signer: ethers.Signer, _relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesProof', false, _relayer_id_at_bridged_chain, _proof, _messages_count, _dispatch_weight);
        },

        receiveMessagesProofH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesProof', true, data);
        },

        buildReceiveMessagesProofCall: (_relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'receiveMessagesProof', {
                relayer_id_at_bridged_chain: _relayer_id_at_bridged_chain,
                proof: _proof,
                messages_count: _messages_count,
                dispatch_weight: _dispatch_weight,
            });
        },

        buildReceiveMessagesProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'receiveMessagesProof', argsBytes)
        },

        /**
         * Receive messages delivery proof from bridged chain.
         *
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param _relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}
         */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, _proof: unknown, _relayers_state: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesDeliveryProof', false, _proof, _relayers_state);
        },

        receiveMessagesDeliveryProofH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesDeliveryProof', true, data);
        },

        buildReceiveMessagesDeliveryProofCall: (_proof: unknown, _relayers_state: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaParachainMessages', 'receiveMessagesDeliveryProof', {
                proof: _proof,
                relayers_state: _relayers_state,
            });
        },

        buildReceiveMessagesDeliveryProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaParachainMessages', 'receiveMessagesDeliveryProof', argsBytes)
        },

    }
}
