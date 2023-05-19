// import React from 'react';

// const hospitals = [
//   { name: 'Zenith Super Specialist Hospital', number: '033-49499200' },
//   { name: 'Apollo Hospitals', number: '18605001066' },
//   { name: 'Amri Hospitals Dhakuria', number: '033-66800000' },
//   // Add more hospitals as needed
// ];

// const HospitalList = () => {
//   return (
//     <div>
//       <h1>Hospital Directory</h1>
//       <ul>
//         {hospitals.map((hospital, index) => (
//           <li key={index}>
//             <strong>{hospital.name}</strong>: {hospital.number}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HospitalList;


import React from 'react';
import styled from 'styled-components';

const hospitals = [
  { name: 'Zenith Super Specialist Hospital', number: '033-49499200' },
  { name: 'Apollo Hospitals', number: '18605001066' },
  { name: 'Amri Hospitals Dhakuria', number: '033-66800000' },
  {name : 'SSKM Medical College & Hospital', number: '06384465326'},
  {name: 'Amri Hospitals Mukundapur', number: '07947182242'},
  {name:'Park Site Nursing Home', number: '07947471412'},
  {name:'Seba Magnum Ppl Hospital', number:'07947059022'},
  {name:'New Sebayan Nursing Home and Diagnostic Centre', number:'09035245803'},
  {name:'B P Poddar Hospital & Medical Research Ltd', number: '08045784695'},
  {name:'AMRI Hospitals - Saltlake', number:'07947443123'},
  {name:'Ramkrishna Medical Complex', number:'07947408742'},
  {name:'Phoenix Hospital and Diagnostic Centre Pvt Ltd', number:'07947269183'},
  {name:'Dristi Eye Foundation', number:'07947176826'},
  {name:'Calcutta Medical College & Hospital', number:'06384434289'},
  {name: 'Ruby General Hospital', number:'9831179175'}
  // Add more hospitals as needed
];

const StyledHospitalList = styled.div`
  padding: 2rem;
  display:flex;
  flex-direction:column;
  justify-content :center;
  align-items:center;
  background-color:lightgrey;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      strong {
        font-weight: bold;
      }
    }
  }
`;

const HospitalList = () => {
  return (
    <StyledHospitalList>
      <h1>Hospital Directory</h1>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            <strong>{hospital.name}</strong>: {hospital.number}
          </li>
        ))}
      </ul>
    </StyledHospitalList>
  );
};

export default HospitalList;
