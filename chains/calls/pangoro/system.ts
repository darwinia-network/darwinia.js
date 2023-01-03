import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSystem = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U32
	 */
        fillBlock: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        remark: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', false, param0);
        },

        /**
         * @param param0: U64
	 */
        setHeapPages: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        setCode: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', false, param0);
        },

        /**
         * @param param0: Vec<U8>
	 */
        setCodeWithoutChecks: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', false, param0);
        },

        /**
         * @param param0: Vec<(Vec<U8>, Vec<U8>)>
	 */
        setStorage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, param0);
        },

        /**
         * @param param0: Vec<Vec<U8>>
	 */
        killStorage: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, param0);
        },

        /**
         * @param param0: Vec<U8>
         * @param param1: U32
	 */
        killPrefix: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', false, param0, param1);
        },

        /**
         * @param param0: Vec<U8>
	 */
        remarkWithEvent: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, param0);
        },


    }
}
