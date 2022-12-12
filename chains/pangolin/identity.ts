import {GetStorage} from "../../storage";

export default {

    /**
     * Information that is pertinent to identify the entity behind an account.
     *
     * TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    identityOf: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Identity', 'IdentityOf', param0);
    },

    /**
     * The super-identity of an alternative &#34;sub&#34; identity together with its name, within that
     * context. If the account is not some other account&#39;s sub-identity, then just `None`.
     */
    superOf: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Identity', 'SuperOf', param0);
    },

    /**
     * Alternative &#34;sub&#34; identities of this account.
     *
     * The first item is the deposit, the second is a vector of the accounts.
     *
     * TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    subsOf: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Identity', 'SubsOf', param0);
    },

    /**
     * The set of registrars. Not expected to get very big as can only be added through a
     * special origin (likely a council motion).
     *
     * The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    registrars: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Identity', 'Registrars');
    },
};