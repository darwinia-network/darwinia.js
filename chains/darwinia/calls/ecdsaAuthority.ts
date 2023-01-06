import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getEcdsaAuthority = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         * This will insert new authority into the index 0 of authorities.
         *
         * @param _new: [U8; 20]
         */
        addAuthority: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, _new);
        },

        addAuthorityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', true, data);
        },

        addAuthorityCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'addAuthority', {
                new: _new,
            });
        },

        /**
         * Remove a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param _old: [U8; 20]
         */
        removeAuthority: async (signer: ethers.Signer, _old: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, _old);
        },

        removeAuthorityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', true, data);
        },

        removeAuthorityCall: (_old: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'removeAuthority', {
                old: _old,
            });
        },

        /**
         * Swap the old authority with the new authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param _old: [U8; 20]
         * @param _new: [U8; 20]
         */
        swapAuthority: async (signer: ethers.Signer, _old: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, _old, _new);
        },

        swapAuthorityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', true, data);
        },

        swapAuthorityCall: (_old: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'swapAuthority', {
                old: _old,
                new: _new,
            });
        },

        /**
         * Submit the authorities change signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param _address: [U8; 20]
         * @param _signature: [U8; 65]
         */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, _address, _signature);
        },

        submitAuthoritiesChangeSignatureD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', true, data);
        },

        submitAuthoritiesChangeSignatureCall: (_address: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', {
                address: _address,
                signature: _signature,
            });
        },

        /**
         * Submit the new message root signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param _address: [U8; 20]
         * @param _signature: [U8; 65]
         */
        submitNewMessageRootSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, _address, _signature);
        },

        submitNewMessageRootSignatureD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', true, data);
        },

        submitNewMessageRootSignatureCall: (_address: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', {
                address: _address,
                signature: _signature,
            });
        },

    }
}
