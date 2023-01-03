import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEthereum = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>
	 */
        transact: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Ethereum', 'transact', false, param0);
        },


    }
}
