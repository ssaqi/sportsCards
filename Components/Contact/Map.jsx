import React from 'react';

const Map = () => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=[YOUR_API_KEY]&q=[karachipakistan]`;

  return (
    <div className="map-container">
      <iframe
        title="Google Maps"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      />
    </div>
  );
};

export default Map;
