import { ethers } from "ethers"
import { PublicClient, WalletClient, HttpTransport, defineChain } from "viem"

const darwinia = defineChain({
  id: 46,
  name: 'Darwinia',
  network: 'Darwinia',
  nativeCurrency: {
    decimals: 18,
    name: 'RING',
    symbol: 'RING',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.darwinia.network'],
      webSocket: ['wss://rpc.darwinia.network'],
    },
    public: {
      http: ['https://rpc.darwinia.network'],
      webSocket: ['wss://rpc.darwinia.network'],
    }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://darwinia.subscan.io/' },
  }
})

const crab = defineChain({
  id: 44,
  name: 'Crab',
  network: 'Crab',
  nativeCurrency: {
    decimals: 18,
    name: 'CRAB',
    symbol: 'CRAB',
  },
  rpcUrls: {
    default: {
      http: ['https://crab-rpc.darwinia.network'],
      webSocket: ['wss://crab-rpc.darwinia.network'],
    },
    public: {
      http: ['https://crab-rpc.darwinia.network'],
      webSocket: ['wss://crab-rpc.darwinia.network'],
    }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://crab.subscan.io/' },
  }
})

const pangolin = defineChain({
  id: 43,
  name: 'Pangolin',
  network: 'Pangolin',
  nativeCurrency: {
    decimals: 18,
    name: 'PRING',
    symbol: 'PRING',
  },
  rpcUrls: {
    default: {
      http: ['https://pangolin-rpc.darwinia.network'],
      webSocket: ['wss://pangolin-rpc.darwinia.network'],
    },
    public: {
      http: ['https://pangolin-rpc.darwinia.network'],
      webSocket: ['wss://pangolin-rpc.darwinia.network'],
    }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://pangolin.subscan.io/' },
  }
})

const pangoro = defineChain({
  id: 45,
  name: 'Pangoro',
  network: 'Pangoro',
  nativeCurrency: {
    decimals: 18,
    name: 'ORING',
    symbol: 'ORING',
  },
  rpcUrls: {
    default: {
      http: ['https://pangoro-rpc.darwinia.network'],
      webSocket: ['wss://pangoro-rpc.darwinia.network'],
    },
    public: {
      http: ['https://pangoro-rpc.darwinia.network'],
      webSocket: ['wss://pangoro-rpc.darwinia.network'],
    }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://pangoro.subscan.io/' },
  }
})

function getChainByChainId(chainId: number) {
  switch (chainId) {
    case 43:
      return pangolin
    case 46:
      return darwinia
    default:
      throw new Error("not support")
  }
}

////////////////////////////
// exports
////////////////////////////
export const darwiniaChains = { darwinia, crab, pangolin, pangoro }

export async function publicClientToProvider(publicClient: PublicClient): Promise<ethers.providers.BaseProvider> {
  let { chain, transport } = publicClient

  // check if the chain id matches
  const chainIdFromTransport = await publicClient.getChainId()
  if (chain && chain.id != chainIdFromTransport) {
    throw new Error(`chain id not match, chain: ${chain.id}, transport: ${chainIdFromTransport}`)
  }

  chain = getChainByChainId(chainIdFromTransport)
  // only support darwinia chain as only the darwinia chains have the dispatch precompile.
  if (!chain) throw new Error(`wrong darwinia chain id: ${chainIdFromTransport}`)

  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }

  if (transport.type === 'fallback')
    return new ethers.providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new ethers.providers.JsonRpcProvider(value?.url, network),
      ),
    )

  // check if there is a window ethereum object exists
  try {
    const windowEthereum = eval("window.ethereum")
    return new ethers.providers.Web3Provider(windowEthereum, network)
  } catch (err) {
    const url = transport.url || chain.rpcUrls?.default?.http[0]
    if (url) {
      return new ethers.providers.JsonRpcProvider(url, network)
    } else {
      throw new Error(`not support, transport: ${JSON.stringify(transport)}`)
    }
  }
}

export async function walletClientToSigner(walletClient: WalletClient, privateKey?: `0x${string}`): Promise<[ethers.providers.BaseProvider, ethers.Signer]> {
  let { account, chain, transport } = walletClient

  // check if the chain id matches
  const chainIdFromTransport = await walletClient.getChainId()
  if (chain && chain.id != chainIdFromTransport) {
    throw new Error(`chain id not match, chain: ${chain.id}, transport: ${chainIdFromTransport}`)
  }

  chain = getChainByChainId(chainIdFromTransport)
  // only support darwinia chain as only the darwinia chains have the dispatch precompile.
  if (!chain) throw new Error(`wrong darwinia chain id: ${chainIdFromTransport}`)

  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }

  // check if there is a window ethereum object exists
  try {
    const windowEthereum = eval("window.ethereum")
    const provider = new ethers.providers.Web3Provider(windowEthereum, network)
    let signer: ethers.Signer;
    if (account) {
      signer = provider.getSigner(account.address)
    } else {
      signer = provider.getSigner()
    }
    return [provider, signer]
  } catch (err) {
    const url = transport.url || chain.rpcUrls?.default?.http[0]
    if (url && privateKey) {
      const provider = new ethers.providers.JsonRpcProvider(url, network)
      const signer = new ethers.Wallet(privateKey, provider);
      return [provider, signer]
    } else {
      throw new Error(`url or privateKey not found, transport: ${JSON.stringify(transport)}`)
    }
  }
}


// import { http, createPublicClient, createWalletClient } from "viem"
// import { clientBuilder } from "../index"
//
// async function getStorage() {
//   const publicClient = createPublicClient({
//     transport: http("https://pangolin-rpc.darwinia.network")
//   })
//
//   const provider = await publicClientToProvider(publicClient)
//   const pangolin = clientBuilder.buildPangolinClient(provider);
//   const result = await pangolin.storages.darwiniaStaking.ledgers("0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac");
//   console.log(`decoded: ${result}\n`);
// }
//
// async function dispatchCall() {
//   const privateKey = '0xd5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175';
//   const walletClient = createWalletClient({
//     transport: http("https://pangolin-rpc.darwinia.network")
//   })
//
//   const [provider, signer] = await walletClientToSigner(walletClient, privateKey)
//
//   const pangolin = clientBuilder.buildPangolinClient(provider);
//   return await pangolin.calls.session.setKeys(
//     signer,
//     {
//       aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
//     }, // keys
//     "0x" // proof
//   );
// }
//
// async function main(): Promise<void> {
//   await getStorage()
//   console.log(await dispatchCall())
// }
// main().catch(err => console.log(err));
