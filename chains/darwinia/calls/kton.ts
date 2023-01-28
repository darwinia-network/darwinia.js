/**
 * This is the doc comment for pallet `Kton`'s calls. 
 * 
 * `Kton`'s storages: {@link: module:darwinia/kton/storages}
 *
 * @module darwinia/kton/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getKton = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Transfer some liquid free balance to another account.
         * 
         * `transfer` will set the `FreeBalance` of the sender and receiver.
         * If the sender's account is below the existential deposit as a result
         * of the transfer, the account will be reaped.
         * 
         * The dispatch origin for this call must be `Signed` by the transactor.
         * 
         * # <weight>
         * - Dependent on arguments but not critical, given proper implementations for input config
         *   types. See related functions below.
         * - It contains a limited number of reads and writes internally and no complex
         *   computation.
         * 
         * Related functions:
         * 
         *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
         *   - Transferring balances to accounts that did not exist before will cause
         *     `T::OnNewAccount::on_new_account` to be called.
         *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
         *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
         *     that the transfer will not kill the origin account.
         * 
         * # </weight>
         *
         * @param {unknown} _dest Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _value Compact<U128>
         */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transfer', false, {
                dest: _dest,
                value: _value,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/transfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transfer', {
                dest: _dest,
                value: _value,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'transfer', argsBytes)
        },

        /**
         * Set the balances of a given account.
         * 
         * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
         * also alter the total issuance of the system (`TotalIssuance`) appropriately.
         * If the new free or reserved balance is below the existential deposit,
         * it will reset the account nonce (`frame_system::AccountNonce`).
         * 
         * The dispatch origin for this call is `root`.
         *
         * @param {unknown} _who Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _new_free Compact<U128>
         * @param {unknown} _new_reserved Compact<U128>
         */
        setBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _new_reserved: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'setBalance', false, {
                who: _who,
                new_free: _new_free,
                new_reserved: _new_reserved,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/setBalance}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setBalanceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'setBalance', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetBalanceCall: (_who: unknown, _new_free: unknown, _new_reserved: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'setBalance', {
                who: _who,
                new_free: _new_free,
                new_reserved: _new_reserved,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetBalanceCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetBalanceCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'setBalance', argsBytes)
        },

        /**
         * Exactly as `transfer`, except the origin must be root and the source account may be
         * specified.
         * # <weight>
         * - Same as transfer, but additional read and write because the source account is not
         *   assumed to be in the overlay.
         * # </weight>
         *
         * @param {unknown} _source Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _dest Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _value Compact<U128>
         */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceTransfer', false, {
                source: _source,
                dest: _dest,
                value: _value,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/forceTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCall: (_source: unknown, _dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'forceTransfer', {
                source: _source,
                dest: _dest,
                value: _value,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'forceTransfer', argsBytes)
        },

        /**
         * Same as the [`transfer`] call, but with a check that the transfer will not kill the
         * origin account.
         * 
         * 99% of the time you want [`transfer`] instead.
         * 
         * [`transfer`]: struct.Pallet.html#method.transfer
         *
         * @param {unknown} _dest Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _value Compact<U128>
         */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferKeepAlive', false, {
                dest: _dest,
                value: _value,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/transferKeepAlive}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferKeepAlive', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferKeepAliveCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transferKeepAlive', {
                dest: _dest,
                value: _value,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferKeepAliveCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferKeepAliveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'transferKeepAlive', argsBytes)
        },

        /**
         * Transfer the entire transferable balance from the caller account.
         * 
         * NOTE: This function only attempts to transfer _transferable_ balances. This means that
         * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
         * transferred by this function. To ensure that this function results in a killed account,
         * you might need to prepare the account by removing any reference counters, storage
         * deposits, etc...
         * 
         * The dispatch origin of this call must be Signed.
         * 
         * - `dest`: The recipient of the transfer.
         * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
         *   of the funds the account has, causing the sender account to be killed (false), or
         *   transfer everything except at least the existential deposit, which will guarantee to
         *   keep the sender account alive (true). # <weight>
         * - O(1). Just like transfer, but reading the user's transferable balance first.
         *   #</weight>
         *
         * @param {unknown} _dest Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _keep_alive Bool
         */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferAll', false, {
                dest: _dest,
                keep_alive: _keep_alive,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/transferAll}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferAllH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'transferAll', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferAllCall: (_dest: unknown, _keep_alive: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'transferAll', {
                dest: _dest,
                keep_alive: _keep_alive,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferAllCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferAllCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'transferAll', argsBytes)
        },

        /**
         * Unreserve some balance from a user by force.
         * 
         * Can only be called by ROOT.
         *
         * @param {unknown} _who Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _amount U128
         */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceUnreserve', false, {
                who: _who,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: darwinia/kton/calls/forceUnreserve}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceUnreserveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Kton', 'forceUnreserve', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceUnreserveCall: (_who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Kton', 'forceUnreserve', {
                who: _who,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceUnreserveCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceUnreserveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Kton', 'forceUnreserve', argsBytes)
        },

    }
}
