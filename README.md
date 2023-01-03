# darwinia-js-sdk

A library to help 
1. fetch internal substrate storages, and
2. dispatch call

## Install
```shell
npm install darwinia-js-sdk --save
```

## Usage

### fetch storage

The returns of this lib's functions are all json string or null.


```typescript
import { ethers } from "ethers";
import { buildMetadata, getStorage, buildPangolin2Client, pangolin2MetaStatic } from "darwinia-storage";

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("http://g1.dev.darwinia.network:10000");
  	const metadata = buildMetadata(pangolin2MetaStatic);

    // a general storage function for a specific chain
    const getPangolin2Storage = getStorage(provider, metadata);

    // There are two ways to fetch a storage.
    //
    //  1. use storage specific functions predefined in this lib.
    const pangolin2 = buildPangolin2Client(getPangolin2Storage);
    let result = await pangolin2.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);

    //  2. the general way.
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
import { buildMetadata, dispatch, setKeys, Keys, pangolinMetaStatic } from "darwinia-storage";

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    const metadata = buildMetadata(pangolinMetaStatic);
  
    const dispatchPangolinCall = dispatch(provider, metadata);
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");
  
      // Way 1
    const key: HexString = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    const ecdsaKey: HexString = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00";
    const keys: Keys = {
        babe: key,
        grandpa: key,
        beefy: ecdsaKey,
        im_online: key,
        authority_discovery: key
    };
    dispatchPangolinCall(wallet, "Session", "setKeys", false, keys, "0x");

    // Way 2
    const keys2 = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dc1d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27dd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";
    setKeys(dispatchPangolinCall, wallet, keys2)
}

main();
```

more examples in [examples.ts](./examples.ts)

### Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```

