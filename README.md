# darwinia-js-sdk

A library to help 
1. fetch internal substrate storages, and
2. dispatch calls
3. Easy-to-use derived functions([Derived API List](#derived-api-list)) which are build from 1 and 2. 

## Install
```shell
npm install darwinia-js-sdk
```


## Usage

### fetch storage

The returns of this lib's functions are all json string or null.


```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    // or
    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    const pangolin = clientBuilder.buildPangolinClient(provider);
  
    let result = await pangolin.storages.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);
}

main();
```
### dispatch call

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);
  
    await pangolin2.calls.session.setKeys(
      signer,
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    )
}

main();

```

### dispatch multiple calls in a single transaction

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    // prepare calls
    const setKeysCall = pangolin2.calls.session.buildSetKeysCall(
        // keys
        { 
            aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
        }, 
        // proof
        "px"
    );

    const collectCall = pangolin2.calls.staking.buildCollectCall(120000000);

    // dispatch
    await pangolin2.calls.utility.batchAll(
        signer, 
        [
            setKeysCall,
            collectCall
        ]
    );
}

main();

```
### dispatch call with encoded input

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    // call ended with `D` is the version that accept params encoded in scale codec  
    await pangolin2.calls.session.setKeysH(
      signer,
      "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00", // encoded (keys, proof)
    )
}

main();

```
More examples in [examples](https://github.com/darwinia-network/darwinia-js-sdk/tree/main/examples)

## Derived API List

#### nominateAndStake

Nominate a collator and stake tokens to the collator.

#### setSessionKeysAndCommission

Set session keys and commission percetage. [Example](https://github.com/darwinia-network/darwinia-js-sdk/tree/main/examples/derived_set_session_keys_and_commission.ts)

#### trackSystemEvents

Track specified events. [Example](https://github.com/darwinia-network/darwinia-js-sdk/tree/main/examples/derived_track_system_events.ts)

#### getSystemEvents
 
Get the latest events. You can use this function with `provider.on('block', callback)` to implement the tracking functionality like `trackSystemEvents`. [Example](https://github.com/darwinia-network/darwinia-js-sdk/tree/main/examples/derived_get_system_events.ts)

See [src/derived.ts](https://github.com/darwinia-network/darwinia-js-sdk/tree/main/src/derived.ts).

## TODO

1. metadata check. automatically check whether the metadata carried by lib is outdated, prompting to upgrade

## Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```

