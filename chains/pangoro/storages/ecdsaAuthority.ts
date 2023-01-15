import {GetStorage} from "../../../src/storage";

export const getEcdsaAuthority = (getStorage: GetStorage) => {
    return {

        /**
         * The current active authorities.
         *
         * @return BoundedVec: Vec<[U8; 20]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Authorities');
        },

        /**
         * The incoming authorities.
         *
         * @return BoundedVec: Vec<[U8; 20]>
         */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NextAuthorities');
        },

        /**
         * The nonce of the current active authorities. AKA term/session/era.
         *
         * @return U32
         */
        nonce: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Nonce');
        },

        /**
         * The authorities change waiting for signing.
         *
         * @return (Enum<{0/AddMember: {new: [U8; 20]}, 1/RemoveMember: {pre: [U8; 20], old: [U8; 20]}, 2/SwapMembers: {pre: [U8; 20], old: [U8; 20], new: [U8; 20]}}>, Enum<{0/None: , 1/Some: U32}>, [U8; 32], Vec<([U8; 20], [U8; 65])>)
         */
        authoritiesChangeToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'AuthoritiesChangeToSign');
        },

        /**
         * The new message root waiting for signing.
         *
         * @return ({block_number: U32, message_root: [U8; 32], nonce: U32}, [U8; 32], Vec<([U8; 20], [U8; 65])>)
         */
        newMessageRootToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NewMessageRootToSign');
        },

        /**
         * Record the previous message root.
         *
         * Use for checking if the message root getter get the same message root as the previous one.
         * And if this is empty, it means the message root is require to be relayed.
         *
         * @return (U32, [U8; 32])
         */
        previousMessageRoot: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'PreviousMessageRoot');
        },
    };
};
