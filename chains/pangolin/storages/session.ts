import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Session`'s storages.
 * 
 * `Session`'s calls: {@link: module:pangolin/session/calls}
 *
 * @module pangolin/session/storages
 */
export const getSession = (getStorage: GetStorage) => {
    return {

        /**
         * The current set of validators.
         *
         * @returns {Promise<string | null>} Vec<[U8; 32]>
         */
        validators: async (): Promise<string | null> => {
            return await getStorage('Session', 'Validators');
        },

        /**
         * Current index of the session.
         *
         * @returns {Promise<string | null>} U32
         */
        currentIndex: async (): Promise<string | null> => {
            return await getStorage('Session', 'CurrentIndex');
        },

        /**
         * True if the underlying economic identities or weighting behind the validators
         * has changed in the queued validator set.
         *
         * @returns {Promise<string | null>} Bool
         */
        queuedChanged: async (): Promise<string | null> => {
            return await getStorage('Session', 'QueuedChanged');
        },

        /**
         * The queued keys for the next session. When the next session begins, these keys
         * will be used to determine the validator's session keys.
         *
         * @returns {Promise<string | null>} Vec<([U8; 32], {babe: [U8; 32], grandpa: [U8; 32], beefy: [U8; 33], im_online: [U8; 32], authority_discovery: [U8; 32]})>
         */
        queuedKeys: async (): Promise<string | null> => {
            return await getStorage('Session', 'QueuedKeys');
        },

        /**
         * Indices of disabled validators.
         *
         * The vec is always kept sorted so that we can find whether a given validator is
         * disabled using binary search. It gets cleared when `on_session_ending` returns
         * a new set of identities.
         *
         * @returns {Promise<string | null>} Vec<U32>
         */
        disabledValidators: async (): Promise<string | null> => {
            return await getStorage('Session', 'DisabledValidators');
        },

        /**
         * The next session keys for a validator.
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} SessionKeys: {babe: [U8; 32], grandpa: [U8; 32], beefy: [U8; 33], im_online: [U8; 32], authority_discovery: [U8; 32]}
         */
        nextKeys: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Session', 'NextKeys', param0);
        },

        /**
         * The owner of a key. The key is the `KeyTypeId` + the encoded key.
         *
         * @param {unknown} param0 ([U8; 4], Vec<U8>)
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        keyOwner: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Session', 'KeyOwner', param0);
        },
    };
};
