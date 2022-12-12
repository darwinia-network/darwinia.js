import {GetStorage} from "../../storage";

export const getBridgePolkadotGrandpa = (getStorage: GetStorage) => {
    return {

        /**
        * The current number of requests which have written to storage.
        *
        * If the `RequestCount` hits `MaxRequests`, no more calls will be allowed to the pallet until
        * the request capacity is increased.
        *
        * The `RequestCount` is decreased by one at the beginning of every block. This is to ensure
        * that the pallet can always make progress.
        */
        requestCount: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'RequestCount');
        },

        /**
        * Hash of the header used to bootstrap the pallet.
        */
        initialHash: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'InitialHash');
        },

        /**
        * Hash of the best finalized header.
        */
        bestFinalized: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'BestFinalized');
        },

        /**
        * A ring buffer of imported hashes. Ordered by the insertion time.
        */
        importedHashes: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'ImportedHashes', param0);
        },

        /**
        * Current ring buffer position.
        */
        importedHashesPointer: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'ImportedHashesPointer');
        },

        /**
        * Headers which have been imported into the pallet.
        */
        importedHeaders: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'ImportedHeaders', param0);
        },

        /**
        * The current GRANDPA Authority set.
        */
        currentAuthoritySet: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'CurrentAuthoritySet');
        },

        /**
        * Optional pallet owner.
        *
        * Pallet owner has a right to halt all pallet operations and then resume it. If it is
        * `None`, then there are no direct ways to halt/resume pallet operations, but other
        * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
        * flag directly or call the `halt_operations`).
        */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'PalletOwner');
        },

        /**
        * If true, all pallet transactions are failed immediately.
        */
        isHalted: async (): Promise<string | null> => {
            return await getStorage('BridgePolkadotGrandpa', 'IsHalted');
        },
    };
};