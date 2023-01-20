import { getStorage as getStorageFunction } from "../../../src/storage";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

import {getSystem} from "./system";
import {getBabe} from "./babe";
import {getTimestamp} from "./timestamp";
import {getBalances} from "./balances";
import {getKton} from "./kton";
import {getTransactionPayment} from "./transactionPayment";
import {getAuthorship} from "./authorship";
import {getElectionProviderMultiPhase} from "./electionProviderMultiPhase";
import {getStaking} from "./staking";
import {getOffences} from "./offences";
import {getSession} from "./session";
import {getGrandpa} from "./grandpa";
import {getBeefy} from "./beefy";
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getImOnline} from "./imOnline";
import {getHeaderMmr} from "./headerMmr";
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
import {getBridgeRococoParachain} from "./bridgeRococoParachain";
import {getBridgePangolinParachainMessages} from "./bridgePangolinParachainMessages";
import {getPangoroFeeMarket} from "./pangoroFeeMarket";
import {getPangolinParachainFeeMarket} from "./pangolinParachainFeeMarket";
import {getBridgeMoonbaseRelayGrandpa} from "./bridgeMoonbaseRelayGrandpa";
import {getBridgeMoonbaseRelayParachain} from "./bridgeMoonbaseRelayParachain";
import {getBridgePangolinParachainAlphaMessages} from "./bridgePangolinParachainAlphaMessages";
import {getPangolinParachainAlphaFeeMarket} from "./pangolinParachainAlphaFeeMarket";

export const buildPangolinStoragesClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const getStorage = getStorageFunction(provider, metadata);
    return {
        system: getSystem(getStorage),
        babe: getBabe(getStorage),
        timestamp: getTimestamp(getStorage),
        balances: getBalances(getStorage),
        kton: getKton(getStorage),
        transactionPayment: getTransactionPayment(getStorage),
        authorship: getAuthorship(getStorage),
        electionProviderMultiPhase: getElectionProviderMultiPhase(getStorage),
        staking: getStaking(getStorage),
        offences: getOffences(getStorage),
        session: getSession(getStorage),
        grandpa: getGrandpa(getStorage),
        beefy: getBeefy(getStorage),
        messageGadget: getMessageGadget(getStorage),
        ecdsaAuthority: getEcdsaAuthority(getStorage),
        imOnline: getImOnline(getStorage),
        headerMmr: getHeaderMmr(getStorage),
        democracy: getDemocracy(getStorage),
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        phragmenElection: getPhragmenElection(getStorage),
        technicalMembership: getTechnicalMembership(getStorage),
        treasury: getTreasury(getStorage),
        ktonTreasury: getKtonTreasury(getStorage),
        tips: getTips(getStorage),
        bounties: getBounties(getStorage),
        sudo: getSudo(getStorage),
        vesting: getVesting(getStorage),
        identity: getIdentity(getStorage),
        society: getSociety(getStorage),
        recovery: getRecovery(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        proxy: getProxy(getStorage),
        multisig: getMultisig(getStorage),
        evm: getEVM(getStorage),
        ethereum: getEthereum(getStorage),
        baseFee: getBaseFee(getStorage),
        bridgePangoroGrandpa: getBridgePangoroGrandpa(getStorage),
        bridgePangoroMessages: getBridgePangoroMessages(getStorage),
        bridgeRococoGrandpa: getBridgeRococoGrandpa(getStorage),
        bridgeRococoParachain: getBridgeRococoParachain(getStorage),
        bridgePangolinParachainMessages: getBridgePangolinParachainMessages(getStorage),
        pangoroFeeMarket: getPangoroFeeMarket(getStorage),
        pangolinParachainFeeMarket: getPangolinParachainFeeMarket(getStorage),
        bridgeMoonbaseRelayGrandpa: getBridgeMoonbaseRelayGrandpa(getStorage),
        bridgeMoonbaseRelayParachain: getBridgeMoonbaseRelayParachain(getStorage),
        bridgePangolinParachainAlphaMessages: getBridgePangolinParachainAlphaMessages(getStorage),
        pangolinParachainAlphaFeeMarket: getPangolinParachainAlphaFeeMarket(getStorage),
    };
}
