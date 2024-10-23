// src/HotelMap.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const HotelMap = () => {
    // Dhanmondi coordinates
    const hotelLocation = { lat: 23.7464, lng: 90.3754 };

    // Custom red marker icon URL
    const redMarkerIcon = "https://img.icons8.com/ios-filled/50/FF0000/map-pin.png"; // Change this if needed

    return (
        <div className="relative">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={{ width: '50%', height: '400px' }}
                        center={hotelLocation}
                        zoom={14}
                    >
                        <Marker
                            position={hotelLocation}
                            icon={redMarkerIcon} // Set custom red marker
                            title="Sapphire Hotel"
                        />
                    </GoogleMap>

                    {/* Hotel Card positioned at the top left of the map */}
                    <div className="absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 w-64">
                        <h2 className="text-lg font-bold">Sapphire Hotel</h2>
                        <p className="text-yellow-500">★★★★★</p> {/* 5-star rating */}
                        <p className="text-gray-600">A luxurious stay in Dhanmondi.</p>
                    </div>
                </LoadScript>
            </div>
    );
};

export default HotelMap;
