# Stargazer BIP-44 Wallet Recovery
Accounts created prior to the release of Stargazer v2.1 in August 2021 had a different seeding mechanism (BIP-44 accounts) that 
allowed for multiple accounts under a single wallet and seed phrase. With the introduction of multi-chain wallets 
in v2.1 the seeding mechanism changed to allow a single seed phrase to generate both Constellation and Ethereum chain 
private keys at the same time. Each multi-chain wallet now has it’s own seed phrase, even if you have multiple wallets 
in your Stargazer install. 

This package was created to help users recover wallets created prior to v2.1 that were never migrated to the new seeding mechanism. 

# Usage
## Install Prerequisites

### Node.js
You must have node.js installed on your system to run this script. If it's not already installed, [see here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for options.

### Clone the repo
```
git clone https://github.com/StardustCollective/bip-44-wallet-recovery
cd bip-44-wallet-recovery
```

### Install NPM packages

```
npm i
```

## Run the script
The script runs locally on your machine using the seed phrase you provide and an index. Each account under your seed phrase is at a different index, starting at zero. 

Provide the seed phrase and index as command line arguments. Make sure to put the seed phrase in double quotes ("").
```
node index.hs <seed phrase> <index>
```

Example (first account): 
```
node index.js "your seed phrase words" 0
```

Example (second account): 
```
node index.js "your seed phrase words" 1
```

Keep incrementing the index until you've retrieved the private keys of all accounts associated with your seed phrase. 

**NOTE:** The script will find the private key of wallets at the index you specify whether you created or interacted with those wallets or not. You will need to check each wallet pk, 
by importing into Stargazer for example, and see if it contains your lost funds. If you are able to access your lost funds, it is recommended that you transfer them to a multi-chain 
wallet that is accessible with its own seed phrase. 