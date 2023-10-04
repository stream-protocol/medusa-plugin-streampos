// solana-helper.ts

import { Wallet, Connection, PublicKey, Transaction } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet.solana.com', 'confirmed');

// Function to retrieve a wallet's public key (address)
async function getWalletAddress(wallet: Wallet): Promise<PublicKey> {
  return wallet.getPublicKey();
}

// Function to retrieve wallet transaction history
async function getWalletTransactions(wallet: Wallet): Promise<Transaction[]> {
  const publicKey = await getWalletAddress(wallet);
  const transactions = await connection.getConfirmedSignaturesForAddress2(publicKey, {
    limit: 10, // Adjust the limit as needed
  });

  const transactionDetails = await Promise.all(
    transactions.map(async (tx) => {
      const confirmedTx = await connection.getConfirmedTransaction(tx.signature);
      return confirmedTx?.transaction;
    })
  );

  return transactionDetails.filter((tx) => tx !== undefined) as Transaction[];
}

export { getWalletAddress, getWalletTransactions };
