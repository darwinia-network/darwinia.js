import {GetStorage} from "../../storage";

export const getPangoroFeeMarket = (getStorage: GetStorage) => {
    return {

        /**

        * @param param0: AccountId32: [U8; 32]
        * @return Relayer: {id: [U8; 32], collateral: U128, fee: U128}
        */
        relayersMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'RelayersMap', param0);
        },

        /**

        * @return Vec&lt;[U8; 32]&gt;
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'Relayers');
        },

        /**

        * @return Vec&lt;{id: [U8; 32], collateral: U128, fee: U128}&gt;
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'AssignedRelayers');
        },

        /**

        * @param param0: ([U8; 4], U64)
        * @return Order: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, locked_collateral: U128, assigned_relayers: Vec&lt;{id: [U8; 32], fee: U128, valid_range: {start: U32, end: U32}}&gt;}
        */
        orders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'Orders', param0);
        },

        /**

        * @return U128
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'CollateralSlashProtect');
        },

        /**

        * @return U32
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('PangoroFeeMarket', 'AssignedRelayersNumber');
        },
    };
};