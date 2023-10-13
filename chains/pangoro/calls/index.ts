import { dispatch as dispatchCall } from "../../../index";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

import {getSystem} from "./system";
import {getParachainSystem} from "./parachainSystem";
import {getTimestamp} from "./timestamp";
import {getParachainInfo} from "./parachainInfo";
import {getBalances} from "./balances";
import {getAssets} from "./assets";
import {getDeposit} from "./deposit";
import {getAccountMigration} from "./accountMigration";
import {getDarwiniaStaking} from "./darwiniaStaking";
import {getSession} from "./session";
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getSudo} from "./sudo";
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
import {getEthereum} from "./ethereum";
import {getEVM} from "./evm";
import {getMessageTransact} from "./messageTransact";
import {getBridgeRococoGrandpa} from "./bridgeRococoGrandpa";
import {getBridgeRococoParachain} from "./bridgeRococoParachain";
import {getBridgePangolinMessages} from "./bridgePangolinMessages";
import {getBridgePangolinDispatch} from "./bridgePangolinDispatch";
import {getPangolinFeeMarket} from "./pangolinFeeMarket";

export const buildPangoroCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const dispatch = dispatchCall(provider, metadata);
    return {
        system: getSystem(dispatch, metadata),
        parachainSystem: getParachainSystem(dispatch, metadata),
        timestamp: getTimestamp(dispatch, metadata),
        parachainInfo: getParachainInfo(dispatch, metadata),
        balances: getBalances(dispatch, metadata),
        assets: getAssets(dispatch, metadata),
        deposit: getDeposit(dispatch, metadata),
        accountMigration: getAccountMigration(dispatch, metadata),
        darwiniaStaking: getDarwiniaStaking(dispatch, metadata),
        session: getSession(dispatch, metadata),
        messageGadget: getMessageGadget(dispatch, metadata),
        ecdsaAuthority: getEcdsaAuthority(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        phragmenElection: getPhragmenElection(dispatch, metadata),
        technicalMembership: getTechnicalMembership(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        sudo: getSudo(dispatch, metadata),
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
        ethereum: getEthereum(dispatch, metadata),
        evm: getEVM(dispatch, metadata),
        messageTransact: getMessageTransact(dispatch, metadata),
        bridgeRococoGrandpa: getBridgeRococoGrandpa(dispatch, metadata),
        bridgeRococoParachain: getBridgeRococoParachain(dispatch, metadata),
        bridgePangolinMessages: getBridgePangolinMessages(dispatch, metadata),
        bridgePangolinDispatch: getBridgePangolinDispatch(dispatch, metadata),
        pangolinFeeMarket: getPangolinFeeMarket(dispatch, metadata),
    };
}
