/**
 * This is the doc comment for pallet `TransactionPause`'s calls. 
 * 
 * `TransactionPause`'s storages: {@link: module:pangoro/transactionPause/storages}
 *
 * @module pangoro/transactionPause/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTransactionPause = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param {unknown} _pallet_name Vec<U8>
         * @param {unknown} _function_name Vec<U8>
         */
        pauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', false, {
                pallet_name: _pallet_name,
                function_name: _function_name,
	    });
        },

        /**
	 * Similar to {@link: pangoro/transactionPause/calls/pauseTransaction}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        pauseTransactionH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildPauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'pauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildPauseTransactionCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildPauseTransactionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TransactionPause', 'pauseTransaction', argsBytes)
        },

        /**
         *
         * @param {unknown} _pallet_name Vec<U8>
         * @param {unknown} _function_name Vec<U8>
         */
        unpauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', false, {
                pallet_name: _pallet_name,
                function_name: _function_name,
	    });
        },

        /**
	 * Similar to {@link: pangoro/transactionPause/calls/unpauseTransaction}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        unpauseTransactionH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUnpauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'unpauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUnpauseTransactionCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUnpauseTransactionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TransactionPause', 'unpauseTransaction', argsBytes)
        },

    }
}
