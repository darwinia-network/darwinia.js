/**
 * This is the doc comment for pallet `Assets`'s calls. 
 * 
 * `Assets`'s storages: {@link: module:darwinia/assets/storages}
 *
 * @module darwinia/assets/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAssets = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::create`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _min_balance U128
         * @instance
         */
        create: async (signer: ethers.Signer, _id: unknown, _admin: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'create', false, {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/create}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_create`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _min_balance Compact<U128>
         * @instance
         */
        forceCreate: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'forceCreate', false, {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/forceCreate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceCreateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::start_destroy`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        startDestroy: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'startDestroy', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/startDestroy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        startDestroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::destroy_accounts`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        destroyAccounts: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'destroyAccounts', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/destroyAccounts}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyAccountsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::destroy_approvals`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        destroyApprovals: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'destroyApprovals', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/destroyApprovals}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        destroyApprovalsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::finish_destroy`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        finishDestroy: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'finishDestroy', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/finishDestroy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        finishDestroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::mint`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _beneficiary [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        mint: async (signer: ethers.Signer, _id: unknown, _beneficiary: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'mint', false, {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/mint}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        mintH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::burn`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        burn: async (signer: ethers.Signer, _id: unknown, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'burn', false, {
                id: _id,
                who: _who,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/burn}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        burnH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::transfer`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transfer: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'transfer', false, {
                id: _id,
                target: _target,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/transfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::transfer_keep_alive`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transferKeepAlive: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, {
                id: _id,
                target: _target,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/transferKeepAlive}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_transfer`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        forceTransfer: async (signer: ethers.Signer, _id: unknown, _source: unknown, _dest: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', false, {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/forceTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::freeze`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        freeze: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'freeze', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/freeze}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        freezeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::thaw`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        thaw: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'thaw', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/thaw}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        thawH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::freeze_asset`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        freezeAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/freezeAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        freezeAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::thaw_asset`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        thawAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/thawAsset}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        thawAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::transfer_ownership`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @instance
         */
        transferOwnership: async (signer: ethers.Signer, _id: unknown, _owner: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, {
                id: _id,
                owner: _owner,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/transferOwnership}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferOwnershipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::set_team`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _issuer [U8; 20]
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _freezer [U8; 20]
         * @instance
         */
        setTeam: async (signer: ethers.Signer, _id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'setTeam', false, {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/setTeam}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setTeamH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::set_metadata`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         * @instance
         */
        setMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/setMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::clear_metadata`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        clearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/clearMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_set_metadata`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         * @param {unknown} _is_frozen Bool
         * @instance
         */
        forceSetMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/forceSetMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceSetMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_clear_metadata`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        forceClearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/forceClearMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceClearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_asset_status`].
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
        forceAssetStatus: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionResponse> => {
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
         * Similar to {@link: darwinia/assets/calls/forceAssetStatus}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceAssetStatusH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::approve_transfer`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        approveTransfer: async (signer: ethers.Signer, _id: unknown, _delegate: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, {
                id: _id,
                delegate: _delegate,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/approveTransfer}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        approveTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::cancel_approval`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         * @instance
         */
        cancelApproval: async (signer: ethers.Signer, _id: unknown, _delegate: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, {
                id: _id,
                delegate: _delegate,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/cancelApproval}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::force_cancel_approval`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _delegate [U8; 20]
         * @instance
         */
        forceCancelApproval: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _delegate: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, {
                id: _id,
                owner: _owner,
                delegate: _delegate,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/forceCancelApproval}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        forceCancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::transfer_approved`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _destination [U8; 20]
         * @param {unknown} _amount Compact<U128>
         * @instance
         */
        transferApproved: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _destination: unknown, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'transferApproved', false, {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/transferApproved}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        transferApprovedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::touch`].
         *
         * @param {unknown} _id Compact<U64>
         * @instance
         */
        touch: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'touch', false, {
                id: _id,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/touch}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        touchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::refund`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _allow_burn Bool
         * @instance
         */
        refund: async (signer: ethers.Signer, _id: unknown, _allow_burn: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'refund', false, {
                id: _id,
                allow_burn: _allow_burn,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/refund}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::set_min_balance`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _min_balance U128
         * @instance
         */
        setMinBalance: async (signer: ethers.Signer, _id: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'setMinBalance', false, {
                id: _id,
                min_balance: _min_balance,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/setMinBalance}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMinBalanceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::touch_other`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        touchOther: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'touchOther', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/touchOther}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        touchOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::refund_other`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        refundOther: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'refundOther', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/refundOther}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundOtherH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::block`].
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        block: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Assets', 'block', false, {
                id: _id,
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/assets/calls/block}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        blockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

