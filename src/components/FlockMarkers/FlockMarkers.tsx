import { useEffect, useState } from "react";
import {
  Marker,
} from '@vis.gl/react-google-maps';

const FlockMarkers = ({ cameras }: any) => {

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