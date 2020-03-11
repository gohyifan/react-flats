import React from 'react';
import GoogleMapReact from 'google-map-react';

const SimpleMap = ({ center, zoom }) => {
  return (
    <div className="map-container">
      <GoogleMapReact center={center} defaultZoom={zoom}>
        <div className="marker" lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
