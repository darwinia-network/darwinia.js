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

export const buildPangoroStoragesClient = (provider: providers.BaseProvider, metadata: Metadata) => {
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
        treasury: getTreasury(getStorage),
        sudo: getSudo(getStorage),
        scheduler: getScheduler(getStorage),
        preimage: getPreimage(getStorage),
        bridgePangolinGrandpa: getBridgePangolinGrandpa(getStorage),
        bridgePangolinMessages: getBridgePangolinMessages(getStorage),
        pangolinFeeMarket: getPangolinFeeMarket(getStorage),
        transactionPause: getTransactionPause(getStorage),
        evm: getEVM(getStorage),
        ethereum: getEthereum(getStorage),
        baseFee: getBaseFee(getStorage),
    };
}
