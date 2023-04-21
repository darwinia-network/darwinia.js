import { getStorage as getStorageFunction } from "../../../src/storage";
import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

import {getSystem} from "./system";
import {getParachainSystem} from "./parachainSystem";
import {getTimestamp} from "./timestamp";
import {getParachainInfo} from "./parachainInfo";
import {getBalances} from "./balances";
import {getTransactionPayment} from "./transactionPayment";
import {getAssets} from "./assets";
import {getVesting} from "./vesting";
import {getDeposit} from "./deposit";
import {getAccountMigration} from "./accountMigration";
import {getAuthorship} from "./authorship";
import {getDarwiniaStaking} from "./darwiniaStaking";
import {getSession} from "./session";
import {getAura} from "./aura";
import {getAuraExt} from "./auraExt";
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getTips} from "./tips";
import {getSudo} from "./sudo";
import {getIdentity} from "./identity";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getXcmpQueue} from "./xcmpQueue";
import {getPolkadotXcm} from "./polkadotXcm";
import {getEthereumXcm} from "./ethereumXcm";
import {getDmpQueue} from "./dmpQueue";
import {getEthereum} from "./ethereum";
import {getEVM} from "./evm";
import {getBridgeKusamaGrandpa} from "./bridgeKusamaGrandpa";
import {getBridgeKusamaParachain} from "./bridgeKusamaParachain";
import {getBridgeCrabMessages} from "./bridgeCrabMessages";
import {getCrabFeeMarket} from "./crabFeeMarket";

export const buildDarwiniaStoragesClient = (provider: providers.BaseProvider, metadata: Metadata) => {
    const getStorage = getStorageFunction(provider, metadata);
    return {
        system: getSystem(getStorage),
        parachainSystem: getParachainSystem(getStorage),
        timestamp: getTimestamp(getStorage),
        parachainInfo: getParachainInfo(getStorage),
        balances: getBalances(getStorage),
        transactionPayment: getTransactionPayment(getStorage),
        assets: getAssets(getStorage),
        vesting: getVesting(getStorage),
        deposit: getDeposit(getStorage),
        accountMigration: getAccountMigration(getStorage),
        authorship: getAuthorship(getStorage),
        darwiniaStaking: getDarwiniaStaking(getStorage),
        session: getSession(getStorage),
        aura: getAura(getStorage),
        auraExt: getAuraExt(getStorage),
        messageGadget: getMessageGadget(getStorage),
        ecdsaAuthority: getEcdsaAuthority(getStorage),
        democracy: getDemocracy(getStorage),
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        phragmenElection: getPhragmenElection(getStorage),
        technicalMembership: getTechnicalMembership(getStorage),
        treasury: getTreasury(getStorage),
        tips: getTips(getStorage),
        sudo: getSudo(getStorage),
        identity: getIdentity(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        proxy: getProxy(getStorage),
        xcmpQueue: getXcmpQueue(getStorage),
        polkadotXcm: getPolkadotXcm(getStorage),
        ethereumXcm: getEthereumXcm(getStorage),
        dmpQueue: getDmpQueue(getStorage),
        ethereum: getEthereum(getStorage),
        evm: getEVM(getStorage),
        bridgeKusamaGrandpa: getBridgeKusamaGrandpa(getStorage),
        bridgeKusamaParachain: getBridgeKusamaParachain(getStorage),
        bridgeCrabMessages: getBridgeCrabMessages(getStorage),
        crabFeeMarket: getCrabFeeMarket(getStorage),
    };
}
