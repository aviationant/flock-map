import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './SearchBar.css';

interface SearchBarProps {
  onSelect: (mapSettings: { lat: number, lng: number, zoom: number}) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [value, setValue] = useState<any>(null);

  function getLatlong(address: string) {
    if (!window.google) {
      console.error('Google Maps API not loaded');
      return;
    }
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, function (results: any, status: any) {
      if (status == google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var zoom = 9;
        onSelect({ lat, lng, zoom });
      } else {
        console.error('Geocode failed:', status);
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