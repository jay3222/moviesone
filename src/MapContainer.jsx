import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '400px',
  border:'1px solid white'
};

const center = {
  lat: 19.025080,
  lng: 72.888992
};

const MapContainer=()=> {
  return (
    <>
    <LoadScript
      googleMapsApiKey="AIzaSyABcE7W2cqZRz0CbNZ7AhxgTB47ntbwg3Q"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default React.memo(MapContainer);