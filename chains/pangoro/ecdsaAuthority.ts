import {GetStorage} from "../../storage";

export const getEcdsaAuthority = (getStorage: GetStorage) => {
    return {

        /**
        * The current active authorities.
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Authorities');
        },

        /**
        * The incoming authorities.
        */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NextAuthorities');
        },

        /**
        * The nonce of the current active authorities. AKA term/session/era.
        */
        nonce: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Nonce');
        },

        /**
        * The authorities change waiting for signing.
        */
        authoritiesChangeToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'AuthoritiesChangeToSign');
        },

        /**
        * The new message root waiting for signing.
        */
        newMessageRootToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NewMessageRootToSign');
        },

        /**
        * Record the previous message root.
        *
        * Use for checking if the message root getter get the same message root as the previous one.
        * And if this is empty, it means the message root is require to be relayed.
        */
        previousMessageRoot: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'PreviousMessageRoot');
        },
    };
};