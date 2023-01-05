# darwinia-js-sdk

A library to help 
1. fetch internal substrate storages, and
2. dispatch calls

## Install
```shell
npm install darwinia-js-sdk --save
```

## Usage

### fetch storage

The returns of this lib's functions are all json string or null.


```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

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
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");

    // prepare signer. it can be ethers.Wallet or ethers.Signer
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

### set session keys

This is a customized method added for client convenience

```typescript
import { ethers } from "ethers";
import { buildMetadata, staticMetadata, dispatch, setSessionKeys } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");

    // build a metadata from static metadata hex
    const metadata = buildMetadata(staticMetadata.pangolin2MetaStatic);
  
    // prepare signer. it can be ethers.Wallet or ethers.Signer
    const signer = provider.getSigner();

    const dispatchPangolin2Call = dispatch(provider, metadata);
    await setSessionKeys(
        dispatchPangolin2Call,
        signer,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
    );
}

main();
```

more examples in [examples](./examples)

### Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```

