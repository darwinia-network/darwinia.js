import {GetStorage} from "../../../src/storage";

export const getElectionProviderMultiPhase = (getStorage: GetStorage) => {
    return {

        /**
         * Internal counter for the number of rounds.
         *
         * This is useful for de-duplication of transactions submitted to the pool, and general
         * diagnostics of the pallet.
         *
         * This is merely incremented once per every time that an upstream `elect` is called.
         *
         * @return U32
         */
        round: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'Round');
        },

        /**
         * Current phase.
         *
         * @return Phase: Enum<{0/Off: , 1/Signed: , 2/Unsigned: (Bool, U32), 3/Emergency: }>
         */
        currentPhase: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'CurrentPhase');
        },

        /**
         * Current best solution, signed or unsigned, queued to be returned upon `elect`.
         *
         * @return ReadySolution: {supports: Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>, score: [U128; 3], compute: Enum<{0/OnChain: , 1/Signed: , 2/Unsigned: , 3/Fallback: , 4/Emergency: }>}
         */
        queuedSolution: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'QueuedSolution');
        },

        /**
         * Snapshot data of the round.
         *
         * This is created at the beginning of the signed phase and cleared upon calling `elect`.
         *
         * @return RoundSnapshot: {voters: Vec<([U8; 32], U64, Vec<[U8; 32]>)>, targets: Vec<[U8; 32]>}
         */
        snapshot: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'Snapshot');
        },

        /**
         * Desired number of targets to elect for this round.
         *
         * Only exists when [`Snapshot`] is present.
         *
         * @return U32
         */
        desiredTargets: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'DesiredTargets');
        },

        /**
         * The metadata of the [`RoundSnapshot`]
         *
         * Only exists when [`Snapshot`] is present.
         *
         * @return SolutionOrSnapshotSize: {voters: Compact<U32>, targets: Compact<U32>}
         */
        snapshotMetadata: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'SnapshotMetadata');
        },

        /**
         * The next index to be assigned to an incoming signed submission.
         *
         * Every accepted submission is assigned a unique index; that index is bound to that particular
         * submission for the duration of the election. On election finalization, the next index is
         * reset to 0.
         *
         * We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
         * capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
         * because iteration is slow. Instead, we store the value here.
         *
         * @return U32
         */
        signedSubmissionNextIndex: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionNextIndex');
        },

        /**
         * A sorted, bounded set of `(score, index)`, where each `index` points to a value in
         * `SignedSubmissions`.
         *
         * We never need to process more than a single signed submission at a time. Signed submissions
         * can be quite large, so we're willing to pay the cost of multiple database accesses to access
         * them one at a time instead of reading and decoding all of them at once.
         *
         * @return BoundedBTreeMap: Vec<([U128; 3], U32)>
         */
        signedSubmissionIndices: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionIndices');
        },

        /**
         * Unchecked, signed solutions.
         *
         * Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
         * allowing us to keep only a single one in memory at a time.
         *
         * Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
         * affect; we shouldn't need a cryptographically secure hasher.
         *
         * @param param0: U32
         * @return SignedSubmission: {who: [U8; 32], deposit: U128, raw_solution: {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>, votes17: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 16], Compact<U16>)>, votes18: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 17], Compact<U16>)>, votes19: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 18], Compact<U16>)>, votes20: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 19], Compact<U16>)>, votes21: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 20], Compact<U16>)>, votes22: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 21], Compact<U16>)>, votes23: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 22], Compact<U16>)>, votes24: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 23], Compact<U16>)>}, score: [U128; 3], round: U32}, reward: U128}
         */
        signedSubmissionsMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionsMap', param0);
        },

        /**
         * The minimum score that each 'untrusted' solution must attain in order to be considered
         * feasible.
         *
         * Can be set via `set_minimum_untrusted_score`.
         *
         * @return [U128; 3]
         */
        minimumUntrustedScore: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'MinimumUntrustedScore');
        },
    };
};
