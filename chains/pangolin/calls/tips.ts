import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getTips = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
         * `DataDepositPerByte` for each byte in `reason`.
         * 
         * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
         *   a UTF-8-encoded URL.
         * - `who`: The account which should be credited for the tip.
         * 
         * Emits `NewTip` if successful.
         * 
         * # <weight>
         * - Complexity: `O(R)` where `R` length of `reason`.
         *   - encoding and hashing of 'reason'
         * - DbReads: `Reasons`, `Tips`
         * - DbWrites: `Reasons`, `Tips`
         * # </weight>
         *
         * @param _reason: Vec<U8>
         * @param _who: [U8; 32]
         */
        reportAwesome: async (signer: ethers.Signer, _reason: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', false, _reason, _who);
        },

        reportAwesomeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', true, data);
        },

        reportAwesomeCall: (_reason: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'reportAwesome', {
                reason: _reason,
                who: _who,
            });
        },

        /**
         * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
         * 
         * If successful, the original deposit will be unreserved.
         * 
         * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
         * must have been reported by the signing account through `report_awesome` (and not
         * through `tip_new`).
         * 
         * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
         *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
         * 
         * Emits `TipRetracted` if successful.
         * 
         * # <weight>
         * - Complexity: `O(1)`
         *   - Depends on the length of `T::Hash` which is fixed.
         * - DbReads: `Tips`, `origin account`
         * - DbWrites: `Reasons`, `Tips`, `origin account`
         * # </weight>
         *
         * @param _hash: [U8; 32]
         */
        retractTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', false, _hash);
        },

        retractTipD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', true, data);
        },

        retractTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'retractTip', {
                hash: _hash,
            });
        },

        /**
         * Give a tip for something new; no finder's fee will be taken.
         * 
         * The dispatch origin for this call must be _Signed_ and the signing account must be a
         * member of the `Tippers` set.
         * 
         * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
         *   a UTF-8-encoded URL.
         * - `who`: The account which should be credited for the tip.
         * - `tip_value`: The amount of tip that the sender would like to give. The median tip
         *   value of active tippers will be given to the `who`.
         * 
         * Emits `NewTip` if successful.
         * 
         * # <weight>
         * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
         *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
         *     `ContainsLengthBound`. The actual cost depends on the implementation of
         *     `T::Tippers`.
         *   - `O(R)`: hashing and encoding of reason of length `R`
         * - DbReads: `Tippers`, `Reasons`
         * - DbWrites: `Reasons`, `Tips`
         * # </weight>
         *
         * @param _reason: Vec<U8>
         * @param _who: [U8; 32]
         * @param _tip_value: Compact<U128>
         */
        tipNew: async (signer: ethers.Signer, _reason: unknown, _who: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', false, _reason, _who, _tip_value);
        },

        tipNewD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', true, data);
        },

        tipNewCall: (_reason: unknown, _who: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tipNew', {
                reason: _reason,
                who: _who,
                tip_value: _tip_value,
            });
        },

        /**
         * Declare a tip value for an already-open tip.
         * 
         * The dispatch origin for this call must be _Signed_ and the signing account must be a
         * member of the `Tippers` set.
         * 
         * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
         *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
         *   account ID.
         * - `tip_value`: The amount of tip that the sender would like to give. The median tip
         *   value of active tippers will be given to the `who`.
         * 
         * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
         * has started.
         * 
         * # <weight>
         * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
         *   `T`, insert tip and check closing, `T` is charged as upper bound given by
         *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
         * 
         *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
         *   is weighted as if almost full i.e of length `T-1`.
         * - DbReads: `Tippers`, `Tips`
         * - DbWrites: `Tips`
         * # </weight>
         *
         * @param _hash: [U8; 32]
         * @param _tip_value: Compact<U128>
         */
        tip: async (signer: ethers.Signer, _hash: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', false, _hash, _tip_value);
        },

        tipD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', true, data);
        },

        tipCall: (_hash: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tip', {
                hash: _hash,
                tip_value: _tip_value,
            });
        },

        /**
         * Close and payout a tip.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * The tip identified by `hash` must have finished its countdown period.
         * 
         * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
         *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
         * 
         * # <weight>
         * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
         *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
         *   depends on the implementation of `T::Tippers`.
         * - DbReads: `Tips`, `Tippers`, `tip finder`
         * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
         * # </weight>
         *
         * @param _hash: [U8; 32]
         */
        closeTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', false, _hash);
        },

        closeTipD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', true, data);
        },

        closeTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'closeTip', {
                hash: _hash,
            });
        },

        /**
         * Remove and slash an already-open tip.
         * 
         * May only be called from `T::RejectOrigin`.
         * 
         * As a result, the finder is slashed and the deposits are lost.
         * 
         * Emits `TipSlashed` if successful.
         * 
         * # <weight>
         *   `T` is charged as upper bound given by `ContainsLengthBound`.
         *   The actual cost depends on the implementation of `T::Tippers`.
         * # </weight>
         *
         * @param _hash: [U8; 32]
         */
        slashTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', false, _hash);
        },

        slashTipD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', true, data);
        },

        slashTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'slashTip', {
                hash: _hash,
            });
        },

    }
}
