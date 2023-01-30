/**
 * This is the doc comment for pallet `Bounties`'s calls. 
 * 
 * `Bounties`'s storages: {@link: module:pangolin/bounties/storages}
 *
 * @module pangolin/bounties/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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
         * @param {unknown} _value Compact<U128>
         * @param {unknown} _description Vec<U8>
         * @instance
         */
        proposeBounty: async (signer: ethers.Signer, _value: unknown, _description: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', false, {
                value: _value,
                description: _description,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/proposeBounty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proposeBountyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeBounty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProposeBountyCall: (_value: unknown, _description: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeBounty', {
                value: _value,
                description: _description,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProposeBountyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProposeBountyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'proposeBounty', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @instance
         */
        approveBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', false, {
                bounty_id: _bounty_id,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/approveBounty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        approveBountyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'approveBounty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildApproveBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'approveBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildApproveBountyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildApproveBountyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'approveBounty', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @param {unknown} _curator Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param {unknown} _fee Compact<U128>
         * @instance
         */
        proposeCurator: async (signer: ethers.Signer, _bounty_id: unknown, _curator: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', false, {
                bounty_id: _bounty_id,
                curator: _curator,
                fee: _fee,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/proposeCurator}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proposeCuratorH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'proposeCurator', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCuratorCall: (_bounty_id: unknown, _curator: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'proposeCurator', {
                bounty_id: _bounty_id,
                curator: _curator,
                fee: _fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProposeCuratorCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProposeCuratorCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'proposeCurator', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @instance
         */
        unassignCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', false, {
                bounty_id: _bounty_id,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/unassignCurator}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unassignCuratorH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'unassignCurator', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnassignCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'unassignCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnassignCuratorCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnassignCuratorCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'unassignCurator', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @instance
         */
        acceptCurator: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', false, {
                bounty_id: _bounty_id,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/acceptCurator}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        acceptCuratorH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'acceptCurator', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAcceptCuratorCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'acceptCurator', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAcceptCuratorCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAcceptCuratorCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'acceptCurator', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @param {unknown} _beneficiary Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @instance
         */
        awardBounty: async (signer: ethers.Signer, _bounty_id: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', false, {
                bounty_id: _bounty_id,
                beneficiary: _beneficiary,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/awardBounty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        awardBountyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'awardBounty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAwardBountyCall: (_bounty_id: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'awardBounty', {
                bounty_id: _bounty_id,
                beneficiary: _beneficiary,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAwardBountyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAwardBountyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'awardBounty', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @instance
         */
        claimBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', false, {
                bounty_id: _bounty_id,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/claimBounty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        claimBountyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'claimBounty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClaimBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'claimBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClaimBountyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClaimBountyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'claimBounty', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @instance
         */
        closeBounty: async (signer: ethers.Signer, _bounty_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', false, {
                bounty_id: _bounty_id,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/closeBounty}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        closeBountyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'closeBounty', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCloseBountyCall: (_bounty_id: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'closeBounty', {
                bounty_id: _bounty_id,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCloseBountyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCloseBountyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'closeBounty', argsBytes)
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
         * @param {unknown} _bounty_id Compact<U32>
         * @param {unknown} _remark Vec<U8>
         * @instance
         */
        extendBountyExpiry: async (signer: ethers.Signer, _bounty_id: unknown, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', false, {
                bounty_id: _bounty_id,
                remark: _remark,
           });
        },

        /**
         * Similar to {@link: pangolin/bounties/calls/extendBountyExpiry}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        extendBountyExpiryH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Bounties', 'extendBountyExpiry', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildExtendBountyExpiryCall: (_bounty_id: unknown, _remark: unknown) => {
            return buildRuntimeCall(metadata, 'Bounties', 'extendBountyExpiry', {
                bounty_id: _bounty_id,
                remark: _remark,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildExtendBountyExpiryCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildExtendBountyExpiryCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Bounties', 'extendBountyExpiry', argsBytes)
        },

    }
}

