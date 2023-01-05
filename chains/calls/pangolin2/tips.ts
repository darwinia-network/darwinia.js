import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getTips = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _reason: Vec<U8>
         * @param _who: [U8; 20]
	 */
        reportAwesome: async (signer: ethers.Signer, _reason: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', false, _reason, _who);
        },

        reportAwesomeCall: (_reason: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'reportAwesome', {
                reason: _reason,
                who: _who,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        retractTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', false, _hash);
        },

        retractTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'retractTip', {
                hash: _hash,
            });
        },

        /**
         * @param _reason: Vec<U8>
         * @param _who: [U8; 20]
         * @param _tip_value: Compact<U128>
	 */
        tipNew: async (signer: ethers.Signer, _reason: unknown, _who: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', false, _reason, _who, _tip_value);
        },

        tipNewCall: (_reason: unknown, _who: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tipNew', {
                reason: _reason,
                who: _who,
                tip_value: _tip_value,
            });
        },

        /**
         * @param _hash: [U8; 32]
         * @param _tip_value: Compact<U128>
	 */
        tip: async (signer: ethers.Signer, _hash: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', false, _hash, _tip_value);
        },

        tipCall: (_hash: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tip', {
                hash: _hash,
                tip_value: _tip_value,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        closeTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', false, _hash);
        },

        closeTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'closeTip', {
                hash: _hash,
            });
        },

        /**
         * @param _hash: [U8; 32]
	 */
        slashTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', false, _hash);
        },

        slashTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'slashTip', {
                hash: _hash,
            });
        },

    }
}
