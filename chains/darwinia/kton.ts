import {GetStorage} from "../../storage";

export const getKton = (getStorage: GetStorage) => {
    return {

        /**
        * The total units issued in the system.

        * @return U128
        */
        totalIssuance: async (): Promise<string | null> => {
            return await getStorage('Kton', 'TotalIssuance');
        },

        /**
        * The balance of an account.
        *
        * NOTE: This is only used in the case that this pallet is used to store balances.

        * @param param0: AccountId32: [U8; 32]
        * @return AccountData: {free: U128, reserved: U128, free_kton: U128, reserved_kton: U128}
        */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Account', param0);
        },

        /**
        * Any liquidity locks on some account balances.
        * NOTE: Should only be accessed when setting, changing and freeing a lock.

        * @param param0: AccountId32: [U8; 32]
        * @return WeakBoundedVec: Vec&lt;{id: [U8; 8], amount: U128, reasons: Enum&lt;{&#34;0/Fee&#34;, &#34;1/Misc&#34;, &#34;2/All&#34;}&gt;}&gt;
        */
        locks: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Locks', param0);
        },

        /**
        * Named reserves on some account balances.

        * @param param0: AccountId32: [U8; 32]
        * @return BoundedVec: Vec&lt;{id: [U8; 8], amount: U128}&gt;
        */
        reserves: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Kton', 'Reserves', param0);
        },

        /**
        * Storage version of the pallet.
        *
        * This is set to v2.0.0 for new networks.

        * @return Releases: Enum&lt;{&#34;0/V1_0_0&#34;, &#34;1/V2_0_0&#34;}&gt;
        */
        storageVersion: async (): Promise<string | null> => {
            return await getStorage('Kton', 'StorageVersion');
        },
    };
};