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
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
         */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', false, _ring_amount, _kton_amount, _deposits);
        },

        stakeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', true, data);
        },

        buildStakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'stake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        buildStakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'stake', argsBytes)
        },

        /**
         * Withdraw stakes from the staking pool.
         *
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
         */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', false, _ring_amount, _kton_amount, _deposits);
        },

        unstakeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', true, data);
        },

        buildUnstakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unstake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        buildUnstakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'unstake', argsBytes)
        },

        /**
         * Cancel the `unstake` operation.
         * 
         * Re-stake the unstaking assets immediately.
         *
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
         */
        restake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'restake', false, _ring_amount, _kton_amount, _deposits);
        },

        restakeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'restake', true, data);
        },

        buildRestakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'restake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        buildRestakeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'restake', argsBytes)
        },

        /**
         * Claim the stakes from the pallet/contract account.
         *
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false);
        },

        claimH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', true);
        },

        buildClaimCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claim', {
            });
        },

        buildClaimCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'claim', argsBytes)
        },

        /**
         * Declare the desire to collect.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param _commission: U32
         */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', false, _commission);
        },

        collectH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', true, data);
        },

        buildCollectCall: (_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'collect', {
                commission: _commission,
            });
        },

        buildCollectCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'collect', argsBytes)
        },

        /**
         * Declare the desire to nominate a collator.
         * 
         * Effects will be felt at the beginning of the next session.
         *
         * @param _target: [U8; 20]
         */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _target);
        },

        nominateH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', true, data);
        },

        buildNominateCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                target: _target,
            });
        },

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
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        chillH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', true);
        },

        buildChillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

        buildChillCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Staking', 'chill', argsBytes)
        },

    }
}
