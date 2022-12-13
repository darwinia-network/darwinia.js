import {GetStorage} from "../../storage";

export const getBridgeCrabParachainMessages = (getStorage: GetStorage) => {
    return {

        /**
        * Optional pallet owner.
        *
        * Pallet owner has a right to halt all pallet operations and then resume it. If it is
        * `None`, then there are no direct ways to halt/resume pallet operations, but other
        * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
        * flag directly or call the `halt_operations`).

        * @return AccountId32: [U8; 32]
        */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'PalletOwner');
        },

        /**
        * The current operating mode of the pallet.
        *
        * Depending on the mode either all, some, or no transactions will be allowed.

        * @return OperatingMode: Enum&lt;{&#34;0/Normal&#34;, &#34;1/RejectingOutboundMessages&#34;, &#34;2/Halted&#34;}&gt;
        */
        palletOperatingMode: async (): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'PalletOperatingMode');
        },

        /**
        * Map of lane id =&gt; inbound lane data.

        * @param param0: [U8; 4]
        * @return InboundLaneData: {relayers: Vec&lt;{relayer: [U8; 32], messages: {begin: U64, end: U64, dispatch_results: BitVec&lt;U8&gt;}}&gt;, last_confirmed_nonce: U64}
        */
        inboundLanes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'InboundLanes', param0);
        },

        /**
        * Map of lane id =&gt; outbound lane data.

        * @param param0: [U8; 4]
        * @return OutboundLaneData: {oldest_unpruned_nonce: U64, latest_received_nonce: U64, latest_generated_nonce: U64}
        */
        outboundLanes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'OutboundLanes', param0);
        },

        /**
        * All queued outbound messages.

        * @param param0: MessageKey: {lane_id: [U8; 4], nonce: U64}
        * @return MessageData: {payload: Vec&lt;U8&gt;, fee: U128}
        */
        outboundMessages: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'OutboundMessages', param0);
        },
    };
};