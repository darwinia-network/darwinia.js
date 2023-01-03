import {GetStorage} from "../../../storage";

export const getCouncil = (getStorage: GetStorage) => {
    return {

        /**
        * The hashes of the active proposals.
        *
        * @return BoundedVec: Vec<[U8; 32]>
        */
        proposals: async (): Promise<string | null> => {
            return await getStorage('Council', 'Proposals');
        },

        /**
        * Actual proposal for a given hash, if it&#39;s current.
        *
        * @param param0: H256: [U8; 32]
        * @return RuntimeCall: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
        */
        proposalOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Council', 'ProposalOf', param0);
        },

        /**
        * Votes on a given proposal, if it is ongoing.
        *
        * @param param0: H256: [U8; 32]
        * @return Votes: {index: U32, threshold: U32, ayes: Vec<[U8; 20]>, nays: Vec<[U8; 20]>, end: U32}
        */
        voting: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Council', 'Voting', param0);
        },

        /**
        * Proposals so far.
        *
        * @return U32
        */
        proposalCount: async (): Promise<string | null> => {
            return await getStorage('Council', 'ProposalCount');
        },

        /**
        * The current members of the collective. This is stored sorted (just by value).
        *
        * @return Vec<[U8; 20]>
        */
        members: async (): Promise<string | null> => {
            return await getStorage('Council', 'Members');
        },

        /**
        * The prime member that helps determine the default vote behavior in case of absentations.
        *
        * @return AccountId20: [U8; 20]
        */
        prime: async (): Promise<string | null> => {
            return await getStorage('Council', 'Prime');
        },
    };
};
