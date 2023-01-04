import {GetStorage} from "../../../storage";

export const getIdentity = (getStorage: GetStorage) => {
    return {

        /**
        * Information that is pertinent to identify the entity behind an account.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return Registration: {judgements: Vec<(U32, Enum<{Unknown: , FeePaid: U128, Reasonable: , KnownGood: , OutOfDate: , LowQuality: , Erroneous: }>)>, deposit: U128, info: {additional: Vec<(Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>)>, display: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, legal: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, web: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, riot: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, email: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{None: , Some: [U8; 20]}>, image: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, twitter: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>}}
        */
        identityOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'IdentityOf', param0);
        },

        /**
        * The super-identity of an alternative &#34;sub&#34; identity together with its name, within that
        * context. If the account is not some other account&#39;s sub-identity, then just `None`.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return ([U8; 32], Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>)
        */
        superOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'SuperOf', param0);
        },

        /**
        * Alternative &#34;sub&#34; identities of this account.
        *
        * The first item is the deposit, the second is a vector of the accounts.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return (U128, Vec<[U8; 32]>)
        */
        subsOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'SubsOf', param0);
        },

        /**
        * The set of registrars. Not expected to get very big as can only be added through a
        * special origin (likely a council motion).
        *
        * The index into this can be cast to `RegistrarIndex` to get a valid value.
        *
        * @return BoundedVec: Vec<Enum<{None: , Some: {account: [U8; 32], fee: U128, fields: U64}}>>
        */
        registrars: async (): Promise<string | null> => {
            return await getStorage('Identity', 'Registrars');
        },
    };
};
