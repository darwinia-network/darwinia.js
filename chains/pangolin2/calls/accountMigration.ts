import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAccountMigration = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Migrate all the account data under the `from` to `to`.
         *
         * @param _from: [U8; 32]
         * @param _to: [U8; 20]
         * @param _signature: [U8; 64]
         */
        migrate: async (signer: ethers.Signer, _from: unknown, _to: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', false, _from, _to, _signature);
        },

        migrateD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', true, data);
        },

        migrateCall: (_from: unknown, _to: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'AccountMigration', 'migrate', {
                from: _from,
                to: _to,
                signature: _signature,
            });
        },

    }
}
