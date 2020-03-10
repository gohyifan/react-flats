import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const SimpleMap = ({ center, zoom }) => {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDtvltTPbKQw0KniBwIdl4liNQlRrSIWSE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
