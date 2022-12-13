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
        * @return Call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
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