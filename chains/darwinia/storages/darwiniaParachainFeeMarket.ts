import {GetStorage} from "../../../storage";

export const getDarwiniaParachainFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param param0: AccountId32: [U8; 32]
         * @return Relayer: {id: [U8; 32], collateral: U128, fee: U128}
         */
        relayersMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'RelayersMap', param0);
        },

        /**
         *
         * @return Vec<[U8; 32]>
         */
        relayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'Relayers');
        },

        /**
         *
         * @return Vec<{id: [U8; 32], collateral: U128, fee: U128}>
         */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayers');
        },

        /**
         *
         * @param param0: ([U8; 4], U64)
         * @return Order: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{0/None: , 1/Some: U32}>, locked_collateral: U128, assigned_relayers: Vec<{id: [U8; 32], fee: U128, valid_range: {start: U32, end: U32}}>}
         */
        orders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'Orders', param0);
        },

        /**
         *
         * @return U128
         */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'CollateralSlashProtect');
        },

        /**
         *
         * @return U32
         */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
