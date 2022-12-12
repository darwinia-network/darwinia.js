import {GetStorage} from "../../storage";

import {getSystem} from "./system";
import {getBabe} from "./babe";
import {getTimestamp} from "./timestamp";
import {getIndices} from "./indices";
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
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getTips} from "./tips";
import {getBounties} from "./bounties";
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

export const buildCrabClient = (getStorage: GetStorage) => {
    return {
        system: getSystem(getStorage),
        babe: getBabe(getStorage),
        timestamp: getTimestamp(getStorage),
        indices: getIndices(getStorage),
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
        democracy: getDemocracy(getStorage),
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        phragmenElection: getPhragmenElection(getStorage),
        technicalMembership: getTechnicalMembership(getStorage),
        treasury: getTreasury(getStorage),
        tips: getTips(getStorage),
        bounties: getBounties(getStorage),
        identity: getIdentity(getStorage),
        society: getSociety(getStorage),
        recovery: getRecovery(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        vesting: getVesting(getStorage),
        proxy: getProxy(getStorage),
        multisig: getMultisig(getStorage),
        evm: getEVM(getStorage),
        ethereum: getEthereum(getStorage),
        baseFee: getBaseFee(getStorage),
        bridgeDarwiniaMessages: getBridgeDarwiniaMessages(getStorage),
        bridgeDarwiniaGrandpa: getBridgeDarwiniaGrandpa(getStorage),
        bridgeKusamaGrandpa: getBridgeKusamaGrandpa(getStorage),
        bridgeKusamaParachain: getBridgeKusamaParachain(getStorage),
        bridgeCrabParachainMessages: getBridgeCrabParachainMessages(getStorage),
        darwiniaFeeMarket: getDarwiniaFeeMarket(getStorage),
        crabParachainFeeMarket: getCrabParachainFeeMarket(getStorage),
    };
}