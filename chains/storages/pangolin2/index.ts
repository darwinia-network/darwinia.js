import metadata from "./metadata";
export const pangolin2MetaStatic = metadata;

import {GetStorage} from "../../../storage";

import {getSystem} from "./system";
import {getParachainSystem} from "./parachainSystem";
import {getTimestamp} from "./timestamp";
import {getParachainInfo} from "./parachainInfo";
import {getBalances} from "./balances";
import {getTransactionPayment} from "./transactionPayment";
import {getAssets} from "./assets";
import {getDeposit} from "./deposit";
import {getAccountMigration} from "./accountMigration";
import {getAuthorship} from "./authorship";
import {getStaking} from "./staking";
import {getSession} from "./session";
import {getAura} from "./aura";
import {getAuraExt} from "./auraExt";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getTips} from "./tips";
import {getSudo} from "./sudo";
import {getVesting} from "./vesting";
import {getIdentity} from "./identity";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getMultisig} from "./multisig";
import {getXcmpQueue} from "./xcmpQueue";
import {getPolkadotXcm} from "./polkadotXcm";
import {getDmpQueue} from "./dmpQueue";
import {getEthereum} from "./ethereum";
import {getEvm} from "./evm";
import {getBaseFee} from "./baseFee";

export const buildPangolin2StoragesClient = (getStorage: GetStorage) => {
    return {
        system: getSystem(getStorage),
        parachainSystem: getParachainSystem(getStorage),
        timestamp: getTimestamp(getStorage),
        parachainInfo: getParachainInfo(getStorage),
        balances: getBalances(getStorage),
        transactionPayment: getTransactionPayment(getStorage),
        assets: getAssets(getStorage),
        deposit: getDeposit(getStorage),
        accountMigration: getAccountMigration(getStorage),
        authorship: getAuthorship(getStorage),
        staking: getStaking(getStorage),
        session: getSession(getStorage),
        aura: getAura(getStorage),
        auraExt: getAuraExt(getStorage),
        democracy: getDemocracy(getStorage),
        council: getCouncil(getStorage),
        technicalCommittee: getTechnicalCommittee(getStorage),
        phragmenElection: getPhragmenElection(getStorage),
        technicalMembership: getTechnicalMembership(getStorage),
        treasury: getTreasury(getStorage),
        tips: getTips(getStorage),
        sudo: getSudo(getStorage),
        vesting: getVesting(getStorage),
        identity: getIdentity(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        proxy: getProxy(getStorage),
        multisig: getMultisig(getStorage),
        xcmpQueue: getXcmpQueue(getStorage),
        polkadotXcm: getPolkadotXcm(getStorage),
        dmpQueue: getDmpQueue(getStorage),
        ethereum: getEthereum(getStorage),
        evm: getEvm(getStorage),
        baseFee: getBaseFee(getStorage),
    };
}
