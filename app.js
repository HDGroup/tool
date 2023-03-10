const bip39 = require('bip39')

const mnemonic = bip39.generateMnemonic();
console.log(mnemonic);

const mnemonic2 = bip39.entropyToMnemonic('0000000000000000000000000000000000000000000000000000000000000000')
console.log(mnemonic2);