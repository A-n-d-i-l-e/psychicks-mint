import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PsyChicksMint',
  tokenName: 'Psychicks',
  tokenSymbol: 'Psyc',
  hiddenMetadataUri: 'ipfs://QmVh7yF4e1X5MZkp8WNVXnsiFqYygNNBqywBx7Awm7nsES/hidden.json',
  maxSupply: 9999,
  whitelistSale: {
    price: 0.20,
    maxMintAmountPerTx: 8,
  },
  preSale: {
    price: 0.15,
    maxMintAmountPerTx: 8,
  },
  publicSale: {
    price: 0.30,
    maxMintAmountPerTx: 4,
  },
  contractAddress: '0xf5D082F01c269fEab4924E3a188aC6d9f64d59BA',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
