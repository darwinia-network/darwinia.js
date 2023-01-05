import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getAssets = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
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
