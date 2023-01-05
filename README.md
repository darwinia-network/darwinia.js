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
import { buildMetadata, metadatas, getStorage, storagesClientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
  
    // It is recommended to use the metadata obtained from the node
    // `metadatas.xxxMetaStatic` is best used with generated functions
  	const metadata = buildMetadata(metadatas.pangolin2MetaStatic);

    // a general storage function for a specific chain
    const getPangolin2Storage = getStorage(provider, metadata);

    // There are two ways to fetch a storage.
    //
  	//  Method 1: Recommended method
    let result = await getPangolin2Storage(
        "System", 
        "Account",
        '0x794BF0B66926D84CB735283D849f454A2A8d9a44'
    );
    console.log(`${result}\n`);
  
    // Method 2
    const pangolin2Storages = storagesClientBuilder.buildPangolinStoragesClient(getPangolin2Storage);
    result = await pangolin2Storages.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);

    
}

main();
```
### dispatch call

```typescript
import { ethers } from "ethers";
import { buildMetadata, metadatas, dispatch, callsClientBuilder, setSessionKeys } from "darwinia-js-sdk"

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
  
    // It is recommended to use the metadata obtained from the node
    // `metadatas.xxxMetaStatic` is best used with generated functions
    const metadata = buildMetadata(metadatas.pangolin2MetaStatic);

    const dispatchPangolin2Call = dispatch(provider, metadata);
    // const wallet = provider.getSigner();
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    // Method 1: Recommended method
    const keys = {
        aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    };
    await dispatchPangolin2Call(wallet, "Session", "setKeys", false, keys, "0x");

    // Method 2
    const pangolin2Calls = callsClientBuilder.buildPangolin2CallsClient(provider, metadata);
    await pangolin2Calls.session.setKeys(wallet, keys, "0x")

    // Method 3
    await setSessionKeys(
        dispatchPangolin2Call,
        wallet,
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

