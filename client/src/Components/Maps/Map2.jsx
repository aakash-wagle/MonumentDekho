import { collection, query, getDocs, where } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { db } from "../../config/firebase";
import { redirect, useNavigate } from "react-router-dom";
import { MonumentContext } from "../../App";

const initialView = {
  longitude: 82.329,
  latitude: 23.512,
  zoom: 3.8,
};

const Map2 = () => {
  // const [viewState, setViewState] = useState(initialViewState);
  // const [monumentList, setMonumentList] = useState([]);
  const { monumentList, setMonumentList } = useContext(MonumentContext);

  const monumentsRef = collection(db, "monument");

  const getMonumentList = async () => {
    try {
      const data = await getDocs(monumentsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMonumentList(()=>{
        console.log("setstate called");
        return filteredData});
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMonumentList();
  }, []);

  const navigate = useNavigate()

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAP_KEY}
      initialViewState={initialView}
      style={{ width: 700, height: 650 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {monumentList.map((monument, index) => (
        <Marker
          key={monument.id}
          longitude={parseFloat(monument.Coordinates.Longitude)}
          latitude={parseFloat(monument.Coordinates.Latitude)}
          onClick={() => {
            return navigate(`/monument/${monument.id}`)
          }}
          color="red"
        />
      ))}
      {/* <Marker longitude={viewState.longitude} latitude={viewState.latitude} color="red" /> */}
    </Map>
  );
};

export default Map2;
