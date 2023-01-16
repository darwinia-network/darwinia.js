import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, {
                new: _new,
	    });
        },

        addAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', true, argsBytes);
        },

        buildAddAuthorityCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'addAuthority', {
                new: _new,
            });
        },

        buildAddAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'addAuthority', argsBytes)
        },

        /**
         * Remove a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param _old: [U8; 20]
         */
        removeAuthority: async (signer: ethers.Signer, _old: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, {
                old: _old,
	    });
        },

        removeAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', true, argsBytes);
        },

        buildRemoveAuthorityCall: (_old: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'removeAuthority', {
                old: _old,
            });
        },

        buildRemoveAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'removeAuthority', argsBytes)
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
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, {
                old: _old,
                new: _new,
	    });
        },

        swapAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', true, argsBytes);
        },

        buildSwapAuthorityCall: (_old: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'swapAuthority', {
                old: _old,
                new: _new,
            });
        },

        buildSwapAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'swapAuthority', argsBytes)
        },

        /**
         * Submit the authorities change signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param _signature: [U8; 65]
         */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, {
                signature: _signature,
	    });
        },

        submitAuthoritiesChangeSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', true, argsBytes);
        },

        buildSubmitAuthoritiesChangeSignatureCall: (_signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', {
                signature: _signature,
            });
        },

        buildSubmitAuthoritiesChangeSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', argsBytes)
        },

        /**
         * Submit the new message root signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param _signature: [U8; 65]
         */
        submitNewMessageRootSignature: async (signer: ethers.Signer, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, {
                signature: _signature,
	    });
        },

        submitNewMessageRootSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', true, argsBytes);
        },

        buildSubmitNewMessageRootSignatureCall: (_signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', {
                signature: _signature,
            });
        },

        buildSubmitNewMessageRootSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', argsBytes)
        },

    }
}
