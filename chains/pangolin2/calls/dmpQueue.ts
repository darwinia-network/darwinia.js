import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDmpQueue = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Service a single overweight message.
         * 
         * - `origin`: Must pass `ExecuteOverweightOrigin`.
         * - `index`: The index of the overweight message to service.
         * - `weight_limit`: The amount of weight that message execution may take.
         * 
         * Errors:
         * - `Unknown`: Message of `index` is unknown.
         * - `OverLimit`: Message execution may use greater than `weight_limit`.
         * 
         * Events:
         * - `OverweightServiced`: On success.
         *
         * @param _index: U64
         * @param _weight_limit: {ref_time: U64}
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', false, {
                index: _index,
                weight_limit: _weight_limit,
	    });
        },

        serviceOverweightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', true, argsBytes);
        },

        buildServiceOverweightCall: (_index: unknown, _weight_limit: unknown) => {
            return buildRuntimeCall(metadata, 'DmpQueue', 'serviceOverweight', {
                index: _index,
                weight_limit: _weight_limit,
            });
        },

        buildServiceOverweightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DmpQueue', 'serviceOverweight', argsBytes)
        },

    }
}
