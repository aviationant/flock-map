import { useState } from 'react';
import GoogleMap from './components/GoogleMap/GoogleMap';
import SearchBar from './components/SearchBar/SearchBar';
import { GoogleMapProps } from './components/GoogleMap/GoogleMap';

import './App.css';

function App() {
  const [coords, setCoords] = useState<GoogleMapProps | null>(null);

  return (
    <>
      <body>
        <div className='flock-title'>
          <p className='lato-regular'>flock map</p>
        </div>
        <div className='content'>
          <div className=''>
            <SearchBar onSelect={(location) => setCoords(location)} />
          </div>
          <div className=''>
            <GoogleMap coords={coords} />
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
