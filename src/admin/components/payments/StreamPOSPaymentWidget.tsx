// StreamPOSPaymentWidgetProps.tsx

interface StreamPOSPaymentWidgetProps {
    // Define the props you need for the StreamPOSPaymentWidget component
    // For example:
    paymentAmount: number;
    paymentMethod: string;
    onPaymentAmountChange: (amount: number) => void;
    onPaymentMethodChange: (method: string) => void;
    onProcessPayment: () => void;
  }
  
  export default StreamPOSPaymentWidgetProps;
  