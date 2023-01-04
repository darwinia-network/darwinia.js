import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBabe = (dispatch: Dispatch) => {
    return {
        /**
         * @param _equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}}
         * @param _key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocation', false, _equivocation_proof, _key_owner_proof);
        },

        /**
         * @param _equivocation_proof: {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{PreRuntime: ([U8; 4], Vec<U8>), Consensus: ([U8; 4], Vec<U8>), Seal: ([U8; 4], Vec<U8>), Other: Vec<U8>, RuntimeEnvironmentUpdated: }>>}}}
         * @param _key_owner_proof: {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
	 */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocationUnsigned', false, _equivocation_proof, _key_owner_proof);
        },

        /**
         * @param _config: Enum<{V1: {c: (U64, U64), allowed_slots: Enum<{PrimarySlots: , PrimaryAndSecondaryPlainSlots: , PrimaryAndSecondaryVRFSlots: }>}}>
	 */
        planConfigChange: async (signer: ethers.Signer, _config: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'planConfigChange', false, _config);
        },


    }
}
