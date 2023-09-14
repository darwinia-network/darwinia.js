# darwinia.js

Version >= ^3.0.2 for Darwinia 2.0. Version < 3.0.0 is for Darwinia 1.0.

A library to help

1. fetch internal substrate storages, and
2. dispatch calls
3. Easy-to-use derived functions([Derived API List](#derived-api-list)) which are build from 1 and 2.

## Nodejs

```shell
npm install darwinia.js@^3.0.4
```

## Browser

```html
Collators Amount: <span id="result"></span>

<script type="module">
  import { ethers } from "https://esm.sh/ethers@5.7.2";
  import { clientBuilder } from "https://esm.sh/darwinia.js@3.0.4";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const client = clientBuilder.buildPangolinClient(provider);

  // storage
  const result = await client.storages.darwiniaStaking.collatorCount();
  const resultEl = document.getElementById("result");
  resultEl.innerHTML = result;

  // call
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const signer = provider.getSigner();
  const tx = await client.calls.system.remarkWithEvent(signer, "0x12345678");
  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
</script>
```

Try it in jsfiddle:

https://jsfiddle.net/wuminzhe/gwp4ovz1/4/

## Usage

### fetch storage

The returns of this lib's functions are all json string or null.

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia.js";

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://pangolin-rpc.darwinia.network"
  );
  // or
  // const provider = new ethers.providers.Web3Provider(window.ethereum);

  const pangolin = clientBuilder.buildPangolinClient(provider);

  let result = await pangolin.storages.system.account(
    "0x794BF0B66926D84CB735283D849f454A2A8d9a44"
  );
  console.log(`${result}\n`);
}

main();
```

### dispatch call

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia.js";

async function main(): Promise<void> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const pangolin = clientBuilder.buildPangolinClient(provider);

  const tx = await pangolin.calls.session.setKeys(
    signer,
    {
      aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    }, // keys
    "0x" // proof
  );
  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
}

main();
```

### dispatch multiple calls in a single transaction

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia.js";

async function main(): Promise<void> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const pangolin = clientBuilder.buildPangolinClient(provider);

  // prepare calls
  const setKeysCall = pangolin.calls.session.buildSetKeysCall(
    // keys
    {
      aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    },
    // proof
    "px"
  );

  const collectCall = pangolin.calls.staking.buildCollectCall(120000000);

  // dispatch
  const tx = await pangolin.calls.utility.batchAll(signer, [setKeysCall, collectCall]);
  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
}

main();
```

### dispatch call with encoded input

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia.js";

async function main(): Promise<void> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const pangolin = clientBuilder.buildPangolinClient(provider);

  // call ended with `D` is the version that accept params encoded in scale codec
  const tx = await pangolin.calls.session.setKeysH(
    signer,
    "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00" // encoded (keys, proof)
  );
  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
}

main();
```

More examples in [examples](https://github.com/darwinia-network/darwinia.js/tree/main/examples)

## Derived API List

#### nominateAndStake

Nominate a collator and stake tokens to the collator.

#### setSessionKeysAndCommission

Set session keys and commission percetage. [Example](https://github.com/darwinia-network/darwinia.js/tree/main/examples/derived_set_session_keys_and_commission.ts)

#### trackSystemEvents

Track specified events. [Example](https://github.com/darwinia-network/darwinia.js/tree/main/examples/derived_track_system_events.ts)

#### getSystemEvents

Get the latest events. You can use this function with `provider.on('block', callback)` to implement the tracking functionality like `trackSystemEvents`. [Example](https://github.com/darwinia-network/darwinia.js/tree/main/examples/derived_get_system_events.ts)

See [src/derived.ts](https://github.com/darwinia-network/darwinia.js/tree/main/src/derived.ts).

## Update Chains Metadata

```
npm run gen
```
