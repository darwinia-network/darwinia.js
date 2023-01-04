import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAssets = (dispatch: Dispatch) => {
    return {
        /**
         * @param _id: Compact<U64>
         * @param _admin: [U8; 20]
         * @param _min_balance: U128
	 */
        create: async (signer: ethers.Signer, _id: unknown, _admin: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', false, _id, _admin, _min_balance);
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

        /**
         * @param _id: Compact<U64>
         * @param _witness: {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}
	 */
        destroy: async (signer: ethers.Signer, _id: unknown, _witness: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', false, _id, _witness);
        },

        /**
         * @param _id: Compact<U64>
         * @param _beneficiary: [U8; 20]
         * @param _amount: Compact<U128>
	 */
        mint: async (signer: ethers.Signer, _id: unknown, _beneficiary: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', false, _id, _beneficiary, _amount);
        },

        /**
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
         * @param _amount: Compact<U128>
	 */
        burn: async (signer: ethers.Signer, _id: unknown, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', false, _id, _who, _amount);
        },

        /**
         * @param _id: Compact<U64>
         * @param _target: [U8; 20]
         * @param _amount: Compact<U128>
	 */
        transfer: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', false, _id, _target, _amount);
        },

        /**
         * @param _id: Compact<U64>
         * @param _target: [U8; 20]
         * @param _amount: Compact<U128>
	 */
        transferKeepAlive: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, _id, _target, _amount);
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

        /**
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
	 */
        freeze: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', false, _id, _who);
        },

        /**
         * @param _id: Compact<U64>
         * @param _who: [U8; 20]
	 */
        thaw: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', false, _id, _who);
        },

        /**
         * @param _id: Compact<U64>
	 */
        freezeAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, _id);
        },

        /**
         * @param _id: Compact<U64>
	 */
        thawAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, _id);
        },

        /**
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
	 */
        transferOwnership: async (signer: ethers.Signer, _id: unknown, _owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, _id, _owner);
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

        /**
         * @param _id: Compact<U64>
         * @param _name: Vec<U8>
         * @param _symbol: Vec<U8>
         * @param _decimals: U8
	 */
        setMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, _id, _name, _symbol, _decimals);
        },

        /**
         * @param _id: Compact<U64>
	 */
        clearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, _id);
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

        /**
         * @param _id: Compact<U64>
	 */
        forceClearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, _id);
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

        /**
         * @param _id: Compact<U64>
         * @param _delegate: [U8; 20]
         * @param _amount: Compact<U128>
	 */
        approveTransfer: async (signer: ethers.Signer, _id: unknown, _delegate: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, _id, _delegate, _amount);
        },

        /**
         * @param _id: Compact<U64>
         * @param _delegate: [U8; 20]
	 */
        cancelApproval: async (signer: ethers.Signer, _id: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, _id, _delegate);
        },

        /**
         * @param _id: Compact<U64>
         * @param _owner: [U8; 20]
         * @param _delegate: [U8; 20]
	 */
        forceCancelApproval: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, _id, _owner, _delegate);
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

        /**
         * @param _id: Compact<U64>
	 */
        touch: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', false, _id);
        },

        /**
         * @param _id: Compact<U64>
         * @param _allow_burn: Bool
	 */
        refund: async (signer: ethers.Signer, _id: unknown, _allow_burn: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', false, _id, _allow_burn);
        },


    }
}
