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
import {getImOnline} from "./imOnline";
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
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
import {getBridgeCrabGrandpa} from "./bridgeCrabGrandpa";
import {getBridgeCrabMessages} from "./bridgeCrabMessages";
import {getBridgePolkadotGrandpa} from "./bridgePolkadotGrandpa";
import {getBridgePolkadotParachain} from "./bridgePolkadotParachain";
import {getBridgeDarwiniaParachainMessages} from "./bridgeDarwiniaParachainMessages";
import {getFeeMarket} from "./feeMarket";
import {getDarwiniaParachainFeeMarket} from "./darwiniaParachainFeeMarket";

export const buildDarwiniaCallsClient = (dispatch: Dispatch) => {
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
        imOnline: getImOnline(dispatch),
        messageGadget: getMessageGadget(dispatch),
        ecdsaAuthority: getEcdsaAuthority(dispatch),
        democracy: getDemocracy(dispatch),
        council: getCouncil(dispatch),
        technicalCommittee: getTechnicalCommittee(dispatch),
        phragmenElection: getPhragmenElection(dispatch),
        technicalMembership: getTechnicalMembership(dispatch),
        treasury: getTreasury(dispatch),
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
        bridgeCrabGrandpa: getBridgeCrabGrandpa(dispatch),
        bridgeCrabMessages: getBridgeCrabMessages(dispatch),
        bridgePolkadotGrandpa: getBridgePolkadotGrandpa(dispatch),
        bridgePolkadotParachain: getBridgePolkadotParachain(dispatch),
        bridgeDarwiniaParachainMessages: getBridgeDarwiniaParachainMessages(dispatch),
        feeMarket: getFeeMarket(dispatch),
        darwiniaParachainFeeMarket: getDarwiniaParachainFeeMarket(dispatch),
    };
}
