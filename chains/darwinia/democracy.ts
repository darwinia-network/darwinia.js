import {GetStorage} from "../../storage";

export const getDemocracy = (getStorage: GetStorage) => {
    return {

        /**
        * The number of (public) proposals that have been made so far.
        */
        publicPropCount: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'PublicPropCount');
        },

        /**
        * The public proposals. Unsorted. The second item is the proposal&#39;s hash.
        */
        publicProps: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'PublicProps');
        },

        /**
        * Those who have locked a deposit.
        *
        * TWOX-NOTE: Safe, as increasing integer keys are safe.
        */
        depositOf: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Democracy', 'DepositOf', param0);
        },

        /**
        * Map of hashes to the proposal preimage, along with who registered it and their deposit.
        * The block number is the block at which it was deposited.
        */
        preimages: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Democracy', 'Preimages', param0);
        },

        /**
        * The next free referendum index, aka the number of referenda started so far.
        */
        referendumCount: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'ReferendumCount');
        },

        /**
        * The lowest referendum index representing an unbaked referendum. Equal to
        * `ReferendumCount` if there isn&#39;t a unbaked referendum.
        */
        lowestUnbaked: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'LowestUnbaked');
        },

        /**
        * Information concerning any given referendum.
        *
        * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
        */
        referendumInfoOf: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Democracy', 'ReferendumInfoOf', param0);
        },

        /**
        * All votes for a particular voter. We store the balance for the number of votes that we
        * have recorded. The second item is the total amount of delegations, that will be added.
        *
        * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
        */
        votingOf: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Democracy', 'VotingOf', param0);
        },

        /**
        * Accounts for which there are locks in action which may be removed at some point in the
        * future. The value is the block number at which the lock expires and may be removed.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.
        */
        locks: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Democracy', 'Locks', param0);
        },

        /**
        * True if the last referendum tabled was submitted externally. False if it was a public
        * proposal.
        */
        lastTabledWasExternal: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'LastTabledWasExternal');
        },

        /**
        * The referendum to be tabled whenever it would be valid to table an external proposal.
        * This happens when a referendum needs to be tabled and one of two conditions are met:
        * - `LastTabledWasExternal` is `false`; or
        * - `PublicProps` is empty.
        */
        nextExternal: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'NextExternal');
        },

        /**
        * A record of who vetoed what. Maps proposal hash to a possible existent block number
        * (until when it may not be resubmitted) and who vetoed it.
        */
        blacklist: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Democracy', 'Blacklist', param0);
        },

        /**
        * Record of all proposals that have been subject to emergency cancellation.
        */
        cancellations: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Democracy', 'Cancellations', param0);
        },

        /**
        * Storage version of the pallet.
        *
        * New networks start with last version.
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Democracy', 'StorageVersion');
        },
    };
};