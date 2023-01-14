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
    const nominateCall = client.calls.staking.buildNominateCall(target);
    const stakeCall = client.calls.staking.buildStakeCall(ringAmount, ktonAmount, deposits);

    return await client.calls.utility.batchAll(signer, [
        nominateCall,
        stakeCall
    ]);
}

export async function setSessionKeysAndCommission(client: Client, signer: ethers.Signer, keys: BytesLike, commission: number) {
    const call1 = client.calls.session.buildSetKeysCallH(
        ethers.utils.concat([keys, "0x00"])
    );
    const call2 = client.calls.staking.buildCollectCall(commission);

    return await client.calls.utility.batchAll(signer, [
        call1,
        call2
    ]);
}
