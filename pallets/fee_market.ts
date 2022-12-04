import {GetStorage} from "../storage";

async function assignedRelayers(getStorage: GetStorage, prefix: string): Promise<string | null> {
    return await getStorage(prefix, 'AssignedRelayers');
}

async function orders(getStorage: GetStorage, prefix: string, input: [Array<number>, number]): Promise<string | null> {
    return await getStorage(prefix, 'Orders', input);
}

export const feeMarket = {
    assignedRelayers,
    orders
};