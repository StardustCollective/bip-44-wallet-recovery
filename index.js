const { keyStore } = require('@stardust-collective/dag4-keystore');
const { hdkey } = require('ethereumjs-wallet')

const seed = '<YOUR SEED PHRASE HERE>';

const DAG_PATH = "m/44'/1137'/0'/0";

const extendedPK = keyStore.getExtendedPrivateKeyFromMnemonic(seed);

const key = hdkey.fromExtendedKey(extendedPK);

const wallet = key.derivePath(DAG_PATH).deriveChild(1).getWallet();

console.log(wallet.getPrivateKey().toString("hex"));
