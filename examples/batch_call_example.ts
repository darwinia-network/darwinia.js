import { ethers } from "ethers";
import { buildMetadata, metadatas, dispatch, calls, setSessionKeys } from "../index"

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://cors.kahub.in/http://g1.dev.darwinia.network:10000");
    const metadata = buildMetadata(metadatas.pangolin2MetaStatic);

    const dispatchPangolin2Call = dispatch(provider, metadata);
    const wallet = new ethers.Wallet("d5dd1909b74029eb3164b10ce84abaf9b0ea379b3ea0d4e2a96241806b8f8175");

    const batchedCalls = [
        { 
            session: {
                set_keys: {
                    keys: {
                        aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
                    },
                    proof: "0x"
                }
            }
        },
        {
            staking: {
                collect: {
                    commission: 12345
                }
            }
        }
    ];
    await dispatchPangolin2Call(wallet, "Utility", "batchAll", false, batchedCalls);
}

main();
