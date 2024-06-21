import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `ConvictionVoting`'s storages.
 * 
 * `ConvictionVoting`'s calls: {@link: module:koi/convictionVoting/calls}
 *
 * @module koi/convictionVoting/storages
 */
export const getConvictionVoting = (getStorage: GetStorage) => {
    return {

        /**
         * All voting for a particular voter in a particular voting class. We store the balance for the
         * number of votes that we have recorded.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @param {unknown} param1 U16
         * @returns {Promise<string | null>} Voting: Enum<{0/Casting: {votes: Vec<(U32, Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}, 2/SplitAbstain: {aye: U128, nay: U128, abstain: U128}}>)>, delegations: {votes: U128, capital: U128}, prior: (U32, U128)}, 1/Delegating: {balance: U128, target: [U8; 20], conviction: Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>, delegations: {votes: U128, capital: U128}, prior: (U32, U128)}}>
         */
        votingFor: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('ConvictionVoting', 'VotingFor', param0, param1);
        },

        /**
         * The voting classes which have a non-zero lock requirement and the lock amounts which they
         * require. The actual amount locked on behalf of this pallet should always be the maximum of
         * this list.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} BoundedVec: Vec<(U16, U128)>
         */
        classLocksFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('ConvictionVoting', 'ClassLocksFor', param0);
        },
    };
};
