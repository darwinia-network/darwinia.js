/**
 * This is the doc comment for pallet `DmpQueue`'s calls. 
 * 
 * `DmpQueue`'s storages: {@link: module:pangolin2/dmpQueue/storages}
 *
 * @module pangolin2/dmpQueue/calls
 */
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
         * @param {unknown} _index U64
         * @param {unknown} _weight_limit U64
         * @instance
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', false, {
                index: _index,
                weight_limit: _weight_limit,
           });
        },

        /**
         * Similar to {@link: pangolin2/dmpQueue/calls/serviceOverweight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        serviceOverweightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildServiceOverweightCall: (_index: unknown, _weight_limit: unknown) => {
            return buildRuntimeCall(metadata, 'DmpQueue', 'serviceOverweight', {
                index: _index,
                weight_limit: _weight_limit,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildServiceOverweightCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildServiceOverweightCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DmpQueue', 'serviceOverweight', argsBytes)
        },

    }
}

