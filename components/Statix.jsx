'use client'
import React, { useState } from 'react';
import Feed from '@components/Feed';

function Statix() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [toggleBtn, setToggleButton] = useState(true);

  const handleGetGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(latitude + " " + longitude)
        setToggleButton(false);
      }, function (error) {
        console.error('Error getting geolocation:', error);
      });
    } else {
      console.error('Geolocation is not available in this browser.')
    }
  };

  return (
    <div>
      {toggleBtn && (
        <div>
          <button className="fancy mt-14" onClick={handleGetGeolocation}>
              <span className="top-key"></span>
              <span className="text">GET DATA</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
          </button>
        </div>
      )}
      {!toggleBtn && (
        <>
        Latitude : {latitude}  Longitude: {longitude}
        <Feed latitude={latitude} longitude={longitude}/>
        </>
      )}
    </div>
  );
}

export default Statix;
