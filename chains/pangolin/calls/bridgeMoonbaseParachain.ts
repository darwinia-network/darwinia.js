/**
 * This is the doc comment for pallet `BridgeMoonbaseParachain`'s calls. 
 * 
 * `BridgeMoonbaseParachain`'s storages: {@link: module:pangolin/bridgeMoonbaseParachain/storages}
 *
 * @module pangolin/bridgeMoonbaseParachain/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeMoonbaseParachain = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Submit proof of one or several parachain heads.
         * 
         * The proof is supposed to be proof of some `Heads` entries from the
         * `polkadot-runtime-parachains::paras` pallet instance, deployed at the bridged chain.
         * The proof is supposed to be crafted at the `relay_header_hash` that must already be
         * imported by corresponding GRANDPA pallet at this chain.
         *
         * @param {unknown} _at_relay_block (U32, [U8; 32])
         * @param {unknown} _parachains Vec<(U32, [U8; 32])>
         * @param {unknown} _parachain_heads_proof Vec<Vec<U8>>
         * @instance
         */
        submitParachainHeads: async (signer: ethers.Signer, _at_relay_block: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'submitParachainHeads', false, {
                at_relay_block: _at_relay_block,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
           });
        },

        /**
         * Similar to {@link: pangolin/bridgeMoonbaseParachain/calls/submitParachainHeads}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitParachainHeadsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'submitParachainHeads', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitParachainHeadsCall: (_at_relay_block: unknown, _parachains: unknown, _parachain_heads_proof: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeMoonbaseParachain', 'submitParachainHeads', {
                at_relay_block: _at_relay_block,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitParachainHeadsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitParachainHeadsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeMoonbaseParachain', 'submitParachainHeads', argsBytes)
        },

        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _new_owner Enum<{0/None: , 1/Some: [U8; 20]}>
         * @instance
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'setOwner', false, {
                new_owner: _new_owner,
           });
        },

        /**
         * Similar to {@link: pangolin/bridgeMoonbaseParachain/calls/setOwner}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOwnerH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'setOwner', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeMoonbaseParachain', 'setOwner', {
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
            return decodeCall(metadata, 'BridgeMoonbaseParachain', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param {unknown} _operating_mode Enum<{0/Normal: , 1/Halted: }>
         * @instance
         */
        setOperatingMode: async (signer: ethers.Signer, _operating_mode: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'setOperatingMode', false, {
                operating_mode: _operating_mode,
           });
        },

        /**
         * Similar to {@link: pangolin/bridgeMoonbaseParachain/calls/setOperatingMode}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setOperatingModeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'BridgeMoonbaseParachain', 'setOperatingMode', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperatingModeCall: (_operating_mode: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeMoonbaseParachain', 'setOperatingMode', {
                operating_mode: _operating_mode,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetOperatingModeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetOperatingModeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeMoonbaseParachain', 'setOperatingMode', argsBytes)
        },

    }
}

