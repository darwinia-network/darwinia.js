import { dispatch as dispatchCall } from "../../../call";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

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

export const buildCrabCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const dispatch = dispatchCall(provider, metadata);
    return {
        system: getSystem(dispatch, metadata),
        babe: getBabe(dispatch, metadata),
        timestamp: getTimestamp(dispatch, metadata),
        indices: getIndices(dispatch, metadata),
        balances: getBalances(dispatch, metadata),
        kton: getKton(dispatch, metadata),
        authorship: getAuthorship(dispatch, metadata),
        electionProviderMultiPhase: getElectionProviderMultiPhase(dispatch, metadata),
        staking: getStaking(dispatch, metadata),
        session: getSession(dispatch, metadata),
        grandpa: getGrandpa(dispatch, metadata),
        imOnline: getImOnline(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        phragmenElection: getPhragmenElection(dispatch, metadata),
        technicalMembership: getTechnicalMembership(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        tips: getTips(dispatch, metadata),
        bounties: getBounties(dispatch, metadata),
        utility: getUtility(dispatch, metadata),
        identity: getIdentity(dispatch, metadata),
        society: getSociety(dispatch, metadata),
        recovery: getRecovery(dispatch, metadata),
        scheduler: getScheduler(dispatch, metadata),
        preimage: getPreimage(dispatch, metadata),
        vesting: getVesting(dispatch, metadata),
        proxy: getProxy(dispatch, metadata),
        multisig: getMultisig(dispatch, metadata),
        evm: getEVM(dispatch, metadata),
        ethereum: getEthereum(dispatch, metadata),
        baseFee: getBaseFee(dispatch, metadata),
        bridgeDarwiniaMessages: getBridgeDarwiniaMessages(dispatch, metadata),
        bridgeDarwiniaGrandpa: getBridgeDarwiniaGrandpa(dispatch, metadata),
        bridgeKusamaGrandpa: getBridgeKusamaGrandpa(dispatch, metadata),
        bridgeKusamaParachain: getBridgeKusamaParachain(dispatch, metadata),
        bridgeCrabParachainMessages: getBridgeCrabParachainMessages(dispatch, metadata),
        darwiniaFeeMarket: getDarwiniaFeeMarket(dispatch, metadata),
        crabParachainFeeMarket: getCrabParachainFeeMarket(dispatch, metadata),
    };
}
