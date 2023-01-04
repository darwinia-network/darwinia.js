import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAccountMigration = (dispatch: Dispatch) => {
    return {
        /**
         * @param _from: [U8; 32]
         * @param _to: [U8; 20]
         * @param _signature: [U8; 64]
	 */
        migrate: async (signer: ethers.Signer, _from: unknown, _to: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', false, _from, _to, _signature);
        },


    }
}
