/**
 * This is the doc comment for pallet `DarwiniaStaking`'s calls. 
 * 
 * `DarwiniaStaking`'s storages: {@link: module:crab/darwiniaStaking/storages}
 *
 * @module crab/darwiniaStaking/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDarwiniaStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add stakes to the staking pool.
         * 
         * This will transfer the stakes to a pallet/contact account.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         * @instance
         */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'stake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/stake}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        stakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'stake', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildStakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'stake', {
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
            return decodeCall(metadata, 'DarwiniaStaking', 'stake', argsBytes)
        },

        /**
         * Withdraw stakes from the staking pool.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         * @instance
         */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'unstake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/unstake}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unstakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'unstake', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnstakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'unstake', {
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
            return decodeCall(metadata, 'DarwiniaStaking', 'unstake', argsBytes)
        },

        /**
         * Cancel the `unstake` operation.
         * 
         * Re-stake the unstaking assets immediately.
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _kton_amount U128
         * @param {unknown} _deposits Vec<U16>
         * @instance
         */
        restake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'restake', false, {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/restake}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        restakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'restake', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRestakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'restake', {
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
            return decodeCall(metadata, 'DarwiniaStaking', 'restake', argsBytes)
        },

        /**
         * Claim the stakes from the pallet/contract account.
         *
         * @instance
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'claim', false, {
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/claim}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        claimH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'claim', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClaimCall: () => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'claim', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClaimCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DarwiniaStaking', 'claim', argsBytes)
        },

        /**
         * Declare the desire to collect.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param {unknown} _commission U32
         * @instance
         */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'collect', false, {
                commission: _commission,
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/collect}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        collectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'collect', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCollectCall: (_commission: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'collect', {
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
            return decodeCall(metadata, 'DarwiniaStaking', 'collect', argsBytes)
        },

        /**
         * Declare the desire to nominate a collator.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'nominate', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/nominate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        nominateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'nominate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildNominateCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'nominate', {
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
            return decodeCall(metadata, 'DarwiniaStaking', 'nominate', argsBytes)
        },

        /**
         * Declare no desire to either collect or nominate.
         * 
         * Effects will be felt at the beginning of the next era.
         * 
         * If the target is a collator, its nominators need to re-nominate.
         *
         * @instance
         */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'chill', false, {
           });
        },

        /**
         * Similar to {@link: crab/darwiniaStaking/calls/chill}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        chillH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'DarwiniaStaking', 'chill', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildChillCall: () => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'chill', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildChillCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildChillCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DarwiniaStaking', 'chill', argsBytes)
        },

    }
}

