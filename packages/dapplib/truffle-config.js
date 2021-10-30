require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note still evil just clog oppose general'; 
let testAccounts = [
"0xfb4a7fb1a1fd3d47c68666da2cc1380f46d16f2c80a5626e52b3c588445b0d86",
"0x756f7a77edef49911111ca567928b20233c9c02c439215810d761980995fa865",
"0x65f148dc4bacb3db3b8673f0e66d4754bbce2d1e38c2b4b5dfa6546700af74b0",
"0x49dee36dff8d182936a88740108196b9ca47647842547a1238416b264fd634f5",
"0x16ef9a464da08566d82f3d3aac116801da50b15dd71626b102073984befdb813",
"0xf6c2d7e7fedfb55b8f1baac4b7b06bb19fcd9f5d1e9e1403a66a8ca51d6da09b",
"0x88eb60ef06b3704a1a65c96c83970f3f116e9f52872e4ff0715f8544220cd2b3",
"0xf03cb1fbda6c7893e9c2b42e5cd72f03c9740bb223c0d8def5c91802a0510bc5",
"0x8f450fb2b6bd3f5faae54a3ee1a9d93c99e70a3c350ed9faf8cc384b4d6309eb",
"0x2e5ef32fd74cc5f87994fc200b16b06447c65de06563548a3f1f2c5a64fb3545"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

