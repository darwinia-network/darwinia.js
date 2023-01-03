import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getElectionProviderMultiPhase = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param param1: {voters: Compact<U32>, targets: Compact<U32>}
	 */
        submitUnsigned: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submitUnsigned', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/None", "1/Some"}>
	 */
        setMinimumUntrustedScore: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', false, param0);
        },

        /**
         * @param param0: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>
	 */
        setEmergencyElectionResult: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', false, param0);
        },

        /**
         * @param param0: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param param1: U32
	 */
        submit: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submit', false, param0, param1);
        },


    }
}
