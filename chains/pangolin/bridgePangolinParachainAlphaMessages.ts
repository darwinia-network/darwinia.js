import {GetStorage} from "../../storage";

export default {

    /**
     * Optional pallet owner.
     *
     * Pallet owner has a right to halt all pallet operations and then resume it. If it is
     * `None`, then there are no direct ways to halt/resume pallet operations, but other
     * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
     * flag directly or call the `halt_operations`).
     */
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePangolinParachainAlphaMessages', 'PalletOwner');
    },

    /**
     * The current operating mode of the pallet.
     *
     * Depending on the mode either all, some, or no transactions will be allowed.
     */
    palletOperatingMode: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgePangolinParachainAlphaMessages', 'PalletOperatingMode');
    },

    /**
     * Map of lane id =&gt; inbound lane data.
     */
    inboundLanes: async (getStorage: GetStorage, param0: unknown /* [U8; 4] */): Promise<string | null> => {
        return await getStorage('BridgePangolinParachainAlphaMessages', 'InboundLanes', param0);
    },

    /**
     * Map of lane id =&gt; outbound lane data.
     */
    outboundLanes: async (getStorage: GetStorage, param0: unknown /* [U8; 4] */): Promise<string | null> => {
        return await getStorage('BridgePangolinParachainAlphaMessages', 'OutboundLanes', param0);
    },

    /**
     * All queued outbound messages.
     */
    outboundMessages: async (getStorage: GetStorage, param0: unknown /* MessageKey: {lane_id: [U8; 4], nonce: U64} */): Promise<string | null> => {
        return await getStorage('BridgePangolinParachainAlphaMessages', 'OutboundMessages', param0);
    },
};