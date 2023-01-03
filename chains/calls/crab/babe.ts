import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBabe = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}}
         * @param param1: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocation: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocation', false, param0, param1);
        },

        /**
         * @param param0: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}}
         * @param param1: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocationUnsigned: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocationUnsigned', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"1/V1"}>
	 */
        planConfigChange: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'planConfigChange', false, param0);
        },


    }
}
