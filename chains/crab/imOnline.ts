import {GetStorage} from "../../storage";

export default {

    /**
     * The block number after which it&#39;s ok to send heartbeats in the current
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
     */
    heartbeatAfter: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ImOnline', 'HeartbeatAfter');
    },

    /**
     * The current set of keys that may issue a heartbeat.
     */
    keys: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ImOnline', 'Keys');
    },

    /**
     * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     * `WrapperOpaque&lt;BoundedOpaqueNetworkState&gt;`.
     */
    receivedHeartbeats: async (getStorage: GetStorage, param0: unknown /* U32 */, param1: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('ImOnline', 'ReceivedHeartbeats', param0, param1);
    },

    /**
     * For each session index, we keep a mapping of `ValidatorId&lt;T&gt;` to the
     * number of blocks authored by the given authority.
     */
    authoredBlocks: async (getStorage: GetStorage, param0: unknown /* U32 */, param1: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('ImOnline', 'AuthoredBlocks', param0, param1);
    },
};