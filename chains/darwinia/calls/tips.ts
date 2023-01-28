/**
 * This is the doc comment for pallet `Tips`'s calls. 
 * 
 * `Tips`'s storages: {@link: module:darwinia/tips/storages}
 *
 * @module darwinia/tips/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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
         * @param {unknown} _reason Vec<U8>
         * @param {unknown} _who [U8; 32]
         */
        reportAwesome: async (signer: ethers.Signer, _reason: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', false, {
                reason: _reason,
                who: _who,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/reportAwesome}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        reportAwesomeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'reportAwesome', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportAwesomeCall: (_reason: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'reportAwesome', {
                reason: _reason,
                who: _who,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildReportAwesomeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportAwesomeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'reportAwesome', argsBytes)
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
         * @param {unknown} _hash [U8; 32]
         */
        retractTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', false, {
                hash: _hash,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/retractTip}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        retractTipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'retractTip', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRetractTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'retractTip', {
                hash: _hash,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildRetractTipCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRetractTipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'retractTip', argsBytes)
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
         * @param {unknown} _reason Vec<U8>
         * @param {unknown} _who [U8; 32]
         * @param {unknown} _tip_value Compact<U128>
         */
        tipNew: async (signer: ethers.Signer, _reason: unknown, _who: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', false, {
                reason: _reason,
                who: _who,
                tip_value: _tip_value,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/tipNew}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        tipNewH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tipNew', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTipNewCall: (_reason: unknown, _who: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tipNew', {
                reason: _reason,
                who: _who,
                tip_value: _tip_value,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTipNewCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTipNewCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'tipNew', argsBytes)
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
         * @param {unknown} _hash [U8; 32]
         * @param {unknown} _tip_value Compact<U128>
         */
        tip: async (signer: ethers.Signer, _hash: unknown, _tip_value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', false, {
                hash: _hash,
                tip_value: _tip_value,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/tip}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        tipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'tip', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTipCall: (_hash: unknown, _tip_value: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'tip', {
                hash: _hash,
                tip_value: _tip_value,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTipCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'tip', argsBytes)
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
         * @param {unknown} _hash [U8; 32]
         */
        closeTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', false, {
                hash: _hash,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/closeTip}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        closeTipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'closeTip', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCloseTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'closeTip', {
                hash: _hash,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCloseTipCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCloseTipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'closeTip', argsBytes)
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
         * @param {unknown} _hash [U8; 32]
         */
        slashTip: async (signer: ethers.Signer, _hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', false, {
                hash: _hash,
	    });
        },

        /**
	 * Similar to {@link: darwinia/tips/calls/slashTip}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        slashTipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Tips', 'slashTip', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSlashTipCall: (_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Tips', 'slashTip', {
                hash: _hash,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSlashTipCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSlashTipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Tips', 'slashTip', argsBytes)
        },

    }
}
