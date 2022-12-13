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
        * @return ((Compact&lt;U32&gt;, Enum&lt;{&#34;0/System&#34;, &#34;2/Babe&#34;, &#34;3/Timestamp&#34;, &#34;4/Indices&#34;, &#34;23/Balances&#34;, &#34;24/Kton&#34;, &#34;6/Authorship&#34;, &#34;38/ElectionProviderMultiPhase&#34;, &#34;25/Staking&#34;, &#34;9/Session&#34;, &#34;11/Grandpa&#34;, &#34;12/ImOnline&#34;, &#34;36/Democracy&#34;, &#34;14/Council&#34;, &#34;15/TechnicalCommittee&#34;, &#34;26/PhragmenElection&#34;, &#34;16/TechnicalMembership&#34;, &#34;32/Treasury&#34;, &#34;44/Tips&#34;, &#34;45/Bounties&#34;, &#34;17/Utility&#34;, &#34;18/Identity&#34;, &#34;19/Society&#34;, &#34;20/Recovery&#34;, &#34;21/Scheduler&#34;, &#34;58/Preimage&#34;, &#34;41/Vesting&#34;, &#34;33/Proxy&#34;, &#34;34/Multisig&#34;, &#34;39/EVM&#34;, &#34;40/Ethereum&#34;, &#34;51/BaseFee&#34;, &#34;48/BridgeDarwiniaMessages&#34;, &#34;47/BridgeDarwiniaGrandpa&#34;, &#34;52/BridgeKusamaGrandpa&#34;, &#34;53/BridgeKusamaParachain&#34;, &#34;56/BridgeCrabParachainMessages&#34;, &#34;49/DarwiniaFeeMarket&#34;, &#34;55/CrabParachainFeeMarket&#34;}&gt;), [U8; 32], U128)
        */
        calls: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Calls', param0);
        },
    };
};