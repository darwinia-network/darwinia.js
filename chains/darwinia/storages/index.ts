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
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getTreasury} from "./treasury";
import {getDemocracy} from "./democracy";
import {getConvictionVoting} from "./convictionVoting";
import {getReferenda} from "./referenda";
import {getWhitelist} from "./whitelist";
import {getIdentity} from "./identity";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getXcmpQueue} from "./xcmpQueue";
import {getPolkadotXcm} from "./polkadotXcm";
import {getEthereumXcm} from "./ethereumXcm";
import {getDmpQueue} from "./dmpQueue";
import {getAssetManager} from "./assetManager";
import {getAssetLimit} from "./assetLimit";
import {getEthereum} from "./ethereum";
import {getEVM} from "./evm";

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
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        treasury: getTreasury(getStorage),
        democracy: getDemocracy(getStorage),
        convictionVoting: getConvictionVoting(getStorage),
        referenda: getReferenda(getStorage),
        whitelist: getWhitelist(getStorage),
        identity: getIdentity(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        proxy: getProxy(getStorage),
        xcmpQueue: getXcmpQueue(getStorage),
        polkadotXcm: getPolkadotXcm(getStorage),
        ethereumXcm: getEthereumXcm(getStorage),
        dmpQueue: getDmpQueue(getStorage),
        assetManager: getAssetManager(getStorage),
        assetLimit: getAssetLimit(getStorage),
        ethereum: getEthereum(getStorage),
        evm: getEVM(getStorage),
    };
}
