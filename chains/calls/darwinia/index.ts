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

export const buildDarwiniaCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
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
        imOnline: getImOnline(dispatch, metadata),
        messageGadget: getMessageGadget(dispatch, metadata),
        ecdsaAuthority: getEcdsaAuthority(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        phragmenElection: getPhragmenElection(dispatch, metadata),
        technicalMembership: getTechnicalMembership(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
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
        bridgeCrabGrandpa: getBridgeCrabGrandpa(dispatch, metadata),
        bridgeCrabMessages: getBridgeCrabMessages(dispatch, metadata),
        bridgePolkadotGrandpa: getBridgePolkadotGrandpa(dispatch, metadata),
        bridgePolkadotParachain: getBridgePolkadotParachain(dispatch, metadata),
        bridgeDarwiniaParachainMessages: getBridgeDarwiniaParachainMessages(dispatch, metadata),
        feeMarket: getFeeMarket(dispatch, metadata),
        darwiniaParachainFeeMarket: getDarwiniaParachainFeeMarket(dispatch, metadata),
    };
}
