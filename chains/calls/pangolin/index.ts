import { dispatch as dispatchCall } from "../../../call";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

import {getSystem} from "./system";
import {getBabe} from "./babe";
import {getTimestamp} from "./timestamp";
import {getBalances} from "./balances";
import {getKton} from "./kton";
import {getAuthorship} from "./authorship";
import {getElectionProviderMultiPhase} from "./electionProviderMultiPhase";
import {getStaking} from "./staking";
import {getSession} from "./session";
import {getGrandpa} from "./grandpa";
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getImOnline} from "./imOnline";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getKtonTreasury} from "./ktonTreasury";
import {getTips} from "./tips";
import {getBounties} from "./bounties";
import {getSudo} from "./sudo";
import {getVesting} from "./vesting";
import {getUtility} from "./utility";
import {getIdentity} from "./identity";
import {getSociety} from "./society";
import {getRecovery} from "./recovery";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getMultisig} from "./multisig";
import {getEVM} from "./evm";
import {getEthereum} from "./ethereum";
import {getBaseFee} from "./baseFee";
import {getBridgePangoroGrandpa} from "./bridgePangoroGrandpa";
import {getBridgePangoroMessages} from "./bridgePangoroMessages";
import {getBridgeRococoGrandpa} from "./bridgeRococoGrandpa";
import {getBridgeRococoParachains} from "./bridgeRococoParachains";
import {getBridgePangolinParachainMessages} from "./bridgePangolinParachainMessages";
import {getPangoroFeeMarket} from "./pangoroFeeMarket";
import {getPangolinParachainFeeMarket} from "./pangolinParachainFeeMarket";
import {getTransactionPause} from "./transactionPause";
import {getBridgeMoonbaseRelayGrandpa} from "./bridgeMoonbaseRelayGrandpa";
import {getBridgeMoonbaseRelayParachains} from "./bridgeMoonbaseRelayParachains";
import {getBridgePangolinParachainAlphaMessages} from "./bridgePangolinParachainAlphaMessages";
import {getPangolinParachainAlphaFeeMarket} from "./pangolinParachainAlphaFeeMarket";
import {getToPangolinParachainBacking} from "./toPangolinParachainBacking";

export const buildPangolinCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const dispatch = dispatchCall(provider, metadata);
    return {
        system: getSystem(dispatch, metadata),
        babe: getBabe(dispatch, metadata),
        timestamp: getTimestamp(dispatch, metadata),
        balances: getBalances(dispatch, metadata),
        kton: getKton(dispatch, metadata),
        authorship: getAuthorship(dispatch, metadata),
        electionProviderMultiPhase: getElectionProviderMultiPhase(dispatch, metadata),
        staking: getStaking(dispatch, metadata),
        session: getSession(dispatch, metadata),
        grandpa: getGrandpa(dispatch, metadata),
        messageGadget: getMessageGadget(dispatch, metadata),
        ecdsaAuthority: getEcdsaAuthority(dispatch, metadata),
        imOnline: getImOnline(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        phragmenElection: getPhragmenElection(dispatch, metadata),
        technicalMembership: getTechnicalMembership(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        ktonTreasury: getKtonTreasury(dispatch, metadata),
        tips: getTips(dispatch, metadata),
        bounties: getBounties(dispatch, metadata),
        sudo: getSudo(dispatch, metadata),
        vesting: getVesting(dispatch, metadata),
        utility: getUtility(dispatch, metadata),
        identity: getIdentity(dispatch, metadata),
        society: getSociety(dispatch, metadata),
        recovery: getRecovery(dispatch, metadata),
        scheduler: getScheduler(dispatch, metadata),
        preimage: getPreimage(dispatch, metadata),
        proxy: getProxy(dispatch, metadata),
        multisig: getMultisig(dispatch, metadata),
        evm: getEVM(dispatch, metadata),
        ethereum: getEthereum(dispatch, metadata),
        baseFee: getBaseFee(dispatch, metadata),
        bridgePangoroGrandpa: getBridgePangoroGrandpa(dispatch, metadata),
        bridgePangoroMessages: getBridgePangoroMessages(dispatch, metadata),
        bridgeRococoGrandpa: getBridgeRococoGrandpa(dispatch, metadata),
        bridgeRococoParachains: getBridgeRococoParachains(dispatch, metadata),
        bridgePangolinParachainMessages: getBridgePangolinParachainMessages(dispatch, metadata),
        pangoroFeeMarket: getPangoroFeeMarket(dispatch, metadata),
        pangolinParachainFeeMarket: getPangolinParachainFeeMarket(dispatch, metadata),
        transactionPause: getTransactionPause(dispatch, metadata),
        bridgeMoonbaseRelayGrandpa: getBridgeMoonbaseRelayGrandpa(dispatch, metadata),
        bridgeMoonbaseRelayParachains: getBridgeMoonbaseRelayParachains(dispatch, metadata),
        bridgePangolinParachainAlphaMessages: getBridgePangolinParachainAlphaMessages(dispatch, metadata),
        pangolinParachainAlphaFeeMarket: getPangolinParachainAlphaFeeMarket(dispatch, metadata),
        toPangolinParachainBacking: getToPangolinParachainBacking(dispatch, metadata),
    };
}
