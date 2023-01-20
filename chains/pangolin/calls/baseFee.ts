/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangolin/baseFee/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBaseFee = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param {unknown} _fee [U64; 4]
         */
        setBaseFeePerGas: async (signer: ethers.Signer, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, {
                fee: _fee,
	    });
        },

        /**
	 * Similar to {@link: setBaseFeePerGas}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setBaseFeePerGasH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetBaseFeePerGasCall: (_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setBaseFeePerGas', {
                fee: _fee,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetBaseFeePerGasCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetBaseFeePerGasCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setBaseFeePerGas', argsBytes)
        },

        /**
         *
         * @param {unknown} _is_active Bool
         */
        setIsActive: async (signer: ethers.Signer, _is_active: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', false, {
                is_active: _is_active,
	    });
        },

        /**
	 * Similar to {@link: setIsActive}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setIsActiveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetIsActiveCall: (_is_active: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setIsActive', {
                is_active: _is_active,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetIsActiveCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetIsActiveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setIsActive', argsBytes)
        },

        /**
         *
         * @param {unknown} _elasticity U32
         */
        setElasticity: async (signer: ethers.Signer, _elasticity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, {
                elasticity: _elasticity,
	    });
        },

        /**
	 * Similar to {@link: setElasticity}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setElasticityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetElasticityCall: (_elasticity: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setElasticity', {
                elasticity: _elasticity,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetElasticityCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetElasticityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setElasticity', argsBytes)
        },

    }
}
