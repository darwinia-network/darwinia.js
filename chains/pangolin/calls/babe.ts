/**
 * This is the doc comment for pallet `Babe`'s calls. 
 * 
 * `Babe`'s storages: {@link: module:pangolin/babe/storages}
 *
 * @module pangolin/babe/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBabe = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Report authority equivocation/misbehavior. This method will verify
         * the equivocation proof and validate the given key ownership proof
         * against the extracted offender. If both are valid, the offence will
         * be reported.
         *
         * @param {unknown} _equivocation_proof {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}}
         * @param {unknown} _key_owner_proof {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
         */
        reportEquivocation: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocation', false, {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
	    });
        },

        /**
	 * Similar to {@link: pangolin/babe/calls/reportEquivocation}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        reportEquivocationH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocation', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportEquivocationCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Babe', 'reportEquivocation', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildReportEquivocationCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportEquivocationCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Babe', 'reportEquivocation', argsBytes)
        },

        /**
         * Report authority equivocation/misbehavior. This method will verify
         * the equivocation proof and validate the given key ownership proof
         * against the extracted offender. If both are valid, the offence will
         * be reported.
         * This extrinsic must be called unsigned and it is expected that only
         * block authors will call it (validated in `ValidateUnsigned`), as such
         * if the block author is defined it will be defined as the equivocation
         * reporter.
         *
         * @param {unknown} _equivocation_proof {offender: [U8; 32], slot: U64, first_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}, second_header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}}
         * @param {unknown} _key_owner_proof {session: U32, trie_nodes: Vec<Vec<U8>>, validator_count: U32}
         */
        reportEquivocationUnsigned: async (signer: ethers.Signer, _equivocation_proof: unknown, _key_owner_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocationUnsigned', false, {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
	    });
        },

        /**
	 * Similar to {@link: pangolin/babe/calls/reportEquivocationUnsigned}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        reportEquivocationUnsignedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'reportEquivocationUnsigned', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportEquivocationUnsignedCall: (_equivocation_proof: unknown, _key_owner_proof: unknown) => {
            return buildRuntimeCall(metadata, 'Babe', 'reportEquivocationUnsigned', {
                equivocation_proof: _equivocation_proof,
                key_owner_proof: _key_owner_proof,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildReportEquivocationUnsignedCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildReportEquivocationUnsignedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Babe', 'reportEquivocationUnsigned', argsBytes)
        },

        /**
         * Plan an epoch config change. The epoch config change is recorded and will be enacted on
         * the next call to `enact_epoch_change`. The config will be activated one epoch after.
         * Multiple calls to this method will replace any existing planned config change that had
         * not been enacted yet.
         *
         * @param {unknown} _config Enum<{1/V1: {c: (U64, U64), allowed_slots: Enum<{0/PrimarySlots: , 1/PrimaryAndSecondaryPlainSlots: , 2/PrimaryAndSecondaryVRFSlots: }>}}>
         */
        planConfigChange: async (signer: ethers.Signer, _config: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'planConfigChange', false, {
                config: _config,
	    });
        },

        /**
	 * Similar to {@link: pangolin/babe/calls/planConfigChange}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        planConfigChangeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Babe', 'planConfigChange', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildPlanConfigChangeCall: (_config: unknown) => {
            return buildRuntimeCall(metadata, 'Babe', 'planConfigChange', {
                config: _config,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildPlanConfigChangeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildPlanConfigChangeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Babe', 'planConfigChange', argsBytes)
        },

    }
}
