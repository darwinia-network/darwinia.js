import { BytesLike, ethers } from "ethers";
import { hexlify } from "ethers/lib/utils";
import { clientBuilder } from "../chains";
import { encodeCall2 } from "./helpers";

async function getMarketFee(
  provider: ethers.providers.BaseProvider,
  pangolinEndpoint: string
): Promise<number> {
  const contract = new ethers.Contract(
    pangolinEndpoint,
    ["function fee() public view returns (uint256)"],
    provider
  );
  return await contract.fee();
}

function buildEthereumXcmTransactCall(
  provider: ethers.providers.BaseProvider,
  to: BytesLike,
  value: BigInt,
  input: BytesLike,
  gasLimit: BigInt
) {
  const pangolin = clientBuilder.buildPangolinClient(provider);
  const call = pangolin.calls.ethereumXcm.buildTransactCall({
    V2: {
      gas_limit: gasLimit,
      action: {
        Call: to,
      },
      value: value, // >= market fee
      input: input,
      access_list: null,
    },
  });
  return encodeCall2(pangolin.metadata, call);
}

function buildTransactCallForExecuteOnEthereum(
  provider: ethers.providers.BaseProvider,
  // for pangolin
  pangolinEndpoint: BytesLike,
  gasLimitForCallingForExecuteOnEthereum: BigInt,
  // for ethereum
  bigThanMarketFee: BigInt, // fee to cross-chain to ethereum
  ethereumContract: BytesLike,
  ethereumCall: BytesLike
) {
  // Generate the call data of executeOnEthereum
  let ABI = [
    "function executeOnEthereum(address target,bytes memory call) external payable returns (uint64 nonce)",
  ];
  let iface = new ethers.utils.Interface(ABI);
  const dataOfExecuteOnEthereum = iface.encodeFunctionData(
    "executeOnEthereum",
    [ethereumContract, ethereumCall]
  );
  console.debug(
    `data of executeOnEthereum: ${hexlify(dataOfExecuteOnEthereum)}`
  );

  // Wrap the call data of executeOnEthereum inside ethereumXcm.transact
  return buildEthereumXcmTransactCall(
    provider,
    pangolinEndpoint,
    bigThanMarketFee,
    dataOfExecuteOnEthereum,
    gasLimitForCallingForExecuteOnEthereum
  );
}

async function buildTransactCallForExecuteOnEthereum2(
  provider: ethers.providers.JsonRpcProvider,
  pangolinEndpoint: string,
  gasLimit: BigInt,
  ethereumContract: string,
  ethereumCall: BytesLike
) {
  // Get market fee from pangolin endpoint
  const fee = await getMarketFee(provider, pangolinEndpoint);
  console.log(`market fee: ${fee}`);

  // Generate the pangolin call data
  // which will be used to construct the `message` param of `PolkadotXcm.send(dest, message)` on parachain .
  return buildTransactCallForExecuteOnEthereum(
    provider,
    pangolinEndpoint,
    gasLimit,
    BigInt(fee),
    ethereumContract,
    ethereumCall
  );
}

export const pangolinTools = {
  getMarketFee,
  buildEthereumXcmTransactCall,
  buildTransactCallForExecuteOnEthereum,
  buildTransactCallForExecuteOnEthereum2,
};
