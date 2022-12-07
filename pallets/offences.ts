import {GetStorage} from "../storage";

export const offences = {
    reports: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Offences', 'Reports', param0);
    },
    concurrentReportsIndex: async (getStorage: GetStorage, param0: unknown, param1: unknown): Promise<string | null> => {
        return await getStorage('Offences', 'ConcurrentReportsIndex', param0, param1);
    },
    reportsByKindIndex: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Offences', 'ReportsByKindIndex', param0);
    },
};