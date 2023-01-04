import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEthereum = (dispatch: Dispatch) => {
    return {
        /**
         * @param _transaction: Enum<{Legacy: {nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, signature: {v: U64, r: [U8; 32], s: [U8; 32]}}, EIP2930: {chain_id: U64, nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}, EIP1559: {chain_id: U64, nonce: [U64; 4], max_priority_fee_per_gas: [U64; 4], max_fee_per_gas: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}}>
	 */
        transact: async (signer: ethers.Signer, _transaction: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Ethereum', 'transact', false, _transaction);
        },


    }
}
