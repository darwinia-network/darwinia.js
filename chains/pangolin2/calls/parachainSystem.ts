import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getParachainSystem = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Set the current validation data.
         * 
         * This should be invoked exactly once per block. It will panic at the finalization
         * phase if the call was not invoked.
         * 
         * The dispatch origin for this call must be `Inherent`
         * 
         * As a side effect, this function upgrades the current validation function
         * if the appropriate time has come.
         *
         * @param _data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}
         */
        setValidationData: async (signer: ethers.Signer, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', false, _data);
        },

        setValidationDataH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', true, data);
        },

        buildSetValidationDataCall: (_data: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'setValidationData', {
                data: _data,
            });
        },

        buildSetValidationDataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'setValidationData', argsBytes)
        },

        /**
         *
         * @param _message: Vec<U8>
         */
        sudoSendUpwardMessage: async (signer: ethers.Signer, _message: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', false, _message);
        },

        sudoSendUpwardMessageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', true, data);
        },

        buildSudoSendUpwardMessageCall: (_message: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'sudoSendUpwardMessage', {
                message: _message,
            });
        },

        buildSudoSendUpwardMessageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'sudoSendUpwardMessage', argsBytes)
        },

        /**
         *
         * @param _code_hash: [U8; 32]
         */
        authorizeUpgrade: async (signer: ethers.Signer, _code_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', false, _code_hash);
        },

        authorizeUpgradeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', true, data);
        },

        buildAuthorizeUpgradeCall: (_code_hash: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'authorizeUpgrade', {
                code_hash: _code_hash,
            });
        },

        buildAuthorizeUpgradeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'authorizeUpgrade', argsBytes)
        },

        /**
         *
         * @param _code: Vec<U8>
         */
        enactAuthorizedUpgrade: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', false, _code);
        },

        enactAuthorizedUpgradeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', true, data);
        },

        buildEnactAuthorizedUpgradeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'enactAuthorizedUpgrade', {
                code: _code,
            });
        },

        buildEnactAuthorizedUpgradeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ParachainSystem', 'enactAuthorizedUpgrade', argsBytes)
        },

    }
}
