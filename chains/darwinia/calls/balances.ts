/**
 * This is the doc comment for pallet `Balances`'s calls. 
 * 
 * `Balances`'s storages: {@link: module:darwinia/balances/storages}
 *
 * @module darwinia/balances/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBalances = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::transfer_allow_death`].
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
         * Similar to {@link: darwinia/balances/calls/transferAllowDeath}, but with scale encoded args.
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
         * See [`Pallet::set_balance_deprecated`].
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
         * Similar to {@link: darwinia/balances/calls/setBalanceDeprecated}, but with scale encoded args.
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
         * See [`Pallet::force_transfer`].
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
         * Similar to {@link: darwinia/balances/calls/forceTransfer}, but with scale encoded args.
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
         * See [`Pallet::transfer_keep_alive`].
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
         * Similar to {@link: darwinia/balances/calls/transferKeepAlive}, but with scale encoded args.
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
         * See [`Pallet::transfer_all`].
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
         * Similar to {@link: darwinia/balances/calls/transferAll}, but with scale encoded args.
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
         * See [`Pallet::force_unreserve`].
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
         * Similar to {@link: darwinia/balances/calls/forceUnreserve}, but with scale encoded args.
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
         * See [`Pallet::upgrade_accounts`].
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
         * Similar to {@link: darwinia/balances/calls/upgradeAccounts}, but with scale encoded args.
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
         * See [`Pallet::transfer`].
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
         * Similar to {@link: darwinia/balances/calls/transfer}, but with scale encoded args.
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
         * See [`Pallet::force_set_balance`].
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
         * Similar to {@link: darwinia/balances/calls/forceSetBalance}, but with scale encoded args.
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

