import { Dispatch } from "../../../call";

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
import {getMessageGadget} from "./messageGadget";
import {getEcdsaAuthority} from "./ecdsaAuthority";
import {getImOnline} from "./imOnline";
import {getTreasury} from "./treasury";
import {getSudo} from "./sudo";
import {getScheduler} from "./scheduler";
import {getPreimage} from "./preimage";
import {getBridgePangolinGrandpa} from "./bridgePangolinGrandpa";
import {getBridgePangolinMessages} from "./bridgePangolinMessages";
import {getPangolinFeeMarket} from "./pangolinFeeMarket";
import {getTransactionPause} from "./transactionPause";
import {getEVM} from "./evm";
import {getEthereum} from "./ethereum";
import {getBaseFee} from "./baseFee";

export const buildPangoroCallsClient = (dispatch: Dispatch) => {
    return {
        system: getSystem(dispatch),
        babe: getBabe(dispatch),
        timestamp: getTimestamp(dispatch),
        balances: getBalances(dispatch),
        kton: getKton(dispatch),
        authorship: getAuthorship(dispatch),
        electionProviderMultiPhase: getElectionProviderMultiPhase(dispatch),
        staking: getStaking(dispatch),
        session: getSession(dispatch),
        grandpa: getGrandpa(dispatch),
        messageGadget: getMessageGadget(dispatch),
        ecdsaAuthority: getEcdsaAuthority(dispatch),
        imOnline: getImOnline(dispatch),
        treasury: getTreasury(dispatch),
        sudo: getSudo(dispatch),
        scheduler: getScheduler(dispatch),
        preimage: getPreimage(dispatch),
        bridgePangolinGrandpa: getBridgePangolinGrandpa(dispatch),
        bridgePangolinMessages: getBridgePangolinMessages(dispatch),
        pangolinFeeMarket: getPangolinFeeMarket(dispatch),
        transactionPause: getTransactionPause(dispatch),
        evm: getEVM(dispatch),
        ethereum: getEthereum(dispatch),
        baseFee: getBaseFee(dispatch),
    };
}
