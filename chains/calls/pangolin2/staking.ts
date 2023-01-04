import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getStaking = (dispatch: Dispatch) => {
    return {
        /**
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
	 */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', false, _ring_amount, _kton_amount, _deposits);
        },

        /**
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
	 */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', false, _ring_amount, _kton_amount, _deposits);
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false);
        },

        /**
         * @param _commission: U32
	 */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', false, _commission);
        },

        /**
         * @param _target: [U8; 20]
	 */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _target);
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },


    }
}
