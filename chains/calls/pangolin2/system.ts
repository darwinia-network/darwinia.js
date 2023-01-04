import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSystem = (dispatch: Dispatch) => {
    return {
        /**
         * @param _ratio: U32
	 */
        fillBlock: async (signer: ethers.Signer, _ratio: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', false, _ratio);
        },

        /**
         * @param _remark: Vec<U8>
	 */
        remark: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', false, _remark);
        },

        /**
         * @param _pages: U64
	 */
        setHeapPages: async (signer: ethers.Signer, _pages: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, _pages);
        },

        /**
         * @param _code: Vec<U8>
	 */
        setCode: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', false, _code);
        },

        /**
         * @param _code: Vec<U8>
	 */
        setCodeWithoutChecks: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', false, _code);
        },

        /**
         * @param _items: Vec<(Vec<U8>, Vec<U8>)>
	 */
        setStorage: async (signer: ethers.Signer, _items: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, _items);
        },

        /**
         * @param _keys: Vec<Vec<U8>>
	 */
        killStorage: async (signer: ethers.Signer, _keys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, _keys);
        },

        /**
         * @param _prefix: Vec<U8>
         * @param _subkeys: U32
	 */
        killPrefix: async (signer: ethers.Signer, _prefix: unknown, _subkeys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', false, _prefix, _subkeys);
        },

        /**
         * @param _remark: Vec<U8>
	 */
        remarkWithEvent: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, _remark);
        },


    }
}
