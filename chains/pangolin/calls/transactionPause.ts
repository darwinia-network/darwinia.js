import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTransactionPause = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
         */
        pauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', false, _pallet_name, _function_name);
        },

        pauseTransactionH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', true, data);
        },

        buildPauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'pauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

        buildPauseTransactionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TransactionPause', 'pauseTransaction', argsBytes)
        },

        /**
         *
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
         */
        unpauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', false, _pallet_name, _function_name);
        },

        unpauseTransactionH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', true, data);
        },

        buildUnpauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'unpauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

        buildUnpauseTransactionCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'TransactionPause', 'unpauseTransaction', argsBytes)
        },

    }
}
