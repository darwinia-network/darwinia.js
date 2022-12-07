import {GetStorage} from "../../storage";

export default {
    pending: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'Pending');
    },
    currentBlock: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentBlock');
    },
    currentReceipts: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentReceipts');
    },
    currentTransactionStatuses: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentTransactionStatuses');
    },
    remainingRingBalance: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Ethereum', 'RemainingRingBalance', param0);
    },
    remainingKtonBalance: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Ethereum', 'RemainingKtonBalance', param0);
    },
    blockHash: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Ethereum', 'BlockHash', param0);
    },
};