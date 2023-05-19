// import React, { useEffect, useRef } from 'react';
// import tw from 'tailwind-styled-components';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import axios from 'axios';
// import styled from 'styled-components';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A';

// const Wrapper = styled.div`
//   height: 100vh;
// `;

// const Map = (props) => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [88.3639, 22.5726],
//       zoom: 3,
//     });

//     if (props.pickupCoordinates) {
//       addToMap(map, props.pickupCoordinates);
//     }

//     if (props.dropoffCoordinates) {
//       addToMap(map, props.dropoffCoordinates);
//     }

//     if (props.pickupCoordinates && props.dropoffCoordinates) {
//       map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
//         padding: 60,
//       });
//     }
//   }, [props.pickupCoordinates, props.dropoffCoordinates]);

//   const addToMap = (map, coordinates) => {
//     const markerOptions = {
//       color: 'black', // Set the default color to black
//     };

//     if (coordinates === props.dropoffCoordinates) {
//       markerOptions.color = 'red'; // Change the color to red for dropoffCoordinates
//     }

//     const marker = new mapboxgl.Marker(markerOptions)
//       .setLngLat(coordinates)
//       .addTo(map);
//   };

//   return <Wrapper ref={mapContainerRef}></Wrapper>;
// };

// export default Map;


// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// const Map = () => {
//   useEffect(() => {
//     const map = L.map('map').setView([22.5626, 88.3630 ], 11);
//     const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

//     const taxiIcon = L.icon({
//       iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
//       iconSize: [70, 70]
//     });

//     const marker = L.marker([22.5626, 88.3630], { icon: taxiIcon }).addTo(map);

//     map.on('click', function (e) {
//       console.log(e);
//       const newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//       L.Routing.control({
//         waypoints: [
//           L.latLng(22.5626, 88.3630),
//           L.latLng(e.latlng.lat, e.latlng.lng)
//         ]
//       }).on('routesfound', function (e) {
//         const routes = e.routes;
//         console.log(routes);

//         e.routes[0].coordinates.forEach(function (coord, index) {
//           setTimeout(function () {
//             marker.setLatLng([coord.lat, coord.lng]);
//           }, 100 * index);
//         });

//       }).addTo(map);
//     });
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
// };

// export default Map;


// With Location Access code

// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// const Map = () => {
//   useEffect(() => {
//     const map = L.map('map').setView([22.5626, 88.3630], 11);
//     const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

//     const taxiIcon = L.icon({
//       iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
//       iconSize: [70, 70]
//     });

//     // Show user's location using browser geolocation API
//     map.locate({ setView: true, maxZoom: 16 });

//     map.on('locationfound', function (e) {
//       const userMarker = L.marker(e.latlng, { icon: taxiIcon }).addTo(map);

//       map.on('click', function (e) {
//         console.log(e);
//         const newMarker = L.marker(e.latlng).addTo(map);
//         L.Routing.control({
//           waypoints: [
//             L.latLng(userMarker.getLatLng().lat, userMarker.getLatLng().lng),
//             L.latLng(e.latlng.lat, e.latlng.lng)
//           ]
//         }).on('routesfound', function (e) {
//           const routes = e.routes;
//           console.log(routes);

//           e.routes[0].coordinates.forEach(function (coord, index) {
//             setTimeout(function () {
//               userMarker.setLatLng([coord.lat, coord.lng]);
//             }, 100 * index);
//           });
//         }).addTo(map);
//       });
//     });

//   }, []);

//   return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
// };

// export default Map;

// With distance travelled 

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// const Map = () => {
//   const [distance, setDistance] = useState(0);

//   useEffect(() => {
//     const map = L.map('map').setView([22.5626, 88.3630], 11);
//     const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

//     const taxiIcon = L.icon({
//       iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
//       iconSize: [70, 70]
//     });

//     // Show user's location using browser geolocation API
//     map.locate({ setView: true, maxZoom: 16 });

//     map.on('locationfound', function (e) {
//       const userMarker = L.marker(e.latlng, { icon: taxiIcon }).addTo(map);

//       map.on('click', function (e) {
//         console.log(e);
//         const newMarker = L.marker(e.latlng).addTo(map);
//         L.Routing.control({
//           waypoints: [
//             L.latLng(userMarker.getLatLng().lat, userMarker.getLatLng().lng),
//             L.latLng(e.latlng.lat, e.latlng.lng)
//           ]
//         }).on('routesfound', function (e) {
//           const routes = e.routes;
//           console.log(routes);
//           const distance = routes[0].summary.totalDistance / 1000; // Convert distance to kilometers
//           setDistance(distance.toFixed(2)); // Set distance with 2 decimal places

