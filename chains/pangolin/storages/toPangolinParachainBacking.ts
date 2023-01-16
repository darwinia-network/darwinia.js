import { GetStorage } from "../../../src/storage";

export const getToPangolinParachainBacking = (getStorage: GetStorage) => {
    return {

        /**
         * Period between security limitation. Zero means there is no period limitation.
         *
         * @return U32
         */
        secureLimitedPeriod: async (): Promise<string | null> => {
            return await getStorage('ToPangolinParachainBacking', 'SecureLimitedPeriod');
        },

        /**
         * `(Spent, Maximum)` amount of *RING* security limitation each [`LimitedPeriod`].
         *
         * @return (U128, U128)
         */
        secureLimitedRingAmount: async (): Promise<string | null> => {
            return await getStorage('ToPangolinParachainBacking', 'SecureLimitedRingAmount');
        },

        /**
         * `(sender, amount)` the user *sender* lock and remote issuing amount of asset
         *
         * @param param0: ([U8; 4], U64)
         * @return ([U8; 32], U128)
         */
        transactionInfos: async (param0: unknown): Promise<string | null> => {
            return await getStorage('ToPangolinParachainBacking', 'TransactionInfos', param0);
        },

        /**
         * The remote mapping token factory account, here use to ensure the remote caller
         *
         * @return AccountId32: [U8; 32]
         */
        remoteMappingTokenFactoryAccount: async (): Promise<string | null> => {
            return await getStorage('ToPangolinParachainBacking', 'RemoteMappingTokenFactoryAccount');
        },
    };
};
