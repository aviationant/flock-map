import { useState } from 'react';
import GoogleMap from './components/GoogleMap/GoogleMap';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

function App() {
  const [mapSettings, setMapSettings] = useState<{ lat: number, lng: number, zoom: number }>({ lat: 38.1000, lng: -98.5833, zoom: 4 });

  return (
    <>
      <body>
        <div className='flock-title'>
          <p className='lato-regular'>flock map</p>
        </div>
        <div className='content'>
          <div className=''>
            <SearchBar onSelect={(location) => setMapSettings(location)} />
          </div>
          <div className=''>
            <GoogleMap mapSettings={mapSettings} />
          </div>
          <div className='footer-text'>
            <p>Markers represent location of known Flock Safety cameras.<br />Locations may not be exhaustive.</p>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
