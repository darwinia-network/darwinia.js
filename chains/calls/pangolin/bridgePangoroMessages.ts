import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgePangoroMessages = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Enum<{"0/None", "1/Some"}>
	 */
        setOwner: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'setOwner', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Normal", "1/RejectingOutboundMessages", "2/Halted"}>
	 */
        setOperatingMode: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'setOperatingMode', false, param0);
        },

        /**
         * @param param0: Enum<{"0/PangoroToPangolinConversionRate"}>
	 */
        updatePalletParameter: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'updatePalletParameter', false, param0);
        },

        /**
         * @param param0: [U8; 4]
         * @param param1: {spec_version: U32, weight: U64, origin: Enum<{"0/SourceRoot", "1/TargetAccount", "2/SourceAccount"}>, dispatch_fee_payment: Enum<{"0/AtSourceChain", "1/AtTargetChain"}>, call: Vec<U8>}
         * @param param2: U128
	 */
        sendMessage: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'sendMessage', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 4]
         * @param param1: U64
         * @param param2: U128
	 */
        increaseMessageFee: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'increaseMessageFee', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}
         * @param param2: U32
         * @param param3: U64
	 */
        receiveMessagesProof: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'receiveMessagesProof', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}
         * @param param1: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64}
	 */
        receiveMessagesDeliveryProof: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePangoroMessages', 'receiveMessagesDeliveryProof', false, param0, param1);
        },


    }
}
