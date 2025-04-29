import { useState } from 'react';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import SearchBar from '../components/SearchBar/SearchBar';
import { Title } from '../components';
import {
  Link
} from "react-router";

import '../App.css';

function Homepage() {
  const [mapSettings, setMapSettings] = useState<{ lat: number, lng: number, zoom: number }>({ lat: 38.1000, lng: -98.5833, zoom: (window.innerWidth > 480 ? 4 : 3) });

  return (
    <>
      <body>
        <Title />
        <div className='content'>
          <div className=''>
            <SearchBar onSelect={(location) => setMapSettings(location)} />
          </div>
          <div className=''>
            <GoogleMap mapSettings={mapSettings} />
          </div>
          <div className='footer'>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <button className='about-button lato-light'>What is Flock Safety?</button>
            </Link>
          </div>
        </div>
      </body>
    </>
  )
}

export default Homepage
