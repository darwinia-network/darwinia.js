import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getPreimage = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _bytes: Vec<U8>
	 */
        notePreimage: async (signer: ethers.Signer, _bytes: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', false, _bytes);
        },

        notePreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'notePreimage', true, data);
        },

        notePreimageCall: (_bytes: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'notePreimage', {
                bytes: _bytes,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        unnotePreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', false, _hash);
        },

        unnotePreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unnotePreimage', true, data);
        },

        unnotePreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unnotePreimage', {
                hash: _hash,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        requestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', false, _hash);
        },

        requestPreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'requestPreimage', true, data);
        },

        requestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'requestPreimage', {
                hash: _hash,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        unrequestPreimage: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', false, _hash);
        },

        unrequestPreimageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Preimage', 'unrequestPreimage', true, data);
        },

        unrequestPreimageCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Preimage', 'unrequestPreimage', {
                hash: _hash,
            });
        },

    }
}
