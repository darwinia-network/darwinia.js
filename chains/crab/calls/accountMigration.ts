/**
 * This is the doc comment for pallet `AccountMigration`'s calls. 
 * 
 * `AccountMigration`'s storages: {@link: module:crab/accountMigration/storages}
 *
 * @module crab/accountMigration/calls
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
         * @instance
         */
        migrate: async (signer: ethers.Signer, _from: unknown, _to: unknown, _signature: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', false, {
                from: _from,
                to: _to,
                signature: _signature,
           });
        },

        /**
         * Similar to {@link: crab/accountMigration/calls/migrate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        migrateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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

        /**
         * Similar to `migrate` but for multisig accounts.
         * 
         * The `_signature` should be provided by `who`.
         *
         * @param {unknown} _submitter [U8; 32]
         * @param {unknown} _others Vec<[U8; 32]>
         * @param {unknown} _threshold U16
         * @param {unknown} _to [U8; 20]
         * @param {unknown} _signature [U8; 64]
         * @param {unknown} _new_multisig_params Enum<{0/None: , 1/Some: {address: [U8; 20], members: Vec<[U8; 20]>, threshold: U16}}>
         * @instance
         */
        migrateMultisig: async (signer: ethers.Signer, _submitter: unknown, _others: unknown, _threshold: unknown, _to: unknown, _signature: unknown, _new_multisig_params: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AccountMigration', 'migrateMultisig', false, {
                submitter: _submitter,
                others: _others,
                threshold: _threshold,
                to: _to,
                signature: _signature,
                new_multisig_params: _new_multisig_params,
           });
        },

        /**
         * Similar to {@link: crab/accountMigration/calls/migrateMultisig}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        migrateMultisigH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AccountMigration', 'migrateMultisig', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildMigrateMultisigCall: (_submitter: unknown, _others: unknown, _threshold: unknown, _to: unknown, _signature: unknown, _new_multisig_params: unknown) => {
            return buildRuntimeCall(metadata, 'AccountMigration', 'migrateMultisig', {
                submitter: _submitter,
                others: _others,
                threshold: _threshold,
                to: _to,
                signature: _signature,
                new_multisig_params: _new_multisig_params,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildMigrateMultisigCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildMigrateMultisigCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AccountMigration', 'migrateMultisig', argsBytes)
        },

        /**
         * To complete the pending multisig migration.
         * 
         * The `_signature` should be provided by `submitter`.
         *
         * @param {unknown} _multisig [U8; 32]
         * @param {unknown} _submitter [U8; 32]
         * @param {unknown} _signature [U8; 64]
         * @instance
         */
        completeMultisigMigration: async (signer: ethers.Signer, _multisig: unknown, _submitter: unknown, _signature: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AccountMigration', 'completeMultisigMigration', false, {
                multisig: _multisig,
                submitter: _submitter,
                signature: _signature,
           });
        },

        /**
         * Similar to {@link: crab/accountMigration/calls/completeMultisigMigration}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        completeMultisigMigrationH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'AccountMigration', 'completeMultisigMigration', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCompleteMultisigMigrationCall: (_multisig: unknown, _submitter: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'AccountMigration', 'completeMultisigMigration', {
                multisig: _multisig,
                submitter: _submitter,
                signature: _signature,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCompleteMultisigMigrationCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCompleteMultisigMigrationCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'AccountMigration', 'completeMultisigMigration', argsBytes)
        },

    }
}

