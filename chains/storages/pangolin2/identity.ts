import {GetStorage} from "../../../storage";

export const getIdentity = (getStorage: GetStorage) => {
    return {

        /**
        * Information that is pertinent to identify the entity behind an account.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return Registration: {judgements: Vec<(U32, Enum<{"0/Unknown", "1/FeePaid", "2/Reasonable", "3/KnownGood", "4/OutOfDate", "5/LowQuality", "6/Erroneous"}>)>, deposit: U128, info: {additional: Vec<(Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>, display: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, legal: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, web: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, riot: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, email: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, pgp_fingerprint: Enum<{"0/None", "1/Some"}>, image: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, twitter: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}}
        */
        identityOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'IdentityOf', param0);
        },

        /**
        * The super-identity of an alternative &#34;sub&#34; identity together with its name, within that
        * context. If the account is not some other account&#39;s sub-identity, then just `None`.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return ([U8; 20], Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)
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
        * @param param0: AccountId20: [U8; 20]
        * @return (U128, Vec<[U8; 20]>)
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
        * @return BoundedVec: Vec<Enum<{"0/None", "1/Some"}>>
        */
        registrars: async (): Promise<string | null> => {
            return await getStorage('Identity', 'Registrars');
        },
    };
};
