import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Referenda`'s storages.
 * 
 * `Referenda`'s calls: {@link: module:koi/referenda/calls}
 *
 * @module koi/referenda/storages
 */
export const getReferenda = (getStorage: GetStorage) => {
    return {

        /**
         * The next free referendum index, aka the number of referenda started so far.
         *
         * @returns {Promise<string | null>} U32
         */
        referendumCount: async (): Promise<string | null> => {
            return await getStorage('Referenda', 'ReferendumCount');
        },

        /**
         * Information concerning any given referendum.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} ReferendumInfo: Enum<{0/Ongoing: {track: U16, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 13/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 17/Origins: Enum<{0/WhitelistedCaller, 1/GeneralAdmin, 2/ReferendumCanceller, 3/ReferendumKiller, 4/MediumSpender, 5/BigSpender}>, 27/PolkadotXcm: Enum<{0/Xcm, 1/Response}>, 28/CumulusXcm: Enum<{0/Relay, 1/SiblingParachain}>, 29/EthereumXcm: Enum<{0/XcmEthereumTransaction}>, 34/Ethereum: Enum<{0/EthereumTransaction}>, 36/EthTxForwarder: Enum<{0/ForwardEth}>, 8/Void: Enum<{}>}>, proposal: Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>, enactment: Enum<{0/At: U32, 1/After: U32}>, submitted: U32, submission_deposit: {who: [U8; 20], amount: U128}, decision_deposit: Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>, deciding: Enum<{0/None: , 1/Some: {since: U32, confirming: Enum<{0/None, 1/Some}>}}>, tally: {ayes: U128, nays: U128, support: U128}, in_queue: Bool, alarm: Enum<{0/None: , 1/Some: (U32, (U32, U32))}>}, 1/Approved: (U32, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>), 2/Rejected: (U32, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>), 3/Cancelled: (U32, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>), 4/TimedOut: (U32, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>, Enum<{0/None: , 1/Some: {who: [U8; 20], amount: U128}}>), 5/Killed: U32}>
         */
        referendumInfoFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Referenda', 'ReferendumInfoFor', param0);
        },

        /**
         * The sorted list of referenda ready to be decided but not yet being decided, ordered by
         * conviction-weighted approvals.
         *
         * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
         *
         * @param {unknown} param0 U16
         * @returns {Promise<string | null>} BoundedVec: Vec<(U32, U128)>
         */
        trackQueue: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Referenda', 'TrackQueue', param0);
        },

        /**
         * The number of referenda being decided currently.
         *
         * @param {unknown} param0 U16
         * @returns {Promise<string | null>} U32
         */
        decidingCount: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Referenda', 'DecidingCount', param0);
        },

        /**
         * The metadata is a general information concerning the referendum.
         * The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        metadataOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Referenda', 'MetadataOf', param0);
        },
    };
};
