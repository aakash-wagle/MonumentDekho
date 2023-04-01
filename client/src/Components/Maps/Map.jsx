import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Box } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F1cmF2bWVodGEzMjIzIiwiYSI6ImNsZnhwYzcyODBxc3YzbXFxb3N4bGw1NGsifQ.JK3Yv5sma-CCHhk8JnxCgA";

const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(88.3639);
  const [lat, setLat] = useState(22.5726);
  const [zoom, setZoom] = useState(9);

    useEffect(() => {
      const initializeMap = ({ setMap, mapContainer }) => {
        const indiaBounds = new mapboxgl.LngLatBounds(
          new mapboxgl.LngLat(68.1766451354, 7.96553477623), // Southwest coordinates
          new mapboxgl.LngLat(97.4025614766, 35.4940095078) // Northeast coordinates
        );
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          maxBounds: indiaBounds,
          center: [88.3639, 22.5726], // India's longitude and latitude
          zoom: 5,
        });

        map.fitBounds(indiaBounds, { padding: 20 });

        setMap(map);
      };

      if (!map) initializeMap({ setMap, mapContainer });
    }, []);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on("move", () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

  //   return <Box ref={mapContainer} style={{ height: "100vh" }} />;
  return (
    <div>
      <div ref={mapContainer} className="h-[400px]" />
    </div>
  );
};

export default Map;
