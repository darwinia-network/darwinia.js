/**
 * This is the doc comment for pallet `EcdsaAuthority`'s calls. 
 * 
 * `EcdsaAuthority`'s storages: {@link: module:pangoro/ecdsaAuthority/storages}
 *
 * @module pangoro/ecdsaAuthority/calls
 */
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
         * @param {unknown} _new [U8; 20]
         * @instance
         */
        addAuthority: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, {
                new: _new,
           });
        },

        /**
         * Similar to {@link: pangoro/ecdsaAuthority/calls/addAuthority}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddAuthorityCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'addAuthority', {
                new: _new,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddAuthorityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAddAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'addAuthority', argsBytes)
        },

        /**
         * Remove a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param {unknown} _old [U8; 20]
         * @instance
         */
        removeAuthority: async (signer: ethers.Signer, _old: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, {
                old: _old,
           });
        },

        /**
         * Similar to {@link: pangoro/ecdsaAuthority/calls/removeAuthority}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveAuthorityCall: (_old: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'removeAuthority', {
                old: _old,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveAuthorityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'removeAuthority', argsBytes)
        },

        /**
         * Swap the old authority with the new authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param {unknown} _old [U8; 20]
         * @param {unknown} _new [U8; 20]
         * @instance
         */
        swapAuthority: async (signer: ethers.Signer, _old: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, {
                old: _old,
                new: _new,
           });
        },

        /**
         * Similar to {@link: pangoro/ecdsaAuthority/calls/swapAuthority}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        swapAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSwapAuthorityCall: (_old: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'swapAuthority', {
                old: _old,
                new: _new,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSwapAuthorityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSwapAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'swapAuthority', argsBytes)
        },

        /**
         * Submit the authorities change signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param {unknown} _signature [U8; 65]
         * @instance
         */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, {
                signature: _signature,
           });
        },

        /**
         * Similar to {@link: pangoro/ecdsaAuthority/calls/submitAuthoritiesChangeSignature}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitAuthoritiesChangeSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitAuthoritiesChangeSignatureCall: (_signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', {
                signature: _signature,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitAuthoritiesChangeSignatureCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitAuthoritiesChangeSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', argsBytes)
        },

        /**
         * Submit the new message root signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param {unknown} _signature [U8; 65]
         * @instance
         */
        submitNewMessageRootSignature: async (signer: ethers.Signer, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, {
                signature: _signature,
           });
        },

        /**
         * Similar to {@link: pangoro/ecdsaAuthority/calls/submitNewMessageRootSignature}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitNewMessageRootSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitNewMessageRootSignatureCall: (_signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', {
                signature: _signature,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitNewMessageRootSignatureCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitNewMessageRootSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', argsBytes)
        },

    }
}

