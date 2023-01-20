/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangolin2/accountMigration/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAccountMigration = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Migrate all the account data under the `from` to `to`.
         *
         * @param {unknown} _from [U8; 32]
         * @param {unknown} _to [U8; 20]
         * @param {unknown} _signature [U8; 64]
         */
        migrate: async (signer: ethers.Signer, _from: unknown, _to: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', false, {
                from: _from,
                to: _to,
                signature: _signature,
	    });
        },

        /**
	 * Similar to {@link: migrate}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        migrateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMigrateCall: (_from: unknown, _to: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'AccountMigration', 'migrate', {
                from: _from,
                to: _to,
                signature: _signature,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildMigrateCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMigrateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AccountMigration', 'migrate', argsBytes)
        },

    }
}
