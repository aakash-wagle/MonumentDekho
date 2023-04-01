import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bWVodGEzMjIzIiwiYSI6ImNsZnhwYzcyODBxc3YzbXFxb3N4bGw1NGsifQ.JK3Yv5sma-CCHhk8JnxCgA';

const Map = () => {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = ({ setMap, mapContainer }) => {

            const indiaBounds = new mapboxgl.LngLatBounds(
                new mapboxgl.LngLat(68.1766451354, 7.96553477623), // Southwest coordinates
                new mapboxgl.LngLat(97.4025614766, 35.4940095078) // Northeast coordinates
            );
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                maxBounds: indiaBounds,
                center: [88.3639, 22.5726], // India's longitude and latitude
                zoom: 5,
            });



            map.fitBounds(indiaBounds, { padding: 20 })

            setMap(map);
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={mapContainer} style={{ height: "100vh" }} />;
};

export default Map;
