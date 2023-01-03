import {GetStorage} from "../../../storage";

export const getTransactionPause = (getStorage: GetStorage) => {
    return {

        /**
        * The paused transaction map
        *
        * map (PalletNameBytes, FunctionNameBytes) =&gt; Option&lt;()&gt;
        *
        * @param param0: (Vec<U8>, Vec<U8>)
        * @return ()
        */
        pausedTransactions: async (param0: unknown): Promise<string | null> => {
            return await getStorage('TransactionPause', 'PausedTransactions', param0);
        },
    };
};
