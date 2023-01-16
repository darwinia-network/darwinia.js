import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getMessageGadget = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param _commitment_contract: [U8; 20]
         */
        setCommitmentContract: async (signer: ethers.Signer, _commitment_contract: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, {
                commitment_contract: _commitment_contract,
	    });
        },

        setCommitmentContractH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', true, argsBytes);
        },

        buildSetCommitmentContractCall: (_commitment_contract: unknown) => {
            return buildRuntimeCall(metadata, 'MessageGadget', 'setCommitmentContract', {
                commitment_contract: _commitment_contract,
            });
        },

        buildSetCommitmentContractCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'MessageGadget', 'setCommitmentContract', argsBytes)
        },

    }
}
