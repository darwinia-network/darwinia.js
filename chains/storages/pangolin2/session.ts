import {GetStorage} from "../../../storage";

export const getSession = (getStorage: GetStorage) => {
    return {

        /**
        * The current set of validators.
        *
        * @return Vec<[U8; 20]>
        */
        validators: async (): Promise<string | null> => {
            return await getStorage('Session', 'Validators');
        },

        /**
        * Current index of the session.
        *
        * @return U32
        */
        currentIndex: async (): Promise<string | null> => {
            return await getStorage('Session', 'CurrentIndex');
        },

        /**
        * True if the underlying economic identities or weighting behind the validators
        * has changed in the queued validator set.
        *
        * @return Bool
        */
        queuedChanged: async (): Promise<string | null> => {
            return await getStorage('Session', 'QueuedChanged');
        },

        /**
        * The queued keys for the next session. When the next session begins, these keys
        * will be used to determine the validator&#39;s session keys.
        *
        * @return Vec<([U8; 20], {aura: [U8; 32]})>
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
        * @return Vec<U32>
        */
        disabledValidators: async (): Promise<string | null> => {
            return await getStorage('Session', 'DisabledValidators');
        },

        /**
        * The next session keys for a validator.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return SessionKeys: {aura: [U8; 32]}
        */
        nextKeys: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Session', 'NextKeys', param0);
        },

        /**
        * The owner of a key. The key is the `KeyTypeId` + the encoded key.
        *
        * @param param0: ([U8; 4], Vec<U8>)
        * @return AccountId20: [U8; 20]
        */
        keyOwner: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Session', 'KeyOwner', param0);
        },
    };
};
