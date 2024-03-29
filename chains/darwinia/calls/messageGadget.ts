/**
 * This is the doc comment for pallet `MessageGadget`'s calls. 
 * 
 * `MessageGadget`'s storages: {@link: module:darwinia/messageGadget/storages}
 *
 * @module darwinia/messageGadget/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getMessageGadget = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param {unknown} _commitment_contract [U8; 20]
         * @instance
         */
        setCommitmentContract: async (signer: ethers.Signer, _commitment_contract: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, {
                commitment_contract: _commitment_contract,
           });
        },

        /**
         * Similar to {@link: darwinia/messageGadget/calls/setCommitmentContract}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setCommitmentContractH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetCommitmentContractCall: (_commitment_contract: unknown) => {
            return buildRuntimeCall(metadata, 'MessageGadget', 'setCommitmentContract', {
                commitment_contract: _commitment_contract,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetCommitmentContractCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetCommitmentContractCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'MessageGadget', 'setCommitmentContract', argsBytes)
        },

    }
}

