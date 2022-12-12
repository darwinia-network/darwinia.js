import {GetStorage} from "../../storage";

export default {

    /**
     * Number of bounty proposals that have been made.
     */
    bountyCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyCount');
    },

    /**
     * Bounties that have been made.
     */
    bounties: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('Bounties', 'Bounties', param0);
    },

    /**
     * The description of each bounty.
     */
    bountyDescriptions: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyDescriptions', param0);
    },

    /**
     * Bounty indices that have been approved but not yet funded.
     */
    bountyApprovals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyApprovals');
    },
};