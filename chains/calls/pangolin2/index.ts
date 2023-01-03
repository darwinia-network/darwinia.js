import { Dispatch } from "../../../call";

import {getSystem} from "./system";
import {getParachainSystem} from "./parachainSystem";
import {getTimestamp} from "./timestamp";
import {getParachainInfo} from "./parachainInfo";
import {getBalances} from "./balances";
import {getAssets} from "./assets";
import {getDeposit} from "./deposit";
import {getAccountMigration} from "./accountMigration";
import {getAuthorship} from "./authorship";
import {getStaking} from "./staking";
import {getSession} from "./session";
import {getDemocracy} from "./democracy";
import {getCouncil} from "./council";
import {getTechnicalCommittee} from "./technicalCommittee";
import {getPhragmenElection} from "./phragmenElection";
import {getTechnicalMembership} from "./technicalMembership";
import {getTreasury} from "./treasury";
import {getTips} from "./tips";
import {getSudo} from "./sudo";
import {getVesting} from "./vesting";
import {getUtility} from "./utility";
import {getIdentity} from "./identity";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getProxy} from "./proxy";
import {getMultisig} from "./multisig";
import {getXcmpQueue} from "./xcmpQueue";
import {getPolkadotXcm} from "./polkadotXcm";
import {getCumulusXcm} from "./cumulusXcm";
import {getDmpQueue} from "./dmpQueue";
import {getEthereum} from "./ethereum";
import {getEvm} from "./evm";
import {getBaseFee} from "./baseFee";
import {getMessageTransact} from "./messageTransact";

export const buildPangolin2CallsClient = (dispatch: Dispatch) => {
    return {
        system: getSystem(dispatch),
        parachainSystem: getParachainSystem(dispatch),
        timestamp: getTimestamp(dispatch),
        parachainInfo: getParachainInfo(dispatch),
        balances: getBalances(dispatch),
        assets: getAssets(dispatch),
        deposit: getDeposit(dispatch),
        accountMigration: getAccountMigration(dispatch),
        authorship: getAuthorship(dispatch),
        staking: getStaking(dispatch),
        session: getSession(dispatch),
        democracy: getDemocracy(dispatch),
        council: getCouncil(dispatch),
        technicalCommittee: getTechnicalCommittee(dispatch),
        phragmenElection: getPhragmenElection(dispatch),
        technicalMembership: getTechnicalMembership(dispatch),
        treasury: getTreasury(dispatch),
        tips: getTips(dispatch),
        sudo: getSudo(dispatch),
        vesting: getVesting(dispatch),
        utility: getUtility(dispatch),
        identity: getIdentity(dispatch),
        scheduler: getScheduler(dispatch),
        preimage: getPreimage(dispatch),
        proxy: getProxy(dispatch),
        multisig: getMultisig(dispatch),
        xcmpQueue: getXcmpQueue(dispatch),
        polkadotXcm: getPolkadotXcm(dispatch),
        cumulusXcm: getCumulusXcm(dispatch),
        dmpQueue: getDmpQueue(dispatch),
        ethereum: getEthereum(dispatch),
        evm: getEvm(dispatch),
        baseFee: getBaseFee(dispatch),
        messageTransact: getMessageTransact(dispatch),
    };
}
