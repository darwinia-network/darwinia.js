import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getBounties = (dispatch: Dispatch) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _description: Vec<U8>
	 */
        proposeBounty: async (signer: ethers.Signer, _value: unknown, _description: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', false, _value, _description);
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        approveBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', false, _bounty_id);
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _curator: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _fee: Compact<U128>
	 */
        proposeCurator: async (signer: ethers.Signer, _bounty_id: unknown, _curator: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', false, _bounty_id, _curator, _fee);
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        unassignCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', false, _bounty_id);
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        acceptCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', false, _bounty_id);
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _beneficiary: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        awardBounty: async (signer: ethers.Signer, _bounty_id: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', false, _bounty_id, _beneficiary);
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        claimBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', false, _bounty_id);
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        closeBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', false, _bounty_id);
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _remark: Vec<U8>
	 */
        extendBountyExpiry: async (signer: ethers.Signer, _bounty_id: unknown, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', false, _bounty_id, _remark);
        },


    }
}
