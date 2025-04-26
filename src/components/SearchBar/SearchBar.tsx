import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './SearchBar.css';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API;

interface SearchBarProps {
  onSelect: (coords: { lat: number, lng: number}) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [value, setValue] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  function getLatlong(address: string) {
    setIsLoading(true);
    if (!window.google) {
      console.error('Google Maps API not loaded');
      setIsLoading(false);
      return;
    }
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, function (results: any, status: any) {
      if (status == google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        onSelect({ lat, lng });
      } else {
        console.error('Geocode failed:', status);
        setIsLoading(false);
      }
    });
  }

  useEffect(() => {
    if (value) {
      getLatlong(value.label);
  }}, [value]);

  return (
    <div className='search-bar'>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (newValue: any) => setValue(newValue),
        }}
      />
    </div>
  );
};

export default SearchBar;