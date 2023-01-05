import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getIndices = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _index: U32
	 */
        claim: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', false, _index);
        },

        claimD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', true, data);
        },

        claimCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'claim', {
                index: _index,
            });
        },

        /**
         * @param _new: [U8; 32]
         * @param _index: U32
	 */
        transfer: async (signer: ethers.Signer, _new: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', false, _new, _index);
        },

        transferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', true, data);
        },

        transferCall: (_new: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'transfer', {
                new: _new,
                index: _index,
            });
        },

        /**
         * @param _index: U32
	 */
        free: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', false, _index);
        },

        freeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', true, data);
        },

        freeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'free', {
                index: _index,
            });
        },

        /**
         * @param _new: [U8; 32]
         * @param _index: U32
         * @param _freeze: Bool
	 */
        forceTransfer: async (signer: ethers.Signer, _new: unknown, _index: unknown, _freeze: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', false, _new, _index, _freeze);
        },

        forceTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', true, data);
        },

        forceTransferCall: (_new: unknown, _index: unknown, _freeze: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'forceTransfer', {
                new: _new,
                index: _index,
                freeze: _freeze,
            });
        },

        /**
         * @param _index: U32
	 */
        freeze: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', false, _index);
        },

        freezeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', true, data);
        },

        freezeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'freeze', {
                index: _index,
            });
        },

    }
}
