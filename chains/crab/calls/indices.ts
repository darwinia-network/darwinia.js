/**
 * This is the doc comment for pallet evm calls
 *
 * @module crab/indices/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getIndices = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Assign an previously unassigned index.
         * 
         * Payment: `Deposit` is reserved from the sender account.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `index`: the index to be claimed. This must not be in use.
         * 
         * Emits `IndexAssigned` if successful.
         * 
         * # <weight>
         * - `O(1)`.
         * - One storage mutation (codec `O(1)`).
         * - One reserve operation.
         * - One event.
         * -------------------
         * - DB Weight: 1 Read/Write (Accounts)
         * # </weight>
         *
         * @param {unknown} _index U32
         */
        claim: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', false, {
                index: _index,
	    });
        },

        /**
	 * Similar to {@link: claim}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        claimH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClaimCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'claim', {
                index: _index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildClaimCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Indices', 'claim', argsBytes)
        },

        /**
         * Assign an index already owned by the sender to another account. The balance reservation
         * is effectively transferred to the new account.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `index`: the index to be re-assigned. This must be owned by the sender.
         * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
         * 
         * Emits `IndexAssigned` if successful.
         * 
         * # <weight>
         * - `O(1)`.
         * - One storage mutation (codec `O(1)`).
         * - One transfer operation.
         * - One event.
         * -------------------
         * - DB Weight:
         *    - Reads: Indices Accounts, System Account (recipient)
         *    - Writes: Indices Accounts, System Account (recipient)
         * # </weight>
         *
         * @param {unknown} _new [U8; 32]
         * @param {unknown} _index U32
         */
        transfer: async (signer: ethers.Signer, _new: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', false, {
                new: _new,
                index: _index,
	    });
        },

        /**
	 * Similar to {@link: transfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCall: (_new: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'transfer', {
                new: _new,
                index: _index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Indices', 'transfer', argsBytes)
        },

        /**
         * Free up an index owned by the sender.
         * 
         * Payment: Any previous deposit placed for the index is unreserved in the sender account.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must own the index.
         * 
         * - `index`: the index to be freed. This must be owned by the sender.
         * 
         * Emits `IndexFreed` if successful.
         * 
         * # <weight>
         * - `O(1)`.
         * - One storage mutation (codec `O(1)`).
         * - One reserve operation.
         * - One event.
         * -------------------
         * - DB Weight: 1 Read/Write (Accounts)
         * # </weight>
         *
         * @param {unknown} _index U32
         */
        free: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', false, {
                index: _index,
	    });
        },

        /**
	 * Similar to {@link: free}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        freeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'free', {
                index: _index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildFreeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Indices', 'free', argsBytes)
        },

        /**
         * Force an index to an account. This doesn't require a deposit. If the index is already
         * held, then any deposit is reimbursed to its current owner.
         * 
         * The dispatch origin for this call must be _Root_.
         * 
         * - `index`: the index to be (re-)assigned.
         * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
         * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
         * 
         * Emits `IndexAssigned` if successful.
         * 
         * # <weight>
         * - `O(1)`.
         * - One storage mutation (codec `O(1)`).
         * - Up to one reserve operation.
         * - One event.
         * -------------------
         * - DB Weight:
         *    - Reads: Indices Accounts, System Account (original owner)
         *    - Writes: Indices Accounts, System Account (original owner)
         * # </weight>
         *
         * @param {unknown} _new [U8; 32]
         * @param {unknown} _index U32
         * @param {unknown} _freeze Bool
         */
        forceTransfer: async (signer: ethers.Signer, _new: unknown, _index: unknown, _freeze: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', false, {
                new: _new,
                index: _index,
                freeze: _freeze,
	    });
        },

        /**
	 * Similar to {@link: forceTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCall: (_new: unknown, _index: unknown, _freeze: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'forceTransfer', {
                new: _new,
                index: _index,
                freeze: _freeze,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Indices', 'forceTransfer', argsBytes)
        },

        /**
         * Freeze an index so it will always point to the sender account. This consumes the
         * deposit.
         * 
         * The dispatch origin for this call must be _Signed_ and the signing account must have a
         * non-frozen account `index`.
         * 
         * - `index`: the index to be frozen in place.
         * 
         * Emits `IndexFrozen` if successful.
         * 
         * # <weight>
         * - `O(1)`.
         * - One storage mutation (codec `O(1)`).
         * - Up to one slash operation.
         * - One event.
         * -------------------
         * - DB Weight: 1 Read/Write (Accounts)
         * # </weight>
         *
         * @param {unknown} _index U32
         */
        freeze: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', false, {
                index: _index,
	    });
        },

        /**
	 * Similar to {@link: freeze}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        freezeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'freeze', {
                index: _index,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildFreezeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Indices', 'freeze', argsBytes)
        },

    }
}
