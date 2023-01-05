import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBounties = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _value: Compact<U128>
         * @param _description: Vec<U8>
	 */
        proposeBounty: async (signer: ethers.Signer, _value: unknown, _description: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', false, _value, _description);
        },

        proposeBountyCall: (_value: unknown, _description: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeBounty', {
                value: _value,
                description: _description,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        approveBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', false, _bounty_id);
        },

        approveBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'approveBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _curator: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _fee: Compact<U128>
	 */
        proposeCurator: async (signer: ethers.Signer, _bounty_id: unknown, _curator: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', false, _bounty_id, _curator, _fee);
        },

        proposeCuratorCall: (_bounty_id: unknown, _curator: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeCurator', {
                bounty_id: _bounty_id,
                curator: _curator,
                fee: _fee,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        unassignCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', false, _bounty_id);
        },

        unassignCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'unassignCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        acceptCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', false, _bounty_id);
        },

        acceptCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'acceptCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _beneficiary: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
	 */
        awardBounty: async (signer: ethers.Signer, _bounty_id: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', false, _bounty_id, _beneficiary);
        },

        awardBountyCall: (_bounty_id: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'awardBounty', {
                bounty_id: _bounty_id,
                beneficiary: _beneficiary,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        claimBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', false, _bounty_id);
        },

        claimBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'claimBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
	 */
        closeBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', false, _bounty_id);
        },

        closeBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'closeBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * @param _bounty_id: Compact<U32>
         * @param _remark: Vec<U8>
	 */
        extendBountyExpiry: async (signer: ethers.Signer, _bounty_id: unknown, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', false, _bounty_id, _remark);
        },

        extendBountyExpiryCall: (_bounty_id: unknown, _remark: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'extendBountyExpiry', {
                bounty_id: _bounty_id,
                remark: _remark,
            });
        },

    }
}
