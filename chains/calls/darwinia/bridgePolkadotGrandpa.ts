import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgePolkadotGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}
         * @param param1: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}
	 */
        submitFinalityProof: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotGrandpa', 'submitFinalityProof', false, param0, param1);
        },

        /**
         * @param param0: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}
	 */
        initialize: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotGrandpa', 'initialize', false, param0);
        },

        /**
         * @param param0: Enum<{"0/None", "1/Some"}>
	 */
        setOwner: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotGrandpa', 'setOwner', false, param0);
        },

        /**
         * @param param0: Bool
	 */
        setOperational: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgePolkadotGrandpa', 'setOperational', false, param0);
        },


    }
}
