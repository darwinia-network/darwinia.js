import {GetStorage} from "../../storage";

export const getTechnicalCommittee = (getStorage: GetStorage) => {
    return {

        /**
        * The hashes of the active proposals.
        *
        * @return BoundedVec: Vec<[U8; 32]>
        */
        proposals: async (): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'Proposals');
        },

        /**
        * Actual proposal for a given hash, if it&#39;s current.
        *
        * @param param0: H256: [U8; 32]
        * @return Call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
        */
        proposalOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'ProposalOf', param0);
        },

        /**
        * Votes on a given proposal, if it is ongoing.
        *
        * @param param0: H256: [U8; 32]
        * @return Votes: {index: U32, threshold: U32, ayes: Vec<[U8; 32]>, nays: Vec<[U8; 32]>, end: U32}
        */
        voting: async (param0: unknown): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'Voting', param0);
        },

        /**
        * Proposals so far.
        *
        * @return U32
        */
        proposalCount: async (): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'ProposalCount');
        },

        /**
        * The current members of the collective. This is stored sorted (just by value).
        *
        * @return Vec<[U8; 32]>
        */
        members: async (): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'Members');
        },

        /**
        * The prime member that helps determine the default vote behavior in case of absentations.
        *
        * @return AccountId32: [U8; 32]
        */
        prime: async (): Promise<string | null> => {
            return await getStorage('TechnicalCommittee', 'Prime');
        },
    };
};