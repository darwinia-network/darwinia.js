import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgeDarwiniaParachainMessages = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new_owner: Enum<{"0/None", "1/Some"}>
	 */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOwner', false, _new_owner);
        },

        /**
         * @param _operating_mode: Enum<{"0/Normal", "1/RejectingOutboundMessages", "2/Halted"}>
	 */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'setOperatingMode', false, _operating_mode);
        },

        /**
         * @param _parameter: Enum<{"0/DarwiniaParachainToDarwiniaConversionRate"}>
	 */
        updatePalletParameter: async (signer: ethers.Signer, _parameter: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'updatePalletParameter', false, _parameter);
        },

        /**
         * @param _lane_id: [U8; 4]
         * @param _payload: {spec_version: U32, weight: U64, origin: Enum<{"0/SourceRoot", "1/TargetAccount", "2/SourceAccount"}>, dispatch_fee_payment: Enum<{"0/AtSourceChain", "1/AtTargetChain"}>, call: Vec<U8>}
         * @param _delivery_and_dispatch_fee: U128
	 */
        sendMessage: async (signer: ethers.Signer, _lane_id: unknown, _payload: unknown, _delivery_and_dispatch_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'sendMessage', false, _lane_id, _payload, _delivery_and_dispatch_fee);
        },

        /**
         * @param _lane_id: [U8; 4]
         * @param _nonce: U64
         * @param _additional_fee: U128
	 */
        increaseMessageFee: async (signer: ethers.Signer, _lane_id: unknown, _nonce: unknown, _additional_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'increaseMessageFee', false, _lane_id, _nonce, _additional_fee);
        },

        /**
         * @param _relayer_id_at_bridged_chain: [U8; 32]
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param _messages_count: U32
         * @param _dispatch_weight: U64
	 */
        receiveMessagesProof: async (signer: ethers.Signer, _relayer_id_at_bridged_chain: unknown, _proof: unknown, _messages_count: unknown, _dispatch_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesProof', false, _relayer_id_at_bridged_chain, _proof, _messages_count, _dispatch_weight);
        },

        /**
         * @param _proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param _relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}
	 */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, _proof: unknown, _relayers_state: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaParachainMessages', 'receiveMessagesDeliveryProof', false, _proof, _relayers_state);
        },


    }
}
