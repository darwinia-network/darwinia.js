import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getToPangolinParachainBacking = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U32
         * @param param1: U64
         * @param param2: Compact<U128>
         * @param param3: Compact<U128>
         * @param param4: [U8; 32]
	 */
        lockAndRemoteIssue: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: U128
         * @param param1: [U8; 32]
	 */
        unlockFromRemote: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', false, param0, param1);
        },

        /**
         * @param param0: U32
	 */
        setSecureLimitedPeriod: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', false, param0);
        },

        /**
         * @param param0: U128
	 */
        setSecurityLimitationRingAmount: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', false, param0);
        },

        /**
         * @param param0: [U8; 32]
	 */
        setRemoteMappingTokenFactoryAccount: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', false, param0);
        },


    }
}
