/**
 * This is the doc comment for pallet `Staking`'s calls. 
 * 
 * `Staking`'s storages: {@link: module:pangolin2/staking/storages}
 *
 * @module pangolin2/staking/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add stakes to the staking pool.
         * 
         * This will transfer the stakes to a pallet/contact account.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/stake}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        stakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildStakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'stake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildStakeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildStakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'stake', argsBytes)
        },

        /**
         * Withdraw stakes from the staking pool.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/unstake}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        unstakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUnstakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unstake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUnstakeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUnstakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'unstake', argsBytes)
        },

        /**
         * Cancel the `unstake` operation.
         * 
         * Re-stake the unstaking assets immediately.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         */
        restake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'restake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/restake}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        restakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'restake', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRestakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'restake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildRestakeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRestakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'restake', argsBytes)
        },

        /**
         * Claim the stakes from the pallet/contract account.
         *
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false, {
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/claim}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        claimH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClaimCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claim', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildClaimCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'claim', argsBytes)
        },

        /**
         * Declare the desire to collect.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param {unknown} _commission U32
         */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', false, {
                commission: _commission,
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/collect}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        collectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCollectCall: (_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'collect', {
                commission: _commission,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCollectCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCollectCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'collect', argsBytes)
        },

        /**
         * Declare the desire to nominate a collator.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param {unknown} _target [U8; 20]
         */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, {
                target: _target,
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/nominate}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        nominateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildNominateCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                target: _target,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildNominateCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildNominateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'nominate', argsBytes)
        },

        /**
         * Declare no desire to either collect or nominate.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * If the target is a collator, its nominators need to re-nominate.
         *
         */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false, {
	    });
        },

        /**
	 * Similar to {@link: pangolin2/staking/calls/chill}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        chillH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildChillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildChillCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildChillCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'chill', argsBytes)
        },

    }
}
