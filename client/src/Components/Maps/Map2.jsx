import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";

const initialViewState = {
  longitude: 88.3639,
  latitude: 22.5726,
  zoom: 10,
};

const Map2 = () => {
  const [viewState, setViewState] = useState(initialViewState);

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAP_KEY}
      initialViewState={viewState}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker longitude={viewState.longitude} latitude={viewState.latitude} color="red" />
    </Map>
  );
};

export default Map2;
