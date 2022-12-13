import {GetStorage} from "../../storage";

export const getOffences = (getStorage: GetStorage) => {
    return {

        /**
        * The primary structure that holds all offence records keyed by report identifiers.

        * @param param0: H256: [U8; 32]
        * @return OffenceDetails: {offender: ([U8; 32], {own_ring_balance: Compact&lt;U128&gt;, own_kton_balance: Compact&lt;U128&gt;, own_power: U32, total_power: U32, others: Vec&lt;{who: [U8; 32], ring_balance: Compact&lt;U128&gt;, kton_balance: Compact&lt;U128&gt;, power: U32}&gt;}), reporters: Vec&lt;[U8; 32]&gt;}
        */
        reports: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'Reports', param0);
        },

        /**
        * A vector of reports of the same kind that happened at the same time slot.

        * @param param0: [U8; 16]
        * @param param1: Vec&lt;U8&gt;
        * @return Vec&lt;[U8; 32]&gt;
        */
        concurrentReportsIndex: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'ConcurrentReportsIndex', param0, param1);
        },

        /**
        * Enumerates all reports of a kind along with the time they happened.
        *
        * All reports are sorted by the time of offence.
        *
        * Note that the actual type of this mapping is `Vec&lt;u8&gt;`, this is because values of
        * different types are not supported at the moment so we are doing the manual serialization.

        * @param param0: [U8; 16]
        * @return Vec&lt;U8&gt;
        */
        reportsByKindIndex: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'ReportsByKindIndex', param0);
        },
    };
};