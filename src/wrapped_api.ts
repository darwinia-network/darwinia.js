import { BytesLike, ethers } from "ethers";

type Client = {
    calls: {
        session: { buildSetKeysCallH: any },
        staking: { buildNominateCall: any, buildStakeCall: any, buildCollectCall: any },
        utility: { batchAll: any }
    }
}

/**
 * @param client: client from clientBuilder
 * @param signer: a signer with a provider inside
 * @param target: the account which you want to nominate
 * @param ringAmount: RINGs to stake
 * @param ktonAmount: KTONs to stake
 * @param deposits: deposit ids to stake
 */
export async function nominateAndStake(client: Client, signer: ethers.Signer, target: BytesLike, ringAmount: number, ktonAmount: number, deposits: number[]) {
    const weisOfRingAmount = (ringAmount * 10**18).toString();
    const weisOfKtonAmount = (ktonAmount * 10**18).toString();
    const depositIds = deposits.map((d) => d.toString());

    const nominateCall = client.calls.staking.buildNominateCall(target);
    const stakeCall = client.calls.staking.buildStakeCall(
        weisOfRingAmount, 
        weisOfKtonAmount, 
        depositIds
    );

    return await client.calls.utility.batchAll(signer, [
        stakeCall,
        nominateCall
    ]);
}

/**
 * @param client: client from clientBuilder
 * @param signer: a signer with a provider inside
 * @param keys: session keys bytes
 * @param commission: integer >= 0 and <= 100
 */
export async function setSessionKeysAndCommission(client: Client, signer: ethers.Signer, keys: BytesLike, commission: number) {
    if (!(Number.isInteger(commission) && commission >=0 && commission <= 100)) {
        throw "Wrong commission value, it should be an integer between 0 and 100(inclusive).";
    }

    const setKeysCall = client.calls.session.buildSetKeysCallH(
        ethers.utils.concat([keys, "0x00"])
    );

    const collectCall = client.calls.staking.buildCollectCall((commission * 10_000_000).toString());

    return await client.calls.utility.batchAll(signer, [
        setKeysCall,
        collectCall
    ]);
}
