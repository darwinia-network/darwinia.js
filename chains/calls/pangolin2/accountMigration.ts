import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getAccountMigration = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: [U8; 20]
         * @param param2: [U8; 64]
	 */
        migrate: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'AccountMigration', 'migrate', false, param0, param1, param2);
        },


    }
}
