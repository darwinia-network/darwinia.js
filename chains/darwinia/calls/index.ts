import { dispatch as dispatchCall } from "../../../index";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

import {getSystem} from "./system";
import {getParachainSystem} from "./parachainSystem";
import {getTimestamp} from "./timestamp";
import {getParachainInfo} from "./parachainInfo";
import {getBalances} from "./balances";
import {getAssets} from "./assets";
import {getVesting} from "./vesting";
import {getDeposit} from "./deposit";
import {getAccountMigration} from "./accountMigration";
import {getDarwiniaStaking} from "./darwiniaStaking";
import {getSession} from "./session";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getTreasury} from "./treasury";
import {getDemocracy} from "./democracy";
import {getConvictionVoting} from "./convictionVoting";
import {getReferenda} from "./referenda";
import {getWhitelist} from "./whitelist";
import {getUtility} from "./utility";
import {getIdentity} from "./identity";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getXcmpQueue} from "./xcmpQueue";
import {getPolkadotXcm} from "./polkadotXcm";
import {getCumulusXcm} from "./cumulusXcm";
import {getEthereumXcm} from "./ethereumXcm";
import {getDmpQueue} from "./dmpQueue";
import {getAssetManager} from "./assetManager";
import {getXTokens} from "./xTokens";
import {getAssetLimit} from "./assetLimit";
import {getEthereum} from "./ethereum";
import {getEVM} from "./evm";
import {getEthTxForwarder} from "./ethTxForwarder";

export const buildDarwiniaCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const dispatch = dispatchCall(provider, metadata);
    return {
        system: getSystem(dispatch, metadata),
        parachainSystem: getParachainSystem(dispatch, metadata),
        timestamp: getTimestamp(dispatch, metadata),
        parachainInfo: getParachainInfo(dispatch, metadata),
        balances: getBalances(dispatch, metadata),
        assets: getAssets(dispatch, metadata),
        vesting: getVesting(dispatch, metadata),
        deposit: getDeposit(dispatch, metadata),
        accountMigration: getAccountMigration(dispatch, metadata),
        darwiniaStaking: getDarwiniaStaking(dispatch, metadata),
        session: getSession(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        convictionVoting: getConvictionVoting(dispatch, metadata),
        referenda: getReferenda(dispatch, metadata),
        whitelist: getWhitelist(dispatch, metadata),
        utility: getUtility(dispatch, metadata),
        identity: getIdentity(dispatch, metadata),
        scheduler: getScheduler(dispatch, metadata),
        preimage: getPreimage(dispatch, metadata),
        proxy: getProxy(dispatch, metadata),
        xcmpQueue: getXcmpQueue(dispatch, metadata),
        polkadotXcm: getPolkadotXcm(dispatch, metadata),
        cumulusXcm: getCumulusXcm(dispatch, metadata),
        ethereumXcm: getEthereumXcm(dispatch, metadata),
        dmpQueue: getDmpQueue(dispatch, metadata),
        assetManager: getAssetManager(dispatch, metadata),
        xTokens: getXTokens(dispatch, metadata),
        assetLimit: getAssetLimit(dispatch, metadata),
        ethereum: getEthereum(dispatch, metadata),
        evm: getEVM(dispatch, metadata),
        ethTxForwarder: getEthTxForwarder(dispatch, metadata),
    };
}
