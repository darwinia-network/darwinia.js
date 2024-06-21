import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `XcmpQueue`'s storages.
 * 
 * `XcmpQueue`'s calls: {@link: module:koi/xcmpQueue/calls}
 *
 * @module koi/xcmpQueue/storages
 */
export const getXcmpQueue = (getStorage: GetStorage) => {
    return {

        /**
         * Status of the inbound XCMP channels.
         *
         * @returns {Promise<string | null>} Vec<{sender: U32, state: Enum<{0/Ok: , 1/Suspended: }>, message_metadata: Vec<(U32, Enum<{0/ConcatenatedVersionedXcm: , 1/ConcatenatedEncodedBlob: , 2/Signals: }>)>}>
         */
        inboundXcmpStatus: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'InboundXcmpStatus');
        },

        /**
         * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
         *
         * @param {unknown} param0 Id: U32
         * @param {unknown} param1 U32
         * @returns {Promise<string | null>} Vec<U8>
         */
        inboundXcmpMessages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'InboundXcmpMessages', param0, param1);
        },

        /**
         * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
         * and last outbound message. If the two indices are equal, then it indicates an empty
         * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
         * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
         * case of the need to send a high-priority signal message this block.
         * The bool is true if there is a signal message waiting to be sent.
         *
         * @returns {Promise<string | null>} Vec<{recipient: U32, state: Enum<{0/Ok: , 1/Suspended: }>, signals_exist: Bool, first_index: U16, last_index: U16}>
         */
        outboundXcmpStatus: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'OutboundXcmpStatus');
        },

        /**
         * The messages outbound in a given XCMP channel.
         *
         * @param {unknown} param0 Id: U32
         * @param {unknown} param1 U16
         * @returns {Promise<string | null>} Vec<U8>
         */
        outboundXcmpMessages: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'OutboundXcmpMessages', param0, param1);
        },

        /**
         * Any signal messages waiting to be sent.
         *
         * @param {unknown} param0 Id: U32
         * @returns {Promise<string | null>} Vec<U8>
         */
        signalMessages: async (param0: unknown): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'SignalMessages', param0);
        },

        /**
         * The configuration which controls the dynamics of the outbound queue.
         *
         * @returns {Promise<string | null>} QueueConfigData: {suspend_threshold: U32, drop_threshold: U32, resume_threshold: U32, threshold_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, weight_restrict_decay: {ref_time: Compact<U64>, proof_size: Compact<U64>}, xcmp_max_individual_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}
         */
        queueConfig: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'QueueConfig');
        },

        /**
         * The messages that exceeded max individual message weight budget.
         *
         * These message stay in this storage map until they are manually dispatched via
         * `service_overweight`.
         *
         * @param {unknown} param0 U64
         * @returns {Promise<string | null>} (U32, U32, Vec<U8>)
         */
        overweight: async (param0: unknown): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'Overweight', param0);
        },

        /**
         *Counter for the related counted storage map
         *
         * @returns {Promise<string | null>} U32
         */
        counterForOverweight: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'CounterForOverweight');
        },

        /**
         * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
         * available free overweight index.
         *
         * @returns {Promise<string | null>} U64
         */
        overweightCount: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'OverweightCount');
        },

        /**
         * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
         *
         * @returns {Promise<string | null>} Bool
         */
        queueSuspended: async (): Promise<string | null> => {
            return await getStorage('XcmpQueue', 'QueueSuspended');
        },
    };
};
