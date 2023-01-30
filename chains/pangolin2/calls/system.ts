/**
 * This is the doc comment for pallet `System`'s calls. 
 * 
 * `System`'s storages: {@link: module:pangolin2/system/storages}
 *
 * @module pangolin2/system/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSystem = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * A dispatch that will fill the block weight up to the given ratio.
         *
         * @param {unknown} _ratio U32
         * @instance
         */
        fillBlock: async (signer: ethers.Signer, _ratio: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', false, {
                ratio: _ratio,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/fillBlock}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        fillBlockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildFillBlockCall: (_ratio: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'fillBlock', {
                ratio: _ratio,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildFillBlockCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildFillBlockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'fillBlock', argsBytes)
        },

        /**
         * Make some on-chain remark.
         * 
         * # <weight>
         * - `O(1)`
         * # </weight>
         *
         * @param {unknown} _remark Vec<U8>
         * @instance
         */
        remark: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', false, {
                remark: _remark,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/remark}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        remarkH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemarkCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remark', {
                remark: _remark,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemarkCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemarkCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'remark', argsBytes)
        },

        /**
         * Set the number of pages in the WebAssembly environment's heap.
         *
         * @param {unknown} _pages U64
         * @instance
         */
        setHeapPages: async (signer: ethers.Signer, _pages: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, {
                pages: _pages,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/setHeapPages}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setHeapPagesH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetHeapPagesCall: (_pages: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setHeapPages', {
                pages: _pages,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetHeapPagesCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetHeapPagesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setHeapPages', argsBytes)
        },

        /**
         * Set the new runtime code.
         * 
         * # <weight>
         * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
         * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
         *   expensive).
         * - 1 storage write (codec `O(C)`).
         * - 1 digest item.
         * - 1 event.
         * The weight of this function is dependent on the runtime, but generally this is very
         * expensive. We will treat this as a full block.
         * # </weight>
         *
         * @param {unknown} _code Vec<U8>
         * @instance
         */
        setCode: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', false, {
                code: _code,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/setCode}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setCodeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetCodeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCode', {
                code: _code,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetCodeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetCodeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setCode', argsBytes)
        },

        /**
         * Set the new runtime code without doing any checks of the given `code`.
         * 
         * # <weight>
         * - `O(C)` where `C` length of `code`
         * - 1 storage write (codec `O(C)`).
         * - 1 digest item.
         * - 1 event.
         * The weight of this function is dependent on the runtime. We will treat this as a full
         * block. # </weight>
         *
         * @param {unknown} _code Vec<U8>
         * @instance
         */
        setCodeWithoutChecks: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', false, {
                code: _code,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/setCodeWithoutChecks}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setCodeWithoutChecksH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetCodeWithoutChecksCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCodeWithoutChecks', {
                code: _code,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetCodeWithoutChecksCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetCodeWithoutChecksCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setCodeWithoutChecks', argsBytes)
        },

        /**
         * Set some items of storage.
         *
         * @param {unknown} _items Vec<(Vec<U8>, Vec<U8>)>
         * @instance
         */
        setStorage: async (signer: ethers.Signer, _items: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, {
                items: _items,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/setStorage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setStorageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetStorageCall: (_items: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setStorage', {
                items: _items,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetStorageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetStorageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setStorage', argsBytes)
        },

        /**
         * Kill some items from storage.
         *
         * @param {unknown} _keys Vec<Vec<U8>>
         * @instance
         */
        killStorage: async (signer: ethers.Signer, _keys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, {
                keys: _keys,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/killStorage}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killStorageH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillStorageCall: (_keys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killStorage', {
                keys: _keys,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillStorageCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillStorageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'killStorage', argsBytes)
        },

        /**
         * Kill all storage items with a key that starts with the given prefix.
         * 
         * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
         * the prefix we are removing to accurately calculate the weight of this function.
         *
         * @param {unknown} _prefix Vec<U8>
         * @param {unknown} _subkeys U32
         * @instance
         */
        killPrefix: async (signer: ethers.Signer, _prefix: unknown, _subkeys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', false, {
                prefix: _prefix,
                subkeys: _subkeys,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/killPrefix}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killPrefixH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillPrefixCall: (_prefix: unknown, _subkeys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killPrefix', {
                prefix: _prefix,
                subkeys: _subkeys,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillPrefixCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillPrefixCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'killPrefix', argsBytes)
        },

        /**
         * Make some on-chain remark and emit event.
         *
         * @param {unknown} _remark Vec<U8>
         * @instance
         */
        remarkWithEvent: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, {
                remark: _remark,
           });
        },

        /**
         * Similar to {@link: pangolin2/system/calls/remarkWithEvent}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        remarkWithEventH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemarkWithEventCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remarkWithEvent', {
                remark: _remark,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemarkWithEventCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemarkWithEventCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'remarkWithEvent', argsBytes)
        },

    }
}

