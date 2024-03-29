import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Democracy`'s storages.
 * 
 * `Democracy`'s calls: {@link: module:crab/democracy/calls}
 *
 * @module crab/democracy/storages
 */
export const getDemocracy = (getStorage: GetStorage) => {
    return {

        /**
         * The number of (public) proposals that have been made so far.
         *
         * @returns {Promise<string | null>} U32
         */
        publicPropCount: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'PublicPropCount');
        },

        /**
         * The public proposals. Unsorted. The second item is the proposal.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<(U32, Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>, [U8; 20])>
         */
        publicProps: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'PublicProps');
        },

        /**
         * Those who have locked a deposit.
         *
         * TWOX-NOTE: Safe, as increasing integer keys are safe.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} (Vec<[U8; 20]>, U128)
         */
        depositOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'DepositOf', param0);
        },

        /**
         * The next free referendum index, aka the number of referenda started so far.
         *
         * @returns {Promise<string | null>} U32
         */
        referendumCount: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'ReferendumCount');
        },

        /**
         * The lowest referendum index representing an unbaked referendum. Equal to
         * `ReferendumCount` if there isn't a unbaked referendum.
         *
         * @returns {Promise<string | null>} U32
         */
        lowestUnbaked: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'LowestUnbaked');
        },

        /**
         * Information concerning any given referendum.
         *
         * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} ReferendumInfo: Enum<{0/Ongoing: {end: U32, proposal: Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>, threshold: Enum<{0/SuperMajorityApprove: , 1/SuperMajorityAgainst: , 2/SimpleMajority: }>, delay: U32, tally: {ayes: U128, nays: U128, turnout: U128}}, 1/Finished: {approved: Bool, end: U32}}>
         */
        referendumInfoOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'ReferendumInfoOf', param0);
        },

        /**
         * All votes for a particular voter. We store the balance for the number of votes that we
         * have recorded. The second item is the total amount of delegations, that will be added.
         *
         * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Voting: Enum<{0/Direct: {votes: Vec<(U32, Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}}>)>, delegations: {votes: U128, capital: U128}, prior: (U32, U128)}, 1/Delegating: {balance: U128, target: [U8; 20], conviction: Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>, delegations: {votes: U128, capital: U128}, prior: (U32, U128)}}>
         */
        votingOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'VotingOf', param0);
        },

        /**
         * True if the last referendum tabled was submitted externally. False if it was a public
         * proposal.
         *
         * @returns {Promise<string | null>} Bool
         */
        lastTabledWasExternal: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'LastTabledWasExternal');
        },

        /**
         * The referendum to be tabled whenever it would be valid to table an external proposal.
         * This happens when a referendum needs to be tabled and one of two conditions are met:
         * - `LastTabledWasExternal` is `false`; or
         * - `PublicProps` is empty.
         *
         * @returns {Promise<string | null>} (Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>, Enum<{0/SuperMajorityApprove: , 1/SuperMajorityAgainst: , 2/SimpleMajority: }>)
         */
        nextExternal: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'NextExternal');
        },

        /**
         * A record of who vetoed what. Maps proposal hash to a possible existent block number
         * (until when it may not be resubmitted) and who vetoed it.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} (U32, Vec<[U8; 20]>)
         */
        blacklist: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'Blacklist', param0);
        },

        /**
         * Record of all proposals that have been subject to emergency cancellation.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} Bool
         */
        cancellations: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'Cancellations', param0);
        },

        /**
         * General information concerning any proposal or referendum.
         * The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         *
         * @param {unknown} param0 MetadataOwner: Enum<{0/External: , 1/Proposal: U32, 2/Referendum: U32}>
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        metadataOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Democracy', 'MetadataOf', param0);
        },
    };
};
