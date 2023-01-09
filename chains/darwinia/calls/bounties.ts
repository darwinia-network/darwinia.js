import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getBounties = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Propose a new bounty.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
         * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
         * or slashed when rejected.
         * 
         * - `curator`: The curator account whom will manage this bounty.
         * - `fee`: The curator fee.
         * - `value`: The total payment amount of this bounty, curator fee included.
         * - `description`: The description of this bounty.
         *
         * @param _value: Compact<U128>
         * @param _description: Vec<U8>
         */
        proposeBounty: async (signer: ethers.Signer, _value: unknown, _description: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', false, _value, _description);
        },

        proposeBountyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', true, data);
        },

        proposeBountyCall: (_value: unknown, _description: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeBounty', {
                value: _value,
                description: _description,
            });
        },

        /**
         * Approve a bounty proposal. At a later time, the bounty will be funded and become active
         * and the original deposit will be returned.
         * 
         * May only be called from `T::ApproveOrigin`.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         */
        approveBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', false, _bounty_id);
        },

        approveBountyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', true, data);
        },

        approveBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'approveBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Assign a curator to a funded bounty.
         * 
         * May only be called from `T::ApproveOrigin`.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         * @param _curator: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _fee: Compact<U128>
         */
        proposeCurator: async (signer: ethers.Signer, _bounty_id: unknown, _curator: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', false, _bounty_id, _curator, _fee);
        },

        proposeCuratorD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', true, data);
        },

        proposeCuratorCall: (_bounty_id: unknown, _curator: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeCurator', {
                bounty_id: _bounty_id,
                curator: _curator,
                fee: _fee,
            });
        },

        /**
         * Unassign curator from a bounty.
         * 
         * This function can only be called by the `RejectOrigin` a signed origin.
         * 
         * If this function is called by the `RejectOrigin`, we assume that the curator is
         * malicious or inactive. As a result, we will slash the curator when possible.
         * 
         * If the origin is the curator, we take this as a sign they are unable to do their job and
         * they willingly give up. We could slash them, but for now we allow them to recover their
         * deposit and exit without issue. (We may want to change this if it is abused.)
         * 
         * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
         * anyone in the community to call out that a curator is not doing their due diligence, and
         * we should pick a new curator. In this case the curator should also be slashed.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         */
        unassignCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', false, _bounty_id);
        },

        unassignCuratorD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', true, data);
        },

        unassignCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'unassignCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Accept the curator role for a bounty.
         * A deposit will be reserved from curator and refund upon successful payout.
         * 
         * May only be called from the curator.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         */
        acceptCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', false, _bounty_id);
        },

        acceptCuratorD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', true, data);
        },

        acceptCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'acceptCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
         * after a delay.
         * 
         * The dispatch origin for this call must be the curator of this bounty.
         * 
         * - `bounty_id`: Bounty ID to award.
         * - `beneficiary`: The beneficiary account whom will receive the payout.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         * @param _beneficiary: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        awardBounty: async (signer: ethers.Signer, _bounty_id: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', false, _bounty_id, _beneficiary);
        },

        awardBountyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', true, data);
        },

        awardBountyCall: (_bounty_id: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'awardBounty', {
                bounty_id: _bounty_id,
                beneficiary: _beneficiary,
            });
        },

        /**
         * Claim the payout from an awarded bounty after payout delay.
         * 
         * The dispatch origin for this call must be the beneficiary of this bounty.
         * 
         * - `bounty_id`: Bounty ID to claim.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         */
        claimBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', false, _bounty_id);
        },

        claimBountyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', true, data);
        },

        claimBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'claimBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Cancel a proposed or active bounty. All the funds will be sent to treasury and
         * the curator deposit will be unreserved if possible.
         * 
         * Only `T::RejectOrigin` is able to cancel a bounty.
         * 
         * - `bounty_id`: Bounty ID to cancel.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         */
        closeBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', false, _bounty_id);
        },

        closeBountyD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', true, data);
        },

        closeBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'closeBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Extend the expiry time of an active bounty.
         * 
         * The dispatch origin for this call must be the curator of this bounty.
         * 
         * - `bounty_id`: Bounty ID to extend.
         * - `remark`: additional information.
         * 
         * # <weight>
         * - O(1).
         * # </weight>
         *
         * @param _bounty_id: Compact<U32>
         * @param _remark: Vec<U8>
         */
        extendBountyExpiry: async (signer: ethers.Signer, _bounty_id: unknown, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', false, _bounty_id, _remark);
        },

        extendBountyExpiryD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', true, data);
        },

        extendBountyExpiryCall: (_bounty_id: unknown, _remark: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'extendBountyExpiry', {
                bounty_id: _bounty_id,
                remark: _remark,
            });
        },

    }
}
