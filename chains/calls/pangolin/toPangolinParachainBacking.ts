import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getToPangolinParachainBacking = (dispatch: Dispatch) => {
    return {
        /**
         * @param _spec_version: U32
         * @param _weight: U64
         * @param _value: Compact<U128>
         * @param _fee: Compact<U128>
         * @param _recipient: [U8; 32]
	 */
        lockAndRemoteIssue: async (signer: ethers.Signer, _spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', false, _spec_version, _weight, _value, _fee, _recipient);
        },

        /**
         * @param _amount: U128
         * @param _recipient: [U8; 32]
	 */
        unlockFromRemote: async (signer: ethers.Signer, _amount: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', false, _amount, _recipient);
        },

        /**
         * @param _period: U32
	 */
        setSecureLimitedPeriod: async (signer: ethers.Signer, _period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', false, _period);
        },

        /**
         * @param _limitation: U128
	 */
        setSecurityLimitationRingAmount: async (signer: ethers.Signer, _limitation: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', false, _limitation);
        },

        /**
         * @param _account: [U8; 32]
	 */
        setRemoteMappingTokenFactoryAccount: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', false, _account);
        },


    }
}
