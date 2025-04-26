import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef
} from '@vis.gl/react-google-maps';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API;

const FlockMarkers = ({ cameras }: any) => {

  const [markerRef, marker] = useMarkerRef();
  const [marked, setMarked] = useState(false);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!marked && cameras.length > 0) {
      const newMarkers = cameras.map((camera: any, index: number) => (
        <Marker
          key={index}
          position={{ lat: camera.lat, lng: camera.lng }} />
      ));
      setMarkers(newMarkers);
      setMarked(true);
    }
  })
  return <>{markers}</>
};


export default FlockMarkers;