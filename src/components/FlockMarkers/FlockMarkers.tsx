import { useEffect, useState } from "react";
import {
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

const FlockMarkers = ({ cameras }: any) => {

  const [marked, setMarked] = useState(false);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!marked && cameras.length > 0) {
      const newMarkers = cameras.map((camera: any, index: number) => (
        <AdvancedMarker
          key={index}
          position={{ lat: camera.lat, lng: camera.lng }}>
          <Pin
            background={'#2E3A59'}
            borderColor={'#D1D5DB'}
            glyphColor={'#B02121'}
          />
        </AdvancedMarker>
      ));
      setMarkers(newMarkers);
      setMarked(true);
    }
  })
  return <>{markers}</>
};


export default FlockMarkers;