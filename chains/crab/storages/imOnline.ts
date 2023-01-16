import { GetStorage } from "../../../src/storage";

export const getImOnline = (getStorage: GetStorage) => {
    return {

        /**
         * The block number after which it's ok to send heartbeats in the current
         * session.
         *
         * At the beginning of each session we set this to a value that should fall
         * roughly in the middle of the session duration. The idea is to first wait for
         * the validators to produce a block in the current session, so that the
         * heartbeat later on will not be necessary.
         *
         * This value will only be used as a fallback if we fail to get a proper session
         * progress estimate from `NextSessionRotation`, as those estimates should be
         * more accurate then the value we calculate for `HeartbeatAfter`.
         *
         * @return U32
         */
        heartbeatAfter: async (): Promise<string | null> => {
            return await getStorage('ImOnline', 'HeartbeatAfter');
        },

        /**
         * The current set of keys that may issue a heartbeat.
         *
         * @return WeakBoundedVec: Vec<[U8; 32]>
         */
        keys: async (): Promise<string | null> => {
            return await getStorage('ImOnline', 'Keys');
        },

        /**
         * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
         * `WrapperOpaque<BoundedOpaqueNetworkState>`.
         *
         * @param param0: U32
         * @param param1: U32
         * @return WrapperOpaque: (Compact<U32>, {peer_id: Vec<U8>, external_addresses: Vec<Vec<U8>>})
         */
        receivedHeartbeats: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('ImOnline', 'ReceivedHeartbeats', param0, param1);
        },

        /**
         * For each session index, we keep a mapping of `ValidatorId<T>` to the
         * number of blocks authored by the given authority.
         *
         * @param param0: U32
         * @param param1: AccountId32: [U8; 32]
         * @return U32
         */
        authoredBlocks: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('ImOnline', 'AuthoredBlocks', param0, param1);
        },
    };
};
