/**
 * This is the doc comment for pallet `DmpQueue`'s calls. 
 * 
 * `DmpQueue`'s storages: {@link: module:crab/dmpQueue/storages}
 *
 * @module crab/dmpQueue/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDmpQueue = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Service a single overweight message.
         *
         * @param {unknown} _index U64
         * @param {unknown} _weight_limit {ref_time: Compact<U64>, proof_size: Compact<U64>}
         * @instance
         */
        serviceOverweight: async (signer: ethers.Signer, _index: unknown, _weight_limit: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DmpQueue', 'serviceOverweight', false, {
                index: _index,
                weight_limit: _weight_limit,
           });
        },

        /**
         * Similar to {@link: crab/dmpQueue/calls/serviceOverweight}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        serviceOverweightH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

