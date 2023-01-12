import { buildRuntimeCall, Dispatch } from "../../../call";
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

        setValidationDataD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'setValidationData', true, data);
        },

        setValidationDataCall: (_data: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'setValidationData', {
                data: _data,
            });
        },

        /**
         *
         * @param _message: Vec<U8>
         */
        sudoSendUpwardMessage: async (signer: ethers.Signer, _message: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', false, _message);
        },

        sudoSendUpwardMessageD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'sudoSendUpwardMessage', true, data);
        },

        sudoSendUpwardMessageCall: (_message: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'sudoSendUpwardMessage', {
                message: _message,
            });
        },

        /**
         *
         * @param _code_hash: [U8; 32]
         */
        authorizeUpgrade: async (signer: ethers.Signer, _code_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', false, _code_hash);
        },

        authorizeUpgradeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'authorizeUpgrade', true, data);
        },

        authorizeUpgradeCall: (_code_hash: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'authorizeUpgrade', {
                code_hash: _code_hash,
            });
        },

        /**
         *
         * @param _code: Vec<U8>
         */
        enactAuthorizedUpgrade: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', false, _code);
        },

        enactAuthorizedUpgradeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ParachainSystem', 'enactAuthorizedUpgrade', true, data);
        },

        enactAuthorizedUpgradeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'ParachainSystem', 'enactAuthorizedUpgrade', {
                code: _code,
            });
        },

    }
}
