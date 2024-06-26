/**
 * This is the doc comment for pallet `ParachainSystem`'s calls. 
 * 
 * `ParachainSystem`'s storages: {@link: module:crab/parachainSystem/storages}
 *
 * @module crab/parachainSystem/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getParachainSystem = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::set_validation_data`].
         *
         * @param {unknown} _data {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}
         * @instance
         */
        setValidationData: async (signer: ethers.Signer, _data: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', false, {
                data: _data,
           });
        },

        /**
         * Similar to {@link: crab/parachainSystem/calls/setValidationData}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setValidationDataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetValidationDataCall: (_data: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'setValidationData', {
                data: _data,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetValidationDataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetValidationDataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'setValidationData', argsBytes)
        },

        /**
         * See [`Pallet::sudo_send_upward_message`].
         *
         * @param {unknown} _message Vec<U8>
         * @instance
         */
        sudoSendUpwardMessage: async (signer: ethers.Signer, _message: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', false, {
                message: _message,
           });
        },

        /**
         * Similar to {@link: crab/parachainSystem/calls/sudoSendUpwardMessage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        sudoSendUpwardMessageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSudoSendUpwardMessageCall: (_message: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'sudoSendUpwardMessage', {
                message: _message,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSudoSendUpwardMessageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSudoSendUpwardMessageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'sudoSendUpwardMessage', argsBytes)
        },

        /**
         * See [`Pallet::authorize_upgrade`].
         *
         * @param {unknown} _code_hash [U8; 32]
         * @param {unknown} _check_version Bool
         * @instance
         */
        authorizeUpgrade: async (signer: ethers.Signer, _code_hash: unknown, _check_version: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', false, {
                code_hash: _code_hash,
                check_version: _check_version,
           });
        },

        /**
         * Similar to {@link: crab/parachainSystem/calls/authorizeUpgrade}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        authorizeUpgradeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAuthorizeUpgradeCall: (_code_hash: unknown, _check_version: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'authorizeUpgrade', {
                code_hash: _code_hash,
                check_version: _check_version,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAuthorizeUpgradeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAuthorizeUpgradeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'authorizeUpgrade', argsBytes)
        },

        /**
         * See [`Pallet::enact_authorized_upgrade`].
         *
         * @param {unknown} _code Vec<U8>
         * @instance
         */
        enactAuthorizedUpgrade: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', false, {
                code: _code,
           });
        },

        /**
         * Similar to {@link: crab/parachainSystem/calls/enactAuthorizedUpgrade}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        enactAuthorizedUpgradeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildEnactAuthorizedUpgradeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'enactAuthorizedUpgrade', {
                code: _code,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildEnactAuthorizedUpgradeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildEnactAuthorizedUpgradeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'enactAuthorizedUpgrade', argsBytes)
        },

    }
}

