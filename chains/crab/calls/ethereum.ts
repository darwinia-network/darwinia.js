/**
 * This is the doc comment for pallet `Ethereum`'s calls. 
 * 
 * `Ethereum`'s storages: {@link: module:crab/ethereum/storages}
 *
 * @module crab/ethereum/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEthereum = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::transact`].
         *
         * @param {unknown} _transaction Enum<{0/Legacy: {nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, signature: {v: U64, r: [U8; 32], s: [U8; 32]}}, 1/EIP2930: {chain_id: U64, nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}, 2/EIP1559: {chain_id: U64, nonce: [U64; 4], max_priority_fee_per_gas: [U64; 4], max_fee_per_gas: [U64; 4], gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}}>
         * @instance
         */
        transact: async (signer: ethers.Signer, _transaction: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Ethereum', 'transact', false, {
                transaction: _transaction,
           });
        },

        /**
         * Similar to {@link: crab/ethereum/calls/transact}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transactH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Ethereum', 'transact', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransactCall: (_transaction: unknown) => {
            return buildRuntimeCall(metadata, 'Ethereum', 'transact', {
                transaction: _transaction,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransactCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransactCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Ethereum', 'transact', argsBytes)
        },

    }
}

