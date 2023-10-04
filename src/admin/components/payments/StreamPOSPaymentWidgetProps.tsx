import React, { useState } from 'react';
import StreamPOSPaymentWidgetProps from './StreamPOSPaymentWidgetProps'; // Import the props interface

const StreamPOSPaymentWidget: React.FC<StreamPOSPaymentWidgetProps> = (props) => {
  const { paymentAmount, paymentMethod, onPaymentAmountChange, onPaymentMethodChange, onProcessPayment } = props;

  // ... rest of the component code ...

  return (
    <div>
      <h2>StreamPOS Payment Widget</h2>
      <div>
        <label>
          Payment Amount:
          <input
            type="number"
            value={paymentAmount}
            onChange={(e) => onPaymentAmountChange(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={(e) => onPaymentMethodChange(e.target.value)}>
            <option value="Solana">Solana</option>
            <option value="USDC">USDC</option>
            <option value="EURC">EURC</option>
            <option value="STRM">STRM</option>
            {/* Add more payment methods as needed */}
          </select>
        </label>
      </div>
      <button onClick={onProcessPayment}>Process Payment</button>
    </div>
  );
};

export default StreamPOSPaymentWidget;
