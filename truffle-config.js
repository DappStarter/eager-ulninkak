require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone struggle renew rifle column hidden area slot giant'; 
let testAccounts = [
"0xd38e85b44f0c98c8db38f0978be7b721cc2b5c0383e9c7b050754e27afe6cde9",
"0x606e55cbe045e635f44f917a84ac672c14e8eb8268962457e3c264993d1d5714",
"0x667a116318d0f2498729a7b32507a44437f997248123686638d9fa698e82e95e",
"0xcabac5938bc8f309fce041ca4a03092a731e1e7af5d4c3131513b8f073110c46",
"0x858a2c9d25329e9d35f12113ec39dec1a6c2da35cfe901c5d3167b4201b077ee",
"0xcc385c229cdb89807691fbc6216f833ff7e4ca01f108ed24e06dce0b9037b17d",
"0xef65256446d471d4b81336272e9c2a2fbafd3cadf591c0b77136d71acc13783d",
"0x5a7957ae9e9c4ff4f7f9214c9268ce6f6490e52b47ad20597204d395668c57a1",
"0xbff2c205e8bdcbb1336aaf2b49d98fa4790e6f1e6442b0e926a9df8b28e75a39",
"0x63b766acb98799457539122201788a55a460e942b349d4957763462f636cd2c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
