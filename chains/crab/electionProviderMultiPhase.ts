import {GetStorage} from "../../storage";

export default {

    /**
     * Internal counter for the number of rounds.
     *
     * This is useful for de-duplication of transactions submitted to the pool, and general
     * diagnostics of the pallet.
     *
     * This is merely incremented once per every time that an upstream `elect` is called.
     */
    round: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'Round');
    },

    /**
     * Current phase.
     */
    currentPhase: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'CurrentPhase');
    },

    /**
     * Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    queuedSolution: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'QueuedSolution');
    },

    /**
     * Snapshot data of the round.
     *
     * This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    snapshot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'Snapshot');
    },

    /**
     * Desired number of targets to elect for this round.
     *
     * Only exists when [`Snapshot`] is present.
     */
    desiredTargets: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'DesiredTargets');
    },

    /**
     * The metadata of the [`RoundSnapshot`]
     *
     * Only exists when [`Snapshot`] is present.
     */
    snapshotMetadata: async (getStorage: GetStorage): Promise<string | null> => {
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
     */
    signedSubmissionNextIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionNextIndex');
    },

    /**
     * A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     * `SignedSubmissions`.
     *
     * We never need to process more than a single signed submission at a time. Signed submissions
     * can be quite large, so we&#39;re willing to pay the cost of multiple database accesses to access
     * them one at a time instead of reading and decoding all of them at once.
     */
    signedSubmissionIndices: async (getStorage: GetStorage): Promise<string | null> => {
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
     */
    signedSubmissionsMap: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'SignedSubmissionsMap', param0);
    },

    /**
     * The minimum score that each &#39;untrusted&#39; solution must attain in order to be considered
     * feasible.
     *
     * Can be set via `set_minimum_untrusted_score`.
     */
    minimumUntrustedScore: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ElectionProviderMultiPhase', 'MinimumUntrustedScore');
    },
};