import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

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
            return await dispatch(signer, 'Assets', 'create', false, _id, _admin, _min_balance);
        },

        createD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', true, data);
        },

        createCall: (_id: unknown, _admin: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'create', {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
            });
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
            return await dispatch(signer, 'Assets', 'forceCreate', false, _id, _owner, _is_sufficient, _min_balance);
        },

        forceCreateD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', true, data);
        },

        forceCreateCall: (_id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCreate', {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
            });
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
            return await dispatch(signer, 'Assets', 'destroy', false, _id, _witness);
        },

        destroyD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', true, data);
        },

        destroyCall: (_id: unknown, _witness: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'destroy', {
                id: _id,
                witness: _witness,
            });
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
            return await dispatch(signer, 'Assets', 'mint', false, _id, _beneficiary, _amount);
        },

        mintD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', true, data);
        },

        mintCall: (_id: unknown, _beneficiary: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'mint', {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'burn', false, _id, _who, _amount);
        },

        burnD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', true, data);
        },

        burnCall: (_id: unknown, _who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'burn', {
                id: _id,
                who: _who,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'transfer', false, _id, _target, _amount);
        },

        transferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', true, data);
        },

        transferCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transfer', {
                id: _id,
                target: _target,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, _id, _target, _amount);
        },

        transferKeepAliveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', true, data);
        },

        transferKeepAliveCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferKeepAlive', {
                id: _id,
                target: _target,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'forceTransfer', false, _id, _source, _dest, _amount);
        },

        forceTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', true, data);
        },

        forceTransferCall: (_id: unknown, _source: unknown, _dest: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceTransfer', {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'freeze', false, _id, _who);
        },

        freezeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', true, data);
        },

        freezeCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freeze', {
                id: _id,
                who: _who,
            });
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
            return await dispatch(signer, 'Assets', 'thaw', false, _id, _who);
        },

        thawD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', true, data);
        },

        thawCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thaw', {
                id: _id,
                who: _who,
            });
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
            return await dispatch(signer, 'Assets', 'freezeAsset', false, _id);
        },

        freezeAssetD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', true, data);
        },

        freezeAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freezeAsset', {
                id: _id,
            });
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
            return await dispatch(signer, 'Assets', 'thawAsset', false, _id);
        },

        thawAssetD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', true, data);
        },

        thawAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thawAsset', {
                id: _id,
            });
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
            return await dispatch(signer, 'Assets', 'transferOwnership', false, _id, _owner);
        },

        transferOwnershipD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', true, data);
        },

        transferOwnershipCall: (_id: unknown, _owner: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferOwnership', {
                id: _id,
                owner: _owner,
            });
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
            return await dispatch(signer, 'Assets', 'setTeam', false, _id, _issuer, _admin, _freezer);
        },

        setTeamD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', true, data);
        },

        setTeamCall: (_id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setTeam', {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
            });
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
            return await dispatch(signer, 'Assets', 'setMetadata', false, _id, _name, _symbol, _decimals);
        },

        setMetadataD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', true, data);
        },

        setMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
            });
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
            return await dispatch(signer, 'Assets', 'clearMetadata', false, _id);
        },

        clearMetadataD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', true, data);
        },

        clearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'clearMetadata', {
                id: _id,
            });
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
            return await dispatch(signer, 'Assets', 'forceSetMetadata', false, _id, _name, _symbol, _decimals, _is_frozen);
        },

        forceSetMetadataD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', true, data);
        },

        forceSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceSetMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
            });
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
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, _id);
        },

        forceClearMetadataD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', true, data);
        },

        forceClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceClearMetadata', {
                id: _id,
            });
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
            return await dispatch(signer, 'Assets', 'forceAssetStatus', false, _id, _owner, _issuer, _admin, _freezer, _min_balance, _is_sufficient, _is_frozen);
        },

        forceAssetStatusD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', true, data);
        },

        forceAssetStatusCall: (_id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown) => {
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
            return await dispatch(signer, 'Assets', 'approveTransfer', false, _id, _delegate, _amount);
        },

        approveTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', true, data);
        },

        approveTransferCall: (_id: unknown, _delegate: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'approveTransfer', {
                id: _id,
                delegate: _delegate,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'cancelApproval', false, _id, _delegate);
        },

        cancelApprovalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', true, data);
        },

        cancelApprovalCall: (_id: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'cancelApproval', {
                id: _id,
                delegate: _delegate,
            });
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
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, _id, _owner, _delegate);
        },

        forceCancelApprovalD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', true, data);
        },

        forceCancelApprovalCall: (_id: unknown, _owner: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCancelApproval', {
                id: _id,
                owner: _owner,
                delegate: _delegate,
            });
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
            return await dispatch(signer, 'Assets', 'transferApproved', false, _id, _owner, _destination, _amount);
        },

        transferApprovedD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', true, data);
        },

        transferApprovedCall: (_id: unknown, _owner: unknown, _destination: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferApproved', {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
            });
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
            return await dispatch(signer, 'Assets', 'touch', false, _id);
        },

        touchD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', true, data);
        },

        touchCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'touch', {
                id: _id,
            });
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
            return await dispatch(signer, 'Assets', 'refund', false, _id, _allow_burn);
        },

        refundD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', true, data);
        },

        refundCall: (_id: unknown, _allow_burn: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'refund', {
                id: _id,
                allow_burn: _allow_burn,
            });
        },

    }
}
