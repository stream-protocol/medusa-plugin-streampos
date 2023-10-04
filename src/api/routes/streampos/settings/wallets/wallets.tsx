import React, { useEffect, useState } from 'react';
import { Wallet, Connection, PublicKey, Transaction } from '@solana/web3.js';

// Define the Solana connection and wallet instance
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
const wallet = new Wallet(new Uint8Array()); // Replace with your wallet initialization logic

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

const WalletsComponent: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletTransactions, setWalletTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchWalletData() {
      try {
        // Retrieve the wallet's public key (address)
        const address = await getWalletAddress(wallet);

        // Retrieve wallet transactions
        const transactions = await getWalletTransactions(wallet);

        setWalletAddress(address.toBase58()); // Convert public key to string
        setWalletTransactions(transactions);
      } catch (error) {
        console.error('Solana error:', error);
      }
    }

    fetchWalletData();
  }, []); // Run the effect only once on component mount

  return (
    <div>
      <h1>Wallets</h1>
      <div>
        <h2>Wallet Address</h2>
        <p>{walletAddress}</p>
      </div>
      <div>
        <h2>Recent Transactions</h2>
        <ul>
          {walletTransactions.map((transaction, index) => (
            <li key={index}>
              {/* Display transaction details as needed */}
              Transaction ID: {transaction.transactionId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WalletsComponent;
