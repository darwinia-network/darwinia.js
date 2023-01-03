import { Dispatch } from "../../../call";

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

export const buildPangolinCallsClient = (dispatch: Dispatch) => {
    return {
        system: getSystem(dispatch),
        babe: getBabe(dispatch),
        timestamp: getTimestamp(dispatch),
        balances: getBalances(dispatch),
        kton: getKton(dispatch),
        authorship: getAuthorship(dispatch),
        electionProviderMultiPhase: getElectionProviderMultiPhase(dispatch),
        staking: getStaking(dispatch),
        session: getSession(dispatch),
        grandpa: getGrandpa(dispatch),
        messageGadget: getMessageGadget(dispatch),
        ecdsaAuthority: getEcdsaAuthority(dispatch),
        imOnline: getImOnline(dispatch),
        democracy: getDemocracy(dispatch),
        council: getCouncil(dispatch),
        technicalCommittee: getTechnicalCommittee(dispatch),
        phragmenElection: getPhragmenElection(dispatch),
        technicalMembership: getTechnicalMembership(dispatch),
        treasury: getTreasury(dispatch),
        ktonTreasury: getKtonTreasury(dispatch),
        tips: getTips(dispatch),
        bounties: getBounties(dispatch),
        sudo: getSudo(dispatch),
        vesting: getVesting(dispatch),
        utility: getUtility(dispatch),
        identity: getIdentity(dispatch),
        society: getSociety(dispatch),
        recovery: getRecovery(dispatch),
        scheduler: getScheduler(dispatch),
        preimage: getPreimage(dispatch),
        proxy: getProxy(dispatch),
        multisig: getMultisig(dispatch),
        evm: getEVM(dispatch),
        ethereum: getEthereum(dispatch),
        baseFee: getBaseFee(dispatch),
        bridgePangoroGrandpa: getBridgePangoroGrandpa(dispatch),
        bridgePangoroMessages: getBridgePangoroMessages(dispatch),
        bridgeRococoGrandpa: getBridgeRococoGrandpa(dispatch),
        bridgeRococoParachains: getBridgeRococoParachains(dispatch),
        bridgePangolinParachainMessages: getBridgePangolinParachainMessages(dispatch),
        pangoroFeeMarket: getPangoroFeeMarket(dispatch),
        pangolinParachainFeeMarket: getPangolinParachainFeeMarket(dispatch),
        transactionPause: getTransactionPause(dispatch),
        bridgeMoonbaseRelayGrandpa: getBridgeMoonbaseRelayGrandpa(dispatch),
        bridgeMoonbaseRelayParachains: getBridgeMoonbaseRelayParachains(dispatch),
        bridgePangolinParachainAlphaMessages: getBridgePangolinParachainAlphaMessages(dispatch),
        pangolinParachainAlphaFeeMarket: getPangolinParachainAlphaFeeMarket(dispatch),
        toPangolinParachainBacking: getToPangolinParachainBacking(dispatch),
    };
}
