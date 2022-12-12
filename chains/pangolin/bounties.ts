import {GetStorage} from "../../storage";

export const getBounties = (getStorage: GetStorage) => {
    return {

        /**
        * Number of bounty proposals that have been made.
        */
        bountyCount: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyCount');
        },

        /**
        * Bounties that have been made.
        */
        bounties: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Bounties', 'Bounties', param0);
        },

        /**
        * The description of each bounty.
        */
        bountyDescriptions: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyDescriptions', param0);
        },

        /**
        * Bounty indices that have been approved but not yet funded.
        */
        bountyApprovals: async (): Promise<string | null> => {
            return await getStorage('Bounties', 'BountyApprovals');
        },
    };
};