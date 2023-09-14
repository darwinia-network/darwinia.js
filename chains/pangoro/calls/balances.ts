/**
 * This is the doc comment for pallet `Balances`'s calls. 
 * 
 * `Balances`'s storages: {@link: module:pangoro/balances/storages}
 *
 * @module pangoro/balances/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBalances = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Transfer some liquid free balance to another account.
         * 
         * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
         * If the sender's account is below the existential deposit as a result
         * of the transfer, the account will be reaped.
         * 
         * The dispatch origin for this call must be `Signed` by the transactor.
         *
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        transferAllowDeath: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferAllowDeath', false, {
                dest: _dest,
                value: _value,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/transferAllowDeath}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferAllowDeathH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferAllowDeath', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferAllowDeathCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferAllowDeath', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransferAllowDeathCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransferAllowDeathCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Balances', 'transferAllowDeath', argsBytes)
        },

        /**
         * Set the regular balance of a given account; it also takes a reserved balance but this
         * must be the same as the account's current reserved balance.
         * 
         * The dispatch origin for this call is `root`.
         * 
         * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
         *
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _new_free Compact<U128>
         * @param {unknown} _old_reserved Compact<U128>
         * @instance
         */
        setBalanceDeprecated: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _old_reserved: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'setBalanceDeprecated', false, {
                who: _who,
                new_free: _new_free,
                old_reserved: _old_reserved,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/setBalanceDeprecated}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setBalanceDeprecatedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'setBalanceDeprecated', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetBalanceDeprecatedCall: (_who: unknown, _new_free: unknown, _old_reserved: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'setBalanceDeprecated', {
                who: _who,
                new_free: _new_free,
                old_reserved: _old_reserved,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetBalanceDeprecatedCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetBalanceDeprecatedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Balances', 'setBalanceDeprecated', argsBytes)
        },

        /**
         * Exactly as `transfer_allow_death`, except the origin must be root and the source account
         * may be specified.
         *
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', false, {
                source: _source,
                dest: _dest,
                value: _value,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/forceTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceTransferCall: (_source: unknown, _dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceTransfer', {
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
            return decodeCall(metadata, 'Balances', 'forceTransfer', argsBytes)
        },

        /**
         * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
         * kill the origin account.
         * 
         * 99% of the time you want [`transfer_allow_death`] instead.
         * 
         * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
         *
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', false, {
                dest: _dest,
                value: _value,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/transferKeepAlive}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferKeepAliveCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferKeepAlive', {
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
            return decodeCall(metadata, 'Balances', 'transferKeepAlive', argsBytes)
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
         *   keep the sender account alive (true).
         *
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _keep_alive Bool
         * @instance
         */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferAll', false, {
                dest: _dest,
                keep_alive: _keep_alive,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/transferAll}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferAllH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transferAll', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferAllCall: (_dest: unknown, _keep_alive: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferAll', {
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
            return decodeCall(metadata, 'Balances', 'transferAll', argsBytes)
        },

        /**
         * Unreserve some balance from a user by force.
         * 
         * Can only be called by ROOT.
         *
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _amount U128
         * @instance
         */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', false, {
                who: _who,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/forceUnreserve}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceUnreserveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceUnreserveCall: (_who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceUnreserve', {
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
            return decodeCall(metadata, 'Balances', 'forceUnreserve', argsBytes)
        },

        /**
         * Upgrade a specified account.
         * 
         * - `origin`: Must be `Signed`.
         * - `who`: The account to be upgraded.
         * 
         * This will waive the transaction fee if at least all but 10% of the accounts needed to
         * be upgraded. (We let some not have to be upgraded just in order to allow for the
         * possibililty of churn).
         *
         * @param {unknown} _who Vec<[U8; 20]>
         * @instance
         */
        upgradeAccounts: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'upgradeAccounts', false, {
                who: _who,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/upgradeAccounts}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        upgradeAccountsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'upgradeAccounts', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUpgradeAccountsCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'upgradeAccounts', {
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUpgradeAccountsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUpgradeAccountsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Balances', 'upgradeAccounts', argsBytes)
        },

        /**
         * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
         * 
         * WARNING: DEPRECATED! Will be released in approximately 3 months.
         *
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _value Compact<U128>
         * @instance
         */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transfer', false, {
                dest: _dest,
                value: _value,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/transfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'transfer', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transfer', {
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
            return decodeCall(metadata, 'Balances', 'transfer', argsBytes)
        },

        /**
         * Set the regular balance of a given account.
         * 
         * The dispatch origin for this call is `root`.
         *
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _new_free Compact<U128>
         * @instance
         */
        forceSetBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceSetBalance', false, {
                who: _who,
                new_free: _new_free,
           });
        },

        /**
         * Similar to {@link: pangoro/balances/calls/forceSetBalance}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceSetBalanceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Balances', 'forceSetBalance', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceSetBalanceCall: (_who: unknown, _new_free: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceSetBalance', {
                who: _who,
                new_free: _new_free,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceSetBalanceCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceSetBalanceCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Balances', 'forceSetBalance', argsBytes)
        },

    }
}

