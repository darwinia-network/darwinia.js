import {GetStorage} from "../../storage";

export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
        * The set of open multisig operations.

        * @param param0: AccountId32: [U8; 32]
        * @param param1: [U8; 32]
        * @return Multisig: {when: {height: U32, index: U32}, deposit: U128, depositor: [U8; 32], approvals: Vec&lt;[U8; 32]&gt;}
        */
        multisigs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },

        /**

        * @param param0: [U8; 32]
        * @return ((Compact&lt;U32&gt;, Enum&lt;{&#34;0/System&#34;, &#34;2/Babe&#34;, &#34;3/Timestamp&#34;, &#34;4/Balances&#34;, &#34;5/Kton&#34;, &#34;7/Authorship&#34;, &#34;8/ElectionProviderMultiPhase&#34;, &#34;9/Staking&#34;, &#34;12/Session&#34;, &#34;13/Grandpa&#34;, &#34;58/MessageGadget&#34;, &#34;66/EcdsaAuthority&#34;, &#34;14/ImOnline&#34;, &#34;17/Democracy&#34;, &#34;18/Council&#34;, &#34;19/TechnicalCommittee&#34;, &#34;20/PhragmenElection&#34;, &#34;21/TechnicalMembership&#34;, &#34;22/Treasury&#34;, &#34;50/KtonTreasury&#34;, &#34;51/Tips&#34;, &#34;52/Bounties&#34;, &#34;23/Sudo&#34;, &#34;25/Vesting&#34;, &#34;26/Utility&#34;, &#34;27/Identity&#34;, &#34;28/Society&#34;, &#34;29/Recovery&#34;, &#34;30/Scheduler&#34;, &#34;67/Preimage&#34;, &#34;31/Proxy&#34;, &#34;32/Multisig&#34;, &#34;40/EVM&#34;, &#34;41/Ethereum&#34;, &#34;59/BaseFee&#34;, &#34;45/BridgePangoroGrandpa&#34;, &#34;43/BridgePangoroMessages&#34;, &#34;60/BridgeRococoGrandpa&#34;, &#34;61/BridgeRococoParachains&#34;, &#34;63/BridgePangolinParachainMessages&#34;, &#34;53/PangoroFeeMarket&#34;, &#34;64/PangolinParachainFeeMarket&#34;, &#34;54/TransactionPause&#34;, &#34;68/BridgeMoonbaseRelayGrandpa&#34;, &#34;69/BridgeMoonbaseRelayParachains&#34;, &#34;71/BridgePangolinParachainAlphaMessages&#34;, &#34;72/PangolinParachainAlphaFeeMarket&#34;, &#34;65/ToPangolinParachainBacking&#34;}&gt;), [U8; 32], U128)
        */
        calls: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Calls', param0);
        },
    };
};