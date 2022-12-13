import {GetStorage} from "../../storage";

export const getEcdsaAuthority = (getStorage: GetStorage) => {
    return {

        /**
        * The current active authorities.

        * @return BoundedVec: Vec&lt;[U8; 20]&gt;
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Authorities');
        },

        /**
        * The incoming authorities.

        * @return BoundedVec: Vec&lt;[U8; 20]&gt;
        */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NextAuthorities');
        },

        /**
        * The nonce of the current active authorities. AKA term/session/era.

        * @return U32
        */
        nonce: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'Nonce');
        },

        /**
        * The authorities change waiting for signing.

        * @return (Enum&lt;{&#34;0/AddMember&#34;, &#34;1/RemoveMember&#34;, &#34;2/SwapMembers&#34;}&gt;, Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, [U8; 32], Vec&lt;([U8; 20], [U8; 65])&gt;)
        */
        authoritiesChangeToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'AuthoritiesChangeToSign');
        },

        /**
        * The new message root waiting for signing.

        * @return ({block_number: U32, message_root: [U8; 32], nonce: U32}, [U8; 32], Vec&lt;([U8; 20], [U8; 65])&gt;)
        */
        newMessageRootToSign: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'NewMessageRootToSign');
        },

        /**
        * Record the previous message root.
        *
        * Use for checking if the message root getter get the same message root as the previous one.
        * And if this is empty, it means the message root is require to be relayed.

        * @return (U32, [U8; 32])
        */
        previousMessageRoot: async (): Promise<string | null> => {
            return await getStorage('EcdsaAuthority', 'PreviousMessageRoot');
        },
    };
};