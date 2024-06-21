/**
 * This is the doc comment for pallet `EthTxForwarder`'s calls. 
 * 
 * `EthTxForwarder`'s storages: {@link: module:crab/ethTxForwarder/storages}
 *
 * @module crab/ethTxForwarder/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEthTxForwarder = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::forward_transact`].
         *
         * @param {unknown} _request {tx_type: Enum<{0/LegacyTransaction: , 1/EIP2930Transaction: , 2/EIP1559Transaction: }>, gas_limit: [U64; 4], action: Enum<{0/Call: [U8; 20], 1/Create: }>, value: [U64; 4], input: Vec<U8>}
         * @instance
         */
        forwardTransact: async (signer: ethers.Signer, _request: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthTxForwarder', 'forwardTransact', false, {
                request: _request,
           });
        },

        /**
         * Similar to {@link: crab/ethTxForwarder/calls/forwardTransact}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forwardTransactH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'EthTxForwarder', 'forwardTransact', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForwardTransactCall: (_request: unknown) => {
            return buildRuntimeCall(metadata, 'EthTxForwarder', 'forwardTransact', {
                request: _request,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForwardTransactCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForwardTransactCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EthTxForwarder', 'forwardTransact', argsBytes)
        },

    }
}