//           e.routes[0].coordinates.forEach(function (coord, index) {
//             setTimeout(function () {
//               userMarker.setLatLng([coord.lat, coord.lng]);
//             }, 100 * index);
//           });
//         }).addTo(map);
//       });
//     });

//   }, []);

//   return (
//     <div>
//       <div id="map" style={{ width: '100%', height: '90vh' }}></div>
//       <div style={{ textAlign: 'center', marginTop: '10px' }}>
//         <strong>Distance Traveled: </strong> {distance} km
//       </div>
//     </div>
//   );
// };

// export default Map;


// Distance routing and search 


import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import RideSelector from './RideSelector';
import tw from 'tailwind-styled-components';
import ChatSonicChat from '../../writesonic'; // Import your ChatSonic component


// Right Map 

// const Map = () => {
//   const [destination, setDestination] = useState('');
//   const [distance, setDistance] = useState(0);
//   const [map, setMap] = useState(null);
//   const [userMarker, setUserMarker] = useState(null);

//   useEffect(() => {
//     const initializeMap = () => {
//       const newMap = L.map('map').setView([22.5626, 88.3630], 11);
//       const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(newMap);

//       const taxiIcon = L.icon({
//         iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
//         iconSize: [70, 70]
//       });

//       setMap(newMap);

//       // Show user's location using browser geolocation API
//       newMap.locate({ setView: true, maxZoom: 16 });

//       newMap.on('locationfound', function (e) {
//         const marker = L.marker(e.latlng, { icon: taxiIcon }).addTo(newMap);
//         setUserMarker(marker);
//       });
//     };

//     initializeMap();
//   }, []);

//   const handleSearch = () => {
//     if (!destination || !map || !userMarker) return;

//     const geocoder = L.Control.Geocoder.nominatim();
//     geocoder.geocode(destination, (results) => {
//       if (results && results.length > 0) {
//         const { lat, lng } = results[0].center;

//         const newDestination = L.latLng(lat, lng);
//         setDestination('');
//         setDistance(0);

//         L.Routing.control({
//           waypoints: [
//             L.latLng(userMarker.getLatLng().lat, userMarker.getLatLng().lng),
//             newDestination
//           ]
//         }).on('routesfound', function (e) {
//           const routes = e.routes;
//           console.log(routes);
//           const distance = routes[0].summary.totalDistance / 1000; // Convert distance to kilometers
//           setDistance(distance.toFixed(2)); // Set distance with 2 decimal places

//           e.routes[0].coordinates.forEach(function (coord, index) {
//             setTimeout(function () {
//               userMarker.setLatLng([coord.lat, coord.lng]);
//             }, 100 * index);
//           });
//         }).addTo(map);
//       }
//     });
//   };

//   const handleConfirm = () => {
//     if (destination.trim() !== '') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <div id="map" style={{ width: '100%', height: '90vh' }}></div>
//       <div style={{ textAlign: 'center', marginTop: '10px' }}>
//         <strong>Distance Traveled: </strong> {distance} km
//       </div>
//       <div style={{ textAlign: 'center', marginTop: '10px' }}>
//         <input
//           type="text"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           placeholder="Enter a location"
//         />
//         <button onClick={handleConfirm}>Search</button>
//       </div>
//       <RideSelector distance={distance} /> {/* Pass the distance as a prop */}
//     </div>
//   );
//   }

//   export default Map


// Sourabrata Map 

// const Map = () => {
//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');
//   const [distance, setDistance] = useState(0);
//   const [map, setMap] = useState(null);
//   const [routingControl, setRoutingControl] = useState(null);
//   const [taxiMarker, setTaxiMarker] = useState(null);

//   useEffect(() => {
//     const initializeMap = () => {
//       const newMap = L.map('map').setView([22.5626, 88.3630], 11);
//       const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(newMap);

//       setMap(newMap);
//     };

//     initializeMap();
//   }, []);

//   const handleLocationAccess = () => {
//     if (!map) return;

//     map.locate({ setView: true, maxZoom: 16 });

//     map.on('locationfound', (e) => {
//       const currentLocation = e.latlng;
//       const currentLatLng = L.latLng(currentLocation.lat, currentLocation.lng);

//       setPickup('Current Location');

