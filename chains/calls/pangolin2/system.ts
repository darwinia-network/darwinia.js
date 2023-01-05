import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

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

        fillBlockD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', true, data);
        },

        fillBlockCall: (_ratio: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'fillBlock', {
                ratio: _ratio,
            });
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

        remarkD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', true, data);
        },

        remarkCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remark', {
                remark: _remark,
            });
        },

        /**
         * Set the number of pages in the WebAssembly environment's heap.
         *
         * @param _pages: U64
         */
        setHeapPages: async (signer: ethers.Signer, _pages: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, _pages);
        },

        setHeapPagesD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', true, data);
        },

        setHeapPagesCall: (_pages: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setHeapPages', {
                pages: _pages,
            });
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

        setCodeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', true, data);
        },

        setCodeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCode', {
                code: _code,
            });
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

        setCodeWithoutChecksD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', true, data);
        },

        setCodeWithoutChecksCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCodeWithoutChecks', {
                code: _code,
            });
        },

        /**
         * Set some items of storage.
         *
         * @param _items: Vec<(Vec<U8>, Vec<U8>)>
         */
        setStorage: async (signer: ethers.Signer, _items: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, _items);
        },

        setStorageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', true, data);
        },

        setStorageCall: (_items: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setStorage', {
                items: _items,
            });
        },

        /**
         * Kill some items from storage.
         *
         * @param _keys: Vec<Vec<U8>>
         */
        killStorage: async (signer: ethers.Signer, _keys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, _keys);
        },

        killStorageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', true, data);
        },

        killStorageCall: (_keys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killStorage', {
                keys: _keys,
            });
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

        killPrefixD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', true, data);
        },

        killPrefixCall: (_prefix: unknown, _subkeys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killPrefix', {
                prefix: _prefix,
                subkeys: _subkeys,
            });
        },

        /**
         * Make some on-chain remark and emit event.
         *
         * @param _remark: Vec<U8>
         */
        remarkWithEvent: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, _remark);
        },

        remarkWithEventD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', true, data);
        },

        remarkWithEventCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remarkWithEvent', {
                remark: _remark,
            });
        },

    }
}
