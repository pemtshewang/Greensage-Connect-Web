"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet"

const Icon = icon({
  iconUrl: "/images/marker.png",
  iconSize: [32, 32],
})

const Map = () => {
  const bhutanCoordinates = [27.5142, 90.4336]; // Coordinates for Bhutan

  return (
    < MapContainer center={bhutanCoordinates} zoom={9} preferCanvas={true} style={{ width: '100%', height: '600px' }
    }>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={Icon} position={bhutanCoordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer >
  );
};

export default Map;
