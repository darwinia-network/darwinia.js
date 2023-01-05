import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

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
         * @param _index: U32
         */
        claim: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', false, _index);
        },

        claimD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'claim', true, data);
        },

        claimCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'claim', {
                index: _index,
            });
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
         * @param _new: [U8; 32]
         * @param _index: U32
         */
        transfer: async (signer: ethers.Signer, _new: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', false, _new, _index);
        },

        transferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'transfer', true, data);
        },

        transferCall: (_new: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'transfer', {
                new: _new,
                index: _index,
            });
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
         * @param _index: U32
         */
        free: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', false, _index);
        },

        freeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'free', true, data);
        },

        freeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'free', {
                index: _index,
            });
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
         * @param _new: [U8; 32]
         * @param _index: U32
         * @param _freeze: Bool
         */
        forceTransfer: async (signer: ethers.Signer, _new: unknown, _index: unknown, _freeze: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', false, _new, _index, _freeze);
        },

        forceTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'forceTransfer', true, data);
        },

        forceTransferCall: (_new: unknown, _index: unknown, _freeze: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'forceTransfer', {
                new: _new,
                index: _index,
                freeze: _freeze,
            });
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
         * @param _index: U32
         */
        freeze: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', false, _index);
        },

        freezeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Indices', 'freeze', true, data);
        },

        freezeCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Indices', 'freeze', {
                index: _index,
            });
        },

    }
}
