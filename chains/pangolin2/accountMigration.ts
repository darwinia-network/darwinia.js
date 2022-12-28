import {GetStorage} from "../../storage";

export const getAccountMigration = (getStorage: GetStorage) => {
    return {

        /**
        * [`frame_system::Account`] data.
        *
        * &lt;https://github.dev/paritytech/substrate/blob/19162e43be45817b44c7d48e50d03f074f60fbf4/frame/system/src/lib.rs#L545&gt;
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
        * @return AssetAccount: {balance: U128, is_frozen: Bool, reason: Enum<{"0/Consumer", "1/Sufficient", "2/DepositHeld", "3/DepositRefunded"}>, extra: ()}
        */
        ktonAccounts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'KtonAccounts', param0);
        },

        /**
        * [`pallet_vesting::Vesting`] data.
        *
        * &lt;https://github.dev/paritytech/substrate/blob/19162e43be45817b44c7d48e50d03f074f60fbf4/frame/vesting/src/lib.rs#L188&gt;
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
        * [`darwinia_staking::Bonded`] data.
        *
        * &lt;https://github.dev/darwinia-network/darwinia-common/blob/6a9392cfb9fe2c99b1c2b47d0c36125d61991bb7/frame/staking/src/lib.rs#L592&gt;
        *
        * @param param0: AccountId32: [U8; 32]
        * @return AccountId32: [U8; 32]
        */
        bonded: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AccountMigration', 'Bonded', param0);
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