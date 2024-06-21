/**
 * This is the doc comment for pallet `DarwiniaStaking`'s calls. 
 * 
 * `DarwiniaStaking`'s storages: {@link: module:darwinia/darwiniaStaking/storages}
 *
 * @module darwinia/darwiniaStaking/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getDarwiniaStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::stake`].
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _deposits Vec<U16>
         * @instance
         */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'stake', false, {
                ring_amount: _ring_amount,
                deposits: _deposits,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/stake}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        stakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'stake', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildStakeCall: (_ring_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'stake', {
                ring_amount: _ring_amount,
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
         * See [`Pallet::unstake`].
         *
         * @param {unknown} _ring_amount U128
         * @param {unknown} _deposits Vec<U16>
         * @instance
         */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'unstake', false, {
                ring_amount: _ring_amount,
                deposits: _deposits,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/unstake}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unstakeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'unstake', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnstakeCall: (_ring_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'unstake', {
                ring_amount: _ring_amount,
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
         * See [`Pallet::collect`].
         *
         * @param {unknown} _commission U32
         * @instance
         */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'collect', false, {
                commission: _commission,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/collect}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        collectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::nominate`].
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'nominate', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/nominate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        nominateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
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
         * See [`Pallet::chill`].
         *
         * @instance
         */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'chill', false, {
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/chill}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        chillH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
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

        /**
         * See [`Pallet::payout`].
         *
         * @param {unknown} _who [U8; 20]
         * @instance
         */
        payout: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'payout', false, {
                who: _who,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/payout}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        payoutH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'payout', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildPayoutCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'payout', {
                who: _who,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildPayoutCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildPayoutCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DarwiniaStaking', 'payout', argsBytes)
        },

        /**
         * See [`Pallet::set_rate_limit`].
         *
         * @param {unknown} _amount U128
         * @instance
         */
        setRateLimit: async (signer: ethers.Signer, _amount: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'setRateLimit', false, {
                amount: _amount,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/setRateLimit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setRateLimitH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'setRateLimit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetRateLimitCall: (_amount: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'setRateLimit', {
                amount: _amount,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetRateLimitCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetRateLimitCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DarwiniaStaking', 'setRateLimit', argsBytes)
        },

        /**
         * See [`Pallet::set_collator_count`].
         *
         * @param {unknown} _count U32
         * @instance
         */
        setCollatorCount: async (signer: ethers.Signer, _count: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'setCollatorCount', false, {
                count: _count,
           });
        },

        /**
         * Similar to {@link: darwinia/darwiniaStaking/calls/setCollatorCount}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setCollatorCountH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'DarwiniaStaking', 'setCollatorCount', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetCollatorCountCall: (_count: unknown) => {
            return buildRuntimeCall(metadata, 'DarwiniaStaking', 'setCollatorCount', {
                count: _count,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetCollatorCountCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetCollatorCountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'DarwiniaStaking', 'setCollatorCount', argsBytes)
        },

    }
}

