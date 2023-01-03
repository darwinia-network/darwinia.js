import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getStaking = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param param1: Enum<{"0/RingBalance", "1/KtonBalance"}>
         * @param param2: Enum<{"0/Staked", "1/Stash", "2/Controller", "3/Account", "4/None"}>
         * @param param3: U8
	 */
        bond: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bond', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: Enum<{"0/RingBalance", "1/KtonBalance"}>
         * @param param1: U8
	 */
        bondExtra: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'bondExtra', false, param0, param1);
        },

        /**
         * @param param0: U128
         * @param param1: U8
	 */
        depositExtra: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'depositExtra', false, param0, param1);
        },

        /**
         * @param param0: Enum<{"0/RingBalance", "1/KtonBalance"}>
	 */
        unbond: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unbond', false, param0);
        },

        /**
         * @param param0: U32
	 */
        withdrawUnbonded: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'withdrawUnbonded', false, param0);
        },

        /**
	 */
        claimMatureDeposits: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claimMatureDeposits', false);
        },

        /**
         * @param param0: U64
	 */
        tryClaimDepositsWithPunish: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'tryClaimDepositsWithPunish', false, param0);
        },

        /**
         * @param param0: {commission: Compact<U32>, blocked: Bool}
	 */
        validate: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'validate', false, param0);
        },

        /**
         * @param param0: Vec<Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>>
	 */
        nominate: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, param0);
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        /**
         * @param param0: Enum<{"0/Staked", "1/Stash", "2/Controller", "3/Account", "4/None"}>
	 */
        setPayee: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setPayee', false, param0);
        },

        /**
         * @param param0: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        setController: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setController', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        setValidatorCount: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setValidatorCount', false, param0);
        },

        /**
         * @param param0: Compact<U32>
	 */
        increaseValidatorCount: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'increaseValidatorCount', false, param0);
        },

        /**
         * @param param0: U8
	 */
        scaleValidatorCount: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'scaleValidatorCount', false, param0);
        },

        /**
	 */
        forceNoEras: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNoEras', false);
        },

        /**
	 */
        forceNewEra: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEra', false);
        },

        /**
         * @param param0: Vec<[U8; 32]>
	 */
        setInvulnerables: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setInvulnerables', false, param0);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        forceUnstake: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceUnstake', false, param0, param1);
        },

        /**
	 */
        forceNewEraAlways: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'forceNewEraAlways', false);
        },

        /**
         * @param param0: U32
         * @param param1: Vec<U32>
	 */
        cancelDeferredSlash: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'cancelDeferredSlash', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        payoutStakers: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'payoutStakers', false, param0, param1);
        },

        /**
         * @param param0: Compact<U128>
         * @param param1: Compact<U128>
	 */
        rebond: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'rebond', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Compact<U32>
	 */
        setHistoryDepth: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setHistoryDepth', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: U32
	 */
        reapStash: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'reapStash', false, param0, param1);
        },

        /**
         * @param param0: Vec<Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>>
	 */
        kick: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'kick', false, param0);
        },

        /**
         * @param param0: U128
         * @param param1: U128
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: Enum<{"0/None", "1/Some"}>
         * @param param4: Enum<{"0/None", "1/Some"}>
         * @param param5: U32
	 */
        setStakingConfigs: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'setStakingConfigs', false, param0, param1, param2, param3, param4, param5);
        },

        /**
         * @param param0: [U8; 32]
	 */
        chillOther: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chillOther', false, param0);
        },


    }
}
