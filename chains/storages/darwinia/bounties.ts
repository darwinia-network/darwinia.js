import {GetStorage} from "../../../storage";

export const getBounties = (getStorage: GetStorage) => {
    return {

        /**
        * Number of bounty proposals that have been made.
        *
        * @return U32
        */
        bountyCount: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyCount');
        },

        /**
        * Bounties that have been made.
        *
        * @param param0: U32
        * @return Bounty: {proposer: [U8; 32], value: U128, fee: U128, curator_deposit: U128, bond: U128, status: Enum<{"0/Proposed", "1/Approved", "2/Funded", "3/CuratorProposed", "4/Active", "5/PendingPayout"}>}
        */
        bounties: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Bounties', 'Bounties', param0);
        },

        /**
        * The description of each bounty.
        *
        * @param param0: U32
        * @return Vec<U8>
        */
        bountyDescriptions: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyDescriptions', param0);
        },

        /**
        * Bounty indices that have been approved but not yet funded.
        *
        * @return Vec<U32>
        */
        bountyApprovals: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyApprovals');
        },
    };
};
