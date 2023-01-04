import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBridgeDarwiniaGrandpa = (dispatch: Dispatch) => {
    return {
        /**
         * @param _finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}
         * @param _justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}>}
	 */
        submitFinalityProof: async (signer: ethers.Signer, _finality_target: unknown, _justification: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'submitFinalityProof', false, _finality_target, _justification);
        },

        /**
         * @param _init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}
	 */
        initialize: async (signer: ethers.Signer, _init_data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'initialize', false, _init_data);
        },

        /**
         * @param _new_owner: Enum<{None: , Some: [U8; 32]}>
	 */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOwner', false, _new_owner);
        },

        /**
         * @param _operational: Bool
	 */
        setOperational: async (signer: ethers.Signer, _operational: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOperational', false, _operational);
        },


    }
}
