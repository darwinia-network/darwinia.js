import {GetStorage} from "../../storage";

export default {

    /**
     * Period between security limitation. Zero means there is no period limitation.
     */
    secureLimitedPeriod: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ToPangolinParachainBacking', 'SecureLimitedPeriod');
    },

    /**
     * `(Spent, Maximum)` amount of *RING* security limitation each [`LimitedPeriod`].
     */
    secureLimitedRingAmount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ToPangolinParachainBacking', 'SecureLimitedRingAmount');
    },

    /**
     * `(sender, amount)` the user *sender* lock and remote issuing amount of asset
     */
    transactionInfos: async (getStorage: GetStorage, param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
        return await getStorage('ToPangolinParachainBacking', 'TransactionInfos', param0);
    },

    /**
     * The remote mapping token factory account, here use to ensure the remote caller
     */
    remoteMappingTokenFactoryAccount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('ToPangolinParachainBacking', 'RemoteMappingTokenFactoryAccount');
    },
};