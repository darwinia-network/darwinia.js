import { dispatch as dispatchCall } from "../../../index";
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

export const buildPangoroCallsClient = (provider: providers.BaseProvider, metadata: Metadata) => {
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
        messageGadget: getMessageGadget(dispatch, metadata),
        ecdsaAuthority: getEcdsaAuthority(dispatch, metadata),
        imOnline: getImOnline(dispatch, metadata),
        treasury: getTreasury(dispatch, metadata),
        sudo: getSudo(dispatch, metadata),
        scheduler: getScheduler(dispatch, metadata),
        preimage: getPreimage(dispatch, metadata),
        bridgePangolinGrandpa: getBridgePangolinGrandpa(dispatch, metadata),
        bridgePangolinMessages: getBridgePangolinMessages(dispatch, metadata),
        pangolinFeeMarket: getPangolinFeeMarket(dispatch, metadata),
        transactionPause: getTransactionPause(dispatch, metadata),
        evm: getEVM(dispatch, metadata),
        ethereum: getEthereum(dispatch, metadata),
        baseFee: getBaseFee(dispatch, metadata),
    };
}
