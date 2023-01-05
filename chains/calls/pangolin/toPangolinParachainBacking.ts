import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getToPangolinParachainBacking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Lock token in this chain and cross transfer to the target chain
         * 
         * Target is the id of the target chain defined in s2s_chain pallet
         *
         * @param _spec_version: U32
         * @param _weight: U64
         * @param _value: Compact<U128>
         * @param _fee: Compact<U128>
         * @param _recipient: [U8; 32]
         */
        lockAndRemoteIssue: async (signer: ethers.Signer, _spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', false, _spec_version, _weight, _value, _fee, _recipient);
        },

        lockAndRemoteIssueD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', true, data);
        },

        lockAndRemoteIssueCall: (_spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', {
                spec_version: _spec_version,
                weight: _weight,
                value: _value,
                fee: _fee,
                recipient: _recipient,
            });
        },

        /**
         * Receive target chain locked message and unlock token in this chain.
         *
         * @param _amount: U128
         * @param _recipient: [U8; 32]
         */
        unlockFromRemote: async (signer: ethers.Signer, _amount: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', false, _amount, _recipient);
        },

        unlockFromRemoteD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', true, data);
        },

        unlockFromRemoteCall: (_amount: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'unlockFromRemote', {
                amount: _amount,
                recipient: _recipient,
            });
        },

        /**
         *
         * @param _period: U32
         */
        setSecureLimitedPeriod: async (signer: ethers.Signer, _period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', false, _period);
        },

        setSecureLimitedPeriodD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', true, data);
        },

        setSecureLimitedPeriodCall: (_period: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', {
                period: _period,
            });
        },

        /**
         *
         * @param _limitation: U128
         */
        setSecurityLimitationRingAmount: async (signer: ethers.Signer, _limitation: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', false, _limitation);
        },

        setSecurityLimitationRingAmountD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', true, data);
        },

        setSecurityLimitationRingAmountCall: (_limitation: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', {
                limitation: _limitation,
            });
        },

        /**
         *
         * @param _account: [U8; 32]
         */
        setRemoteMappingTokenFactoryAccount: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', false, _account);
        },

        setRemoteMappingTokenFactoryAccountD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', true, data);
        },

        setRemoteMappingTokenFactoryAccountCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', {
                account: _account,
            });
        },

    }
}
