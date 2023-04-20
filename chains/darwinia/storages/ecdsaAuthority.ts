import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `EcdsaAuthority`'s storages.
 * 
 * `EcdsaAuthority`'s calls: {@link: module:darwinia/ecdsaAuthority/calls}
 *
 * @module darwinia/ecdsaAuthority/storages
 */
export const getEcdsaAuthority = (getStorage: GetStorage) => {
    return {

        /**
         * The current active authorities.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<[U8; 20]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Authorities');
        },

        /**
         * The incoming authorities.
         *
         * @returns {Promise<string | null>} BoundedVec: Vec<[U8; 20]>
         */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NextAuthorities');
        },

        /**
         * The nonce of the current active authorities. AKA term/session/era.
         *
         * @returns {Promise<string | null>} U32
         */
        nonce: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Nonce');
        },

        /**
         * The authorities change waiting for signing.
         *
         * @returns {Promise<string | null>} AuthoritiesChangeSigned: {operation: Enum<{0/AddMember: {new: [U8; 20]}, 1/RemoveMember: {pre: [U8; 20], old: [U8; 20]}, 2/SwapMembers: {pre: [U8; 20], old: [U8; 20], new: [U8; 20]}}>, threshold: Enum<{0/None: , 1/Some: U32}>, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>}
         */
        authoritiesChangeToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'AuthoritiesChangeToSign');
        },

        /**
         * The incoming message root waiting for signing.
         *
         * @returns {Promise<string | null>} MessageRootSigned: {commitment: {block_number: U32, message_root: [U8; 32], nonce: U32}, message: [U8; 32], signatures: Vec<([U8; 20], [U8; 65])>, authorized: Bool}
         */
        messageRootToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'MessageRootToSign');
        },
    };
};
