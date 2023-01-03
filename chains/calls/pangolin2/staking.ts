import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getStaking = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
         * @param param1: U128
         * @param param2: Vec<U16>
	 */
        stake: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', false, param0, param1, param2);
        },

        /**
         * @param param0: U128
         * @param param1: U128
         * @param param2: Vec<U16>
	 */
        unstake: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', false, param0, param1, param2);
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false);
        },

        /**
         * @param param0: U32
	 */
        collect: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', false, param0);
        },

        /**
         * @param param0: [U8; 20]
	 */
        nominate: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, param0);
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },


    }
}
