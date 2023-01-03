import { Dispatch } from "../../../call";

import {getSystem} from "./system";
import {getBabe} from "./babe";
import {getTimestamp} from "./timestamp";
import {getIndices} from "./indices";
import {getBalances} from "./balances";
import {getKton} from "./kton";
import {getAuthorship} from "./authorship";
import {getElectionProviderMultiPhase} from "./electionProviderMultiPhase";
import {getStaking} from "./staking";
import {getSession} from "./session";
import {getGrandpa} from "./grandpa";
import {getImOnline} from "./imOnline";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getTips} from "./tips";
import {getBounties} from "./bounties";
import {getUtility} from "./utility";
import {getIdentity} from "./identity";
import {getSociety} from "./society";
import {getRecovery} from "./recovery";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getVesting} from "./vesting";
import {getProxy} from "./proxy";
import {getMultisig} from "./multisig";
import {getEVM} from "./evm";
import {getEthereum} from "./ethereum";
import {getBaseFee} from "./baseFee";
import {getBridgeDarwiniaMessages} from "./bridgeDarwiniaMessages";
import {getBridgeDarwiniaGrandpa} from "./bridgeDarwiniaGrandpa";
import {getBridgeKusamaGrandpa} from "./bridgeKusamaGrandpa";
import {getBridgeKusamaParachain} from "./bridgeKusamaParachain";
import {getBridgeCrabParachainMessages} from "./bridgeCrabParachainMessages";
import {getDarwiniaFeeMarket} from "./darwiniaFeeMarket";
import {getCrabParachainFeeMarket} from "./crabParachainFeeMarket";

export const buildCrabCallsClient = (dispatch: Dispatch) => {
    return {
        system: getSystem(dispatch),
        babe: getBabe(dispatch),
        timestamp: getTimestamp(dispatch),
        indices: getIndices(dispatch),
        balances: getBalances(dispatch),
        kton: getKton(dispatch),
        authorship: getAuthorship(dispatch),
        electionProviderMultiPhase: getElectionProviderMultiPhase(dispatch),
        staking: getStaking(dispatch),
        session: getSession(dispatch),
        grandpa: getGrandpa(dispatch),
        imOnline: getImOnline(dispatch),
        democracy: getDemocracy(dispatch),
        council: getCouncil(dispatch),
        technicalCommittee: getTechnicalCommittee(dispatch),
        phragmenElection: getPhragmenElection(dispatch),
        technicalMembership: getTechnicalMembership(dispatch),
        treasury: getTreasury(dispatch),
        tips: getTips(dispatch),
        bounties: getBounties(dispatch),
        utility: getUtility(dispatch),
        identity: getIdentity(dispatch),
        society: getSociety(dispatch),
        recovery: getRecovery(dispatch),
        scheduler: getScheduler(dispatch),
        preimage: getPreimage(dispatch),
        vesting: getVesting(dispatch),
        proxy: getProxy(dispatch),
        multisig: getMultisig(dispatch),
        evm: getEVM(dispatch),
        ethereum: getEthereum(dispatch),
        baseFee: getBaseFee(dispatch),
        bridgeDarwiniaMessages: getBridgeDarwiniaMessages(dispatch),
        bridgeDarwiniaGrandpa: getBridgeDarwiniaGrandpa(dispatch),
        bridgeKusamaGrandpa: getBridgeKusamaGrandpa(dispatch),
        bridgeKusamaParachain: getBridgeKusamaParachain(dispatch),
        bridgeCrabParachainMessages: getBridgeCrabParachainMessages(dispatch),
        darwiniaFeeMarket: getDarwiniaFeeMarket(dispatch),
        crabParachainFeeMarket: getCrabParachainFeeMarket(dispatch),
    };
}
