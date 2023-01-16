import { GetStorage } from "../../../src/storage";

export const getAccountMigration = (getStorage: GetStorage) => {
    return {

        /**
         * [`frame_system::Account`] data.
         *
         * <https://github.dev/paritytech/substrate/blob/19162e43be45817b44c7d48e50d03f074f60fbf4/frame/system/src/lib.rs#L545>
         *
         * @param param0: AccountId32: [U8; 32]
         * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, misc_frozen: U128, fee_frozen: U128}}
         */
        accounts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'Accounts', param0);
        },

        /**
         * [`pallet_asset::AssetAccount`] data.
         *
         * https://github.dev/paritytech/substrate/blob/polkadot-v0.9.30/frame/assets/src/types.rs#L115
         *
         * @param param0: AccountId32: [U8; 32]
         * @return [U8; 18]
         */
        ktonAccounts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'KtonAccounts', param0);
        },

        /**
         * [`pallet_vesting::Vesting`] data.
         *
         * <https://github.dev/paritytech/substrate/blob/19162e43be45817b44c7d48e50d03f074f60fbf4/frame/vesting/src/lib.rs#L188>
         *
         * @param param0: AccountId32: [U8; 32]
         * @return Vec<{locked: U128, per_block: U128, starting_block: U32}>
         */
        vestings: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'Vestings', param0);
        },

        /**
         * [`darwinia_deposit::Deposits`] data.
         *
         * @param param0: AccountId32: [U8; 32]
         * @return Vec<{id: U16, value: U128, start_time: U128, expired_time: U128, in_use: Bool}>
         */
        deposits: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'Deposits', param0);
        },

        /**
         * [`darwinia_staking::Ledgers`] data.
         *
         * @param param0: AccountId32: [U8; 32]
         * @return Ledger: {staked_ring: U128, staked_kton: U128, staked_deposits: Vec<U16>, unstaking_ring: Vec<(U128, U32)>, unstaking_kton: Vec<(U128, U32)>, unstaking_deposits: Vec<(U16, U32)>}
         */
        ledgers: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'Ledgers', param0);
        },
    };
};
