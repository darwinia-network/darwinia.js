import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBaseFee = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param _fee: [U64; 4]
         */
        setBaseFeePerGas: async (signer: ethers.Signer, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, _fee);
        },

        setBaseFeePerGasD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', true, data);
        },

        setBaseFeePerGasCall: (_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setBaseFeePerGas', {
                fee: _fee,
            });
        },

        /**
         *
         * @param _elasticity: U32
         */
        setElasticity: async (signer: ethers.Signer, _elasticity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, _elasticity);
        },

        setElasticityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', true, data);
        },

        setElasticityCall: (_elasticity: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setElasticity', {
                elasticity: _elasticity,
            });
        },

    }
}
