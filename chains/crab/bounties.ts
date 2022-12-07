import {GetStorage} from "../../storage";

export default {
    bountyCount: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyCount');
    },
    bounties: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Bounties', 'Bounties', param0);
    },
    bountyDescriptions: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyDescriptions', param0);
    },
    bountyApprovals: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Bounties', 'BountyApprovals');
    },
};