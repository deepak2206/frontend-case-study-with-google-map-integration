import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 20.5937, lng: 78.9629 }; 

const MapComponent = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey="Your API key">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={location || defaultCenter}>
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
