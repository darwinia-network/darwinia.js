import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getMessageGadget = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _commitment_contract: [U8; 20]
	 */
        setCommitmentContract: async (signer: ethers.Signer, _commitment_contract: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, _commitment_contract);
        },

        setCommitmentContractCall: (_commitment_contract: unknown) => {
            return buildRuntimeCall(metadata, 'MessageGadget', 'setCommitmentContract', {
                commitment_contract: _commitment_contract,
            });
        },

    }
}
