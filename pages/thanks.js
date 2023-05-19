// import React from 'react';
// const ThankYouPage = ({ selectedCarName }) => {
//   return (
//     <div>
//       <h1>Thank You!</h1>
//       <p>Selected Car: {selectedCarName}</p>
//       {/* Add more content or styling as needed */}
//     </div>
//   );
// };

// export default ThankYouPage;


import React from 'react';
import tw from 'tailwind-styled-components';

const ThankYouContainer = tw.div`
  flex flex-col items-center justify-center h-screen
`;

const Title = tw.h1`
  text-4xl font-bold mb-4
`;

const SelectedCar = tw.div`
  text-xl mb-2
`;

const Price = tw.div`
  text-lg text-gray-500
`;

const ThankYouPage = ({ selectedCarName, selectedCarPrice }) => {
  return (
    <ThankYouContainer>
      <Title>Thank You for Paying. Your Service will be at Destination soon </Title>
      {/* <SelectedCar>
        Selected Car: {selectedCarName} - Price: ${selectedCarPrice}
      </SelectedCar> */}
      {/* Add more content or styling as needed */}
    </ThankYouContainer>
  );
};

export default ThankYouPage;
