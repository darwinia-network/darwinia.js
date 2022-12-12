import {GetStorage} from "../../storage";

export default {

    /**
     * The primary structure that holds all offence records keyed by report identifiers.
     */
    reports: async (getStorage: GetStorage, param0: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('Offences', 'Reports', param0);
    },

    /**
     * A vector of reports of the same kind that happened at the same time slot.
     */
    concurrentReportsIndex: async (getStorage: GetStorage, param0: unknown /* : [U8;16] */, param1: unknown /* : Vec&lt;U8&gt; */): Promise<string | null> => {
        return await getStorage('Offences', 'ConcurrentReportsIndex', param0, param1);
    },

    /**
     * Enumerates all reports of a kind along with the time they happened.
     *
     * All reports are sorted by the time of offence.
     *
     * Note that the actual type of this mapping is `Vec&lt;u8&gt;`, this is because values of
     * different types are not supported at the moment so we are doing the manual serialization.
     */
    reportsByKindIndex: async (getStorage: GetStorage, param0: unknown /* : [U8;16] */): Promise<string | null> => {
        return await getStorage('Offences', 'ReportsByKindIndex', param0);
    },
};