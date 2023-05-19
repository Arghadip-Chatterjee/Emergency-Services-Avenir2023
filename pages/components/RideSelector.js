import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
import { data } from 'autoprefixer'
import pickupCoordinates from '../confirm'
import dropoffCoordinates from '../confirm'
import { useRouter } from 'next/router';
import ThankYouPage from '../thanks';


// const RideSelector = () => {

//     const[rideDuration,setRideDuration]= useState(0)

//     useEffect(()=>{
//         rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A`
//         ).then(res = res.json()).then(data => {
//             setRideDuration(data.routes[0].duration/100)
//         })
//     },[pickupCoordinates,dropoffCoordinates])
//     return (
//         <Wrapper>
//             <Title>Choose a ride, or swipe up for more</Title>
//             {/* 🔥 FAbio */}
//             {/* 🚀 Sam */}
//             <CarList>
//                 { carList.map((car, index)=>(
//                     <Car key={index}>
//                         <CarImage src={car.imgUrl} />
//                         <CarDetails>
//                             <Service>{car.service}</Service>
//                             <Time>5 min away</Time>
//                         </CarDetails>
//                         <Price>{'$'+(rideDuration*car.multiplier)}</Price>
//                     </Car>
//                 )) }

//             </CarList>
//         </Wrapper>
//     )
// }

// export default RideSelector

// const RideSelector = () => {
//     const [rideDuration, setRideDuration] = useState(0);
//     const accessToken = 'pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A';

//     useEffect(() => {
//       rideDuration = fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=${accessToken}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           const duration = data.routes[0].duration / 100;
//           setRideDuration(duration);
//         })
//         .catch((error) => {
//           console.error("Error fetching directions:", error);
//         });
//     }, [pickupCoordinates, dropoffCoordinates, accessToken]);

//     return (
//       <Wrapper>
//         <Title>Choose a ride, or swipe up for more</Title>
//         <CarList>
//           {carList.map((car, index) => (
//             <Car key={index}>
//               <CarImage src={car.imgUrl} />
//               <CarDetails>
//                 <Service>{car.service}</Service>
//                 <Time>5 min away</Time>
//               </CarDetails>
//               {/* <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price> */}
//               <Price>$24.00</Price>
//             </Car>
//           ))}
//         </CarList>
//       </Wrapper>
//     );
//   };

//   export default RideSelector;

//Perfect Ride Selector 

// const RideSelector = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   useEffect(() => {
//     // You can perform any necessary actions when the selected car changes.
//     // For example, you can update the state or perform some logic based on the selected car.
//     // You can use the selectedCar state to pass the selected car to other components or functions.
//     console.log('Selected Car:', selectedCar);
//   }, [selectedCar]);

//   const handleCarSelect = (car) => {
//     setSelectedCar(car);
//   };

//   return (
//     <Wrapper>
//       <Title>Choose a ride, or swipe up for more</Title>
//       <CarList>
//         {carList.map((car, index) => (
//           <Car key={index} onClick={() => handleCarSelect(car)}>
//             <CarImage src={car.imgUrl} />
//             <CarDetails>
//               <Service>{car.service}</Service>
//               <Time>5 min away</Time>
//             </CarDetails>
//             <Price>$24</Price>
//           </Car>
//         ))}
//       </CarList>
//       {selectedCar && (
//         <SelectedCar>
//           <h2>Selected Car:-</h2>
//           <p>Service: {selectedCar.service}</p>
//           <p>Price: $24</p>
//           {/* You can display additional details or perform actions related to the selected car */}
//         </SelectedCar>
//       )}
//     </Wrapper>
//   );
// };

// export default RideSelector;


//RideSelector with money according to distance 


const RideSelector = ({ distance }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  useEffect(() => {
    console.log('Selected Car:', selectedCar);
  }, [selectedCar]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  // const calculatePrice = (distance) => {
  //   const pricePerKilometer = 10;
  //   return distance * pricePerKilometer;
  // };

  const calculatePrice = (distance, selectedCar) => {
    if (!selectedCar) {
      return 0; // Or any default value you prefer when no car is selected
    }

    const pricePerKilometer = selectedCar.service === 'ICU Ambulance' ? 20 : 10;
    return distance * pricePerKilometer;
  };




  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index} onClick={() => handleCarSelect(car)}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              {/* <Time>5 min away</Time> */}
            </CarDetails>
            {/* <Price>₹{calculatePrice(distance)}</Price>  */}
          </Car>
        ))}
      </CarList> 

      {selectedCar && (
        <SelectedCar>
          <h2>Selected Car:-</h2>
          <p>Service: {selectedCar.service}</p>
          {/* <Price>₹{calculatePrice(distance)}</Price> */}
          <Price>₹{calculatePrice(distance, selectedCar)}</Price>
          {/* Update the price based on the selected car and distance */}
          {/* Additional details or actions related to the selected car */}
        </SelectedCar>
      )}
    </Wrapper>
  );
};

export default RideSelector;



const SelectedCar = tw.div`
  mt-4 p-4 border rounded
`;

// Rest of the code...


const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`


