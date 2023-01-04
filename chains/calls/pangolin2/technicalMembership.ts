import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTechnicalMembership = (dispatch: Dispatch) => {
    return {
        /**
         * @param _who: [U8; 20]
	 */
        addMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', false, _who);
        },

        /**
         * @param _who: [U8; 20]
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', false, _who);
        },

        /**
         * @param _remove: [U8; 20]
         * @param _add: [U8; 20]
	 */
        swapMember: async (signer: ethers.Signer, _remove: unknown, _add: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', false, _remove, _add);
        },

        /**
         * @param _members: Vec<[U8; 20]>
	 */
        resetMembers: async (signer: ethers.Signer, _members: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', false, _members);
        },

        /**
         * @param _new: [U8; 20]
	 */
        changeKey: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', false, _new);
        },

        /**
         * @param _who: [U8; 20]
	 */
        setPrime: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', false, _who);
        },

        /**
	 */
        clearPrime: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', false);
        },


    }
}
