import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Map2 = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create a map instance
      const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
      }).addTo(map);

      // Get the current location coordinates using browser's Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Create a custom marker icon
          const customIcon = L.icon({
            iconUrl: 'https://vectorified.com/images/google-maps-marker-icon-38.png',
            iconSize: [32, 32], // Adjust the size of the icon
          });

          // Create a marker for the current location with the custom icon
          const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

          // Set the view of the map to the current location
          map.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '50vh' }}></div>;
};

export default Map2;
