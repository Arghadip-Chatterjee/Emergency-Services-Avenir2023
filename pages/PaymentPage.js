// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './PaymentForm';


// // Load your Stripe publishable key
// const stripePromise = loadStripe('pk_test_51N0TokSDGmPl6Vu86NClraXi9TkUy25yTXhHJKFcGN1AX6B5Yx3xSPn2GPlmzwmg9TlqosDK1jEQpQIEWhpSAd0g00vE3wc1Mc');

// const PaymentPage = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
//       {/* Place the payment form components here */}
//       <Elements stripe={stripePromise}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// };

// export default PaymentPage;


import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPageContent from './PaymentForm';

const stripePromise = loadStripe('pk_test_51N0TokSDGmPl6Vu86NClraXi9TkUy25yTXhHJKFcGN1AX6B5Yx3xSPn2GPlmzwmg9TlqosDK1jEQpQIEWhpSAd0g00vE3wc1Mc');

const PaymentPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/digital-rupee-symbol-technology-concept-background_1017-42463.jpg?w=1380&t=st=1684429068~exp=1684429668~hmac=48e145927cc5c17020213a9f6f7dcc7f5c102dbe53c92e97e5cbb567e00da722")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Elements stripe={stripePromise}>
        <PaymentPageContent/>
      </Elements>
    </div>
  );
};

export default PaymentPage;

