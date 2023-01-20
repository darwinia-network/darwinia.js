/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangoro/messageGadget/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getMessageGadget = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         *
         * @param {unknown} _commitment_contract [U8; 20]
         */
        setCommitmentContract: async (signer: ethers.Signer, _commitment_contract: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageGadget', 'setCommitmentContract', false, {
                commitment_contract: _commitment_contract,
	    });
        },

        /**
	 * Similar to {@link: setCommitmentContract}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setCommitmentContractH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