//       if (dropoff.trim() !== '') {
//         calculateRoute(currentLatLng);
//       }
//     });
//   };

//   const calculateRoute = (pickupLatLng) => {
//     const geocoder = L.Control.Geocoder.nominatim();

//     geocoder.geocode(dropoff, (dropoffResults) => {
//       if (dropoffResults && dropoffResults.length > 0) {
//         const dropoffLatLng = dropoffResults[0].center;

//         const newRoutingControl = L.Routing.control({
//           waypoints: [
//             pickupLatLng,
//             L.latLng(dropoffLatLng.lat, dropoffLatLng.lng)
//           ]
//         }).addTo(map);

//         newRoutingControl.on('routesfound', (e) => {
//           const routes = e.routes;
//           const distance = routes[0].summary.totalDistance / 1000; // Convert distance to kilometers
//           setDistance(distance.toFixed(2)); // Set distance with 2 decimal places

//           const taxiIcon = L.icon({
//             iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
//             iconSize: [70, 70]
//           });

//           const taxiMarker = L.marker(pickupLatLng, { icon: taxiIcon }).addTo(map);

//           const coordinates = e.routes[0].coordinates;
//           const totalSteps = coordinates.length;

//           let step = 0;
//           const animateMarker = () => {
//             if (step === totalSteps) return;

//             const coord = coordinates[step];
//             const latLng = L.latLng(coord.lat, coord.lng);

//             taxiMarker.setLatLng(latLng);

//             step++;
//             setTimeout(animateMarker, 100); // Adjust the delay here for smoother animation
//           };

//           animateMarker();

//           setTaxiMarker(taxiMarker);
//         });

//         // Remove previous routing control and marker, if they exist
//         if (routingControl) {
//           map.removeControl(routingControl);
//         }
//         if (taxiMarker) {
//           map.removeLayer(taxiMarker)
//         }
//         setRoutingControl(newRoutingControl);
//       }
//     });
//   }
//   const handleSearch = () => {
//     if (!pickup || !dropoff || !map) return;
//     if (pickup === 'Current Location') {
//       handleLocationAccess();
//     } else {
//       const geocoder = L.Control.Geocoder.nominatim();

//       geocoder.geocode(pickup, (pickupResults) => {
//         if (pickupResults && pickupResults.length > 0) {
//           const pickupLatLng = pickupResults[0].center;
//           calculateRoute(pickupLatLng);
//         }
//       });
//     }
//   };

//   return (
{/* <div>
  <div id="map" style={{ width: '100%', height: '90vh' }}></div>
  <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <strong>Distance Traveled: </strong> {distance} km
  </div>
  <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <input
      type="text"
      value={pickup}
      onChange={(e) => setPickup(e.target.value)}
      placeholder="Enter pickup location or use Location Access"
    />
    <br />
    <input
      type="text"
      value={dropoff}
      onChange={(e) => setDropoff(e.target.value)}
      placeholder="Enter drop-off location"
    />
    <br />
    <button onClick={handleLocationAccess}>Location Access</button>
    <br></br>
    <button onClick={handleSearch}>Search</button>
  </div>
  <RideSelector distance={distance} /> 
</div> */}
//   );
// };

// export default Map;

// Implementing Scroll Down 
const ScrollToBottomButton = tw.button`
  fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md
`;


