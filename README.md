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
import { buildMetadata, staticMetadata, getStorage, clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
  
    // build a metadata from static metadata hex
  	const metadata = buildMetadata(staticMetadata.pangolinMetaStatic);

    // Way 1
    const pangolin = clientBuilder.buildPangolinClient(provider, metadata);
    let result = await pangolin.storages.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);
  
  	// Way 2
    const getPangolin2Storage = getStorage(provider, metadata);
    result = await getPangolin2Storage(
        "System", 
        "Account",
        '0x794BF0B66926D84CB735283D849f454A2A8d9a44'
    );
    console.log(`${result}\n`);
}

main();
```
### dispatch call

```typescript
import { ethers } from "ethers";
import { buildMetadata, staticMetadata, dispatch, clientBuilder, setSessionKeys } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
  
    // build a metadata from static metadata hex
    const metadata = buildMetadata(staticMetadata.pangolin2MetaStatic);

    // prepare signer. it can be ethers.Wallet or ethers.Signer
    // const signer = provider.getSigner();
    const signer = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Way 1
    const pangolin2 = clientBuilder.buildPangolin2Client(provider, metadata);
    await pangolin2.calls.session.setKeys(
      signer,
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    )
  
    // Way 2
    const dispatchPangolin2Call = dispatch(provider, metadata);
    await dispatchPangolin2Call(
      signer, 
      "Session", 
      "setKeys", 
      false, 
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    );
  
    // Way 3: this is a customized method added for client convenience
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

