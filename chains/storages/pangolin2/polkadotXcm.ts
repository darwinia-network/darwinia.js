import {GetStorage} from "../../../storage";

export const getPolkadotXcm = (getStorage: GetStorage) => {
    return {

        /**
        * The latest available query index.
        *
        * @return U64
        */
        queryCounter: async (): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'QueryCounter');
        },

        /**
        * The ongoing queries.
        *
        * @param param0: U64
        * @return QueryStatus: Enum<{"0/Pending", "1/VersionNotifier", "2/Ready"}>
        */
        queries: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'Queries', param0);
        },

        /**
        * The existing asset traps.
        *
        * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
        * times this pair has been trapped (usually just 1 if it exists at all).
        *
        * @param param0: H256: [U8; 32]
        * @return U32
        */
        assetTraps: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'AssetTraps', param0);
        },

        /**
        * Default version to encode XCM when latest version of destination is unknown. If `None`,
        * then the destinations whose XCM version is unknown are considered unreachable.
        *
        * @return U32
        */
        safeXcmVersion: async (): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'SafeXcmVersion');
        },

        /**
        * The Latest versions that we know various locations support.
        *
        * @param param0: U32
        * @param param1: VersionedMultiLocation: Enum<{"0/V0", "1/V1"}>
        * @return U32
        */
        supportedVersion: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'SupportedVersion', param0, param1);
        },

        /**
        * All locations that we have requested version notifications from.
        *
        * @param param0: U32
        * @param param1: VersionedMultiLocation: Enum<{"0/V0", "1/V1"}>
        * @return U64
        */
        versionNotifiers: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'VersionNotifiers', param0, param1);
        },

        /**
        * The target locations that are subscribed to our version changes, as well as the most recent
        * of our versions we informed them of.
        *
        * @param param0: U32
        * @param param1: VersionedMultiLocation: Enum<{"0/V0", "1/V1"}>
        * @return (U64, U64, U32)
        */
        versionNotifyTargets: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'VersionNotifyTargets', param0, param1);
        },

        /**
        * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
        * the `u32` counter is the number of times that a send to the destination has been attempted,
        * which is used as a prioritization.
        *
        * @return BoundedVec: Vec<(Enum<{"0/V0", "1/V1"}>, U32)>
        */
        versionDiscoveryQueue: async (): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'VersionDiscoveryQueue');
        },

        /**
        * The current migration&#39;s stage, if any.
        *
        * @return VersionMigrationStage: Enum<{"0/MigrateSupportedVersion", "1/MigrateVersionNotifiers", "2/NotifyCurrentTargets", "3/MigrateAndNotifyOldTargets"}>
        */
        currentMigration: async (): Promise<string | null> => {
            return await getStorage('PolkadotXcm', 'CurrentMigration');
        },
    };
};
