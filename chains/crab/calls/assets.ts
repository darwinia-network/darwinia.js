/**
 * This is the doc comment for pallet `Assets`'s calls. 
 * 
 * `Assets`'s storages: {@link: module:crab/assets/storages}
 *
 * @module crab/assets/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAssets = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Issue a new class of fungible assets from a public origin.
         * 
         * This new asset class has no assets initially and its owner is the origin.
         * 
         * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         * 
         * Funds of sender are reserved by `AssetDeposit`.
         * 
         * Parameters:
         * - `id`: The identifier of the new asset. This must not be currently in use to identify
         * an existing asset.
         * - `admin`: The admin of this class of assets. The admin is the initial address of each
         * member of the asset class's admin team.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * 
         * Emits `Created` event when successful.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _min_balance U128
         * @instance
         */
        create: async (signer: ethers.Signer, _id: unknown, _admin: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', false, {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/create}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCreateCall: (_id: unknown, _admin: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'create', {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCreateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'create', argsBytes)
        },

        /**
         * Issue a new class of fungible assets from a privileged origin.
         * 
         * This new asset class has no assets initially.
         * 
         * The origin must conform to `ForceOrigin`.
         * 
         * Unlike `create`, no funds are reserved.
         * 
         * - `id`: The identifier of the new asset. This must not be currently in use to identify
         * an existing asset.
         * - `owner`: The owner of this class of assets. The owner has full superuser permissions
         * over this asset, but may later change and configure the permissions using
         * `transfer_ownership` and `set_team`.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * 
         * Emits `ForceCreated` event when successful.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _min_balance Compact<U128>
         * @instance
         */
        forceCreate: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', false, {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceCreate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceCreateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceCreateCall: (_id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCreate', {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceCreateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceCreate', argsBytes)
        },

        /**
         * Start the process of destroying a fungible asset class.
         * 
         * `start_destroy` is the first in a series of extrinsics that should be called, to allow
         * destruction of an asset class.
         * 
         * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         *   asset.
         * 
         * The asset class must be frozen before calling `start_destroy`.
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        startDestroy: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'startDestroy', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/startDestroy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        startDestroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'startDestroy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildStartDestroyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'startDestroy', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildStartDestroyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildStartDestroyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'startDestroy', argsBytes)
        },

        /**
         * Destroy all accounts associated with a given asset.
         * 
         * `destroy_accounts` should only be called after `start_destroy` has been called, and the
         * asset is in a `Destroying` state.
         * 
         * Due to weight restrictions, this function may need to be called multiple times to fully
         * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         *   asset.
         * 
         * Each call emits the `Event::DestroyedAccounts` event.
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        destroyAccounts: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroyAccounts', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/destroyAccounts}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyAccountsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroyAccounts', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyAccountsCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'destroyAccounts', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDestroyAccountsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyAccountsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'destroyAccounts', argsBytes)
        },

        /**
         * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
         * 
         * `destroy_approvals` should only be called after `start_destroy` has been called, and the
         * asset is in a `Destroying` state.
         * 
         * Due to weight restrictions, this function may need to be called multiple times to fully
         * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         *   asset.
         * 
         * Each call emits the `Event::DestroyedApprovals` event.
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        destroyApprovals: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroyApprovals', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/destroyApprovals}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyApprovalsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroyApprovals', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyApprovalsCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'destroyApprovals', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDestroyApprovalsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDestroyApprovalsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'destroyApprovals', argsBytes)
        },

        /**
         * Complete destroying asset and unreserve currency.
         * 
         * `finish_destroy` should only be called after `start_destroy` has been called, and the
         * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
         * hand.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         *   asset.
         * 
         * Each successful call emits the `Event::Destroyed` event.
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        finishDestroy: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'finishDestroy', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/finishDestroy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        finishDestroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'finishDestroy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFinishDestroyCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'finishDestroy', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFinishDestroyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFinishDestroyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'finishDestroy', argsBytes)
        },

        /**
         * Mint assets of a particular class.
         * 
         * The origin must be Signed and the sender must be the Issuer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to have some amount minted.
         * - `beneficiary`: The account to be credited with the minted assets.
         * - `amount`: The amount of the asset to be minted.
         * 
         * Emits `Issued` event when successful.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _beneficiary [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        mint: async (signer: ethers.Signer, _id: unknown, _beneficiary: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', false, {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/mint}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        mintH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildMintCall: (_id: unknown, _beneficiary: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'mint', {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildMintCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildMintCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'mint', argsBytes)
        },

        /**
         * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         * 
         * Origin must be Signed and the sender should be the Manager of the asset `id`.
         * 
         * Bails with `NoAccount` if the `who` is already dead.
         * 
         * - `id`: The identifier of the asset to have some amount burned.
         * - `who`: The account to be debited from.
         * - `amount`: The maximum amount by which `who`'s balance should be reduced.
         * 
         * Emits `Burned` with the actual amount burned. If this takes the balance to below the
         * minimum for the asset, then the amount burned is increased to take it to zero.
         * 
         * Weight: `O(1)`
         * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        burn: async (signer: ethers.Signer, _id: unknown, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', false, {
                id: _id,
                who: _who,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/burn}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        burnH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildBurnCall: (_id: unknown, _who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'burn', {
                id: _id,
                who: _who,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildBurnCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildBurnCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'burn', argsBytes)
        },

        /**
         * Move some assets from the sender account to another.
         * 
         * Origin must be Signed.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `target`: The account to be credited.
         * - `amount`: The amount by which the sender's balance of assets should be reduced and
         * `target`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the sender balance above zero but below
         * the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         * `target`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transfer: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', false, {
                id: _id,
                target: _target,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/transfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transfer', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransferCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transfer', argsBytes)
        },

        /**
         * Move some assets from the sender account to another, keeping the sender account alive.
         * 
         * Origin must be Signed.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `target`: The account to be credited.
         * - `amount`: The amount by which the sender's balance of assets should be reduced and
         * `target`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the sender balance above zero but below
         * the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         * `target`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transferKeepAlive: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, {
                id: _id,
                target: _target,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/transferKeepAlive}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferKeepAliveCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferKeepAlive', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransferKeepAliveCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransferKeepAliveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferKeepAlive', argsBytes)
        },

        /**
         * Move some assets from one account to another.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `source`: The account to be debited.
         * - `dest`: The account to be credited.
         * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
         * `dest`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the `source` balance above zero but
         * below the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         * `dest`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        forceTransfer: async (signer: ethers.Signer, _id: unknown, _source: unknown, _dest: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', false, {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceTransferCall: (_id: unknown, _source: unknown, _dest: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceTransfer', {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceTransferCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceTransfer', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
         * must already exist as an entry in `Account`s of the asset. If you want to freeze an
         * account that does not have an entry, use `touch_other` first.
         * 
         * Origin must be Signed and the sender should be the Freezer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `who`: The account to be frozen.
         * 
         * Emits `Frozen`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        freeze: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/freeze}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        freezeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFreezeCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freeze', {
                id: _id,
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFreezeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFreezeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'freeze', argsBytes)
        },

        /**
         * Allow unprivileged transfers to and from an account again.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `who`: The account to be unfrozen.
         * 
         * Emits `Thawed`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        thaw: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/thaw}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        thawH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildThawCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thaw', {
                id: _id,
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildThawCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildThawCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'thaw', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers for the asset class.
         * 
         * Origin must be Signed and the sender should be the Freezer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * 
         * Emits `Frozen`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        freezeAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/freezeAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        freezeAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFreezeAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freezeAsset', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFreezeAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFreezeAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'freezeAsset', argsBytes)
        },

        /**
         * Allow unprivileged transfers for the asset again.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be thawed.
         * 
         * Emits `Thawed`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        thawAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/thawAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        thawAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildThawAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thawAsset', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildThawAssetCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildThawAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'thawAsset', argsBytes)
        },

        /**
         * Change the Owner of an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The new Owner of this asset.
         * 
         * Emits `OwnerChanged`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @instance
         */
        transferOwnership: async (signer: ethers.Signer, _id: unknown, _owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, {
                id: _id,
                owner: _owner,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/transferOwnership}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferOwnershipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferOwnershipCall: (_id: unknown, _owner: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferOwnership', {
                id: _id,
                owner: _owner,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransferOwnershipCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransferOwnershipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferOwnership', argsBytes)
        },

        /**
         * Change the Issuer, Admin and Freezer of an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `issuer`: The new Issuer of this asset.
         * - `admin`: The new Admin of this asset.
         * - `freezer`: The new Freezer of this asset.
         * 
         * Emits `TeamChanged`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _issuer [U8; 20]
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _freezer [U8; 20]
         * @instance
         */
        setTeam: async (signer: ethers.Signer, _id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', false, {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/setTeam}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setTeamH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetTeamCall: (_id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setTeam', {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetTeamCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetTeamCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'setTeam', argsBytes)
        },

        /**
         * Set the metadata for an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * Funds of sender are reserved according to the formula:
         * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         * account any already reserved funds.
         * 
         * - `id`: The identifier of the asset to update.
         * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         * - `decimals`: The number of decimals this asset uses to represent one unit.
         * 
         * Emits `MetadataSet`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         * @instance
         */
        setMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/setMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'setMetadata', argsBytes)
        },

        /**
         * Clear the metadata for an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * Any deposit is freed for the asset owner.
         * 
         * - `id`: The identifier of the asset to clear.
         * 
         * Emits `MetadataCleared`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        clearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/clearMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'clearMetadata', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClearMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClearMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'clearMetadata', argsBytes)
        },

        /**
         * Force the metadata for an asset to some value.
         * 
         * Origin must be ForceOrigin.
         * 
         * Any deposit is left alone.
         * 
         * - `id`: The identifier of the asset to update.
         * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         * - `decimals`: The number of decimals this asset uses to represent one unit.
         * 
         * Emits `MetadataSet`.
         * 
         * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         * @param {unknown} _is_frozen Bool
         * @instance
         */
        forceSetMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceSetMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceSetMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceSetMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceSetMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceSetMetadata', argsBytes)
        },

        /**
         * Clear the metadata for an asset.
         * 
         * Origin must be ForceOrigin.
         * 
         * Any deposit is returned.
         * 
         * - `id`: The identifier of the asset to clear.
         * 
         * Emits `MetadataCleared`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        forceClearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceClearMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceClearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceClearMetadata', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceClearMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceClearMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceClearMetadata', argsBytes)
        },

        /**
         * Alter the attributes of a given asset.
         * 
         * Origin must be `ForceOrigin`.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The new Owner of this asset.
         * - `issuer`: The new Issuer of this asset.
         * - `admin`: The new Admin of this asset.
         * - `freezer`: The new Freezer of this asset.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         * value to account for the state bloat associated with its balance storage. If set to
         * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
         * an ED in the Balances pallet or whatever else is used to control user-account state
         * growth).
         * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         * instructions.
         * 
         * Emits `AssetStatusChanged` with the identity of the asset.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _issuer [U8; 20]
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _freezer [U8; 20]
         * @param {unknown} _min_balance Compact<U128>
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _is_frozen Bool
         * @instance
         */
        forceAssetStatus: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', false, {
                id: _id,
                owner: _owner,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
                min_balance: _min_balance,
                is_sufficient: _is_sufficient,
                is_frozen: _is_frozen,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceAssetStatus}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceAssetStatusH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceAssetStatusCall: (_id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceAssetStatus', {
                id: _id,
                owner: _owner,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
                min_balance: _min_balance,
                is_sufficient: _is_sufficient,
                is_frozen: _is_frozen,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceAssetStatusCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceAssetStatusCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceAssetStatus', argsBytes)
        },

        /**
         * Approve an amount of asset for transfer by a delegated third-party account.
         * 
         * Origin must be Signed.
         * 
         * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         * for the purpose of holding the approval. If some non-zero amount of assets is already
         * approved from signing account to `delegate`, then it is topped up or unreserved to
         * meet the right value.
         * 
         * NOTE: The signing account does not need to own `amount` of assets at the point of
         * making this call.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account to delegate permission to transfer asset.
         * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
         * already an approval in place, then this acts additively.
         * 
         * Emits `ApprovedTransfer` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        approveTransfer: async (signer: ethers.Signer, _id: unknown, _delegate: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, {
                id: _id,
                delegate: _delegate,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/approveTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        approveTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildApproveTransferCall: (_id: unknown, _delegate: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'approveTransfer', {
                id: _id,
                delegate: _delegate,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildApproveTransferCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildApproveTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'approveTransfer', argsBytes)
        },

        /**
         * Cancel all of some asset approved for delegated transfer by a third-party account.
         * 
         * Origin must be Signed and there must be an approval in place between signer and
         * `delegate`.
         * 
         * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account delegated permission to transfer asset.
         * 
         * Emits `ApprovalCancelled` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         * @instance
         */
        cancelApproval: async (signer: ethers.Signer, _id: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, {
                id: _id,
                delegate: _delegate,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/cancelApproval}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelApprovalCall: (_id: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'cancelApproval', {
                id: _id,
                delegate: _delegate,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelApprovalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelApprovalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'cancelApproval', argsBytes)
        },

        /**
         * Cancel all of some asset approved for delegated transfer by a third-party account.
         * 
         * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         * account of the asset `id`.
         * 
         * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account delegated permission to transfer asset.
         * 
         * Emits `ApprovalCancelled` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _delegate [U8; 20]
         * @instance
         */
        forceCancelApproval: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, {
                id: _id,
                owner: _owner,
                delegate: _delegate,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/forceCancelApproval}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceCancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildForceCancelApprovalCall: (_id: unknown, _owner: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCancelApproval', {
                id: _id,
                owner: _owner,
                delegate: _delegate,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildForceCancelApprovalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildForceCancelApprovalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceCancelApproval', argsBytes)
        },

        /**
         * Transfer some asset balance from a previously delegated account to some third-party
         * account.
         * 
         * Origin must be Signed and there must be an approval in place by the `owner` to the
         * signer.
         * 
         * If the entire amount approved for transfer is transferred, then any deposit previously
         * reserved by `approve_transfer` is unreserved.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The account which previously approved for a transfer of at least `amount` and
         * from which the asset balance will be withdrawn.
         * - `destination`: The account to which the asset balance of `amount` will be transferred.
         * - `amount`: The amount of assets to transfer.
         * 
         * Emits `TransferredApproved` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _destination [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transferApproved: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _destination: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', false, {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/transferApproved}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferApprovedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTransferApprovedCall: (_id: unknown, _owner: unknown, _destination: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferApproved', {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTransferApprovedCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTransferApprovedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferApproved', argsBytes)
        },

        /**
         * Create an asset account for non-provider assets.
         * 
         * A deposit will be taken from the signer account.
         * 
         * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *   to be taken.
         * - `id`: The identifier of the asset for the account to be created.
         * 
         * Emits `Touched` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        touch: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/touch}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        touchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTouchCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'touch', {
                id: _id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTouchCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTouchCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'touch', argsBytes)
        },

        /**
         * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
         * account.
         * 
         * The origin must be Signed.
         * 
         * - `id`: The identifier of the asset for which the caller would like the deposit
         *   refunded.
         * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         * 
         * Emits `Refunded` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _allow_burn Bool
         * @instance
         */
        refund: async (signer: ethers.Signer, _id: unknown, _allow_burn: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', false, {
                id: _id,
                allow_burn: _allow_burn,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/refund}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRefundCall: (_id: unknown, _allow_burn: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'refund', {
                id: _id,
                allow_burn: _allow_burn,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRefundCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRefundCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'refund', argsBytes)
        },

        /**
         * Sets the minimum balance of an asset.
         * 
         * Only works if there aren't any accounts that are holding the asset or if
         * the new value of `min_balance` is less than the old one.
         * 
         * Origin must be Signed and the sender has to be the Owner of the
         * asset `id`.
         * 
         * - `id`: The identifier of the asset.
         * - `min_balance`: The new value of `min_balance`.
         * 
         * Emits `AssetMinBalanceChanged` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _min_balance U128
         * @instance
         */
        setMinBalance: async (signer: ethers.Signer, _id: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMinBalance', false, {
                id: _id,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/setMinBalance}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMinBalanceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMinBalance', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMinBalanceCall: (_id: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setMinBalance', {
                id: _id,
                min_balance: _min_balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMinBalanceCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMinBalanceCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'setMinBalance', argsBytes)
        },

        /**
         * Create an asset account for `who`.
         * 
         * A deposit will be taken from the signer account.
         * 
         * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
         *   must have sufficient funds for a deposit to be taken.
         * - `id`: The identifier of the asset for the account to be created.
         * - `who`: The account to be created.
         * 
         * Emits `Touched` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        touchOther: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touchOther', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/touchOther}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        touchOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touchOther', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildTouchOtherCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'touchOther', {
                id: _id,
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildTouchOtherCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildTouchOtherCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'touchOther', argsBytes)
        },

        /**
         * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
         * 
         * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
         * order to burn a non-zero balance of the asset, the caller must be the account and should
         * use `refund`.
         * 
         * - `id`: The identifier of the asset for the account holding a deposit.
         * - `who`: The account to refund.
         * 
         * Emits `Refunded` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        refundOther: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refundOther', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/refundOther}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refundOther', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRefundOtherCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'refundOther', {
                id: _id,
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRefundOtherCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRefundOtherCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'refundOther', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
         * 
         * Origin must be Signed and the sender should be the Freezer of the asset `id`.
         * 
         * - `id`: The identifier of the account's asset.
         * - `who`: The account to be unblocked.
         * 
         * Emits `Blocked`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        block: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'block', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: crab/assets/calls/block}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        blockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'block', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildBlockCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'block', {
                id: _id,
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildBlockCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildBlockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'block', argsBytes)
        },

    }
}

