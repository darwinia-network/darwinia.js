import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/bridgeCrabParachainMessages/storages
 */
export const getBridgeCrabParachainMessages = (getStorage: GetStorage) => {
    return {

        /**
         * Optional pallet owner.
         *
         * Pallet owner has a right to halt all pallet operations and then resume it. If it is
         * `None`, then there are no direct ways to halt/resume pallet operations, but other
         * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
         * flag directly or call the `halt_operations`).
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'PalletOwner');
        },

        /**
         * The current operating mode of the pallet.
         *
         * Depending on the mode either all, some, or no transactions will be allowed.
         *
         * @returns {Promise<string | null>} OperatingMode: Enum<{0/Normal: , 1/RejectingOutboundMessages: , 2/Halted: }>
         */
        palletOperatingMode: async (): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'PalletOperatingMode');
        },

        /**
         * Map of lane id => inbound lane data.
         *
         * @param {unknown} param0 [U8; 4]
         * @returns {Promise<string | null>} InboundLaneData: {relayers: Vec<{relayer: [U8; 32], messages: {begin: U64, end: U64, dispatch_results: BitVec<U8>}}>, last_confirmed_nonce: U64}
         */
        inboundLanes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'InboundLanes', param0);
        },

        /**
         * Map of lane id => outbound lane data.
         *
         * @param {unknown} param0 [U8; 4]
         * @returns {Promise<string | null>} OutboundLaneData: {oldest_unpruned_nonce: U64, latest_received_nonce: U64, latest_generated_nonce: U64}
         */
        outboundLanes: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'OutboundLanes', param0);
        },

        /**
         * All queued outbound messages.
         *
         * @param {unknown} param0 MessageKey: {lane_id: [U8; 4], nonce: U64}
         * @returns {Promise<string | null>} MessageData: {payload: Vec<U8>, fee: U128}
         */
        outboundMessages: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeCrabParachainMessages', 'OutboundMessages', param0);
        },
    };
};
