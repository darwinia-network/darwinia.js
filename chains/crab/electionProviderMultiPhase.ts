import {GetStorage} from "../../storage";

export const getElectionProviderMultiPhase = (getStorage: GetStorage) => {
    return {

        /**
        * Internal counter for the number of rounds.
        *
        * This is useful for de-duplication of transactions submitted to the pool, and general
        * diagnostics of the pallet.
        *
        * This is merely incremented once per every time that an upstream `elect` is called.

        * @return U32
        */
        round: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'Round');
        },

        /**
        * Current phase.

        * @return Phase: Enum&lt;{&#34;0/Off&#34;, &#34;1/Signed&#34;, &#34;2/Unsigned&#34;, &#34;3/Emergency&#34;}&gt;
        */
        currentPhase: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'CurrentPhase');
        },

        /**
        * Current best solution, signed or unsigned, queued to be returned upon `elect`.

        * @return ReadySolution: {supports: Vec&lt;([U8; 32], {total: U128, voters: Vec&lt;([U8; 32], U128)&gt;})&gt;, score: [U128; 3], compute: Enum&lt;{&#34;0/OnChain&#34;, &#34;1/Signed&#34;, &#34;2/Unsigned&#34;, &#34;3/Fallback&#34;, &#34;4/Emergency&#34;}&gt;}
        */
        queuedSolution: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'QueuedSolution');
        },

        /**
        * Snapshot data of the round.
        *
        * This is created at the beginning of the signed phase and cleared upon calling `elect`.

        * @return RoundSnapshot: {voters: Vec&lt;([U8; 32], U64, Vec&lt;[U8; 32]&gt;)&gt;, targets: Vec&lt;[U8; 32]&gt;}
        */
        snapshot: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'Snapshot');
        },

        /**
        * Desired number of targets to elect for this round.
        *
        * Only exists when [`Snapshot`] is present.

        * @return U32
        */
        desiredTargets: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'DesiredTargets');
        },

        /**
        * The metadata of the [`RoundSnapshot`]
        *
        * Only exists when [`Snapshot`] is present.

        * @return SolutionOrSnapshotSize: {voters: Compact&lt;U32&gt;, targets: Compact&lt;U32&gt;}
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
        * We can&#39;t just use `SignedSubmissionIndices.len()`, because that&#39;s a bounded set; past its
        * capacity, it will simply saturate. We can&#39;t just iterate over `SignedSubmissionsMap`,
        * because iteration is slow. Instead, we store the value here.

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
        * can be quite large, so we&#39;re willing to pay the cost of multiple database accesses to access
        * them one at a time instead of reading and decoding all of them at once.

        * @return BoundedBTreeMap: Vec&lt;([U128; 3], U32)&gt;
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
        * affect; we shouldn&#39;t need a cryptographically secure hasher.

        * @param param0: U32
        * @return SignedSubmission: {who: [U8; 32], deposit: U128, raw_solution: {solution: {votes1: Vec&lt;(Compact&lt;U32&gt;, Compact&lt;U16&gt;)&gt;, votes2: Vec&lt;(Compact&lt;U32&gt;, (Compact&lt;U16&gt;, Compact&lt;U16&gt;), Compact&lt;U16&gt;)&gt;, votes3: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 2], Compact&lt;U16&gt;)&gt;, votes4: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 3], Compact&lt;U16&gt;)&gt;, votes5: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 4], Compact&lt;U16&gt;)&gt;, votes6: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 5], Compact&lt;U16&gt;)&gt;, votes7: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 6], Compact&lt;U16&gt;)&gt;, votes8: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 7], Compact&lt;U16&gt;)&gt;, votes9: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 8], Compact&lt;U16&gt;)&gt;, votes10: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 9], Compact&lt;U16&gt;)&gt;, votes11: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 10], Compact&lt;U16&gt;)&gt;, votes12: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 11], Compact&lt;U16&gt;)&gt;, votes13: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 12], Compact&lt;U16&gt;)&gt;, votes14: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 13], Compact&lt;U16&gt;)&gt;, votes15: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 14], Compact&lt;U16&gt;)&gt;, votes16: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 15], Compact&lt;U16&gt;)&gt;, votes17: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 16], Compact&lt;U16&gt;)&gt;, votes18: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 17], Compact&lt;U16&gt;)&gt;, votes19: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 18], Compact&lt;U16&gt;)&gt;, votes20: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 19], Compact&lt;U16&gt;)&gt;, votes21: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 20], Compact&lt;U16&gt;)&gt;, votes22: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 21], Compact&lt;U16&gt;)&gt;, votes23: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 22], Compact&lt;U16&gt;)&gt;, votes24: Vec&lt;(Compact&lt;U32&gt;, [(Compact&lt;U16&gt;, Compact&lt;U16&gt;); 23], Compact&lt;U16&gt;)&gt;}, score: [U128; 3], round: U32}, reward: U128}
        */
        signedSubmissionsMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionsMap', param0);
        },

        /**
        * The minimum score that each &#39;untrusted&#39; solution must attain in order to be considered
        * feasible.
        *
        * Can be set via `set_minimum_untrusted_score`.

        * @return [U128; 3]
        */
        minimumUntrustedScore: async (): Promise<string | null> => {
            return await getStorage('ElectionProviderMultiPhase', 'MinimumUntrustedScore');
        },
    };
};