import { Metadata } from "@polkadot/types";
import { BytesLike, ethers } from "ethers";
import { EventMeta, getEventMeta, getEventMetaByIndex } from "./helpers";
import { hexToU8a } from "@polkadot/util";
import { hexlify } from "ethers/lib/utils";

type Client = {
    calls: {
        session: { buildSetKeysCallH: any },
        staking: { buildNominateCall: any, buildStakeCall: any, buildCollectCall: any },
        utility: { batchAll: any }
    },
    storages: {
        system: {
            events: Function
        }
    },
    metadata: Metadata,
    provider: ethers.providers.BaseProvider
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
    const weisOfRingAmount = (ringAmount * 10 ** 18).toString();
    const weisOfKtonAmount = (ktonAmount * 10 ** 18).toString();
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
    if (!(Number.isInteger(commission) && commission >= 0 && commission <= 100)) {
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


/**
 * TODO: cache meta
 */
export async function getSystemEvents(client: Client): Promise<Map<string, any>> {
    const result: Map<string, any> = new Map();

    const eventsJsonStr = await client.storages.system.events();
    const events = JSON.parse(eventsJsonStr)
    for (let i = 0; i < events.length; i++) {
        const eventIndex = hexToU8a(events[i].event.index);
        const fieldValues = events[i].event.data;

        // get the metadata of the event
        const eventMeta = getEventMetaByIndex(client.metadata, eventIndex[0], eventIndex[1]);

        for (let j = 0; j < eventMeta.fields.length; j++) {
            const field = eventMeta.fields[j];
            const value = fieldValues[j];
            result.set(field.name, value);
        }
    }

    return result;
}

//////////////////////////////////////////
// track events
//////////////////////////////////////////
async function getLatestBlock(provider: ethers.providers.BaseProvider, current: number): Promise<number> {
    const latestBlock = await provider.getBlockNumber();
    if (latestBlock > current) {
        return latestBlock;
    } else {
        await new Promise(f => setTimeout(f, 1000));
        return await getLatestBlock(provider, current);
    }
}

async function subscribeSystemEvents(provider: ethers.providers.BaseProvider, client: Client2, currentBlock: number, cb: (events: string) => Promise<void>) {
    try {
        const newBlock = await getLatestBlock(provider, currentBlock)
        console.debug(`block: ${newBlock}`)

        const result = await client.storages.system.events();
        await cb(result);
        await subscribeSystemEvents(provider, client, newBlock, cb);
    } catch (err) {
        console.log((err as Error).message);
        await new Promise(f => setTimeout(f, 5000));
        await subscribeSystemEvents(provider, client, currentBlock, cb);
    }
}

function buildEvent(eventMeta: EventMeta, event: object): EventData {
    const result = {
        palletName: eventMeta.palletName,
        eventName: eventMeta.eventName,
        data: new Map()
    };

    const values = (event as { data: any }).data;
    for (let j = 0; j < eventMeta.fields.length; j++) {
        const field = eventMeta.fields[j];
        const value = values[j];
        result.data.set(field.name, value);
    }

    return result;
}

type Client2 = {
    storages: { system: { events: Function } },
    metadata: Metadata,
    provider: ethers.providers.BaseProvider
}

export type EventData = {
    palletName: string,
    eventName: string,
    data: Map<string, any>
}

export async function trackSystemEvents(client: Client2, whatEventsToTrack: [string, string][], cb: (event: EventData) => Promise<void>) {
    // Map<
    //   eventIndexHex,
    //   eventMeta
    // >
    const eventMetas = whatEventsToTrack
        .map(e => {
            return getEventMeta(client.metadata, e[0], e[1]);
        })
        .reduce((r, eventMeta) => {
            if (eventMeta.eventIndex) {
                const eventIndexHex = hexlify(eventMeta.eventIndex as [number, number]);
                r.set(eventIndexHex, eventMeta);
            }
            return r;
        }, new Map<string, EventMeta>());

    await subscribeSystemEvents(client.provider, client, 1, async (eventsJsonStr) => {
        const events = JSON.parse(eventsJsonStr)
        for (let i = 0; i < events.length; i++) {
            const event = events[i].event;
            const eventMeta = eventMetas.get(event.index); // event.index is a two-bytes hex string
            if (eventMeta) {
                cb(buildEvent(eventMeta, event));
            }
        }
    })
}
