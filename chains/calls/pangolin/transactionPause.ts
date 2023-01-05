import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTransactionPause = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
	 */
        pauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'pauseTransaction', false, _pallet_name, _function_name);
        },

        pauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'pauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

        /**
         * @param _pallet_name: Vec<U8>
         * @param _function_name: Vec<U8>
	 */
        unpauseTransaction: async (signer: ethers.Signer, _pallet_name: unknown, _function_name: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TransactionPause', 'unpauseTransaction', false, _pallet_name, _function_name);
        },

        unpauseTransactionCall: (_pallet_name: unknown, _function_name: unknown) => {
            return buildRuntimeCall(metadata, 'TransactionPause', 'unpauseTransaction', {
                pallet_name: _pallet_name,
                function_name: _function_name,
            });
        },

    }
}
