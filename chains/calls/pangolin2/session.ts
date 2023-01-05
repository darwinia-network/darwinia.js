import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getSession = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _keys: {aura: [U8; 32]}
         * @param _proof: Vec<U8>
	 */
        setKeys: async (signer: ethers.Signer, _keys: unknown, _proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', false, _keys, _proof);
        },

        setKeysD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'setKeys', true, data);
        },

        setKeysCall: (_keys: unknown, _proof: unknown) => {
            return buildRuntimeCall(metadata, 'Session', 'setKeys', {
                keys: _keys,
                proof: _proof,
            });
        },

        /**
	 */
        purgeKeys: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', false);
        },

        purgeKeysD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Session', 'purgeKeys', true, data);
        },

        purgeKeysCall: () => {
            return buildRuntimeCall(metadata, 'Session', 'purgeKeys', {
            });
        },

    }
}
