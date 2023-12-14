const { keyStore } = require('@stardust-collective/dag4-keystore');
const { hdkey } = require('ethereumjs-wallet');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log('You must provide both seed phrase and index as command line arguments with seed phrase in double quotes ("").');
  console.log('Example usage: node index.js "my seed phrase words" 0');
  process.exit(1);
}

const [seed, index] = args;

if (`${parseInt(index)}` !== index) {
  console.log('Invalid index. Index must be an integer. Ex: 1');
  process.exit(1);
}

const DAG_PATH = "m/44'/1137'/0'/0";

let key;
try {
  const extendedPK = keyStore.getExtendedPrivateKeyFromMnemonic(seed);

  key = hdkey.fromExtendedKey(extendedPK);
} catch (err) {
  console.log('Invalid seed phrase.');
  process.exit(1);
}

const wallet = key.derivePath(DAG_PATH).deriveChild(index).getWallet();

if (!wallet) {
  console.log(`Wallet not found at index ${index}`);
  process.exit(1);
}

console.log(`Private key: ${wallet.getPrivateKey().toString("hex")}`);
