import {GetStorage} from "../../../storage";

export const getCrabParachainFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        *
        * @param param0: AccountId32: [U8; 32]
        * @return Relayer: {id: [U8; 32], collateral: U128, fee: U128}
        */
        relayersMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'RelayersMap', param0);
        },

        /**
        *
        * @return Vec<[U8; 32]>
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'Relayers');
        },

        /**
        *
        * @return Vec<{id: [U8; 32], collateral: U128, fee: U128}>
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'AssignedRelayers');
        },

        /**
        *
        * @param param0: ([U8; 4], U64)
        * @return Order: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{None: , Some: U32}>, locked_collateral: U128, assigned_relayers: Vec<{id: [U8; 32], fee: U128, valid_range: {start: U32, end: U32}}>}
        */
        orders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'Orders', param0);
        },

        /**
        *
        * @return U128
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'CollateralSlashProtect');
        },

        /**
        *
        * @return U32
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
