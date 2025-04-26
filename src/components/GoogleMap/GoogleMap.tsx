import { useEffect } from "react";
import {
  APIProvider,
  Map,
  useMap
} from '@vis.gl/react-google-maps';
import FlockMarkers from '../FlockMarkers/FlockMarkers';

const flockCameras = [
  { lat: 40.730610, lng: -73.935242 },
  { lat: 47.608013, lng: -122.335167 },
  { lat: 30.266666, lng: -97.733330 },
  { lat: 39.099724, lng: -94.578331 }
];

export interface GoogleMapProps {
  coords: { lat: number, lng: number };
}

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API;

const GoogleMap = ({ coords }: GoogleMapProps) => {

  const GoToCoords = () => {
    const map = useMap('flock-map');
    useEffect(() => {
      if (!map) return;
      if (map && coords) {
        map.setCenter({ lat: coords["lat"], lng: coords["lng"] });
        map.setZoom(9);
      }
    }, [map, coords]);
    return <></>;
  };

  return (
    <APIProvider apiKey={GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        style={{ width: '80vw', height: '60vh' }}
        defaultCenter={coords ?? { lat: 38.1000, lng: -98.5833 }}
        defaultZoom={4}
        gestureHandling={'greedy'}
        disableDefaultUI={false}
        id={"flock-map"}>
        <GoToCoords />
        <FlockMarkers cameras={flockCameras} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;