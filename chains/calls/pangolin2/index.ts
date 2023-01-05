import { Dispatch } from "../../../call";
import { Metadata } from "@polkadot/types";

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

export const buildPangolin2CallsClient = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        system: getSystem(dispatch, metadata),
        parachainSystem: getParachainSystem(dispatch, metadata),
        timestamp: getTimestamp(dispatch, metadata),
        parachainInfo: getParachainInfo(dispatch, metadata),
        balances: getBalances(dispatch, metadata),
        assets: getAssets(dispatch, metadata),
        deposit: getDeposit(dispatch, metadata),
        accountMigration: getAccountMigration(dispatch, metadata),
        authorship: getAuthorship(dispatch, metadata),
        staking: getStaking(dispatch, metadata),
        session: getSession(dispatch, metadata),
        democracy: getDemocracy(dispatch, metadata),
        council: getCouncil(dispatch, metadata),
        technicalCommittee: getTechnicalCommittee(dispatch, metadata),
        phragmenElection: getPhragmenElection(dispatch, metadata),
        technicalMembership: getTechnicalMembership(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        tips: getTips(dispatch, metadata),
        sudo: getSudo(dispatch, metadata),
        vesting: getVesting(dispatch, metadata),
        utility: getUtility(dispatch, metadata),
        identity: getIdentity(dispatch, metadata),
        scheduler: getScheduler(dispatch, metadata),
        preimage: getPreimage(dispatch, metadata),
        proxy: getProxy(dispatch, metadata),
        multisig: getMultisig(dispatch, metadata),
        xcmpQueue: getXcmpQueue(dispatch, metadata),
        polkadotXcm: getPolkadotXcm(dispatch, metadata),
        cumulusXcm: getCumulusXcm(dispatch, metadata),
        dmpQueue: getDmpQueue(dispatch, metadata),
        ethereum: getEthereum(dispatch, metadata),
        evm: getEvm(dispatch, metadata),
        baseFee: getBaseFee(dispatch, metadata),
        messageTransact: getMessageTransact(dispatch, metadata),
    };
}
