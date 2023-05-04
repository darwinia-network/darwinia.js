import { BytesLike, ethers } from "ethers";
import { hexlify } from "ethers/lib/utils";
import { clientBuilder } from "../chains";
import { encodeCall2 } from "./helpers";

async function getMarketFee(
  provider: ethers.providers.BaseProvider,
  pangolinMessageHub: string
): Promise<number> {
  const contract = new ethers.Contract(
    pangolinMessageHub,
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

function buildTransactSend(
  provider: ethers.providers.BaseProvider,
  // for pangolin
  pangolinMessageHub: BytesLike,
  gasLimit: BigInt,
  // for ethereum
  fee: BigInt, // fee to cross-chain to ethereum
  ethereumMessageReceivingContract: BytesLike,
  messagePayload: BytesLike
) {
  // Generate the call data of send
  let ABI = [
    "function send(address _toDappAddress,bytes calldata _message) external payable returns (uint256 nonce)",
  ];
  let iface = new ethers.utils.Interface(ABI);
  const dataOfSend = iface.encodeFunctionData("send", [
    ethereumMessageReceivingContract,
    messagePayload,
  ]);
  console.debug(`data of send: ${hexlify(dataOfSend)}`);

  // Wrap the call data of send inside ethereumXcm.transact
  return buildEthereumXcmTransactCall(
    provider,
    pangolinMessageHub,
    fee,
    dataOfSend,
    gasLimit
  );
}

async function buildTransactSend2(
  provider: ethers.providers.JsonRpcProvider,
  pangolinMessageHub: string,
  gasLimit: BigInt,
  ethereumMessageReceivingContract: string,
  messagePayload: BytesLike
) {
  // Get market fee from pangolin endpoint
  const fee = await getMarketFee(provider, pangolinMessageHub);
  console.log(`market fee: ${fee}`);

  // Generate the pangolin call data
  // which will be used to construct the `message` param of `PolkadotXcm.send(dest, message)` on parachain .
  return buildTransactSend(
    provider,
    pangolinMessageHub,
    gasLimit,
    BigInt(fee),
    ethereumMessageReceivingContract,
    messagePayload
  );
}

export const pangolinTools = {
  getMarketFee,
  buildTransactSend,
  buildTransactSend2,
};
