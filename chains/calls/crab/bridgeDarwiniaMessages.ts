import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgeDarwiniaMessages = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new_owner: Enum<{None: , Some: [U8; 32]}>
	 */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'setOwner', false, _new_owner);
        },

        /**
         * @param _operating_mode: Enum<{Normal: , RejectingOutboundMessages: , Halted: }>
	 */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'setOperatingMode', false, _operating_mode);
        },

        /**
         * @param _parameter: Enum<{DarwiniaToCrabConversionRate: U128}>
	 */
        updatePalletParameter: async (signer: ethers.Signer, _parameter: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'updatePalletParameter', false, _parameter);
        },

        /**
         * @param _lane_id: [U8; 4]
         * @param _payload: {spec_version: U32, weight: U64, origin: Enum<{SourceRoot: , TargetAccount: ([U8; 32], Enum<{Ed25519: [U8; 32], Sr25519: [U8; 32], Ecdsa: [U8; 33]}>, Enum<{Ed25519: [U8; 64], Sr25519: [U8; 64], Ecdsa: [U8; 65]}>), SourceAccount: [U8; 32]}>, dispatch_fee_payment: Enum<{AtSourceChain: , AtTargetChain: }>, call: Vec<U8>}
         * @param _delivery_and_dispatch_fee: U128
	 */
        sendMessage: async (signer: ethers.Signer, _lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'sendMessage', false, _lane_id, _payload, _delivery_and_dispatch_fee);
        },

        /**
         * @param _lane_id: [U8; 4]
         * @param _nonce: U64
         * @param _additional_fee: U128
	 */
        increaseMessageFee: async (signer: ethers.Signer, _lane_id: unknown, _nonce: unknown, _additional_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'increaseMessageFee', false, _lane_id, _nonce, _additional_fee);
        },

        /**
         * @param _relayer_id_at_bridged_chain: [U8; 32]
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param _messages_count: U32
         * @param _dispatch_weight: U64
	 */
        receiveMessagesProof: async (signer: ethers.Signer, _relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'receiveMessagesProof', false, _relayer_id_at_bridged_chain, _proof, _messages_count, _dispatch_weight);
        },

        /**
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param _relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}
	 */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, _proof: unknown, _relayers_state: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaMessages', 'receiveMessagesDeliveryProof', false, _proof, _relayers_state);
        },


    }
}
