import { buildRuntimeCall, Dispatch, decodeCall } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

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

        lockAndRemoteIssueH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', true, data);
        },

        buildLockAndRemoteIssueCall: (_spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', {
                spec_version: _spec_version,
                weight: _weight,
                value: _value,
                fee: _fee,
                recipient: _recipient,
            });
        },

        buildLockAndRemoteIssueCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', argsBytes)
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

        unlockFromRemoteH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', true, data);
        },

        buildUnlockFromRemoteCall: (_amount: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'unlockFromRemote', {
                amount: _amount,
                recipient: _recipient,
            });
        },

        buildUnlockFromRemoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ToPangolinParachainBacking', 'unlockFromRemote', argsBytes)
        },

        /**
         *
         * @param _period: U32
         */
        setSecureLimitedPeriod: async (signer: ethers.Signer, _period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', false, _period);
        },

        setSecureLimitedPeriodH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', true, data);
        },

        buildSetSecureLimitedPeriodCall: (_period: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', {
                period: _period,
            });
        },

        buildSetSecureLimitedPeriodCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', argsBytes)
        },

        /**
         *
         * @param _limitation: U128
         */
        setSecurityLimitationRingAmount: async (signer: ethers.Signer, _limitation: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', false, _limitation);
        },

        setSecurityLimitationRingAmountH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', true, data);
        },

        buildSetSecurityLimitationRingAmountCall: (_limitation: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', {
                limitation: _limitation,
            });
        },

        buildSetSecurityLimitationRingAmountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', argsBytes)
        },

        /**
         *
         * @param _account: [U8; 32]
         */
        setRemoteMappingTokenFactoryAccount: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', false, _account);
        },

        setRemoteMappingTokenFactoryAccountH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', true, data);
        },

        buildSetRemoteMappingTokenFactoryAccountCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', {
                account: _account,
            });
        },

        buildSetRemoteMappingTokenFactoryAccountCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', argsBytes)
        },

    }
}
