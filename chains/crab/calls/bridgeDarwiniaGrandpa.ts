/**
 * This is the doc comment for pallet `BridgeDarwiniaGrandpa`'s calls. 
 * 
 * `BridgeDarwiniaGrandpa`'s storages: {@link: module:crab/bridgeDarwiniaGrandpa/storages}
 *
 * @module crab/bridgeDarwiniaGrandpa/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeDarwiniaGrandpa = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Verify a target header is finalized according to the given finality proof.
         * 
         * It will use the underlying storage pallet to fetch information about the current
         * authorities and best finalized header in order to verify that the header is finalized.
         * 
         * If successful in verification, it will write the target header to the underlying storage
         * pallet.
         *
         * @param {unknown} _finality_target {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}
         * @param {unknown} _justification {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}>}
         * @instance
         */
        submitFinalityProof: async (signer: ethers.Signer, _finality_target: unknown, _justification: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'submitFinalityProof', false, {
                finality_target: _finality_target,
                justification: _justification,
           });
        },

        /**
         * Similar to {@link: crab/bridgeDarwiniaGrandpa/calls/submitFinalityProof}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitFinalityProofH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'submitFinalityProof', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitFinalityProofCall: (_finality_target: unknown, _justification: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaGrandpa', 'submitFinalityProof', {
                finality_target: _finality_target,
                justification: _justification,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitFinalityProofCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitFinalityProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaGrandpa', 'submitFinalityProof', argsBytes)
        },

        /**
         * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
         * 
         * The initial configuration provided does not need to be the genesis header of the bridged
         * chain, it can be any arbitrary header. You can also provide the next scheduled set
         * change if it is already know.
         * 
         * This function is only allowed to be called from a trusted origin and writes to storage
         * with practically no checks in terms of the validity of the data. It is important that
         * you ensure that valid data is being passed in.
         *
         * @param {unknown} _init_data {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}
         * @instance
         */
        initialize: async (signer: ethers.Signer, _init_data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'initialize', false, {
                init_data: _init_data,
           });
        },

        /**
         * Similar to {@link: crab/bridgeDarwiniaGrandpa/calls/initialize}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        initializeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'initialize', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildInitializeCall: (_init_data: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaGrandpa', 'initialize', {
                init_data: _init_data,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildInitializeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildInitializeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaGrandpa', 'initialize', argsBytes)
        },

        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _new_owner Enum<{0/None: , 1/Some: [U8; 32]}>
         * @instance
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOwner', false, {
                new_owner: _new_owner,
           });
        },

        /**
         * Similar to {@link: crab/bridgeDarwiniaGrandpa/calls/setOwner}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOwnerH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOwner', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaGrandpa', 'setOwner', {
                new_owner: _new_owner,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetOwnerCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaGrandpa', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _operational Bool
         * @instance
         */
        setOperational: async (signer: ethers.Signer, _operational: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOperational', false, {
                operational: _operational,
           });
        },

        /**
         * Similar to {@link: crab/bridgeDarwiniaGrandpa/calls/setOperational}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOperationalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeDarwiniaGrandpa', 'setOperational', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperationalCall: (_operational: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeDarwiniaGrandpa', 'setOperational', {
                operational: _operational,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetOperationalCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperationalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeDarwiniaGrandpa', 'setOperational', argsBytes)
        },

    }
}

