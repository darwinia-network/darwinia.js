import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBaseFee = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param _fee: [U64; 4]
         */
        setBaseFeePerGas: async (signer: ethers.Signer, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, {
                fee: _fee,
	    });
        },

        setBaseFeePerGasH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', true, argsBytes);
        },

        buildSetBaseFeePerGasCall: (_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setBaseFeePerGas', {
                fee: _fee,
            });
        },

        buildSetBaseFeePerGasCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setBaseFeePerGas', argsBytes)
        },

        /**
         *
         * @param _is_active: Bool
         */
        setIsActive: async (signer: ethers.Signer, _is_active: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', false, {
                is_active: _is_active,
	    });
        },

        setIsActiveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', true, argsBytes);
        },

        buildSetIsActiveCall: (_is_active: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setIsActive', {
                is_active: _is_active,
            });
        },

        buildSetIsActiveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setIsActive', argsBytes)
        },

        /**
         *
         * @param _elasticity: U32
         */
        setElasticity: async (signer: ethers.Signer, _elasticity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, {
                elasticity: _elasticity,
	    });
        },

        setElasticityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', true, argsBytes);
        },

        buildSetElasticityCall: (_elasticity: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setElasticity', {
                elasticity: _elasticity,
            });
        },

        buildSetElasticityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BaseFee', 'setElasticity', argsBytes)
        },

    }
}
