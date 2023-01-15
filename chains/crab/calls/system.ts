import { buildRuntimeCall, Dispatch, decodeCall } from "../../../src/call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getSystem = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * A dispatch that will fill the block weight up to the given ratio.
         *
         * @param _ratio: U32
         */
        fillBlock: async (signer: ethers.Signer, _ratio: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', false, _ratio);
        },

        fillBlockH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', true, data);
        },

        buildFillBlockCall: (_ratio: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'fillBlock', {
                ratio: _ratio,
            });
        },

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
         * @param _remark: Vec<U8>
         */
        remark: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', false, _remark);
        },

        remarkH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', true, data);
        },

        buildRemarkCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remark', {
                remark: _remark,
            });
        },

        buildRemarkCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'remark', argsBytes)
        },

        /**
         * Set the number of pages in the WebAssembly environment's heap.
         *
         * @param _pages: U64
         */
        setHeapPages: async (signer: ethers.Signer, _pages: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, _pages);
        },

        setHeapPagesH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', true, data);
        },

        buildSetHeapPagesCall: (_pages: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setHeapPages', {
                pages: _pages,
            });
        },

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
         * @param _code: Vec<U8>
         */
        setCode: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', false, _code);
        },

        setCodeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', true, data);
        },

        buildSetCodeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCode', {
                code: _code,
            });
        },

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
         * @param _code: Vec<U8>
         */
        setCodeWithoutChecks: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', false, _code);
        },

        setCodeWithoutChecksH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', true, data);
        },

        buildSetCodeWithoutChecksCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCodeWithoutChecks', {
                code: _code,
            });
        },

        buildSetCodeWithoutChecksCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setCodeWithoutChecks', argsBytes)
        },

        /**
         * Set some items of storage.
         *
         * @param _items: Vec<(Vec<U8>, Vec<U8>)>
         */
        setStorage: async (signer: ethers.Signer, _items: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, _items);
        },

        setStorageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', true, data);
        },

        buildSetStorageCall: (_items: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setStorage', {
                items: _items,
            });
        },

        buildSetStorageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'setStorage', argsBytes)
        },

        /**
         * Kill some items from storage.
         *
         * @param _keys: Vec<Vec<U8>>
         */
        killStorage: async (signer: ethers.Signer, _keys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, _keys);
        },

        killStorageH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', true, data);
        },

        buildKillStorageCall: (_keys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killStorage', {
                keys: _keys,
            });
        },

        buildKillStorageCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'killStorage', argsBytes)
        },

        /**
         * Kill all storage items with a key that starts with the given prefix.
         * 
         * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
         * the prefix we are removing to accurately calculate the weight of this function.
         *
         * @param _prefix: Vec<U8>
         * @param _subkeys: U32
         */
        killPrefix: async (signer: ethers.Signer, _prefix: unknown, _subkeys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', false, _prefix, _subkeys);
        },

        killPrefixH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', true, data);
        },

        buildKillPrefixCall: (_prefix: unknown, _subkeys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killPrefix', {
                prefix: _prefix,
                subkeys: _subkeys,
            });
        },

        buildKillPrefixCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'killPrefix', argsBytes)
        },

        /**
         * Make some on-chain remark and emit event.
         * 
         * # <weight>
         * - `O(b)` where b is the length of the remark.
         * - 1 event.
         * # </weight>
         *
         * @param _remark: Vec<U8>
         */
        remarkWithEvent: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, _remark);
        },

        remarkWithEventH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', true, data);
        },

        buildRemarkWithEventCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remarkWithEvent', {
                remark: _remark,
            });
        },

        buildRemarkWithEventCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'System', 'remarkWithEvent', argsBytes)
        },

    }
}
