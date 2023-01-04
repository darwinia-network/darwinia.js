import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgeKusamaGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param _finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}
         * @param _justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}>}
	 */
        submitFinalityProof: async (signer: ethers.Signer, _finality_target: unknown, _justification: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeKusamaGrandpa', 'submitFinalityProof', false, _finality_target, _justification);
        },

        /**
         * @param _init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{"6/PreRuntime", "4/Consensus", "5/Seal", "0/Other", "8/RuntimeEnvironmentUpdated"}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}
	 */
        initialize: async (signer: ethers.Signer, _init_data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeKusamaGrandpa', 'initialize', false, _init_data);
        },

        /**
         * @param _new_owner: Enum<{"0/None", "1/Some"}>
	 */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeKusamaGrandpa', 'setOwner', false, _new_owner);
        },

        /**
         * @param _operational: Bool
	 */
        setOperational: async (signer: ethers.Signer, _operational: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeKusamaGrandpa', 'setOperational', false, _operational);
        },


    }
}
