import {GetStorage} from "../../storage";

export const getTransactionPause = (getStorage: GetStorage) => {
    return {

        /**
        * The paused transaction map
        *
        * map (PalletNameBytes, FunctionNameBytes) =&gt; Option&lt;()&gt;
        */
        pausedTransactions: async (param0: unknown /* (Vec&lt;U8&gt;, Vec&lt;U8&gt;) */): Promise<string | null> => {
            return await getStorage('TransactionPause', 'PausedTransactions', param0);
        },
    };
};