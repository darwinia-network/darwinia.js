/**
 * This is the doc comment for pallet `TxPause`'s calls. 
 * 
 * `TxPause`'s storages: {@link: module:koi/txPause/storages}
 *
 * @module koi/txPause/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTxPause = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::pause`].
         *
         * @param {unknown} _full_name (Vec<U8>, Vec<U8>)
         * @instance
         */
        pause: async (signer: ethers.Signer, _full_name: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TxPause', 'pause', false, {
                full_name: _full_name,
           });
        },

        /**
         * Similar to {@link: koi/txPause/calls/pause}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        pauseH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TxPause', 'pause', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildPauseCall: (_full_name: unknown) => {
            return buildRuntimeCall(metadata, 'TxPause', 'pause', {
                full_name: _full_name,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildPauseCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildPauseCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TxPause', 'pause', argsBytes)
        },

        /**
         * See [`Pallet::unpause`].
         *
         * @param {unknown} _ident (Vec<U8>, Vec<U8>)
         * @instance
         */
        unpause: async (signer: ethers.Signer, _ident: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TxPause', 'unpause', false, {
                ident: _ident,
           });
        },

        /**
         * Similar to {@link: koi/txPause/calls/unpause}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unpauseH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'TxPause', 'unpause', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnpauseCall: (_ident: unknown) => {
            return buildRuntimeCall(metadata, 'TxPause', 'unpause', {
                ident: _ident,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnpauseCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnpauseCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TxPause', 'unpause', argsBytes)
        },

    }
}

