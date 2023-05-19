// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// import tw from 'tailwind-styled-components';

// // Style the form container using Tailwind CSS classes
// const FormContainer = tw.div`
//   max-w-md mx-auto p-4 bg-white shadow-md rounded-md
// `;

// // Style the form element using Tailwind CSS classes
// const Form = tw.form`
//   space-y-4
// `;

// // Style the submit button using Tailwind CSS classes
// const SubmitButton = tw.button`
//   bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md
// `;

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet, handle error
//       return;
//     }

//     // Get the payment card details from the CardElement
//     const cardElement = elements.getElement(CardElement);

//     // Create a payment method with the card information
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       // Handle error in payment submission
//       console.log('Payment error:', error);
//     } else {
//       // Payment succeeded, you can now make a request to your server to complete the payment
//       console.log('Payment succeeded:', paymentMethod);
//     }
//   };

//   return (
//     <FormContainer>
//       <h2 className="text-xl font-bold mb-4">Payment Form</h2>

//       <Form onSubmit={handleSubmit}>
//         {/* Form inputs... */}
//         <CardElement />
//         <SubmitButton type="submit" disabled={!stripe}>
//           Pay
//         </SubmitButton>
//       </Form>
//     </FormContainer>
//   );
// };

// export default PaymentForm;


// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import tw from 'tailwind-styled-components';

// const FormContainer = tw.div`
//   max-w-md mx-auto p-4 bg-gray-200 shadow-md rounded-md bg-grey-200
// `;

// const Form = tw.form`
//   space-y-4
// `;

// const RadioWrapper = tw.div`
//   flex items-center space-x-2
// `;

// const SubmitButton = tw.button`
//   bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md
// `;

// const PaymentPageContent = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentMethodType, setPaymentMethodType] = useState('card');

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethodType(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet, handle error
//       return;
//     }

//     let paymentMethod;

//     if (paymentMethodType === 'card') {
//       const cardElement = elements.getElement(CardElement);

//       const { error, paymentMethod: pm } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });

//       if (error) {
//         console.log('Payment error:', error);
//         return;
//       }

//       paymentMethod = pm;
//     } else if (paymentMethodType === 'upi') {
//       console.log('UPI payment flow');
//       return;
//     }

//     console.log('Payment succeeded:', paymentMethod);
//   };

//   return (
//     <FormContainer>
//       <h2 className="text-xl font-bold mb-4">Payment Page</h2>

//       <Form onSubmit={handleSubmit}>
//         <RadioWrapper>
//           <label>
//             <input
//               type="radio"
//               value="card"
//               checked={paymentMethodType === 'card'}
//               onChange={handlePaymentMethodChange}
//             />
//             Card Payment
//           </label>
//         </RadioWrapper>

//         <RadioWrapper>
//           <label>
//             <input
//               type="radio"
//               value="upi"
//               checked={paymentMethodType === 'upi'}
//               onChange={handlePaymentMethodChange}
//             />
//             UPI Payment
//           </label>
//         </RadioWrapper>

//         {paymentMethodType === 'card' && (
//           <div>
//             <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
//           </div>
//         )}

//         <SubmitButton type="submit" disabled={!stripe}>
//           Pay
//         </SubmitButton>
//       </Form>
//     </FormContainer>
//   );
// };

// export default PaymentPageContent;

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import tw from 'tailwind-styled-components';
import Link from 'next/link'

const FormContainer = tw.div`
  max-w-md mx-auto p-4 bg-gray-200 shadow-md rounded-md bg-grey-200
`;

const Form = tw.form`
  space-y-4
`;

const RadioWrapper = tw.div`
  flex items-center space-x-2
`;

const SubmitButton = tw.button`
  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md
`;

const PaymentPageContent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethodType, setPaymentMethodType] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethodType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet, handle error
      return;
    }

    let paymentMethod;

    if (paymentMethodType === 'card') {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod: pm } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('Payment error:', error);
        return;
      }

      paymentMethod = pm;
    } else if (paymentMethodType === 'upi') {
      console.log('UPI payment flow');
      return;
    } else if (paymentMethodType === 'cash') {
      console.log('Cash payment');
      return;
    }

    console.log('Payment succeeded:', paymentMethod);
  };

  return (
    <FormContainer>
      <h2 className="text-xl font-bold mb-4">Payment Page</h2>

      <Form onSubmit={handleSubmit}>
        <RadioWrapper>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethodType === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Card Payment
          </label>
        </RadioWrapper>

        <RadioWrapper>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethodType === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            UPI Payment
          </label>
        </RadioWrapper>

        <RadioWrapper>
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethodType === 'cash'}
              onChange={handlePaymentMethodChange}
            />
            Cash Payment
          </label>
        </RadioWrapper>

        {paymentMethodType === 'card' && (
          <div>
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </div>
        )}
        <Link href="/thanks">
        <SubmitButton type="submit" disabled={!stripe}>
          Pay
        </SubmitButton>
        </Link>
      </Form>
    </FormContainer>
  );
};

export default PaymentPageContent;


