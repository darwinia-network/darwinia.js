import {GetStorage} from "../../storage";

export const getTransactionPayment = (getStorage: GetStorage) => {
    return {

        /**

        * @return FixedU128: U128
        */
        nextFeeMultiplier: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'NextFeeMultiplier');
        },

        /**

        * @return Releases: Enum&lt;{&#34;0/V1Ancient&#34;, &#34;1/V2&#34;}&gt;
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('TransactionPayment', 'StorageVersion');
        },
    };
};