import React from 'react';
import TransactionHistory from './TransactionHistory';
import Withdrawal from '../bank/Withdrawal';
import Checkout from './Checkout';
import Cashbacks from './Cashbacks';

const Payments: React.FC = () => {
  return (
    <div>
      <h2>Payments</h2>
      {/* Render sub-components */}
      <TransactionHistory />
      <Withdrawal />
      <Checkout />
      <Cashbacks />
    </div>
  );
};

export default Payments;
