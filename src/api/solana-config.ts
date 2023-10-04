// solana-config.ts

import { Connection, PublicKey, Wallet } from '@solana/web3.js';

// Initialize the Solana connection
const rpcEndpoint = 'https://api.mainnet.solana.com'; // Replace with the appropriate RPC endpoint
const connection = new Connection(rpcEndpoint, 'confirmed');

// Initialize a Solana wallet (assuming you have a private key)
const privateKey = '<your-private-key-here>';
const wallet = new Wallet(new Uint8Array(JSON.parse(privateKey)));

export { connection, wallet };
