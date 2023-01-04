import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEthereum = (dispatch: Dispatch) => {
    return {
        /**
         * @param _transaction: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>
	 */
        transact: async (signer: ethers.Signer, _transaction: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Ethereum', 'transact', false, _transaction);
        },

        /**
         * @param _transaction: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>
	 */
        messageTransact: async (signer: ethers.Signer, _transaction: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Ethereum', 'messageTransact', false, _transaction);
        },


    }
}
