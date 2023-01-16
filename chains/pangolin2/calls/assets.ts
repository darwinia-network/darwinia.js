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
         * The origin must be Signed and the sender must have sufficient funds free.
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
         * @param _id: Compact<U64>
         * @param _admin: [U8; 20]
         * @param _min_balance: U128
         */
        create: async (signer: ethers.Signer, _id: unknown, _admin: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', false, {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
	    });
        },

        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', true, argsBytes);
        },

        buildCreateCall: (_id: unknown, _admin: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'create', {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         * @param _is_sufficient: Bool
         * @param _min_balance: Compact<U128>
         */
        forceCreate: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', false, {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
	    });
        },

        forceCreateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', true, argsBytes);
        },

        buildForceCreateCall: (_id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCreate', {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
            });
        },

        buildForceCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceCreate', argsBytes)
        },

        /**
         * Destroy a class of fungible assets.
         * 
         * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
         * owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         * asset.
         * 
         * Emits `Destroyed` event when successful.
         * 
         * NOTE: It can be helpful to first freeze an asset before destroying it so that you
         * can provide accurate witness information and prevent users from manipulating state
         * in a way that can make it harder to destroy.
         * 
         * Weight: `O(c + p + a)` where:
         * - `c = (witness.accounts - witness.sufficients)`
         * - `s = witness.sufficients`
         * - `a = witness.approvals`
         *
         * @param _id: Compact<U64>
         * @param _witness: {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}
         */
        destroy: async (signer: ethers.Signer, _id: unknown, _witness: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', false, {
                id: _id,
                witness: _witness,
	    });
        },

        destroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', true, argsBytes);
        },

        buildDestroyCall: (_id: unknown, _witness: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'destroy', {
                id: _id,
                witness: _witness,
            });
        },

        buildDestroyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'destroy', argsBytes)
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
         * @param _id: Compact<U64>
         * @param _beneficiary: [U8; 20]
         * @param _amount: Compact<U128>
         */
        mint: async (signer: ethers.Signer, _id: unknown, _beneficiary: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', false, {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
	    });
        },

        mintH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', true, argsBytes);
        },

        buildMintCall: (_id: unknown, _beneficiary: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'mint', {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
         * @param _amount: Compact<U128>
         */
        burn: async (signer: ethers.Signer, _id: unknown, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', false, {
                id: _id,
                who: _who,
                amount: _amount,
	    });
        },

        burnH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', true, argsBytes);
        },

        buildBurnCall: (_id: unknown, _who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'burn', {
                id: _id,
                who: _who,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _target: [U8; 20]
         * @param _amount: Compact<U128>
         */
        transfer: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', false, {
                id: _id,
                target: _target,
                amount: _amount,
	    });
        },

        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', true, argsBytes);
        },

        buildTransferCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transfer', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _target: [U8; 20]
         * @param _amount: Compact<U128>
         */
        transferKeepAlive: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, {
                id: _id,
                target: _target,
                amount: _amount,
	    });
        },

        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', true, argsBytes);
        },

        buildTransferKeepAliveCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferKeepAlive', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _source: [U8; 20]
         * @param _dest: [U8; 20]
         * @param _amount: Compact<U128>
         */
        forceTransfer: async (signer: ethers.Signer, _id: unknown, _source: unknown, _dest: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', false, {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
	    });
        },

        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', true, argsBytes);
        },

        buildForceTransferCall: (_id: unknown, _source: unknown, _dest: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceTransfer', {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
            });
        },

        buildForceTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceTransfer', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers from an account.
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
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
         */
        freeze: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', false, {
                id: _id,
                who: _who,
	    });
        },

        freezeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', true, argsBytes);
        },

        buildFreezeCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freeze', {
                id: _id,
                who: _who,
            });
        },

        buildFreezeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'freeze', argsBytes)
        },

        /**
         * Allow unprivileged transfers from an account again.
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
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
         */
        thaw: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', false, {
                id: _id,
                who: _who,
	    });
        },

        thawH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', true, argsBytes);
        },

        buildThawCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thaw', {
                id: _id,
                who: _who,
            });
        },

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
         * @param _id: Compact<U64>
         */
        freezeAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, {
                id: _id,
	    });
        },

        freezeAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', true, argsBytes);
        },

        buildFreezeAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freezeAsset', {
                id: _id,
            });
        },

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
         * @param _id: Compact<U64>
         */
        thawAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, {
                id: _id,
	    });
        },

        thawAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', true, argsBytes);
        },

        buildThawAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thawAsset', {
                id: _id,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         */
        transferOwnership: async (signer: ethers.Signer, _id: unknown, _owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, {
                id: _id,
                owner: _owner,
	    });
        },

        transferOwnershipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', true, argsBytes);
        },

        buildTransferOwnershipCall: (_id: unknown, _owner: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferOwnership', {
                id: _id,
                owner: _owner,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _issuer: [U8; 20]
         * @param _admin: [U8; 20]
         * @param _freezer: [U8; 20]
         */
        setTeam: async (signer: ethers.Signer, _id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', false, {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
	    });
        },

        setTeamH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', true, argsBytes);
        },

        buildSetTeamCall: (_id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setTeam', {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _name: Vec<U8>
         * @param _symbol: Vec<U8>
         * @param _decimals: U8
         */
        setMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
	    });
        },

        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', true, argsBytes);
        },

        buildSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
            });
        },

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
         * @param _id: Compact<U64>
         */
        clearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, {
                id: _id,
	    });
        },

        clearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', true, argsBytes);
        },

        buildClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'clearMetadata', {
                id: _id,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _name: Vec<U8>
         * @param _symbol: Vec<U8>
         * @param _decimals: U8
         * @param _is_frozen: Bool
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

        forceSetMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', true, argsBytes);
        },

        buildForceSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceSetMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
            });
        },

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
         * @param _id: Compact<U64>
         */
        forceClearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, {
                id: _id,
	    });
        },

        forceClearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', true, argsBytes);
        },

        buildForceClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceClearMetadata', {
                id: _id,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         * @param _issuer: [U8; 20]
         * @param _admin: [U8; 20]
         * @param _freezer: [U8; 20]
         * @param _min_balance: Compact<U128>
         * @param _is_sufficient: Bool
         * @param _is_frozen: Bool
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

        forceAssetStatusH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', true, argsBytes);
        },

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
         * @param _id: Compact<U64>
         * @param _delegate: [U8; 20]
         * @param _amount: Compact<U128>
         */
        approveTransfer: async (signer: ethers.Signer, _id: unknown, _delegate: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, {
                id: _id,
                delegate: _delegate,
                amount: _amount,
	    });
        },

        approveTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', true, argsBytes);
        },

        buildApproveTransferCall: (_id: unknown, _delegate: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'approveTransfer', {
                id: _id,
                delegate: _delegate,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _delegate: [U8; 20]
         */
        cancelApproval: async (signer: ethers.Signer, _id: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, {
                id: _id,
                delegate: _delegate,
	    });
        },

        cancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', true, argsBytes);
        },

        buildCancelApprovalCall: (_id: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'cancelApproval', {
                id: _id,
                delegate: _delegate,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         * @param _delegate: [U8; 20]
         */
        forceCancelApproval: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, {
                id: _id,
                owner: _owner,
                delegate: _delegate,
	    });
        },

        forceCancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', true, argsBytes);
        },

        buildForceCancelApprovalCall: (_id: unknown, _owner: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCancelApproval', {
                id: _id,
                owner: _owner,
                delegate: _delegate,
            });
        },

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
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         * @param _destination: [U8; 20]
         * @param _amount: Compact<U128>
         */
        transferApproved: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _destination: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', false, {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
	    });
        },

        transferApprovedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', true, argsBytes);
        },

        buildTransferApprovedCall: (_id: unknown, _owner: unknown, _destination: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferApproved', {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
            });
        },

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
         * @param _id: Compact<U64>
         */
        touch: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', false, {
                id: _id,
	    });
        },

        touchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', true, argsBytes);
        },

        buildTouchCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'touch', {
                id: _id,
            });
        },

        buildTouchCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'touch', argsBytes)
        },

        /**
         * Return the deposit (if any) of an asset account.
         * 
         * The origin must be Signed.
         * 
         * - `id`: The identifier of the asset for the account to be created.
         * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         * 
         * Emits `Refunded` event when successful.
         *
         * @param _id: Compact<U64>
         * @param _allow_burn: Bool
         */
        refund: async (signer: ethers.Signer, _id: unknown, _allow_burn: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', false, {
                id: _id,
                allow_burn: _allow_burn,
	    });
        },

        refundH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', true, argsBytes);
        },

        buildRefundCall: (_id: unknown, _allow_burn: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'refund', {
                id: _id,
                allow_burn: _allow_burn,
            });
        },

        buildRefundCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'refund', argsBytes)
        },

    }
}
