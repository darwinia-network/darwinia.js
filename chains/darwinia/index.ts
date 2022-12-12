import {GetStorage} from "../../storage";

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
import {getImOnline} from "./imOnline";
import {getDarwiniaHeaderMmr} from "./darwiniaHeaderMmr";
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
import {getTronBacking} from "./tronBacking";

export const buildDarwiniaClient = (getStorage: GetStorage) => {
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
        imOnline: getImOnline(getStorage),
        darwiniaHeaderMmr: getDarwiniaHeaderMmr(getStorage),
        messageGadget: getMessageGadget(getStorage),
        ecdsaAuthority: getEcdsaAuthority(getStorage),
        democracy: getDemocracy(getStorage),
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        phragmenElection: getPhragmenElection(getStorage),
        technicalMembership: getTechnicalMembership(getStorage),
        treasury: getTreasury(getStorage),
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
        bridgeCrabGrandpa: getBridgeCrabGrandpa(getStorage),
        bridgeCrabMessages: getBridgeCrabMessages(getStorage),
        bridgePolkadotGrandpa: getBridgePolkadotGrandpa(getStorage),
        bridgePolkadotParachain: getBridgePolkadotParachain(getStorage),
        bridgeDarwiniaParachainMessages: getBridgeDarwiniaParachainMessages(getStorage),
        feeMarket: getFeeMarket(getStorage),
        darwiniaParachainFeeMarket: getDarwiniaParachainFeeMarket(getStorage),
        tronBacking: getTronBacking(getStorage),
    };
}