import {GetStorage} from "../../storage";

export default {

    /**
     * The current set of validators.
     */
    validators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'Validators');
    },

    /**
     * Current index of the session.
     */
    currentIndex: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'CurrentIndex');
    },

    /**
     * True if the underlying economic identities or weighting behind the validators
     * has changed in the queued validator set.
     */
    queuedChanged: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'QueuedChanged');
    },

    /**
     * The queued keys for the next session. When the next session begins, these keys
     * will be used to determine the validator&#39;s session keys.
     */
    queuedKeys: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'QueuedKeys');
    },

    /**
     * Indices of disabled validators.
     *
     * The vec is always kept sorted so that we can find whether a given validator is
     * disabled using binary search. It gets cleared when `on_session_ending` returns
     * a new set of identities.
     */
    disabledValidators: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Session', 'DisabledValidators');
    },

    /**
     * The next session keys for a validator.
     */
    nextKeys: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Session', 'NextKeys', param0);
    },

    /**
     * The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    keyOwner: async (getStorage: GetStorage, param0: unknown /* ([U8; 4], Vec&lt;U8&gt;) */): Promise<string | null> => {
        return await getStorage('Session', 'KeyOwner', param0);
    },
};