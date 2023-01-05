import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getElectionProviderMultiPhase = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>, votes17: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 16], Compact<U16>)>, votes18: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 17], Compact<U16>)>, votes19: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 18], Compact<U16>)>, votes20: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 19], Compact<U16>)>, votes21: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 20], Compact<U16>)>, votes22: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 21], Compact<U16>)>, votes23: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 22], Compact<U16>)>, votes24: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 23], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param _witness: {voters: Compact<U32>, targets: Compact<U32>}
	 */
        submitUnsigned: async (signer: ethers.Signer, _raw_solution: unknown, _witness: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submitUnsigned', false, _raw_solution, _witness);
        },

        submitUnsignedD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submitUnsigned', true, data);
        },

        submitUnsignedCall: (_raw_solution: unknown, _witness: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'submitUnsigned', {
                raw_solution: _raw_solution,
                witness: _witness,
            });
        },

        /**
         * @param _maybe_next_score: Enum<{0/None: , 1/Some: [U128; 3]}>
	 */
        setMinimumUntrustedScore: async (signer: ethers.Signer, _maybe_next_score: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', false, _maybe_next_score);
        },

        setMinimumUntrustedScoreD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', true, data);
        },

        setMinimumUntrustedScoreCall: (_maybe_next_score: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', {
                maybe_next_score: _maybe_next_score,
            });
        },

        /**
         * @param _supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>
	 */
        setEmergencyElectionResult: async (signer: ethers.Signer, _supports: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', false, _supports);
        },

        setEmergencyElectionResultD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', true, data);
        },

        setEmergencyElectionResultCall: (_supports: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', {
                supports: _supports,
            });
        },

        /**
         * @param _raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>, votes17: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 16], Compact<U16>)>, votes18: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 17], Compact<U16>)>, votes19: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 18], Compact<U16>)>, votes20: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 19], Compact<U16>)>, votes21: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 20], Compact<U16>)>, votes22: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 21], Compact<U16>)>, votes23: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 22], Compact<U16>)>, votes24: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 23], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param _num_signed_submissions: U32
	 */
        submit: async (signer: ethers.Signer, _raw_solution: unknown, _num_signed_submissions: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submit', false, _raw_solution, _num_signed_submissions);
        },

        submitD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submit', true, data);
        },

        submitCall: (_raw_solution: unknown, _num_signed_submissions: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'submit', {
                raw_solution: _raw_solution,
                num_signed_submissions: _num_signed_submissions,
            });
        },

    }
}
