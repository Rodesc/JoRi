import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { SIDEBAR_WIDTH } from '../SideBar/SideBar';

const MapWithMarkers = (props) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  var projects = props.projects || [];
  const markers = [
    { id: 1, position: { lat: 37.7749, lng: -122.4194 }, title: 'Marker 1' },
    { id: 2, position: { lat: 34.0522, lng: -118.2437 }, title: 'Marker 2' },
    // Add more markers as needed
  ];

  // const markers = projects.map((project) => {
  //     return (
  //         <Marker
  //             key={project.id}
  //             lat={project.coords.lat}
  //             lng={project.coords.lng}
  //             text={project.title}
  //             onClick={(project) => props.onMarkerClick(project)}
  //         />
  //     );
  // });

  const defaultCenter = { lat: 37.7749, lng: -122.4194 };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAFmTSc0wKvPjzBMT3Z1iBzd6FI6fY7qyM" libraries={['places']}>
      <GoogleMap mapContainerStyle={styles.mapContainer} zoom={8} center={defaultCenter}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              {/* Add more information as needed */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

var styles = {
  mapContainer: {
      height: '100vh',
      float: 'left',
      width: 100-SIDEBAR_WIDTH + 'vw'
  },
}

export default MapWithMarkers;