const Map = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [distance, setDistance] = useState(0);
  const [map, setMap] = useState(null);
  const [routingControl, setRoutingControl] = useState(null);
  const [pickupMarker, setPickupMarker] = useState(null);
  const [dropoffMarker, setDropoffMarker] = useState(null);
  const [taxiMarker, setTaxiMarker] = useState(null);
  const [showChatSonic, setShowChatSonic] = useState(true); // State to control the visibility of ChatSonic
  const [chatSonicOutput, setChatSonicOutput] = useState(''); // State to store ChatSonic output


  useEffect(() => {
    const initializeMap = () => {
      const newMap = L.map('map').setView([22.5626, 88.3630], 11);
      const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(newMap);

      setMap(newMap);
    };

    initializeMap();
  }, []);

  const handleLocationAccess = () => {
    if (!map) return;

    map.locate({ setView: true, maxZoom: 16 });

    map.on('locationfound', (e) => {
      const currentLocation = e.latlng;
      const currentLatLng = L.latLng(currentLocation.lat, currentLocation.lng);
      localStorage.setItem("currentLocation", JSON.stringify(currentLatLng));

      setPickup('Current Location');

      if (dropoff.trim() !== '') {
        calculateRoute(currentLatLng);
      }
    });
  };

  const calculateRoute = (pickupLatLng) => {
    const geocoder = L.Control.Geocoder.nominatim();

    geocoder.geocode(dropoff, (dropoffResults) => {
      if (dropoffResults && dropoffResults.length > 0) {
        const dropoffLatLng = dropoffResults[0].center;

        const newRoutingControl = L.Routing.control({
          waypoints: [
            pickupLatLng,
            L.latLng(dropoffLatLng.lat, dropoffLatLng.lng)
          ]
        }).addTo(map);

        newRoutingControl.on('routesfound', (e) => {
          const routes = e.routes;
          const distance = routes[0].summary.totalDistance / 1000; // Convert distance to kilometers
          setDistance(distance.toFixed(2)); // Set distance with 2 decimal places

          const pickupIcon = L.icon({
            iconUrl: 'https://vectorified.com/images/google-maps-marker-icon-38.png',
            iconSize: [50, 50]
          });

          const dropoffIcon = L.icon({
            iconUrl: 'https://icons-for-free.com/download-icon-marker-131994967950423839_512.png',
            iconSize: [50, 50]
          });

          const taxiIcon = L.icon({
            iconUrl: 'https://cdn4.iconfinder.com/data/icons/transport-and-vehicles-filled-outline/64/ambulance-512.png',
            iconSize: [70, 70]
          });

          const pickupMarker = L.marker(pickupLatLng, { icon: pickupIcon }).addTo(map);
          const dropoffMarker = L.marker(dropoffLatLng, { icon: dropoffIcon }).addTo(map);
          const taxiMarker = L.marker(pickupLatLng, { icon: taxiIcon }).addTo(map);

          setPickupMarker(pickupMarker);
          setDropoffMarker(dropoffMarker);
          setTaxiMarker(taxiMarker);

          const coordinates = e.routes[0].coordinates;
          const totalSteps = coordinates.length;

          let step = 0;
          const animateMarker = () => {
            if (step === totalSteps) return;

            const coord = coordinates[step];
            const latLng = L.latLng(coord.lat, coord.lng);

            taxiMarker.setLatLng(latLng);

            step++;
            setTimeout(animateMarker, 100); // Adjust the delay here for smoother animation
          };

          animateMarker();
        });

        // Remove previous routing control, if it exists
        if (routingControl) {
          map.removeControl(routingControl);
        }
        setRoutingControl(newRoutingControl);
      }
    });
  };
  const handleSearch = () => {
    if (!pickup || !dropoff || !map) return;
    if (pickup === 'Current Location') {
      handleLocationAccess();
    } else {
      const geocoder = L.Control.Geocoder.nominatim();
      geocoder.geocode(pickup, (pickupResults) => {
        if (pickupResults && pickupResults.length > 0) {
          const pickupLatLng = pickupResults[0].center;
          calculateRoute(pickupLatLng);
        }
      });
    }
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  

  const handleToggleChatSonic = () => {
    setShowChatSonic(!showChatSonic);
  };

  const handleChatSonicSubmit = (output) => {
    setChatSonicOutput(output);
  };

  
  return (
    <div>
      <div id="map" style={{ width: '100%', height: '70vh' }}></div>
      <div style={{ textAlign: 'center', marginTop: '10px'}}>
        <strong>Distance Traveled: </strong> {distance} km
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px'}}>
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Enter pickup location or use Location Access"
        />
        <br />
        <input
          type="text"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          placeholder="Enter drop-off location"
        />
        <br />
        <button onClick={handleLocationAccess}>Location Access</button>
        <br></br>
        <ScrollToBottomButton onClick={handleScrollToBottom}>Scroll To Bottom</ScrollToBottomButton>
        <button onClick={handleSearch}>Search</button><br></br>
        <button onClick={handleToggleChatSonic}>ChatSonic</button>
        <br></br>
        {showChatSonic && <ChatSonicChat />} {/* Render ChatSonicChat component if showChatSonic is true */}
        <div style={{ marginTop: '20px' }}>
        {/* Display ChatSonic output */}
        {chatSonicOutput && (
          <div style={{ textAlign: 'center' }}>
            <strong>ChatSonic Output: </strong> {chatSonicOutput}
          </div>
        )}
      </div>
      </div>
      <RideSelector distance={distance} /> {/* Pass the distance as a prop */}
    </div>

    
  );
};

export default Map;






















