import { buildRuntimeCall, Dispatch } from "../../../call";
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

        stakeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', true, data);
        },

        stakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'stake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
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

        unstakeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', true, data);
        },

        unstakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unstake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
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

        restakeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'restake', true, data);
        },

        restakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'restake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
         * Claim the stakes from the pallet/contract account.
         *
         */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false);
        },

        claimD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', true);
        },

        claimCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claim', {
            });
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

        collectD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', true, data);
        },

        collectCall: (_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'collect', {
                commission: _commission,
            });
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

        nominateD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', true, data);
        },

        nominateCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                target: _target,
            });
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

        chillD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', true);
        },

        chillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

    }
}
